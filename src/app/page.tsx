import { Card, PostCard, ProfileThumbnail, RecentPosts } from "@/components";
import { getRecentPosts, getSuggestedPosts, getTopUsers } from "@/lib";

const HomePage = async () => {
  const suggestedPosts = await getSuggestedPosts();
  const topUsers = await getTopUsers();
  const recentPosts = await getRecentPosts();
  return (
      <main>
        <h1 className="text-2xl my-2">Suggested Posts</h1>
        <div className="flex flex-col gap-4">
          {suggestedPosts.map((post) => (
            <PostCard post={post} key={`suggested-${post.id}`} />
          ))}
        </div>
        <h1 className="text-2xl my-2 mt-8">Who to Follow</h1>
        <div className="flex flex-row flex-wrap gap-4 align-center justify-center">
          {topUsers.map((user) => (
            <Card key={user.id}>
              <ProfileThumbnail user={user} showFollowButton />
            </Card>
          ))}
        </div>
        <RecentPosts initialData={recentPosts} />
      </main>
  );
};

export default HomePage;
