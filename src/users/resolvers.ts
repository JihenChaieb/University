import User from "./User"
import bcrypt from "bcryptjs";
import config from "config";
import { generateToken } from "../utils/generateToken";
import hashPassword from "../utils/hashPassword";
import nodemailer from "nodemailer";
export const resolvers = {
    Query : {
        getUsers: async(_,args)=>{
            const users = await User.find({})
            return users
        }
    },
    Mutation:{
       
        updateUser: async (_,args)=>{
        const updatedUser=await User.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true}
        )
            return updatedUser
    },
    checkUniqueEmail: async (_, args) => {
        const user = await User.findOne({ email: args.email });
  
        if (user) {
          console.log("TCL: emailTemplate", user);
          return {
            valid: false,
          };
        }
        return {
          valid: true,
        };
      },
  
      signinUser: async (_, { login, password }) => {
        const user: any = await User.findOne({ login });
        if (!user) {
          throw new Error("User not found");
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          throw new Error("Invalid password");
        }
        return {
          token: generateToken(user, config.get("jwtPrivateKey"), "7 days"),
          user,
        };
      },
  
      signupUser: async (
        _,
        { email, password, firstName, lastName, login,image, cin, role,phone,birthDate,sexe,adresse,numInscri,matricule}
      ) => {
        const userr = await User.findOne({ email });
        if (userr) {
          throw new Error("User already exists");
        }
        const hashedPassword = await hashPassword(password);
        const newUser = await new User({
          email,
          firstName,
          password: hashedPassword,
          lastName,
          login,
          cin,
          role,
          phone,
          birthDate,
          sexe,
          adresse,
          numInscri,
          matricule,
          image
        }).save();

//emaill with nodemaileer
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          port: 587,
          secure: false,
          auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD
          }
        });
      
      // send email
      await transporter.sendMail({
          from: 'from_address@example.com',
          to: email,
          subject: `New ${role}`,
          html:`
          <h4 color="blue">Welcome to our Smart-university</h4>
          <p> Your login is "${login}"</p>
          <p> Your password is "${password}"</p>
          <p>You can now login to your account http://localhost:8080/login </p>
          <p> Thank you for using our application. </p>
          <p> MITPlytechnique </p>
          `
      });
//end email tester
        const user = await User.findOne(newUser._id).populate({
          path: "User",
          model: "User",
        });
        //return response;
        return user;
      },
  
      setPassword: async (_, { _id, password }) => {
        const hashedPassword = await hashPassword(password);
        const user = await User.findOneAndUpdate(
          { _id },
          { $set: { password: hashedPassword } },
          { new: true }
        );
        return user;
      },
    deleteUser: async(_,{_id})=>{
        const deleteUser=await User.findOneAndRemove({_id})
        return deleteUser

    }
 }
}