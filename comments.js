// Import the http module
const http = require('http');

// Create a server that sends a simple response
const server = http.createServer((req, res) => {
    // Set the response header with a status code and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send a response to the browser
    res.end('Hello, World! This is your simple web server.');
});

// The server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
