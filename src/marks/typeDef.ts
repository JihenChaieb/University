import {gql} from "apollo-server"
export const typeDef = gql`
type Mark{
    _id:ID
     dsMark:Int
     tpMark:Int
     examMark:Int

     


}
extend type Query {
 getMarks: [Mark]
 getMark(_id:ID): Mark
 
}
extend type Mutation {
    addMark(
     dsMark:Int
     tpMark:Int
     examMark:Int
     
    ):Mark

    updateMark(
     _id:ID
     dsMark:Int
     tpMark:Int
     examMark:Int
    ):Mark

    deletedMark(
        _id:ID
        
    ):Mark
}`