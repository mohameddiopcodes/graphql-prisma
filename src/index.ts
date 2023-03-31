import { createServer } from "http";
import { createSchema, createYoga } from "graphql-yoga";

import typeDefs from "./schema/typeDefs";
import resolvers from "./schema/resolvers";

import context, { GraphQLContext } from "./schema/context";

const yoga = createYoga({
  schema: createSchema<GraphQLContext>({
    typeDefs,
    resolvers,
  }),
  context,
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info("Server listening on http://localhost:4000/graphql");
});
