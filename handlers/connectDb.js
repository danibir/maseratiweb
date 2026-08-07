const mongoose = require("mongoose");

const mainDb = mongoose.createConnection(
  `mongodb://${process.env.DBSERVER}:27017/maserati`
)

mainDb.on("connected", () => console.log("Main DB connected"))

module.exports = { 
    mainDb
}