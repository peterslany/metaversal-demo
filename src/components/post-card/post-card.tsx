import { PostExt } from "@/types";
import React from "react";
import { Card } from "../card";
import {
  HandThumbUpIcon,
  PaperAirplaneIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { ProfileThumbnail } from "../profile-thumbnail";

type PostCardProps = {
  post: PostExt;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card
      footer={
        <div className="flex gap-4 items-center">
          <div className="flex text-gray-600 gap-1">
            <HandThumbUpIcon className="w-5" />
            {post.reactions.likes}
          </div>
          <div className="flex text-gray-600 gap-1">
            <PaperAirplaneIcon className="w-5" />
            {post.reactions.dislikes}
          </div>
          <div className="flex text-gray-600 gap-1">
            <EyeIcon className="w-5" />
            {post.views}
          </div>
        </div>
      }
    >
      <div>
        <ProfileThumbnail user={post.user} />
        <div className="pl-14 text-gray-600 text-sm">
          {post.body}
          <div className="flex gap-2 mt-2">
            {post.tags.map((tag) => (
              <span className="text-primary" key={tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
