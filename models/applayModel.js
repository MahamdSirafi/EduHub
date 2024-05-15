const mongoose = require("mongoose");
const applaySchema = new mongoose.Schema({
  user : {
      required : [true , 'must enter user'],
type : mongoose.Schema.ObjectId,
ref : 'User'
    },
    post : {
      required : [true , 'must enter post'],
type : mongoose.Schema.ObjectId,
ref : 'Post'
    },
    rate : {
      required : [true , 'must enter rate'],
type : Number,
    },
    status : {
      type : String,
    },
    rasult : {
      required : [true , 'must enter rasult'],
type : Number,
    },
    
},{
      timestamps: true,
      versionKey: false
    });
    const Applay = mongoose.model("Applay", applaySchema);
    module.exports = Applay;
    