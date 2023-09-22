const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Define the GET route for getting all todos
app.get("/todos", (req, res) => {
  // Create an array of fake todos
  const fakeTodos = [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Do laundry", completed: false },
    { id: 3, title: "Write blog post", completed: false },
  ];

  // Send the fake todos back to the client
  res.send(fakeTodos);
});

// Start the Express app
app.listen(8080, () => {
  console.log("Backend is running on port http://localhost:8080/");
});
