// @ts-nocheck comment
import { createClient } from 'contentful';

const client = createClient({
  space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
})

export async function getEvents() {
  const res = await client
    .getEntries({
      content_type: 'events'
    })
    .catch((error) => {
      console.error(error);
    });
  return res.items;
}