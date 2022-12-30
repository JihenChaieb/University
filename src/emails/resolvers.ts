import Email from "./Email"
import nodemailer from "nodemailer";

export const resolvers = {
    Query : {
        getEmails: async(_,args)=>{
            const emails= await Email.find({})
            return emails
        }
    },
    Mutation:{
        addEmail:async(_,args)=>{
            var transport = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: "9ad09e17e087d3",
                  pass: "d835c71321ba7f"
                }
              });
              const message = {
                from: args.from,
                to: args.to,
                subject: args.subject,
                html: `<h1>${args.body}</h1>`
              };
              transport.sendMail(message, function(err, info) {
                  if (err) {
                    console.log(err)
                  } else {
                    console.log(info);
                  }
              });
              const newEmail = await new Email({
                ...args
              }).save();
              const email = await Email.findOne(newEmail._id)
              return email;
        },
        updateEmail: async (_,args)=>{
        const updateEmail=await Email.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true}
           )
            return updateEmail
    },
    deleteEmail: async(_,{_id})=>{
        const deleteEmail=await Email.findOneAndRemove({_id})
        return deleteEmail

    }
 }
}