This repo presents an example of an issue with Next.js.

When a route has default.tsx component defined, and a subroute (a slug in this case) is navigated to, the default component doesn't display styles defined in it's CSS modules file.
Tailwind styles do work however.

## How to reproduce?

1. ```yarn run dev```
2. navigate to http://localhost:3002/someroute - should render fine
3. navigate to http://localhost:3002/someroute/asd - someroute's default child is no longer styled