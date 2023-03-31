import { QueryResolvers } from "../types";

const comments: QueryResolvers["comments"] = async (_, args, ctx, info) => {
  const { prisma } = ctx;
  const comments = await prisma.comment.findMany();
  return comments;
};

export default comments;
