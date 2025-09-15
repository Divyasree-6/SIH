const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));
app.use(express.json());

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'indexx.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Biometric authentication server running at http://localhost:${PORT}`);
    console.log('Make sure to use HTTPS in production for WebAuthn to work properly');
});

module.exports = app;