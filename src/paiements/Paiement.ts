import mongoose from "mongoose"


const PaiementSchema = new mongoose.Schema({

    specialty:{
        type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "Specialty",
      },
    tr1:{
        type:String,
    },
    tr2:{
        type:String,
    },
    tr3:{
        type:String,
    },

} );
const Paiement = mongoose.model('Paiement', PaiementSchema);
export default Paiement