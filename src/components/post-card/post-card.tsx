import { User, Post } from "@/app/types";
import React from "react";
import { Card } from "../card";

type PostCardProps = {
  user: User;
  post: Post;
};

const PostCard = ({}: PostCardProps) => {
  return <Card>TODO</Card>;
};

export default PostCard;
