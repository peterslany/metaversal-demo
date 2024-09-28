import { Post, PostExt, User } from "@/types";

const API_URL = "https://dummyjson.com";

const fetchDummyAPI = async <T>(
  endpoint: `/${string}`,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  queryParams?: {},
  options: RequestInit = {}
): Promise<T> => {
  const stringifiedQueryParams = new URLSearchParams(queryParams);
  const response = await fetch(
    `${API_URL}${endpoint}?${stringifiedQueryParams}`,
    {
      ...options,
      headers: {
        ...options.headers,
      },
    }
  );

  if (response.ok) {
    return response.json();
  }
  const error = await response.text();
  throw new Error(`Fetching failed: ${error}`);
};

const getUserById = (id: string): Promise<User> => {
  return fetchDummyAPI<User>(`/users/${id}`);
};

// NOTE: Fetching users one-by-one as there is no clear way to fetch by
//       multiple user ids.
const extendPostsWithUserData = async (
  posts: Array<Post>
): Promise<Array<PostExt>> => {
  const users = await Promise.all(
    posts.map(({ userId }) => getUserById(userId))
  );
  return posts.map((post, index) => ({ ...post, user: users[index] }));
};

const getSuggestedPosts = async () => {
  const data = await fetchDummyAPI<{ posts: Array<Post> }>("/posts", {
    sortBy: "views",
    order: "desc",
    limit: 2,
  });
  return extendPostsWithUserData(data.posts);
};

// NOTE: Picking the users to follow based on their height as there is no
//       data field for post count on User entity
const getTopUsers = async () => {
  const data = await fetchDummyAPI<{ users: Array<User> }>("/users", {
    sortBy: "height",
    order: "desc",
    limit: 4,
  });
  return data.users;
};

const getRecentPosts = async (page: number = 0) => {
  const data = await fetchDummyAPI<{ posts: Array<Post> }>("/posts", {
    limit: 5,
    skip: page * 5,
  });
  return extendPostsWithUserData(data.posts);
};

export { getSuggestedPosts, getTopUsers, getRecentPosts };
