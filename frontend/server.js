const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Serve static files (HTML, CSS, JS)
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Frontend server is running on http://localhost:${PORT}`);
});
