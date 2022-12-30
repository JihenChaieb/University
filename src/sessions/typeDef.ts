import {gql} from "apollo-server"
export const typeDef = gql`
type Session{
    _id:ID
    classroom:String
    subject:Subject!
    start:String
    end:String
    title:String
    professor:User!
}

extend type Query {
 getSessions: [Session!]!
 getSession(_id:ID): Session!
}

extend type Mutation {
    addSession(
       title:String
       classroom:String
       subject:ID
       start:String
       end:String
       professor:ID
    ):Session

    updateSession(
        _id:ID
       classroom:String
       subject:ID
       start:String
       end:String
       professor:ID
    ):Session

    deleteSession(
        _id:ID    
    ):Session
}`