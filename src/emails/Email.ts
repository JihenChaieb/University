import mongoose  from "mongoose"
const EmailSchema = new mongoose.Schema(
    { 
        to: {
            type:String
        },
        from: {
            type:String
        },
        subject: {
            type:String
        },
        body: {
            type:String
        },
      
        
    });
const Email  = mongoose.model('Email', EmailSchema);

export default Email