import { QueryResolvers } from "../types";

const posts: QueryResolvers["posts"] = async (_, args, ctx, info) => {
  const { prisma } = ctx;
  const posts = await prisma.post.findMany();
  return posts;
};

export default posts;
