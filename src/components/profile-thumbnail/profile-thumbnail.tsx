import Image from "next/image";
import { User } from "@/types";
import { Button } from "../button";
import Link from "next/link";

type UserThumbnailProps = {
  user: User;
  showFollowButton?: boolean;
};

const ProfileThumbnail = ({
  user,
  showFollowButton = false,
}: UserThumbnailProps) => {
  return (
    <div className="flex items-center">
      <Link className="w-12 h-12 mr-2" href={`profile/${user.id}`}>
        <Image
          className="rounded-full hover:opacity-50"
          alt="avatar"
          src="/avatar.png"
          width={48}
          height={48}
        />
      </Link>
      <div className="flex flex-col min-w-48">
        <Link href={`profile/${user.id}`}>
          <h3 className="hover:underline text-ellipsis overflow-hidden text-clip">{`${user.firstName} ${user.lastName}`}</h3>
        </Link>
        <div className="text-xs text-gray-600">@{user.username}</div>
      </div>
      {showFollowButton && <Button variant="outlined">Follow</Button>}
    </div>
  );
};

export default ProfileThumbnail;
