import mongoose from "mongoose"


const UserSchema = new mongoose.Schema( 
    { 
        firstName:{
            type:String,
            required:true,
            maxlength : 50
        }, 
        lastName:{
            type:String,
            required:true,
            maxlength : 50
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim: true
        },
        cin:{
            type:Number,
            required:true,
            unique:true


        },
        login:{
            type:String,
            required:true,
           

        },
        password:{
            type:String,
            required:true,
            maxlength:100,
            minlength:6
        },
        phone:{
            type:Number,
            maxlength:8
        },

        image:{
            type:String,
            
        },
        role:{
            type:String,
            enum: ["admin", "student", "professor"]
        },
        sexe:{
            type:String,
            enum: ["male", "female"]
        },
       birthDate:{
           type:Date
       },
      
       adresse:{
           type:String
       },
       numInscri:{
           type:Number,
          
       },
       matricule:{
           type:Number,
       },
      
    //payment 
    amount:{
        type: Number,
    },
    payment_method:{
        type:String,
        enum: ["cash","byCard"]
    },
    payment_date:{
        type:String,
    },
    payment_deadline:{
        type:String,
       
    },
    amount_paid:{
        type:Number
    },
    remaining_amount:{
        type:Number
    },
    bill_number:{
        type:Number
    },
    status:{
        type:String,
        enum: ["paid","upaid"]
        

    },
     });
     
const User = mongoose.model('User', UserSchema);
export default User 