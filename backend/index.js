// server
const server = require("./api/server.js");

// port
const PORT = process.env.PORT || 8080;

// listening
server.listen(PORT, () => {
  console.log(`*** \n\tServer listening on http://0.0.0.0:${PORT}\n***`)
});