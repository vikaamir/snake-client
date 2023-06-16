// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  stdin.on("data", (key) => {
    if (key === "w") {
      connection.write("Move: up")
    }
  });
  stdin.on("data", (key) => {
    if (key === "a") {
      connection.write("Move: left")
    }
  });
  stdin.on("data", (key) => {
    if (key === "d") {
      connection.write("Move: right")
    }
  });
  stdin.on("data", (key) => {
    if (key === "s") {
      connection.write("Move: down")
    }
  });
}
// Call the setupInput function
const stdin = setupInput();
// Call the handleUserInput function
handleUserInput();
module.exports = {
  setupInput,
};