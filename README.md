# Implementation notes
Skeletons were not implemented because most of the application content is server-side rendered. Only place where loading state can be seen is at the recent posts feed -- where infinite scroll feature is utilized. 

Requests are automatically cached by Next.js and React Query.

Error states are handled by showing Warning sign and information about unexpected situation.


There are few small changes in comparison with the specification. These are the result of API not exposing all the requested data points. Namely:
- `/users` endpoint does not return any aggregated data about user's post activity: total count of likes and post is therefore not available unless all the user posts were fetched which would not be scalable nor efficient. If this was production situation I would suggest extending API endpoints.
- `/users` endpoint does not allow to fetch multiple users by ids, but since this data is essential for the correct functionality of the app I fetched them one-by-one. Ideally, this would be handled on the back end side by extending the API as well.


## Live demo

This demo is deployed at [metaversal-demo.vercel.app](https://metaversal-demo.vercel.app/).

## How to run this demo.

1. Clone this repository.
2. Install the dependencies using your preferred package manager. I am using pnpm:

```bash
pnpm i
```

3. After the dependencies are installed, you can run the app locally using the `dev` command.

```bash
pnpm dev
```

4. Now the application is running at [port 3000](http://localhost:3000/)