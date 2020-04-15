// const mongoose = require('mongoose');
// const productSchema = require('./schema');
// const mongo = require('mongo');

// mongoose.Promise = global.Promise;
// //need to seed DB
// mongoose.connect('mongodb://localhost/nykeproducts?keepAlive=true&poolSize=30&autoReconnect=true&socketTimeoutMS=360000&connectTimeoutMS=360000', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('DATABASE ON'.red)
// });

// var Product = mongoose.model('Product', productSchema);



// module.exports = Product;
