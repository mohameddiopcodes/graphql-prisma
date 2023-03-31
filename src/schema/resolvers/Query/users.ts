import { QueryResolvers } from "../types";

const users: QueryResolvers["users"] = async (_, args, ctx, info) => {
  const { pubsub, prisma } = ctx;
  const users = await prisma.user.findMany();
  return users;
};

export default users;
