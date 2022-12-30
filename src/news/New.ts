import mongoose from "mongoose"


const NewSchema = new mongoose.Schema({
title:{
    type:String,
    required:true
},

content:{
    type:String,
},

type:{
   type:String,
   enum: ["news", "event" ]
},

} );
const New = mongoose.model('New', NewSchema);
export default New