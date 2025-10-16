var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web page</title>
  <meta name="description" content="This is an example of a properly structured HTML page.">
  <link rel="stylesheet" href="styles.css">
   <style>
    body {
      background-color: #a9cceaff; 
    }
  </style>
</head>
<body>
  <header>
    <h1>About me </h1>
  </header>

  <main>
      <h2>Rojkan Hersh</h2>
      <p>From cyprus</p>
    </section>    
  </main>

  <footer>
    <p>&copy; 2025 My Website</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>`);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
//ADDED A BACKGROUND COLOUR