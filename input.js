// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
// sending the server messege to exit fron the game press ctrl + c
const handleUserInput = function() {
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  // sending date to the server to move the snake to the direction that we want
  // creat const with the movment and use swithch in the function 
  const ALLOWED_MOVES = {
    "down": "s",
    "right": "d",
    "left": "a",
    "up": "w",
}

stdin.on("data", (key) => {
  switch(key) {
    case ALLOWED_MOVES.down:
      console.log("TESTING UP CASE", key, connection)
      connection.write("Move: down");
      break;
    case ALLOWED_MOVES.up:
      connection.write("Move: up");
      break;
    case ALLOWED_MOVES.left:
      connection.write("Move: left");
      break;
    case ALLOWED_MOVES.right:
      connection.write("Move: right");
      default:
        console.error("not allow") 
}});

  // send a messege to the server by pressing the key 
  const ALLOWED_MESSEGE = {
    "laugh" : "o", // 
    "eat": "p"
  }
  
  stdin.on("data", (key) => {
    switch(key) {
      case ALLOWED_MESSEGE.laugh:
        connection.write("Say: Haha!");
      break;
      case ALLOWED_MESSEGE.eat:
        connection.write("Say: let's eat")
        default:
          console.error("not allow")

    }
  });

};
// Call the setupInput function
const stdin = setupInput();
// Call the handleUserInput function
handleUserInput();
module.exports = {
  setupInput,
};