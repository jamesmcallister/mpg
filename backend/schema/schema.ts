import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
type mpg {
   id: ID!
   date: String
   miles: String
   litres: String
   totalmpg: String
}
type Query {
   mpg: [mpg]
}
type Mutation {
  addMpg(date: String!, miles: String!, litres: String!, totalmpg: String!): mpg
}
`
export const schema = makeExecutableSchema({ typeDefs, resolvers })
