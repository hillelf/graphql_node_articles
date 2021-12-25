const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");
const mongoose = require("mongoose");

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphql: true,
    })
);

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.pnmam.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
    .connect(uri, options)
    .then( () => app.listen(3000, console.log("Server is running"))) 
    .catch( error => {
        throw error
    });