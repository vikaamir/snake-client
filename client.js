
const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "172.17.72.151",
    port: 50541,
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
