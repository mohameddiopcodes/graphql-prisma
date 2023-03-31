import { QueryResolvers } from "../types";

import users from "./users";
import posts from "./posts";
import comments from "./comments";

const Query: QueryResolvers = {
  users,
  posts,
  comments,
};

export default Query;
