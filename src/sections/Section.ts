import mongoose  from "mongoose"


const SectionSchema = new mongoose.Schema({ 
        section: {
            type:String,
          
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "Sujbect",
          },

    });
   
const Section= mongoose.model('Section', SectionSchema);
export default Section