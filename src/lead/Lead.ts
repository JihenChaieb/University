import mongoose from "mongoose"


const LeadSchema = new mongoose.Schema( 
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
        phone:{
            type:Number,
            maxlength:8
        },
        password:{
            type:String,
            required:true,
            maxlength:20,
            minlength:6
        },
        civilite:{
            type:String
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
        pays:{
            type:String
        },
        birthDate:{
            type:Date
        },
        birthPlace:{
            type:String
        },
        adresse:{
            type:String
        },
        type_bac:{
            type:String
        },
        annee_bac:{
            type:String
        },
        bac_files:{
            type:String
        },
        titre_dernier_diplome:{
            type:String
        },
        annee_dernier_diplome:{
            type:String
        },
        dernier_diplome_file:{
            type:String
        },
        faculte:{
            type:String
        },
        parcours:{
            type:String
        },
        specialite:{
            type:String
        },
        niveau:{
            type:String
        },
        photo:{
            type:String
        },
        copie_cin:{
            type:String
        },
        releve_note:{
            type:String
        },
        devise:{
            type:String
        },
        tranche:{
            type:String
        },
        service:{
            type:String
        },
        status:{
            type:String,
            enum: ["pending", "accepted", "rejected"]
        },
        sexe:{
            type:String,
        },
        role:{
            type:String,
            enum: ["admin", "student", "professor","lead"]
        },

     });
const Lead = mongoose.model('Lead', LeadSchema);
export default Lead 