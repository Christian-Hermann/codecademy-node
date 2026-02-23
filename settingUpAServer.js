// THE HTTP MODULE
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server is running!");
});

server.listen(8080, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});
