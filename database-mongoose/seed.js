var mongoose = require('mongoose');
const db = require('./index')
const parseRaw = require('./generatedData/parsedData')
var shoe = require('./generateData.js');


var data;

// db.insertMany(data, (err) => {
//   if(err){
//       console.log(err);
//   }
//   else{
//       console.log('Sample data inserted into database!');
//   }
// })

async function insert(arr) {
  // console.log(arr, "the array")
  console.log(arr,"ARRRAY")
  await db.insertMany(arr)
  return;
}
async function generator() {
  var x = 0;
  var shoes = [];
  for (var i = 1; i <= 100; ++i) {
    // console.log(i)
    var currentShoe = await shoe();
    currentShoe[0].nikeID = i;
    // console.log(currentShoe)
    shoes.push(currentShoe[0]);
    x++;
    if (x === 100) {
      console.log("inserted")
      // console.log(currentShoe,"HELLO")
      await insert(shoes);
      x = 0;
      shoes = [];
    }
  }
  // await insert(shoes)
}
// async function generator() {
//   const loops = data.length / 10000;
//   var start = 0;
//   var edge = 10000;
//   for (var i = 0; i < loops; ++i) {
//     console.log('i', i);
//     var tempArr = data.slice(start, edge);
//     await insert(tempArr);
//     start = edge;
//     edge += 10000;
//   }

// }
const upperLimit = 1;
async function run() {
  const promises = [];
  for (var i = 1; i <= upperLimit; i++) {
    // promises.push(generator());
    await generator();
    if (i === upperLimit) {
      const end = process.hrtime.bigint();
      const elapsedTime = parseInt(end - start, 10) / 60000000000;
      console.log(`-------------- Finish --------------`);
      console.log(`${elapsedTime} minutes`);
    }
  }
  // await Promise.all(promises);
}

const start = process.hrtime.bigint();

data = parseRaw();
run();






// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with

//insertMockData()
//createProduct()






//Nike-zoom-black

// nike-zoom-pink
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/n2aj43jru2uemxzf7kxe/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/moo93xefvfwdczevq7gb/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/mqwkuzuzdni842lo0vr6/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c18zt6wzkr1xpxmlyyog/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/v3pxdt6cgxrggudebdeh/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/eudkesttujgt6t8ikhbi/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg












