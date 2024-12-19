import { getPostForNow } from './posts';
import { getAPA } from './apa';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/.well-known/did.json')) {
      return new Response(`{
        "@context": ["https://www.w3.org/ns/did/v1"],
        "id": "did:web:whats-today.sleepylittletown.com",
        "service": [
          {
            "id": "#bsky_fg",
            "type": "BskyFeedGenerator",
            "serviceEndpoint": "https://whats-today.sleepylittletown.com"
          }
        ]
      }`,
      {
        headers: {
          "content-type": "application/json;charset=UTF-8",
        }
      });
    }

    if (url.pathname.startsWith('/xrpc/app.bsky.feed.getFeedSkeleton')) {
      const feed = url.searchParams.get('feed');
      var posts = [];
      if (feed === 'at://did:web:joncaruana.com/app.bsky.feed.generator/whats-today') {
        posts = getPostForNow();
      }
      else if (feed === 'at://did:web:joncaruana.com/app.bsky.feed.generator/apa') {
        posts = getAPA();
      }
      var postsJson = posts.map(post => {
        return { "post": `at://${post.by}/app.bsky.feed.post/${post.post}` };
      });
      return new Response(JSON.stringify({
        "feed": postsJson
      }),
      {
        headers: {
          "content-type": "application/json;charset=UTF-8",
        }
      });
    }

    if (url.pathname.startsWith('/xrpc/') || url.pathname.startsWith('/.well-known/')) {
      return new Response("Not Found", {
        status: 404
      });
    }

    // Otherwise, serve the static assets.
    return env.ASSETS.fetch(request);
  },
}
