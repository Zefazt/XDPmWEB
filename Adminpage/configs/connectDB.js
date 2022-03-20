//get the client
const mysql  = require ('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'heavenshop',
    password: 'heavenshop',
    database: 'heavenshop',
    multipleStatements: true
});

// // simple query
// connection.query(
//     // 'SELECT * FROM `sanpham` WHERE `name` = "Page" AND `age` > 45',
//   'SELECT * FROM `sanpham` ',
//   function(err, results, fields) {
//       console.log('>>> check mySQL');
//     console.log(results); // results contains rows returned by server
//     //console.log(results[0]);
//   }
// );

// with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );

module.exports = connection