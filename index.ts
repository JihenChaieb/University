require('./connectDB')

import{ ApolloServer, gql } from "apollo-server";
import { environment} from "./src/environment";
import users from './src/users'
import sections from './src/sections'
import classes from './src/classes'
import subjects from './src/subjects'
import specialties from './src/specialties'
import news from './src/news'
import programs from './src/programs'
import leads from './src/lead'
import events from './src/events'
import sessions from './src/sessions'
import emails from './src/emails'

require("dotenv").config();

const typeDef = gql`
type Query
type Mutation
`;

const server = new ApolloServer ({
    typeDefs:[
      typeDef,
      users.typeDef,
      sections.typeDef,
      classes.typeDef,
      subjects.typeDef,
      specialties.typeDef,
      news.typeDef,
      programs.typeDef,
      leads.typeDef,
      events.typeDef,
      sessions.typeDef,
      emails.typeDef,
 
     

    ],
    resolvers:[
        users.resolvers,
        sections.resolvers,
        classes.resolvers,
        subjects.resolvers,
        specialties.resolvers,
        news.resolvers,
        programs.resolvers,
        leads.resolvers,
        events.resolvers,
        sessions.resolvers,
        emails.resolvers,
     
    ],
    introspection: true,
    playground: true,
});
 
server.listen(environment.port).then (({url})=> {
    console.log(` Server ready at ${url}`);
});

