import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
type mpg {
   id: ID!
   miles: Int
   litres: Int
   mpg: Int
}
type Query {
   mpg: [mpg]
}
type Mutation {
  addMpg(miles: Int!, litres: Int): mpg
}
`
export const schema = makeExecutableSchema({ typeDefs, resolvers })
