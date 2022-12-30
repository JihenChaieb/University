import mongoose  from "mongoose"
const SessionSchema = new mongoose.Schema(
    { 
       classroom: {
            type:String
        },
        subject:{
            type: mongoose.Schema.Types.ObjectId,
              required: false,
              ref: "Subject",
          },
        start:{
              type:String
          }, 
        title:{
            type:String,
        }, 
        end:{
            type:String
            },
        professor:{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "User",
              },

        
    });
const Session  = mongoose.model('Session', SessionSchema);

export default Session