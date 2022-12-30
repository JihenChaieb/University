import {gql} from "apollo-server"
export const typeDef = gql`
type User{
    _id:ID
    firstName:String
    lastName:String
    email:String
    cin:Int
    login:String
    password:String
    phone:Int
    role:String
    birthDate:String
    sexe:String
    adresse:String
    numInscri:Int 
    matricule:Int
    salaire:Int
    image:String
    amount:Float
    payment_date:String
    payment_deadline:String
    amount_paid:Float
    remaining_amount:Float
    bill_number:Int
    status:String
    payment_method:String

   
}
type Token {
    token: String!
    user: User
  }
  type Validation {
    valid: Boolean
  }

extend type Query {
 getUsers : [User]
 getUser(_id:ID): User 
 
}
extend type Mutation {
   
    updateUser(
        _id:ID
        firstName:String
        lastName:String
        email:String
        cin:Int
        login:String
        password:String
        phone:Int
        role:String
        birthDate:String
        sexe:String
        adresse:String
        numInscri:Int 
        matricule:Int
        salaire:Int
        payment_method:String
        amount:Float
        payment_date:String
        payment_deadline:String
        amount_paid:Float
        remaining_amount:Float
        bill_number:Int
        status:String

    ):User
    
    signinUser(login: String!, password: String!): Token

    checkUniqueEmail(email: String): Validation

    signupUser(
      firstName:String
        lastName:String
        email:String
        cin:Int
        login:String
        password:String
        phone:Int
        role:String
        birthDate:String
        sexe:String
        adresse:String
        numInscri:Int
        matricule:Int
        image:String
    ): User

    setPassword(_id: ID!, password: String): User!
    
    deleteUser(
        _id:ID
        
    ):User

}

`