import { Card, PostCard, ProfileThumbnail } from "@/components";
import { getSuggestedPosts, getTopUsers } from "@/lib/fetchers";


export default async function Home() {
  const suggestedPosts = await getSuggestedPosts();
  const topUsers = await getTopUsers();

  return (
    <div className="flex flex-col items-center">
      <main className="max-w-3xl p-4 ">
        <h1 className="text-2xl my-2">Suggested Posts</h1>
        <div className="flex flex-col gap-2">
          {suggestedPosts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
        <h1 className="text-2xl my-2">Who to Follow</h1>
        <div className="flex flex-row flex-wrap gap-2 align-center justify-center">
          {topUsers.map((user) => (
            <Card key={user.id}>
              <ProfileThumbnail user={user} showFollowButton/>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
