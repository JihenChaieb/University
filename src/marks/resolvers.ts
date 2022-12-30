import Mark from "./Mark"

export const resolvers = {
    Query : {
        getMarks: async(_,args)=>{
            const Marks= await Mark.find({})
            return Marks
        }
    },
    Mutation:{
        addMark:async(_,args)=>{
            const newMark= await new Mark({...args}).save()
            return newMark
        },
        updateMark: async (_,args)=>{
        const updatedMark=await Mark.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true}
           )
            return updatedMark
    },
    deletedMark: async(_,{_id})=>{
        const deletedMark=await Mark.findOneAndRemove({_id})
        return deletedMark

    }
 }
}