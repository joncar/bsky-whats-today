import dotenv from 'dotenv';
import { AtpAgent, BlobRef } from '@atproto/api';
import fs from 'fs/promises';
import { ids } from './lexicons';

async function updateFeed(agent: AtpAgent, feedGenDid: string, recordName: string, displayName: string, description: string, avatar: string) {
  console.log(`${recordName}...`);

  let avatarRef: BlobRef | undefined;
  if (avatar) {
    let encoding: string;
    if (avatar.endsWith('png')) {
      encoding = 'image/png';
    } else if (avatar.endsWith('jpg') || avatar.endsWith('jpeg')) {
      encoding = 'image/jpeg';
    } else {
      throw new Error('expected png or jpeg');
    }
    const img = await fs.readFile(avatar);
    const blobRes = await agent.api.com.atproto.repo.uploadBlob(img, {
      encoding,
    });
    avatarRef = blobRes.data.blob;
  }

  await agent.api.com.atproto.repo.putRecord({
    repo: agent.session?.did ?? '',
    collection: ids.AppBskyFeedGenerator,
    rkey: recordName,
    record: {
      did: feedGenDid,
      displayName: displayName,
      description: description,
      avatar: avatarRef,
      createdAt: new Date().toISOString(),
    },
  });
  
  console.log(`${recordName}: Done!`);
}

const run = async () => {
  dotenv.config()

  const handle = process.env.USER_HANDLE!;
  const password = process.env.USER_PASSWORD!;

  if (!process.env.FEEDGEN_SERVICE_DID && !process.env.FEEDGEN_HOSTNAME) {
    throw new Error('Please provide a hostname in the .env file');
  }
  const feedGenDid =
    process.env.FEEDGEN_SERVICE_DID ?? `did:web:${process.env.FEEDGEN_HOSTNAME}`;

  console.log(`Logging in...`);
  const agent = new AtpAgent({ service: process.env.USER_PDS! });
  await agent.login({ identifier: handle, password });

  await updateFeed(agent, feedGenDid, 'whats-today', 'What Is Today', 'A curated post about today.', 'avatar.png');
  await updateFeed(agent, feedGenDid, 'apa', 'Ask Paul Anything', 'Refresh if you don\'t like the answer!', 'avatar_apa.png');
}

run();