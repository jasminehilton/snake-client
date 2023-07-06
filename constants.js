const net = require("net");

const IP = "165.227.47.243";
const PORT = 50541;

const conn = net.createConnection({
  host: IP,
  port: PORT,
});

module.exports = {
  IP,
  PORT,
  conn,
};
