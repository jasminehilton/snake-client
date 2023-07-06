// const net = require("net");
const { IP, PORT, conn } = require("./constants");
// establishes a connection with the game server

const connect = function () {
  // const conn = net.createConnection({
  //   // host: "165.227.47.243",
  //   // port: 50541,
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("data", data);
  });

  conn.on("connect", () => {
    conn.write("Snek server is connected ...");
  });

  conn.on("connect", () => {
    conn.write("Name: JDH");
  });

  return conn;
};

module.exports = {
  connect,
};
