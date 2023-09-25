const express = require("express");
const mysql = require("mysql2");

const app = express();

const mysqlConfig = {
  host: "mysql_server",
  user: "root",
  password: "secret",
};

let con = mysql.createConnection(mysqlConfig);

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
});

con.end();
