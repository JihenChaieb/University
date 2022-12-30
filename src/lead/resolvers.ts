import Lead from "./Lead"
import nodemailer from "nodemailer";

export const resolvers = {
    Query : {
        getLeads: async(_,args)=>{
            const leads = await Lead.find({})
            return leads
        }
    },
    Mutation:{
        addLead:async(_,args)=>{
            const newLead= await new Lead({...args}).save()
            return newLead
        },
        updateLead: async (_,args)=>{
        const updatedLead=await Lead.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true},
          )

          const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            auth: {
              user: process.env.GMAIL_EMAIL,
              pass: process.env.GMAIL_PASSWORD
            }
          });

          await transporter.sendMail({
            from: 'from_address@example.com',
            to:  args.email,
            subject: `admission request`,
            html:`
            <h4 color="blue">Welcome to MITPlytechnique </h4>
            <p> dear condidate, <br>
            I have the honor to inform you that your admission request has been accepted
            <br>  You can now complete the pre-registration process on the link below
            http://mitpolyteck/pre-inscription </p>
            <p> Thank you for your trust. </p>
            <p> MITPlytechnique </p>
            `
        });
            return updatedLead
         },
          
         rejectLead: async (_,args)=>{
        const rejectLead=await Lead.findOneAndUpdate(
            {_id:args._id},
            {$set:{...args}},
            {new:true},
          )

          const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            auth: {
              user: process.env.GMAIL_EMAIL,
              pass: process.env.GMAIL_PASSWORD
            }
          });

          await transporter.sendMail({
            from: 'from_address@example.com',
            to:  args.email,
            subject: `admission request`,
            html:`
            
            <p> dear condidate, <br>
            I am very sorry to inform you that your admission request has been rejected.
            <br> We thank you for your interest in our university and wish you the best of luck in your career. <br>
            <p> Thank you for your trust. </p>
            <p> MITPlytechnique </p>
            `
        });
            return rejectLead
         },
    deleteLead: async(_,{_id})=>{
        const deleteLead=await Lead.findOneAndRemove({_id})
        return deleteLead

        },

 }
}