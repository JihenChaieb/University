import {gql} from "apollo-server"
export const typeDef = gql`
type Subject{
    _id:ID
    name:String
    coeff:Int
    professor: [User!]!
}

extend type Query {
 getSubjects: [Subject]
 getSubject(_id:ID): Subject!
}

extend type Mutation {
    addSubject(
        name:String
        coeff: Int
        professor:[ID]
    ):Subject
    updateSubject(
        _id:ID
       name:String
       coeff:Int
       professor:[ID]
       
    ):Subject
    deleteSubject(
        _id:ID
        
    ):Subject

}

`