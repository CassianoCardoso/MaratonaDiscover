const Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -5000,
    date: "19/01/2022",
  },
  { id: 2, description: "Website", amount: 500000, date: "19/01/2022" },
  { id: 3, description: "Internet", amount: -20000, date: "19/01/2022" },
  { id: 4, description: "App", amount: 20000, date: "19/01/2022" },
];

// Pgar os campos de input no modal-oveley "Nova transação", descriçao e valor e total.
const Transaction = {
  icomes() {
    // somar as entradas
  },
  expenses() {
    //somar as saídas
  },
  total() {
    // entradas - saídas
  },
};

const DOM = {
  transactionsContainer: document.querySelector("#data-table"),

  addtransaction(Transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTLTransaction(Transaction);

    DOM.transactionsContainer.appendChild(tr);
  },

  innerHTLTransaction(Transaction) {
    const CSSclass = Transaction.amount > 0 ? "income" : "expense"

    const amount = Utils.formatCurrency(Transaction.amount)

    const html = `  
        
                <td class="description">${Transaction.description}</td>
                <td class="${CSSclass}">${Transaction.amount}</td>
                <td class="date">${Transaction.date}</td>
                <td>
                    <img src="./assets/minus.svg" alt="Remover Transação">
                </td>
                 `;
    return html;
  },
};

const Utils ={

    formatCurrency(value){
       const signal = Number(value) < 0 ? "-": ""

    }
}

transactions.forEach(function (Transaction) {
  DOM.addtransaction(Transaction);
});
