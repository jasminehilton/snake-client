const net = require("net");
const { connect } = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  if (key === "\u0003") {
    process.exit();
  }
};

connect();

// // establishes a connection with the game server
// const connect = function() {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("data", (data) => {
//     console.log("data", data);
//   });

//   return conn;
// };

// console.log("Connecting ...");
