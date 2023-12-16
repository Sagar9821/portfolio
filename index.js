const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the home page
app.get('/', (req, res) => {
    res.render('index');
});

// Define a route to render the about page
app.get('/about', (req, res) => {
    res.render('about');
});

// Define a route to render the projects page
app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});