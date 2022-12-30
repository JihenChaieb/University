import {gql} from "apollo-server"
export const typeDef = gql`
type Program{
    _id:ID
    name:String

}
extend type Query {
 getPrograms: [Program]
 getProgram(_id:ID): Program 
 
}
extend type Mutation {
    addProgram(
        name:String
        
    ):Program
    updateProgram(
        _id:ID
       name:String
       
           
       
    ):Program
    deleteProgram(
        _id:ID
        
    ):Program

}`