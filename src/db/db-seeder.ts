import { seed } from './seed';

async function main() {
  try {
    await seed();
    console.log('Database seeded successfully ✅');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

main();
