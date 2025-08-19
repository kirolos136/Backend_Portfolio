const mongoose = require('mongoose');

require('dotenv').config();

const DB = process.env.MONGO_URI;

mongoose.connect(DB)
.then(()=>console.log("connected to mongo"))
.catch(()=>console.error("failed to connect"))

module.exports=mongoose;