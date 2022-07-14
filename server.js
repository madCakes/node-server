const http = require("http");

const server = http.createServer((req, res) => {
  // server logic

  console.log(req.url);

  // Create different "routes" depending on the value of req.url
  // Send different responses depending on what is being requested
  // 1. Home route "/" send back "Welcome to the crazy cat corner!"
  // 2. Cats routes "/cats" send back some info about cats. Start with string, then try
  // returning some JSON
  // 3. Create a default route that catches everything else and returns not found.
  let body, code;
  switch (req.url) {
    case "/":
      body = "Welcome to the crazy cat corner";
      code = 200;
      break;
    case "/cats":
      body = "My cat's name is cleo";
      code = 200;
      break;
    default:
      body = `${req.url} does not exist`;
      code = 404;
  }

  res.statusCode = code;
  res.end(body);

  res.statusCode = 404;
  res.end("Hello, World!");
});

// listen(port)
server.listen(3000, () => {
  console.log("server running on port 3000");
});
