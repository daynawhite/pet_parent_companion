const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllUsers = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let sql = 'SELECT * FROM ?? WHERE ?? = ?'
  const replacements = ['users', 'id', req.params.id]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createUser = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME 
  let sql = 'INSERT INTO ?? (??, ??) VALUES (?, ?)'
  const replacements = ['users', 'username', 'password', req.body.username, req.body.password]
  
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateUserById = (req, res) => {
  // UPDATE USERS AND SET USERNAME AND PASSWORD WHERE ID = <REQ PARAMS ID>
  const selectedUserId = req.params.id;
  let sql = "UPDATE ?? SET ?? = ?, ?? = ?  WHERE ?? = ?"
  const replacements = ['users', 'username', req.body.username, 'password', req.body.password, 'id', selectedUserId]
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteUserByUsername = (req, res) => {
  // DELETE FROM USERS WHERE USERNAME = <REQ PARAMS USERNAME>
  let sql = "DELETE FROM ?? WHERE ?? = ?"
  const replacements = ['users', 'username', req.params.username]
  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserByUsername
}