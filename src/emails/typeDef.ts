import {gql} from "apollo-server"
export const typeDef = gql`
type Email{
    _id:ID
    to:String
    from:String
    subject:String
    body:String

}
extend type Query {
 getEmails: [Email]
 getEmail(_id:ID): Email 
 
}
extend type Mutation {
    addEmail(
    to:String
    from:String
    subject:String
    body:String
        
    ):Email
    updateEmail(
    _id:ID
    to:String
    from:String
    subject:String
    body:String
       
           
       
    ):Email
    deleteEmail(
        _id:ID
        
    ):Email

}`