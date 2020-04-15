//import db
// const db = require('./index')

module.exports = {
  postOne: (obj)=> db.insertMany(),
  getAll: ()=> db.find({}),
  getAllShoeSet: (name)=> db.find({name: `${name}`}),
  getOne: (nikeID) => db.findOne({nikeID: nikeID}),
  updateShoe: (newObj, id) => {},
  deleteOne: (_id) => db.destroy(_id)
}