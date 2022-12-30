import Event from "./Event"

export const resolvers = {
    Query : {
        getEvents: async(_,args)=>{
            const Events= await Event.find({})
            return Events
        }
    },
    Mutation:{
        addEvent:async(_,args)=>{
            const newEvent= await new Event({...args}).save()
            return newEvent
        },
        updateEvent: async (_,args)=>{
        const updatedEvent=await Event.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true}
           )
            return updatedEvent
    },
    deleteEvent: async(_,{_id})=>{
        const deleteEvent=await Event.findOneAndRemove({_id})
        return deleteEvent

    }
 }
}