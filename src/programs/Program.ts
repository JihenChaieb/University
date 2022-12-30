import mongoose  from "mongoose"
const ProgramSchema = new mongoose.Schema(
    { 
        name: {
            type:String
        },
      
        
    });
const Program  = mongoose.model('Program', ProgramSchema);

export default Program