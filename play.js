
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.17.72.151",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("connecting to the server")
  });
  conn.on("data", (data) => {
    console.log("Message from client: ", data);
  
  return conn;
  });
}
console.log("Connecting ...");
connect();