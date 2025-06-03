import React, { useState, useEffect, useCallback } from "react";
import {
  getAuth,
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Analytics is imported but not explicitly used in the app logic

// Define the list of people involved in the expenses
const PEOPLE = ["Andrina", "Dani", "Jasai", "Monsse", "Simone"];

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZgbvntvwHmIVs02t272w3jWcB5xOWORQ",
  authDomain: "texas-expense-tracker.firebaseapp.com",
  projectId: "texas-expense-tracker",
  storageBucket: "texas-expense-tracker.firebasestorage.app",
  messagingSenderId: "682696379726",
  appId: "1:682696379726:web:cae95d2c3d26a7397aa21f",
  measurementId: "G-61S0F1FGL4",
};

// Main App Component
function App() {
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [payments, setPayments] = useState([]); // New state for payments
  const [balances, setBalances] = useState({});
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);
  const [showSettlements, setShowSettlements] = useState(false);
  const [showRecordPaymentForm, setShowRecordPaymentForm] = useState(false); // New state for payment form
  const [editingExpense, setEditingExpense] = useState(null); // Stores the expense object being edited
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  // Initialize Firebase services and handle authentication
  useEffect(() => {
    let firebaseAppInstance;
    try {
      // Initialize Firebase app inside useEffect to ensure it's tied to component lifecycle
      firebaseAppInstance = initializeApp(firebaseConfig);
      // getAnalytics(firebaseAppInstance); // If analytics is truly needed, uncomment and use it here

      const firestore = getFirestore(firebaseAppInstance);
      const firebaseAuth = getAuth(firebaseAppInstance);

      setDb(firestore);
      setAuth(firebaseAuth);

      // Sign in anonymously (since there's no initialAuthToken in this setup)
      const signIn = async () => {
        try {
          await signInAnonymously(firebaseAuth);
        } catch (error) {
          console.error("Firebase authentication failed:", error);
          setMessage("Authentication failed. Please try again.");
          setMessageType("error");
        } finally {
          setIsAuthReady(true);
        }
      };

      // This listener ensures we get the user ID once authentication state is known
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          setUserId(null);
        }
        setIsAuthReady(true);
      });

      signIn(); // Trigger the sign-in process
    } catch (error) {
      console.error("Failed to initialize Firebase services:", error);
      setMessage(
        "Failed to initialize the application. Check console for details."
      );
      setMessageType("error");
    }
  }, []); // Empty dependency array means this runs once on mount

  // Function to calculate debts
  const calculateDebts = useCallback(() => {
    const newDebts = {}; // Format: { [payer]: { [receiver]: amountOwed } }

    PEOPLE.forEach((p1) => {
      newDebts[p1] = {};
      PEOPLE.forEach((p2) => {
        if (p1 !== p2) newDebts[p1][p2] = 0;
      });
    });

    // 1. Handle expenses
    expenses.forEach((expense) => {
      const { paidBy, totalAmount, participants, splitType, allocations } =
        expense;
      const amount = parseFloat(totalAmount);

      if (splitType === "equal") {
        const share = amount / participants.length;
        participants.forEach((p) => {
          if (p !== paidBy) {
            newDebts[p][paidBy] += share;
          }
        });
      } else if (splitType === "percent" || splitType === "custom") {
        for (const [p, val] of Object.entries(allocations)) {
          const share = parseFloat(val);
          if (p !== paidBy) {
            newDebts[p][paidBy] += share;
          }
        }
      } else if (splitType === "weekly") {
        const p = expense.weeklyDetails?.personPayingWeekly;
        if (p && p !== paidBy) {
          newDebts[p][paidBy] += amount;
        }
      }
    });

    // 2. Handle payments (payer paid receiver, so reduce what payer owes receiver)
    payments.forEach(({ payer, receiver, amount }) => {
      if (payer === receiver) return; // Skip self-payments

      const amt = parseFloat(amount);
      if (!newDebts[payer]) newDebts[payer] = {};
      if (!newDebts[payer][receiver]) newDebts[payer][receiver] = 0;
      newDebts[payer][receiver] -= amt;
    });

    // 3. Normalize debts (convert negative debts into reverse positive ones)
    PEOPLE.forEach((p1) => {
      PEOPLE.forEach((p2) => {
        if (p1 !== p2) {
          const amt = newDebts[p1][p2];
          if (amt < 0) {
            newDebts[p2][p1] += -amt;
            newDebts[p1][p2] = 0;
          }
        }
      });
    });

    // 4. Cancel out mutual debts
    PEOPLE.forEach((p1) => {
      PEOPLE.forEach((p2) => {
        if (p1 !== p2) {
          const amount1to2 = newDebts[p1]?.[p2] || 0;
          const amount2to1 = newDebts[p2]?.[p1] || 0;

          if (amount1to2 > amount2to1) {
            newDebts[p1][p2] = amount1to2 - amount2to1;
            newDebts[p2][p1] = 0;
          } else {
            newDebts[p2][p1] = amount2to1 - amount1to2;
            newDebts[p1][p2] = 0;
          }
        }
      });
    });

    setBalances(newDebts); // Note: balances is now a matrix of who owes whom
  }, [expenses, payments]);

  // Fetch expenses from Firestore
  useEffect(() => {
    if (db && userId && isAuthReady) {
      // Use the projectId from firebaseConfig for the appId variable
      const currentAppId = firebaseConfig.projectId;
      const expensesCollectionRef = collection(
        db,
        `artifacts/${currentAppId}/public/data/expenses`
      );
      const q = query(expensesCollectionRef);

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const fetchedExpenses = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          fetchedExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
          setExpenses(fetchedExpenses);
        },
        (error) => {
          console.error("Error fetching expenses:", error);
          setMessage("Error fetching expenses.");
          setMessageType("error");
        }
      );

      return () => unsubscribe(); // Cleanup listener on component unmount
    }
  }, [db, userId, isAuthReady, firebaseConfig.projectId]); // Add firebaseConfig.projectId to dependencies

  // Fetch payments from Firestore
  useEffect(() => {
    if (db && userId && isAuthReady) {
      // Use the projectId from firebaseConfig for the appId variable
      const currentAppId = firebaseConfig.projectId;
      const paymentsCollectionRef = collection(
        db,
        `artifacts/${currentAppId}/public/data/payments`
      );
      const q = query(paymentsCollectionRef);

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const fetchedPayments = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          fetchedPayments.sort((a, b) => new Date(b.date) - new Date(a.date));
          setPayments(fetchedPayments);
        },
        (error) => {
          console.error("Error fetching payments:", error);
          setMessage("Error fetching payments.");
          setMessageType("error");
        }
      );

      return () => unsubscribe(); // Cleanup listener on component unmount
    }
  }, [db, userId, isAuthReady, firebaseConfig.projectId]); // Add firebaseConfig.projectId to dependencies

  // Recalculate balances whenever expenses or payments change
  useEffect(() => {
    // Only calculate if expenses or payments have been fetched, or if balances are not yet initialized
    if (
      expenses.length > 0 ||
      payments.length > 0 ||
      Object.keys(balances).length === 0
    ) {
      calculateDebts();
    }
  }, [expenses, payments, calculateDebts]);

  const showTemporaryMessage = (msg, type = "success") => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000); // Message disappears after 3 seconds
  };

  const handleSaveExpense = async (expenseData) => {
    if (!db || !userId) {
      showTemporaryMessage(
        "Application not ready. Please wait for authentication.",
        "error"
      );
      return;
    }
    try {
      const currentAppId = firebaseConfig.projectId; // Use projectId for appId in Firestore path
      if (editingExpense) {
        // Update existing expense
        const expenseDocRef = doc(
          db,
          `artifacts/${currentAppId}/public/data/expenses`,
          editingExpense.id
        );
        await setDoc(expenseDocRef, expenseData, { merge: true });
        showTemporaryMessage("Expense updated successfully!");
        setEditingExpense(null); // Exit edit mode
      } else {
        // Add new expense
        const expensesCollectionRef = collection(
          db,
          `artifacts/${currentAppId}/public/data/expenses`
        );
        await addDoc(expensesCollectionRef, {
          ...expenseData,
          appId: currentAppId,
          userId,
        }); // Pass currentAppId
        showTemporaryMessage("Expense added successfully!");
      }
      setShowAddExpenseForm(false); // Hide form after successful submission/update
    } catch (error) {
      console.error("Error saving document: ", error);
      showTemporaryMessage(
        "Failed to save expense. Please try again.",
        "error"
      );
    }
  };

  const handleDeleteExpense = async (id) => {
    if (!db || !userId) {
      showTemporaryMessage(
        "Application not ready. Please wait for authentication.",
        "error"
      );
      return;
    }
    // IMPORTANT: Do NOT use alert() or confirm() in production code for Canvas.
    // Using a custom modal UI is preferred.
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?"
    );
    if (confirmDelete) {
      try {
        const currentAppId = firebaseConfig.projectId; // Use projectId for appId in Firestore path
        console.log(`Attempting to delete document with ID: ${id}`);
        await deleteDoc(
          doc(db, `artifacts/${currentAppId}/public/data/expenses`, id)
        );
        showTemporaryMessage("Expense deleted successfully!");
        console.log(`Document with ID: ${id} deleted successfully.`);
      } catch (error) {
        console.error("Error deleting document: ", error);
        showTemporaryMessage(
          "Failed to delete expense. Please try again.",
          "error"
        );
      }
    }
  };

  const handleRecordPayment = async (paymentData) => {
    if (!db || !userId) {
      showTemporaryMessage(
        "Application not ready. Please wait for authentication.",
        "error"
      );
      return;
    }
    try {
      const currentAppId = firebaseConfig.projectId; // Use projectId for appId in Firestore path
      const paymentsCollectionRef = collection(
        db,
        `artifacts/${currentAppId}/public/data/payments`
      );
      await addDoc(paymentsCollectionRef, {
        ...paymentData,
        appId: currentAppId,
        userId,
      }); // Pass currentAppId
      showTemporaryMessage("Payment recorded successfully!");
      setShowRecordPaymentForm(false); // Hide form after successful submission
    } catch (error) {
      console.error("Error adding payment: ", error);
      showTemporaryMessage(
        "Failed to record payment. Please try again.",
        "error"
      );
    }
  };

  const handleEditExpenseClick = (expense) => {
    setEditingExpense(expense);
    setShowAddExpenseForm(true); // Show the form for editing
    setShowSettlements(false); // Hide settlements
    setShowRecordPaymentForm(false); // Hide payment form
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
    setShowAddExpenseForm(false); // Hide the form
  };

  const handleCancelPayment = () => {
    setShowRecordPaymentForm(false); // Hide payment form
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4 font-inter text-gray-800">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
          Texas House Expense Tracker
        </h1>
        <p className="text-lg text-blue-600">
          Managing shared costs for Andrina, Dani, Jasai, Monsse, and Simone.
        </p>
        {userId && (
          <p className="text-sm text-gray-600 mt-2">
            Your User ID:{" "}
            <span className="font-mono bg-gray-200 px-2 py-1 rounded-md">
              {userId}
            </span>
          </p>
        )}
      </header>

      {message && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white z-50 ${
            messageType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message}
        </div>
      )}

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          <button
            onClick={() => {
              setShowAddExpenseForm(true);
              setShowSettlements(false);
              setShowRecordPaymentForm(false);
              setEditingExpense(null);
            }}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add New Expense
          </button>
          <button
            onClick={() => {
              setShowAddExpenseForm(false);
              setShowSettlements(true);
              setShowRecordPaymentForm(false);
              setEditingExpense(null);
            }}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            View Who Owes Whom
          </button>
          <button
            onClick={() => {
              setShowAddExpenseForm(false);
              setShowSettlements(false);
              setShowRecordPaymentForm(false);
              setEditingExpense(null);
            }}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            View All Expenses
          </button>
          <button
            onClick={() => {
              setShowRecordPaymentForm(true);
              setShowAddExpenseForm(false);
              setShowSettlements(false);
              setEditingExpense(null);
            }}
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Record a Payment
          </button>
        </div>

        {showAddExpenseForm && (
          <ExpenseForm
            onSave={handleSaveExpense}
            onCancel={handleCancelEdit}
            people={PEOPLE}
            initialExpenseData={editingExpense}
          />
        )}

        {showRecordPaymentForm && (
          <PaymentForm
            onRecordPayment={handleRecordPayment}
            onCancel={handleCancelPayment}
            people={PEOPLE}
          />
        )}

        {showSettlements && (
          <BalancesDisplay balances={balances} people={PEOPLE} />
        )}

        {!showAddExpenseForm && !showSettlements && !showRecordPaymentForm && (
          <ExpenseList
            expenses={expenses}
            onDeleteExpense={handleDeleteExpense}
            onEditExpense={handleEditExpenseClick}
          />
        )}
      </div>
    </div>
  );
}

// ExpenseForm Component (No changes from previous version, included for completeness)
function ExpenseForm({ onSave, onCancel, people, initialExpenseData }) {
  const isEditing = !!initialExpenseData;

  const [description, setDescription] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // Default to today
  const [participants, setParticipants] = useState([]);
  const [splitType, setSplitType] = useState("equal"); // 'equal', 'percent', 'custom', 'weekly'
  const [percentValues, setPercentValues] = useState({});
  const [customValues, setCustomValues] = useState({});
  const [weeklyDetails, setWeeklyDetails] = useState({
    personPayingWeekly: "",
    weeklyAmount: "",
    numberOfWeeks: "",
  });
  const [formError, setFormError] = useState("");

  // Effect to populate form fields when initialExpenseData changes (for editing)
  useEffect(() => {
    if (isEditing) {
      setDescription(initialExpenseData.description || "");
      setTotalAmount(initialExpenseData.totalAmount || "");
      setPaidBy(initialExpenseData.paidBy || "");
      setDate(
        initialExpenseData.date || new Date().toISOString().split("T")[0]
      );
      setParticipants(initialExpenseData.participants || []);
      setSplitType(initialExpenseData.splitType || "equal");

      if (initialExpenseData.splitType === "percent") {
        setPercentValues(initialExpenseData.allocations || {});
      } else {
        setPercentValues({});
      }

      if (initialExpenseData.splitType === "custom") {
        setCustomValues(initialExpenseData.allocations || {});
      } else {
        setCustomValues({});
      }

      if (initialExpenseData.splitType === "weekly") {
        setWeeklyDetails(
          initialExpenseData.weeklyDetails || {
            personPayingWeekly: "",
            weeklyAmount: "",
            numberOfWeeks: "",
          }
        );
      } else {
        setWeeklyDetails({
          personPayingWeekly: "",
          weeklyAmount: "",
          numberOfWeeks: "",
        });
      }
    } else {
      // Reset form for adding new expense
      setDescription("");
      setTotalAmount("");
      setPaidBy("");
      setDate(new Date().toISOString().split("T")[0]);
      setParticipants([]);
      setSplitType("equal");
      setPercentValues({});
      setCustomValues({});
      setWeeklyDetails({
        personPayingWeekly: "",
        weeklyAmount: "",
        numberOfWeeks: "",
      });
    }
    setFormError(""); // Clear errors on mode change
  }, [initialExpenseData, isEditing]);

  // Auto-calculate totalAmount for 'weekly' split type
  useEffect(() => {
    if (
      splitType === "weekly" &&
      weeklyDetails.weeklyAmount &&
      weeklyDetails.numberOfWeeks
    ) {
      const calculatedTotal =
        parseFloat(weeklyDetails.weeklyAmount) *
        parseInt(weeklyDetails.numberOfWeeks);
      if (!isNaN(calculatedTotal) && calculatedTotal > 0) {
        setTotalAmount(calculatedTotal.toFixed(2));
      }
    }
  }, [weeklyDetails.weeklyAmount, weeklyDetails.numberOfWeeks, splitType]);

  // Handle participant checkbox changes
  const handleParticipantChange = (person) => {
    setParticipants((prev) =>
      prev.includes(person)
        ? prev.filter((p) => p !== person)
        : [...prev, person]
    );
  };

  // Handle percentage input changes
  const handlePercentChange = (person, value) => {
    setPercentValues((prev) => ({ ...prev, [person]: value }));
  };

  // Handle custom value input changes
  const handleCustomChange = (person, value) => {
    setCustomValues((prev) => ({ ...prev, [person]: value }));
  };

  // Handle weekly details input changes
  const handleWeeklyDetailsChange = (field, value) => {
    setWeeklyDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    if (!description || !totalAmount || !paidBy || !date) {
      setFormError("Please fill in all basic expense details.");
      return;
    }

    const amount = parseFloat(totalAmount);
    if (isNaN(amount) || amount <= 0) {
      setFormError("Total amount must be a positive number.");
      return;
    }

    if (participants.length === 0 && splitType !== "weekly") {
      setFormError("Please select at least one participant.");
      return;
    }

    let allocations = {};
    if (splitType === "percent") {
      let sumPercents = 0;
      let invalidPercent = false;
      participants.forEach((p) => {
        const val = parseFloat(percentValues[p]);
        if (isNaN(val) || val < 0) {
          invalidPercent = true;
        }
        sumPercents += val || 0;
        allocations[p] = val || 0;
      });
      if (invalidPercent) {
        setFormError("All percentages must be valid non-negative numbers.");
        return;
      }
      if (Math.round(sumPercents) !== 100) {
        // Use Math.round for floating point precision
        setFormError(
          `Percentages must sum up to 100%. Current sum: ${sumPercents.toFixed(
            2
          )}%`
        );
        return;
      }
    } else if (splitType === "custom") {
      let sumCustoms = 0;
      let invalidCustom = false;
      participants.forEach((p) => {
        const val = parseFloat(customValues[p]);
        if (isNaN(val) || val < 0) {
          invalidCustom = true;
        }
        sumCustoms += val || 0;
        allocations[p] = val || 0;
      });
      if (invalidCustom) {
        setFormError("All custom values must be valid non-negative numbers.");
        return;
      }
      if (Math.abs(sumCustoms - amount) > 0.01) {
        // Allow for small floating point differences
        setFormError(
          `Custom values must sum up to the total amount ($${amount.toFixed(
            2
          )}). Current sum: $${sumCustoms.toFixed(2)}`
        );
        return;
      }
    } else if (splitType === "weekly") {
      const { personPayingWeekly, weeklyAmount, numberOfWeeks } = weeklyDetails;
      const wAmount = parseFloat(weeklyAmount);
      const numWeeks = parseInt(numberOfWeeks);

      if (
        !personPayingWeekly ||
        isNaN(wAmount) ||
        wAmount <= 0 ||
        isNaN(numWeeks) ||
        numWeeks <= 0
      ) {
        setFormError(
          "Please provide valid weekly details (person, amount per week, number of weeks)."
        );
        return;
      }
      // For weekly, the total amount is assumed to be covered by the specified person
      // The totalAmount field in the form should reflect the total for all weeks.
      // We'll set the allocation to that person for the full amount.
      allocations[personPayingWeekly] = amount; // The full totalAmount is allocated to this person
      // Ensure this person is also a participant for proper balance calculation
      if (!participants.includes(personPayingWeekly)) {
        setParticipants((prev) => [...prev, personPayingWeekly]);
      }
    }

    const newExpense = {
      description,
      totalAmount: amount,
      paidBy,
      date,
      participants:
        splitType === "weekly"
          ? [weeklyDetails.personPayingWeekly]
          : participants, // Ensure only the weekly payer is participant if weekly
      splitType,
      allocations: splitType === "equal" ? {} : allocations, // Allocations only needed for percent, custom, weekly
      ...(splitType === "weekly" && {
        weeklyDetails: {
          ...weeklyDetails,
          weeklyAmount: parseFloat(weeklyAmount),
          numberOfWeeks: parseInt(numberOfWeeks),
        },
      }),
    };

    onSave(newExpense);
    // Form reset logic is now handled by the useEffect when initialExpenseData becomes null
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-8">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b pb-2">
        {isEditing ? "Edit Expense" : "Add New Expense"}
      </h2>
      {formError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4"
          role="alert"
        >
          <span className="block sm:inline">{formError}</span>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="totalAmount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Total Amount ($)
          </label>
          <input
            type="number"
            id="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            step="0.01"
            min="0.01"
            required
            disabled={splitType === "weekly"} // Disable if weekly, as it's auto-calculated
          />
        </div>
        <div>
          <label
            htmlFor="paidBy"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Paid By
          </label>
          <select
            id="paidBy"
            value={paidBy}
            onChange={(e) => setPaidBy(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Payer</option>
            {people.map((person) => (
              <option key={person} value={person}>
                {person}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Participants (Who is involved in this expense?)
          </label>
          <div className="flex flex-wrap gap-4">
            {people.map((person) => (
              <label key={person} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={person}
                  checked={participants.includes(person)}
                  onChange={() => handleParticipantChange(person)}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded"
                  disabled={
                    splitType === "weekly" &&
                    person !== weeklyDetails.personPayingWeekly
                  } // Disable if weekly and not the selected person
                />
                <span className="ml-2 text-gray-900">{person}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How to Split?
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="equal"
                checked={splitType === "equal"}
                onChange={() => setSplitType("equal")}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-900">Equally Split</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="percent"
                checked={splitType === "percent"}
                onChange={() => setSplitType("percent")}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-900">Percentages</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="custom"
                checked={splitType === "custom"}
                onChange={() => setSplitType("custom")}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-900">Custom Values</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="weekly"
                checked={splitType === "weekly"}
                onChange={() => setSplitType("weekly")}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-900">
                Weekly Charge (e.g., 4 weeks of internet)
              </span>
            </label>
          </div>
        </div>

        {splitType === "percent" && (
          <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-700 mb-3">
              Allocate by Percentage (Sum must be 100%)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {participants.length > 0 ? (
                participants.map((person) => (
                  <div key={person}>
                    <label
                      htmlFor={`percent-${person}`}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {person} (%)
                    </label>
                    <input
                      type="number"
                      id={`percent-${person}`}
                      value={percentValues[person] || ""}
                      onChange={(e) =>
                        handlePercentChange(person, e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                      step="0.01"
                      min="0"
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">
                  Select participants above to set percentages.
                </p>
              )}
            </div>
          </div>
        )}

        {splitType === "custom" && (
          <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-700 mb-3">
              Allocate by Custom Amount (Sum must equal Total Amount)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {participants.length > 0 ? (
                participants.map((person) => (
                  <div key={person}>
                    <label
                      htmlFor={`custom-${person}`}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {person} ($)
                    </label>
                    <input
                      type="number"
                      id={`custom-${person}`}
                      value={customValues[person] || ""}
                      onChange={(e) =>
                        handleCustomChange(person, e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded-md"
                      step="0.01"
                      min="0"
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">
                  Select participants above to set custom amounts.
                </p>
              )}
            </div>
          </div>
        )}

        {splitType === "weekly" && (
          <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-700 mb-3">
              Weekly Charge Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="weeklyPerson"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Person Paying Weekly
                </label>
                <select
                  id="weeklyPerson"
                  value={weeklyDetails.personPayingWeekly}
                  onChange={(e) => {
                    handleWeeklyDetailsChange(
                      "personPayingWeekly",
                      e.target.value
                    );
                    // Automatically set this person as the only participant
                    setParticipants([e.target.value]);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Person</option>
                  {people.map((person) => (
                    <option key={person} value={person}>
                      {person}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="weeklyAmount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Amount Per Week ($)
                </label>
                <input
                  type="number"
                  id="weeklyAmount"
                  value={weeklyDetails.weeklyAmount}
                  onChange={(e) =>
                    handleWeeklyDetailsChange("weeklyAmount", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  step="0.01"
                  min="0.01"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="numberOfWeeks"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Number of Weeks
                </label>
                <input
                  type="number"
                  id="numberOfWeeks"
                  value={weeklyDetails.numberOfWeeks}
                  onChange={(e) =>
                    handleWeeklyDetailsChange("numberOfWeeks", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  min="1"
                  step="1"
                  required
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              The total amount for this expense should be the "Amount Per Week"
              multiplied by "Number of Weeks". This will be automatically
              allocated to the selected person.
            </p>
          </div>
        )}

        <div className="md:col-span-2 text-center flex justify-center space-x-4">
          <button
            type="submit"
            className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            {isEditing ? "Update Expense" : "Add Expense"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={onCancel}
              className="px-8 py-3 bg-gray-400 text-white font-bold rounded-lg shadow-md hover:bg-gray-500 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

// PaymentForm Component (New component for recording payments)
function PaymentForm({ onRecordPayment, onCancel, people }) {
  const [payer, setPayer] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    if (!payer || !receiver || !amount || !date) {
      setFormError("Please fill in all payment details.");
      return;
    }

    if (payer === receiver) {
      setFormError("Payer and Receiver cannot be the same person.");
      return;
    }

    const paymentAmount = parseFloat(amount);
    if (isNaN(paymentAmount) || paymentAmount <= 0) {
      setFormError("Amount must be a positive number.");
      return;
    }

    const newPayment = {
      payer,
      receiver,
      amount: paymentAmount,
      date,
    };

    onRecordPayment(newPayment);
    // Reset form
    setPayer("");
    setReceiver("");
    setAmount("");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-8">
      <h2 className="text-2xl font-semibold text-green-700 mb-6 border-b pb-2">
        Record a Payment
      </h2>
      {formError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4"
          role="alert"
        >
          <span className="block sm:inline">{formError}</span>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label
            htmlFor="payer"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Payer (Who is paying?)
          </label>
          <select
            id="payer"
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Select Payer</option>
            {people.map((person) => (
              <option key={person} value={person}>
                {person}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="receiver"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Receiver (Who is receiving?)
          </label>
          <select
            id="receiver"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Select Receiver</option>
            {people.map((person) => (
              <option key={person} value={person}>
                {person}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="paymentAmount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Amount ($)
          </label>
          <input
            type="number"
            id="paymentAmount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            step="0.01"
            min="0.01"
            required
          />
        </div>
        <div>
          <label
            htmlFor="paymentDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date
          </label>
          <input
            type="date"
            id="paymentDate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        <div className="md:col-span-2 text-center flex justify-center space-x-4">
          <button
            type="submit"
            className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Record Payment
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-8 py-3 bg-gray-400 text-white font-bold rounded-lg shadow-md hover:bg-gray-500 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

// ExpenseList Component (No changes from previous version, included for completeness)
function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b pb-2">
        All Expenses
      </h2>
      {expenses.length === 0 ? (
        <p className="text-gray-600 text-center py-8">
          No expenses added yet. Add a new expense to get started!
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                  Date
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Description
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Paid By
                </th>
                <th className="py-3 px-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Split Type
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Participants
                </th>
                <th className="py-3 px-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {expenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900">
                    {expense.date}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900">
                    {expense.description}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900">
                    {expense.paidBy}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900 text-right">
                    ${parseFloat(expense.totalAmount).toFixed(2)}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                    {expense.splitType === "weekly"
                      ? "Weekly Charge"
                      : expense.splitType}
                    {expense.splitType === "weekly" &&
                      expense.weeklyDetails && (
                        <span className="block text-xs text-gray-500">
                          (${expense.weeklyDetails.weeklyAmount.toFixed(2)}/wk
                          for {expense.weeklyDetails.numberOfWeeks} wks)
                        </span>
                      )}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {expense.participants && expense.participants.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {expense.participants.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => onEditExpense(expense)}
                      className="text-blue-600 hover:text-blue-900 transition duration-150 ease-in-out mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteExpense(expense.id)}
                      className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function BalancesDisplay({ balances, people }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
      <h2 className="text-2xl font-semibold text-purple-700 mb-6 border-b pb-2">
        Who Owes Whom
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {people.flatMap((p1) =>
          people
            .filter((p2) => p1 !== p2 && (balances?.[p1]?.[p2] || 0) > 0.01)
            .map((p2) => (
              <li key={`${p1}->${p2}`}>
                {p1} owes {p2} ${Number(balances?.[p1]?.[p2] || 0).toFixed(2)}
              </li>
            ))
        )}
      </ul>
    </div>
  );
}

export default App;
