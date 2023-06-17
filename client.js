const net = require("net");
const { IP, PORT } = require("./constants");
// creat connection with net to contact with the server 
// creat connect ver with IP and port num to contect with the server 
//send data to the server with conn.on and passing the messege 

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
