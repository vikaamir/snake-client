const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");

  conn.on ("data", (data) => {
    console.log("Message from client: ", data)
  });
  conn.on ("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: VIK");
  });
 

  return conn;
};
module.exports = {
  connect,
};
