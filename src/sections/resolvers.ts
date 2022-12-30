import Section from "./Section"

export const resolvers = {
    Query:{
        getSections: async (_, args)=>{
             const sections = await Section.find({})
             .populate({
                path: "subject",
                model:"Subject",
                populate: { path: 'professor' }
              })
             return sections
        }
    },
    Mutation:{
        addSection: async(_,args)=>{
            const newSection = await new Section ({...args}).save()
            const section = await Section.findOne(newSection._id)
            .populate({
                path: "subject",
                model:"Subject",
                populate: { path: 'professor' }
              })
            return section
        },
        updateSection: async(_,args)=>{
            const updatedSection= await Section.findOneAndUpdate(
                {_id:args._id},
                {$set :{...args}},
                {new:true})
                .populate({
                    path: "subject",
                    model:"Subject",
                    populate: { path: 'professor' }
                  })
            return updatedSection
        },
        deleteSection: async(_,_id)=>{
            const deletedSection = await Section.findOneAndRemove ({_id})
            return deletedSection
        },
    }
}