import prngRandom from './random.js';

const POSTS = [
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjh32bkts2b"}, // concerning
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjh224ebk2b"}, // oh yeah that's a bug
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjgyy2jbk2b"}, // looking into it
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjgyk6bhc2b"}, // big same
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjgygwzqk2b"}, // same
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjgxrznt22b"}, // everything is better with cheese
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjguqkt3k2b"}, // The reactor core can't handle that level of pressure, pal
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjgtp5n7s2b"}, // Have you considered the alternatives? This seems really risky
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjgs4cgvs2b"}, // I'm not sure the science is there on that
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjgrf2k7s2b"}, // Only on Wednesdays, if you're lucky
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjgqujng22b"}, // No
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjgqmlim22b"}, // Yes
  //{"by":"","post":"","day":}, //
];

export default POSTS;

function getAPA() {
    const prng = prngRandom(Date.now());
    return [POSTS[Math.floor(prng() * POSTS.length)]];
}
