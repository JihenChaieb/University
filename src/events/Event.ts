import mongoose from "mongoose"


const EventSchema = new mongoose.Schema({
title:{
    type:String,
    
},

content:{
    type:String,
},
start:{
    type:String,
},
end:{
    type:String,
},

location:{
    type:String
}



} );
const Event = mongoose.model('Event', EventSchema);
export default Event