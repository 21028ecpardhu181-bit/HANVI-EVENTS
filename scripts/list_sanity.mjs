import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dgvr6ylk',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function main() {
  const docs = await client.fetch('*[]{_id, _type, title, name, description}');
  console.log(`Total Sanity Documents: ${docs.length}`);
  for (const doc of docs) {
    console.log(`- [${doc._type}] id: ${doc._id}, name/title: ${doc.title || doc.name}`);
  }
}

main();
