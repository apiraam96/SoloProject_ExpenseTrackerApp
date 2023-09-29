const mongoose = require('mongoose')

//when registering user will be sending
//firstName
//lastName
//email
//password

const transactionsSchema = new mongoose.Schema({
  transactionType: { type: String, required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
  category: { type: String },
})



const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  transactions: [transactionsSchema]
})


const Transactions = mongoose.model('transactions', transactionsSchema);
const User = mongoose.model('user', userSchema)

module.exports = { User, Transactions };