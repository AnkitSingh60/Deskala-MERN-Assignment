const mongoose = require("mongoose");
const connect = ()=>{
    return mongoose.connect("mongodb+srv://ankit:ankit@cluster0.u0eil.mongodb.net/E_COMMERCE_MERN")
}
module.exports = connect;