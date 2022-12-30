import {gql} from "apollo-server"
export const typeDef = gql`
type Section{
  _id:ID
  section:String
  subject:Subject
 
  
}

extend type Query{
   getSections: [ Section]
   getSection(_id:ID):Section
}

extend type Mutation{
     addSection(
        section: String
        subject:ID
      
     ) :Section

     updateSection(
         _id:ID
         section: String
         subject:ID
     ) :Section

     deleteSection(
         _id:ID
     ) :Section
} `
