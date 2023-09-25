const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());


const mysqlConfig = {
  host: "mysql_server",
  user: "root",
  password: "secret",
};
let con = null;

app.get("/connect", (req, res) => {
  con = mysql.createConnection(mysqlConfig);
  con.connect((err) => {
    if (err) throw err;
    res.send("Connected");
  });
});

app.get("/seed", (req, res) => {
  con = mysql.createConnection(mysqlConfig);
  con.connect((err) => {
    if (err) throw err;

    let sql = `CREATE DATABASE IF NOT EXISTS todos_db;`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Database created: todos_db");
    });

    sql = `USE todos_db;`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Using todos_db");
    });

    sql = `CREATE TABLE IF NOT EXISTS todos (
      id INT NOT NULL AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT FALSE,
      PRIMARY KEY (id)
    );`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Created table: todos");
    });

    sql = `INSERT INTO todos (title, completed) VALUES
      ('Buy groceries', TRUE),
      ('Finish homework', FALSE),
      ('Clean the house', FALSE),
      ('Go for a walk', FALSE),
      ('Read a book', FALSE);`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Inserted 5 todos");
    });
    
    sql = `SELECT * FROM todos;`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

// Define the GET route for getting all todos
app.get("/todos", (req, res) => {
  con = mysql.createConnection(mysqlConfig);
  con.connect((err) => {
    if (err) throw err;

    let sql = `USE todos_db;`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Using todos_db");
    });

    sql = `SELECT * FROM todos;`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  // // Create an array of fake todos
  // const fakeTodos = [
  //   { id: 1, title: "Buy groceries", completed: false },
  //   { id: 2, title: "Do laundry", completed: false },
  //   { id: 3, title: "Write blog post", completed: false },
  // ];

  // // Send the fake todos back to the client
  // res.send(fakeTodos);
});

// Start the Express app
app.listen(8080);

console.log("Backend is running on port http://localhost:8080/");
