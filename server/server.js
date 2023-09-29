const express = require('express')
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const cors = require('cors')
const Transaction = require('./db/transactionModel.js')

const PORT = 3000;
const DIST_DIR = path.resolve(__dirname, '../dist')
const HTML_FILE = path.resolve(DIST_DIR, 'index.html')

mongoose.connect('mongodb+srv://apiraam96:6THotcKPjSP4M9vC@cluster.1el76e1.mongodb.net/PersonalFinanceApp?retryWrites=true&w=majority')
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((e) => {
    console.log(e)
  })

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use(express.static(DIST_DIR))

// app.get('/', (req, res) => {
//   res.sendFile(HTML_FILE)
// })

app.post('/api', async (req, res) => {
  const transaction = await Transaction.create(req.body);
  console.log(transaction);
  return res.json('transaction successfully sent');
})

app.get('/gettransactions', async (req, res) => {
  const transactions = await Transaction.find({});
  console.log(transactions);
  return res.json(transactions);
});

app.delete('/delete/:id', async (req, res) => {
  const objectId = req.params.id;
  console.log(objectId)
  try {
    await Transaction.deleteOne({ _id: objectId })
  }
  catch (e) {
    console.log(e)
  }
  res.json('server connected to delete request')
})

app.post('/login', (req, res) => {
  res.json(req.body)
})

app.post('/signup', (req, res) => {
  res.json(req.body)
})

app.use('*', (req, res) => {
  res.status(404).send('Not Found')
})

app.listen(PORT, () => {
  console.log('listening on port: ' + PORT)
});