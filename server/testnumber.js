'use strict';
var generateRandomData = function (context, events, done) {
  const id = Math.floor(Math.random() * (10000000-1));
  context.variables['param'] = id;
  return done();
}
module.exports = generateRandomData;