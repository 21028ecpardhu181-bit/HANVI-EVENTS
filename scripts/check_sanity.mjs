import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dgvr6ylk',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function main() {
  try {
    const team = await client.fetch('*[_type == "teamMember"]');
    console.log('Sanity Team Count:', team.length);
    console.log('Sanity Team Data:', JSON.stringify(team, null, 2));
  } catch (err) {
    console.error('Error fetching Sanity:', err);
  }
}

main();
