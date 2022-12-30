import mongoose  from "mongoose"
const MarkSchema = new mongoose.Schema(
    { 
        dsMark: {
            type:Number
        },
        tpMark: {
            type:Number
        },
        examMark: {
            type:Number
        },
        
    });
const Mark  = mongoose.model('Mark', MarkSchema);

export default Mark