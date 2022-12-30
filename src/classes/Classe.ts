import mongoose  from "mongoose"

const ClasseSchema = new mongoose.Schema(
    { 
        name: {
            type:String,
            required: true,
            maxlength : 50
        },
        level: {
          type:String,
          required: true,
        
      },
        specialty:{
            type: mongoose.Schema.Types.ObjectId,
              required: false,
              ref: "Specialty",
          },
          program:{
            type: mongoose.Schema.Types.ObjectId,
              required: false,
              ref: "Program",
          },
          student:[{
            type: mongoose.Schema.Types.ObjectId,
              required: false,
              ref: "User",
          }],
    });
const Classe  = mongoose.model('Classe', ClasseSchema);

export default Classe