const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 3000;

app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Kyle'});
})

app.get('/login', (req, res) => {
  res.render('login.ejs');
})

app.get('/register', (req, res) => {
  res.render('register.ejs');
})

app.post('/register', (req, res) => {

})

app.listen(port, () => {
  console.log(`Web is running on http://localhost:${port}`)
});