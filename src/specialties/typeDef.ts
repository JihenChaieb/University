import {gql} from "apollo-server"
export const typeDef = gql`
type Specialty{
    _id:ID
    name:String
    program:Program
    subject:[Subject]
    classe:[Classe]
   

}
extend type Query {
 getSpecialties: [Specialty]
 getSpecialty(_id:ID): Specialty
 
}
extend type Mutation {
    addSpecialty(
        name:String
        program:ID
        subject:[ID]
        classe:[ID]

    ):Specialty


    updateSpecialty(
        _id:ID
       name:String
       program:ID
       subject:[ID]
       classe:[ID]
    ):Specialty


    deleteSpecialty(
        _id:ID 
    ):Specialty

}`