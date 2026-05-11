import { shortDescription } from "./utils.js";

export function renderTransactionRow(t) {
  const tbody = document.querySelector("#transactions-table tbody");

  const row = document.createElement("tr");
  row.dataset.id = t.id;
  row.className = t.amount >= 0 ? "positive" : "negative";

  row.innerHTML = `
    <td>${t.date}</td>
    <td>${t.category}</td>
    <td>${shortDescription(t.description)}</td>
    <td>
      <button class="btn-delete" data-id="${t.id}">Удалить</button>
    </td>
  `;

  tbody.appendChild(row);
}

export const removeTransactionRow = (id) =>
  document.querySelector(`tr[data-id="${id}"]`)?.remove();

export function updateTotal(total) {
  const el = document.getElementById("total");

  el.textContent = `Итого: ${total} MDL`;
  el.className = "total " + (total >= 0 ? "positive-text" : "negative-text");
}

export function showTransactionDetails(t) {
  const el = document.getElementById("transaction-details");

  el.innerHTML = `
    <h3>Информация о транзакции</h3>
    <p>ID: ${t.id}</p>
    <p>Дата: ${t.date}</p>
    <p>Категория: ${t.category}</p>
    <p>Сумма: ${t.amount} MDL</p>
    <p>Описание: ${t.description}</p>
  `;

  el.style.display = "block";
}

export const hideTransactionDetails = () => {
  document.getElementById("transaction-details").style.display = "none";
};