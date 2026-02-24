// THE HTTP MODULE
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server is running!");
});

server.listen(8080, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});

// THE URL MODULE
const URL_TO_PARSE =
  "https://www.example.com/p/a/t/h?prop1=value1&prop2=value2";

const myUrl = new URL(
  "https://www.example.com/p/a/t/h?prop1=value1&prop2=value2"
);

const hostname = myUrl.hostname;
const pathname = myUrl.pathname;
const searchParams = myUrl.searchParams;
