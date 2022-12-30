import Subject from "./Subject"

export const resolvers = {
    Query : {
        getSubjects: async(_,args)=>{
            const subjects= await Subject.find({})
            .populate({
                path: "professor",
                model: "User",
              })
            return subjects
        }
    },
    Mutation:{
        addSubject:async(_,args)=>{
            const newSubject= await new Subject({...args}).save()
            const subject = await Subject.findOne(newSubject._id)
            .populate({
                path: "professor",
                model: "User",
              })
            return newSubject
        },
        updateSubject: async (_,args)=>{
        const updatedSubject=await Subject.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true}
           ).populate({
            path: "professor",
            model: "User",
          })
            return updatedSubject
    },
    deleteSubject: async(_,{_id})=>{
        const deletedSubject=await Subject.findOneAndRemove({_id})
        return deletedSubject

    }
 }
}