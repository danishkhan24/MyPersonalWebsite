const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine (if using templates like EJS or Pug)
app.set('view engine', 'ejs'); // or 'pug'

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index'); // Render the home page
});

app.get('/about', (req, res) => {
  res.render('about'); // Render the about page
});

app.get('/projects', (req, res) => {
  res.render('projects'); // Render the projects page
});

app.get('/contact', (req, res) => {
  res.render('contact'); // Render the contact page
});

app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;
    // Handle the message (e.g., send an email, save to a database)
    res.send('Message received!');
});  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
