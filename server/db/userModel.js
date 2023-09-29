const mongoose = require('mongoose')

//when registering user will be sending
//firstName
//lastName
//email
//password

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

const User = mongoose.model('user', userSchema)

module.exports = User;