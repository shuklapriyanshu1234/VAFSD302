const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (CSS, Images)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/course', (req, res) => res.sendFile(path.join(__dirname, 'course.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));