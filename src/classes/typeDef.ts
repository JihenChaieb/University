import {gql} from "apollo-server"
export const typeDef = gql`
type Classe{
  _id:ID
  name:String
  level: String
  specialty:Specialty
  program:Program
  student:[User]
  
}

extend type Query{
   getClasses: [Classe]
   getClasse(_id:ID):Classe
}

extend type Mutation{
     addClasse(
         name: String
         level: String
         specialty:ID
         program:ID
         student:[ID]
         
     ) :Classe

     updateClasse(
         _id:ID
         name: String
         level: String
         specialty:ID
         program:ID
         student:[ID]
         
     ) :Classe

     deleteClasse(
         _id:ID
     ) :Classe
} `