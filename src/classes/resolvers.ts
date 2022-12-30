import Classe from "./Classe"

export const resolvers = {
    Query:{
        getClasses: async (_, args)=>{
             const Classes = await Classe.find({})
             .populate({
                path: "specialty",
                populate: { path: 'program' }
              })
              .populate({
                path: "program",
                model: "Program",
              })
              .populate({
                path: "student",
                model: "User",
              })
             return Classes
        }
    },
    Mutation:{
        addClasse: async(_,args)=>{
            const newClasse = await new Classe ({...args}).save()
            const classe = await Classe.findOne(newClasse._id)
            .populate({
              path: "specialty",
              populate: { path: 'program' }
            }).populate({
                path: "program",
                model: "Program",
              })
              .populate({
                path: "student",
                model: "User",
              })
            return classe
        },
        updateClasse: async(_,args)=>{
            const updatedClasse = await Classe.findOneAndUpdate(
                {_id:args._id},
                {$set :{...args}},
                {new: true},
            ).populate({
                path: "specialty",
                populate: { path: 'program' }
                
              }).populate({
                  path: "program",
                  model: "Program",
                })
                .populate({
                  path: "student",
                  model: "User",
                })
            return updatedClasse
        },
        deleteClasse: async(_,_id)=>{
            const deletedClasse = await Classe.findOneAndRemove ({_id})
            return deletedClasse
        },
    }
}