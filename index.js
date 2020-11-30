const express = require("express");
const shortid = require("shortid");

const server = express();

// configure our server (PLUG FUNCTIONALITY)
server.use(express.json()); // adds the ability to read the body of the request as JSON

let users = [
  {
    id: shortid.generate(), // hint: use the shortid npm package to generate it
    name: "Jane Doe", // String, required
    bio: "Not Tarzan's Wife, another Jane", // String, required
  },
];

const User = {
  getAllUsers() {
    return users;
  },
  getUserById() {},
  createUser() {},
  updateUser() {},
  deleteUser() {},
};

server.get("/api/users", (req, res) => {
  const users = User.getAllUsers();

  if (users) {
    res.status(200).json(users);
  } else {
    res
      .status(500)
      .json({ errorMessage: "The users information could not be retrieved." });
  }
});

server.use("*", (req, res) => {
  // req represents the request from the client
  // res represents the response we build for the client
  res.status(404).json({ message: "Resource not found" });
});

// start the server
server.listen(5000, () => {
  console.log("Listening on port 5000");
});
