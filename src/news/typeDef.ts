import {gql} from "apollo-server"
export const typeDef = gql`
type New{
    _id:ID
    title:String
    content:String
    type:String


}
extend type Query {
 getNews: [New]
 getNew(_id:ID): New 
 
}
extend type Mutation {
    addNew(
       title:String
       content:String
       type:String
    ):New

    updateNew(
      _id:ID
      title:String
      content:String
      type:String   
    ):New

    deleteNew(
        _id:ID
        
    ):New

}`