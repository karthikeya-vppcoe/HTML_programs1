const express = require('express'); // Import express
const users= require("./users.json");
const app = express(); // Create app from express
const port = 3000; // Set the port

app.get("/users", (req, res) => {
  return res.json(users);
}); // Create a route for /users

app.get("/users/:Id", (req, res) => {
    const Id =Number(req.params.Id);
    const user = users.find(user => user.Id == Id);
    return res.json(user);
    }); // Create a route for /users/:id

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); // Make the app listen on the port