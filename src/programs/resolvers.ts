import Program from "./Program"

export const resolvers = {
    Query : {
        getPrograms: async(_,args)=>{
            const programs= await Program.find({})
            return programs
        }
    },
    Mutation:{
        addProgram:async(_,args)=>{
            const newProgram= await new Program({...args}).save()
            return newProgram
        },
        updateProgram: async (_,args)=>{
        const updateProgram=await Program.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true}
           )
            return updateProgram
    },
    deleteProgram: async(_,{_id})=>{
        const deleteProgram=await Program.findOneAndRemove({_id})
        return deleteProgram

    }
 }
}