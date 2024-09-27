interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  address: {
    state: string;
    country: string;
  };
  company: {
    department: string;
  };
}

interface Post {
  id: string;
  userId: string;
  body: string;
  tags: Array<string>;
  views: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
}

interface PostExt extends Post {
  user: User;
}

export type { Post, User, PostExt };
