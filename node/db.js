// const { Client } = require('pg');

// const client = new Client({
//   user: 'western_ghats',
//   host: 'localhost',
//   database: 'western_ghats',
//   password: 'Gambling@24',
//   port: 5432,
// });
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost', // Change to your XAMPP MySQL host
  user: 'root',      // MySQL username
  password: 'Gambling@24', // MySQL password
  database: 'Local instance MySQL80', // MySQL database name
  connectionLimit: 10 // Number of connections in the pool
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }

  console.log('Connected to the database!');
  
  // Release the connection immediately
  connection.release();
});

// const columnName = 'species_name'; 
// const tableName = 'species'; 
// const diet = 'diet';
// const query = `SELECT ${columnName} FROM ${tableName} WHERE ${diet} = "carnivore" `;

// pool.query(query, (error, results) => {
//     if (error) {
//       console.error('Error executing query:', error);
//       return;
//     }
//     console.log('Fetched data:', results);
//   });


