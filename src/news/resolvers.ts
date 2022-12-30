import New from "./New"

export const resolvers = {
    Query : {
        getNews: async(_,args)=>{
            const News= await New.find({})
            return News
        }
    },
    Mutation:{
        addNew:async(_,args)=>{
            const newNew= await new New({...args}).save()
            return newNew
        },
        updateNew: async (_,args)=>{
        const updatedNew=await New.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true}
           )
            return updatedNew
    },
    deleteNew: async(_,{_id})=>{
        const deleteNew=await New.findOneAndRemove({_id})
        return deleteNew

    }
 }
}