const http = require("http");

const server = http.createServer((req, res) => {
  // server logicw
});

// listen(port)
server.listen(80, () => {
  console.log("server running on port 80");
});
