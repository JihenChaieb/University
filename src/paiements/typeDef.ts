import {gql} from "apollo-server"
export const typeDef = gql`
type Paiement{
    _id:ID
    specialty:Specialty
    tr1:String
    tr2:Sring
    tr3:String


}
extend type Query {
 getPaiements: [Paiement]
 getPaiement(_id:ID): Paiement 
 
}
extend type Mutation {
    addPaiement(
       speciality:ID
       tr1:String
       tr2:String
       tr3:String

    ):Paiement

    updatePaiement(
      _id:ID
      speciality:ID
      tr1:String
      tr2:String
      tr3:String  
    ):Paiement

    deletePaiement(
        _id:ID
        
    ):Paiement

}`