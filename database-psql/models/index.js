const pg = require('../');
const shoeExample = {
  name:  "Nike Zoom Freak Shield",
  gender: 'Male',
  discountPrice: 100,
  type: 'String',
  price: 123,
  nikeID: 2,
  colorStyles: [
    "Black",
    "Light Thistle",
    "Pollen Rise",
    "Magic Flamingo"
],
  productPictures: [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/aki5mq92ws4mdgfuijl5/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/pm2uiho39jtwm7ghdipa/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/jx4muj1n92xdld6zdd7n/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uxxu2pg3xqu50jvpiaih/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/mjihumk0i0yjvrxlmppq/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/to2h7zyw02fuhloqef0p/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg"
],
  productDetails: {
    weight: 15.85,
    last: "HR18",
    offset: "7mm (9mm forefoot, 13mm heel)",
    style: "YY7641 - 93",
  },
  "availSizes": {
      "5": true,
      "6": true,
      "7": true,
      "8": false,
      "9": true,
      "10": true,
      "11": true,
      "12": true,
      "13": true,
      "14": false,
      "15": true,
      "16": true,
      "17": true,
      "18": false,
      "5x5": false,
      "6x5": true,
      "7x5": true,
      "8x5": true,
      "9x5": true,
      "10x5": false,
      "11x5": true,
      "12x5": true,
      "13x5": false
  },
  "collection":["Nike","Free","RN","3.0","NRG","Team Red","White","Gum Light Brown","Team Red"]
}



const insertSample = `INSERT INTO products( 
  nikeID,
  names,
  gender,
  types,
  discountprice,
  prices,
  colorstyles,
  productpictures,
  weights,
  lasts,
  offsetmeasurement,
  styles,
  collections,
  sizes
  ) VALUES (
    ${shoeExample.nikeID},
    '${shoeExample.name}',
    '${shoeExample.gender}',
    '${shoeExample.type}',
    ${shoeExample.discountPrice},
    ${shoeExample.price},
    '{${shoeExample.colorStyles}}',
    '{${shoeExample.productPictures}}',
    ${shoeExample.productDetails.weight},
    '${shoeExample.productDetails.last}',
    '${shoeExample.productDetails.offset}',
    '{${shoeExample.productDetails.style}}',
    '{${shoeExample.collection}}',
    '{${[shoeExample.availSizes]}}'
    );`

   const models = {
      getOne: (nikeID)=> pg.query(`select * from products where nikeID = ${nikeID}`),
      insertOnce: (data)=> pg.query(data)}
  module.exports = models;
