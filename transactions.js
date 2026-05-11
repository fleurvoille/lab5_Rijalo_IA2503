import { generateId, formatDate } from "./utils.js";

export const transactions = [];

export function createTransaction(amount, category, description) {
  return {
    id: generateId(),
    date: formatDate(),
    amount: Number(amount),
    category,
    description
  };
}

export const addTransaction = (t) => transactions.push(t);

export function removeTransaction(id) {
  const index = transactions.findIndex(t => t.id == id);
  if (index !== -1) transactions.splice(index, 1);
}

export const calculateTotal = () =>
  transactions.reduce((sum, t) => sum + t.amount, 0);

export const getTransactionById = (id) =>
  transactions.find(t => t.id == id);