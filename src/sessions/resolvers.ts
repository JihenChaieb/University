import Session from "./Session"

export const resolvers = {
    Query : {
        getSessions: async(_,args)=>{
            const Sessions= await Session.find({})
            .populate({
                path: "subject",
                populate: { path: 'professor' }
              })
            .populate({
                path: "professor",
                model: "User",
              })
              .exec()
            return Sessions
        }
    },
    Mutation:{
        addSession:async(_,args)=>{
            const newSession= await new Session({...args}).save()
            const session = await Session.findOne(newSession._id)
            .populate({
                path: "subject",
                model: "Subject",
              })
              .populate({
                path: "professor",
                model: "User",
              })
            return session
        },
        updateSession: async (_,args)=>{
        const updateSession=await Session.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true}
           )
           .populate({
            path: "subject",
            model: "Subject",
          })
          .populate({
            path: "professor",
            model: "User",
          })
            return updateSession
    },
    deleteSession: async(_,{_id})=>{
        const deleteSession=await Session.findOneAndRemove({_id})
        return deleteSession

    }
 }
}