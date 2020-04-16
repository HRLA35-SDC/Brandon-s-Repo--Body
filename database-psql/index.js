// const mysql = require('mysql')
const pg = require('pg');
const connectionString = "postgres://postgres:@54.149.162.127:5432/nykeproducts"
var pgClient = new pg.Client(connectionString);
pgClient.connect()
.then(()=> {
  console.log("Postgres Connected")
})
.catch((err) => {
  console.log(err)
})
module.exports = pgClient;


// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'nykeproducts'
// })
// db.connect();
// module.exports = db;
