import Image from "next/image";
import { Button, Card, RecentPosts } from "@/components";
import { getRecentPosts, getUserById } from "@/lib";
import {
  ExclamationTriangleIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

interface ProfilePageParams {
  params: {
    id: string;
  };
}

const ProfileNotFound = ({ id }: { id: string }) => (
  <Card>
    <div className="text-center p-2">
      <ExclamationTriangleIcon />
      <h1 className="text-xl">Error</h1>
      <p>Profile for user with id  &quot;{id}&quot; was not found.</p>
    </div>
  </Card>
);

const ProfilePage = async ({ params }: ProfilePageParams) => {
  const id = params.id;

  if (!id || typeof id !== "string") {
    return <ProfileNotFound id={id} />;
  }

  const user = await getUserById(id);

  if (!user) {
    return <ProfileNotFound id={id} />;
  }

  const recentPosts = await getRecentPosts(0, user.id);

  return (
    <main>
      <div className="bg-background shadow rounded-2xl">
        <div className="w-full h-16 rounded-t-2xl bg-gradient-to-r from-violet-200 to-orange-100"></div>
        <div className="flex flex-col items-center md:items-start md:flex-row relative absolute -top-8 p-4 md:px-8 md:gap-4">
          <div className="shadow p-1 rounded-full bg-white">
            <Image
              className="rounded-full"
              alt="avatar"
              src="/avatar.png"
              width={128}
              height={128}
            />
          </div>
          <div className="p-4 md:pt-8 flex flex-col items-center md:items-start gap-3">
            <h1 className="text-2xl">
              {user.firstName} {user.lastName}
            </h1>
            <div className="text-gray-600 flex gap-2 items-center">
              @{user.username}{" "}
              <div className="flex gap-1">
                <MapPinIcon width={20} />
                {user.address.state}, {user.address.country}
              </div>
            </div>
            <div className="rounded-xl bg-blue-100 text-blue-600 text-md py-1 px-3 font-heading">
              {user.company.department}
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col">
                {/* NOTE: Posts and likes count metrics are randomly set as they 
                          are not available at /user data endpoint. There is no
                          scalable way to fetch them from /posts endpoint - we 
                          would be forced to fetch all the posts of the user and do
                          the calculation on client side.
                */}
                <h2 className="leading-3">{Math.round(Math.random() * 557)}</h2>
                <div className="text-gray-600 text-sm">POSTS</div>
              </div>
              <div className="flex flex-col">
                <h2 className="leading-3">
                  {Math.round(Math.random() * 1337)}
                </h2>
                <div className="text-gray-600 text-sm">LIKES</div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 px-8 -mt-8 gap-4 border-t border-gray-300 flex justify-center md:justify-start items-center">
          <Button variant="filled">Follow</Button>{" "}
          <Button variant="outlined">Message</Button>
        </div>
      </div>
      <RecentPosts initialData={recentPosts} userId={user.id} />
    </main>
  );
};

export default ProfilePage;
