const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

// const mysql = require('mysql2/promise');
// const dbConfig = require('./dbConfig');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const staticPath = path.join(__dirname, 'assets');
app.use(express.static(staticPath));

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/', userRoutes);

app.get('/', (req, res) => {
  // const kelias = path.join(__dirname, 'views', 'index.html');
  // res.sendFile(kelias);

  const data = {
    title: 'Homepage 1',
    age: 25,
    page: 'home',
  };
  res.render('index', data);
});

app.get('/about', (req, res) => {
  const data = {
    title: 'About us',
    tech: ['HTML', 'CSS', 'JS', 'Node'],
    page: 'about',
  };
  res.render('about', data);
});

app.get('/contact', (req, res) => {
  const data = {
    title: 'Contact us',
    page: 'contact',
  };
  res.render('contact', data);
});

app.all('*', (req, res) => {
  const data = {
    title: '404 not found',
    page: '404',
  };
  res.render('404', data);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
