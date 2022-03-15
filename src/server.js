const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// const mysql = require('mysql2/promise');
// const dbConfig = require('./dbConfig');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  // const kelias = path.join(__dirname, 'views', 'index.html');
  // res.sendFile(kelias);

  res.render('index');
});

app.get('/about', (req, res) => {
  // const keliasAbout = path.join(__dirname, 'views', 'about.html');
  // res.sendFile(keliasAbout);

  res.render('about');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
