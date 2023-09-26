const mongoose = require('mongoose')

//transactiontype: expense or income
//title: string required
//amount: number required
//date : year, month, day num required
//Category: string required

const transactionSchema = new mongoose.Schema({
  transactionType: { type: String, required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
})

const Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;