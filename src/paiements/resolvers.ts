import Paiement from "./Paiement"

export const resolvers = {
    Query : {
        getPaiements: async(_,args)=>{
            const Paiements= await Paiement.find({})
            .populate({
                path: "specialty",
                model: "Specialty",
              })
            return Paiements
        }
    },
    Mutation:{
        addPaiement:async(_,args)=>{
            const newPaiement= await new Paiement({...args}).save()
            return newPaiement
        },
        updatePaiement: async (_,args)=>{
        const updatedPaiement=await Paiement.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true}
           )
            return updatedPaiement
    },
    deletePaiement: async(_,{_id})=>{
        const deletePaiement=await Paiement.findOneAndRemove({_id})
        return deletePaiement

    }
 }
}