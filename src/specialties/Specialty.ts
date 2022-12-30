import mongoose from "mongoose"


const SpecialtySchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
program: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "Program",
  },
  subject:[{
    type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Subject",
  }],
 classe:[
  {
    type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Classe",
  }

 ]
} );
const Specialty = mongoose.model('Specialty', SpecialtySchema);
export default Specialty