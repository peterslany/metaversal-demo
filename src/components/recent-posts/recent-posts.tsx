"use client";

import { getRecentPosts } from "@/lib/fetchers";
import { PostExt } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { PostCard } from "../post-card";
import { Spinner } from "../spinner";

type RecentPostsProps = {
  initialData: Array<PostExt>;
  userId?: string;
};

const RecentPosts = ({ initialData, userId }: RecentPostsProps) => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery<Array<PostExt>>({
      queryKey: ["recent-posts", userId],
      queryFn: ({ pageParam }) => getRecentPosts(pageParam as number, userId),
      initialData: { pages: [initialData], pageParams: [0] },
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length > 0 ? allPages.length + 1 : undefined,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div>
      <h1 className="text-2xl my-2 mt-8">Recent</h1>
      <div className="flex flex-col gap-4 mb-4">
        {data.pages.flat().map((post) => (
          <PostCard post={post} key={`recent-${post.id}`} />
        ))}
      </div>
      {isFetchingNextPage ? (
        <Spinner />
      ) : (
        hasNextPage && <p className="h-8"></p>
      )}
      <div ref={ref} />
    </div>
  );
};

export default RecentPosts;
