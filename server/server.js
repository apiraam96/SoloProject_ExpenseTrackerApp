const express = require('express')
const app = express();
const path = require('path');
const PORT = 3000;
const DIST_DIR = path.resolve(__dirname, '../dist')
const HTML_FILE = path.resolve(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE)
})

app.post('/', (req, res))



app.listen(PORT, () => {
  console.log('listening on port: ' + PORT)
});