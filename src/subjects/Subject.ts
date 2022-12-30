import mongoose from "mongoose"


const SubjectSchema = new mongoose.Schema({
name:{
    type:String,
   
},
coeff:{
    type:Number,
},

professor:[{
    type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
  }],
 

} );
const Subject = mongoose.model('Subject', SubjectSchema);
export default Subject