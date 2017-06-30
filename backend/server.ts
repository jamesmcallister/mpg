import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"
import { graphqlExpress, graphiqlExpress } from "graphql-server-express"
import { schema } from './schema/schema'

const PORT: number = 4000
const server = express()

server.use(cors())

server.listen(PORT, () =>
    console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
)

server.use(
    "/graphql",
    bodyParser.json(),
    cors(),
    graphqlExpress({
        schema
    })
)

server.use(
    "/graphiql",
    cors(),
    graphiqlExpress({
        endpointURL: "/graphql"
    })
)

