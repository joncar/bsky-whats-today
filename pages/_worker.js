import prngRandom from './random';

const SUN = 0;
const MON = 1;
const TUE = 2;
const WED = 3;
const THU = 4;
const FRI = 5;
const SAT = 6;

const POSTS = [
  {"by":"did:plc:n6heowum43kppktdogz7ht3o","post":"3kbncgsvuc42y","day":MON}, //*are ** I hate Mondays
  {"by":"did:plc:xux2nvj7ctb4ucltdryonjvn","post":"3kbjl3vxrwp26","day":TUE}, //i shoulda saved this for trash Tuesday
  {"by":"did:plc:ahlsm4d5y3sgwk3mmnj3spgg","post":"3kbjiru23fv2n","day":TUE}, //Lemon it's Tuesday
  {"by":"did:plc:w6sokbegnxs4bc2bfdcvsztr","post":"3kbjhzshvlk2p","day":WED}, //trash tuesday was yesterday yall
  {"by":"did:plc:c7ocgtuam5t56eb72y7d4hnu","post":"3kbjorcityp2y","day":WED}, //Happy Wednesday to everyone!💙💙💙💙🌊🌊🌊🌊
  {"by":"did:plc:jwr44rcxxiburi3pqaorbfqy","post":"3kbjpp2qenb2o","day":WED}, //Tomorrow is thursday again!🍰💚💚💚🧡
  {"by":"did:plc:4sqwgqljavegklkuau5caiu4","post":"3kbjplknpgu2y","day":THU}, //Good morning, angels 👋🏻
  {"by":"did:plc:pyjj4izabep7xpxb2f4kahod","post":"3kbjpe7o2c72o","day":THU}, //Good morning everyone
  {"by":"did:plc:faqikui3tp2gjvbncliicd47","post":"3kbjhv6fqdz2r","day":THU}, //it's after 10pm on a Thursday what do you expect
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3kbi4dg5xek2g","day":FRI}, //well at least it's Friday
  {"by":"did:plc:w3kny76pvkomvdg2u5jwwkzl","post":"3kbotraq4ly2r","day":SAT}, //Morning folks, happy Saturday! I hope you have an amazing weekend.
  {"by":"did:plc:4sisaumtbpmsotveogple4vi","post":"3kbotihlh4s2h","day":SAT}, //Morning everyone hope you have a super Saturday
  {"by":"did:plc:ov2uxf5vmrpqzo3mmrtymr3y","post":"3kb3s2dcl4w2p","day":SUN}, //It’s not even 9 AM on a Sunday and I can’t stop thinking about this meme
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getNow() {
  const inLocaleStr = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  return new Date(inLocaleStr);
}

function getPostsFor(date) {
  const day = date.getDay();
  return POSTS.filter(post => post.day == day);
}

function getPostFor(date) {
  const posts = getPostsFor(date);
  if (posts.length == 0) {
    return [];
  }
  if (posts.length == 1) {
    return posts;
  }
  const dateSeed = date.getYear()*10000+date.getMonth()*100+date.getDate();
  const prng = prngRandom(dateSeed);
  return [posts[Math.floor(prng() * posts.length)]];
}

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
      var posts = getPostFor(getNow()).map(post => {
        return { "post": `at://${post.by}/app.bsky.feed.post/${post.post}` };
      });
      return new Response(JSON.stringify({
        "feed": posts
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
