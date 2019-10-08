
const keys = require('../config/keys');
const mongoose = require('mongoose')
// mongoose.connect(keys.mongodb.dbURL, {useNewUrlParser: true, useUnifiedTopology: true})

const userSchema = new mongoose.Schema({
   userName: String,
   googleId: String,
   thumbnail: String
})


const userModel = mongoose.model('users', userSchema);

module.exports = userModel;