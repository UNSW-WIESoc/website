// @ts-nocheck comment
import { createClient } from 'contentful';

const client = createClient({
  space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
})

// Gets all events data
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

// Gets all exec team data
export async function getExecs() {
  const res = await client
    .getEntires({
      content_type: 'execs'
    })
    .catch((error) => {
      console.error(error);
    });
    return res.items;
}

// Gets all portfolio (director and subcommittee) data
export async function getPortfolio() {
  const res = await client
    .getEntires({
      content_type: 'execs'
    })
    .catch((error) => {
      console.error(error);
    });
    return res.items;
}