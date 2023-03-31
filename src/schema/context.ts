import { PrismaClient } from "@prisma/client";
import { createPubSub } from "graphql-yoga";

const prisma = new PrismaClient();
const pubsub = createPubSub();

export interface GraphQLContext {
  prisma: typeof prisma;
  pubsub: typeof pubsub;
}

export default {
  prisma,
  pubsub,
} as const;
