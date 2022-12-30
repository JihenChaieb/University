import {gql} from "apollo-server"
export const typeDef = gql`
type Event{
    _id:ID
    title:String
    content:String
   start:String
   end:String
   location:String



}
extend type Query {
 getEvents: [Event]
 getEvent(_id:ID): Event 
 
}
extend type Mutation {
    addEvent(
       title:String
       content:String
       start:String
       end:String
         location:String
    ):Event

    updateEvent(
      _id:ID
      title:String
      content:String
      start:String
      end:String
      location:String 
    ):Event

    deleteEvent(
        _id:ID
        
    ):Event

}`