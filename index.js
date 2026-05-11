import {
  createTransaction,
  addTransaction,
  removeTransaction,
  calculateTotal,
  getTransactionById
} from "./transactions.js";

import {
  renderTransactionRow,
  removeTransactionRow,
  updateTotal,
  showTransactionDetails,
  hideTransactionDetails
} from "./ui.js";

const form = document.getElementById("transaction-form");
const table = document.getElementById("transactions-table");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  if (amount === "" || amount == 0) {
    alert("Введите сумму");
    return;
  }

  if (category === "") {
    alert("Выберите категорию");
    return;
  }

  if (description === "") {
    alert("Введите описание");
    return;
  }

  const transaction = createTransaction(
    amount,
    category,
    description
  );

  addTransaction(transaction);

  renderTransactionRow(transaction);

  updateTotal(calculateTotal());

  form.reset();

  hideTransactionDetails();
});

table.addEventListener("click", function(event) {

  const deleteBtn = event.target.closest(".btn-delete");

  if (deleteBtn) {

    const id = deleteBtn.dataset.id;

    removeTransaction(id);

    removeTransactionRow(id);

    updateTotal(calculateTotal());

    hideTransactionDetails();

    return;
  }

  const row = event.target.closest("tr");

  if (row) {

    const id = row.dataset.id;

    const transaction = getTransactionById(id);

    if (transaction) {
      showTransactionDetails(transaction);
    }
  }
});

updateTotal(calculateTotal());