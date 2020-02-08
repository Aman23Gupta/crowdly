import express from 'express';
import { ApolloServer } from "apollo-server-express";
import graphqlHTTP from 'express-graphql';
//import bodyParser from 'body-parser';
//import { createServer } from 'http';
import dbConfig from "./config/db";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import constants from './config/constants';
import mocks from './mocks';
const app = express();

dbConfig();
//app.use(bodyParser.json());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
app.use(constants.GRAPHQL_PATH, graphqlHTTP({
    server,
    rootValue: global,
    graphiql: true,
}));

//const graphQLServer = createServer(app);
mocks().then(() => {
  app.listen(constants.PORT, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`App running on port: ${constants.PORT}`);
    }
  });
});