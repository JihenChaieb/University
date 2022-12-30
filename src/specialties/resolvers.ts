import Specialty from "./Specialty"

export const resolvers = {
    Query : {
        getSpecialties: async(_,args)=>{
            const Specialties= await Specialty.find({})
            .populate({
                path: "program",
                model: "Program",
              })
            .populate({
                path: "subject",
                model: "Subject",
              })
              .populate({
                path: "classe",
                model: "Classe",
              })
            return Specialties
        }
    },
    Mutation:{
        addSpecialty:async(_,args)=>{
            const newSpecialty= await new Specialty({...args}).save()
            const specialty = await Specialty.findOne(newSpecialty._id)
            .populate({
              path: "program",
              model: "Program",
            })
            .populate({
              path: "subject",
              model: "Subject",
            })
            .populate({
              path: "classe",
              model: "Classe",
            })
            return specialty
        },
        
        updateSpecialty: async (_,args)=>{
        const updateSpecialty=await Specialty.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true}
           ).populate({
            path: "program",
            model: "Program",
          }).populate({
            path: "subject",
            model: "Subject",
          })
          .populate({
            path: "classe",
            model: "Classe",
          })
            return updateSpecialty
    },
    deleteSpecialty: async(_,{_id})=>{
        const deleteSpecialty=await Specialty.findOneAndRemove({_id})
        return deleteSpecialty

    }
 }
}