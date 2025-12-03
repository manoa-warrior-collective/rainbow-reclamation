import { PrismaClient, Role, Condition, Status, Category, Building } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding the database');
  const password = await hash('changeme', 10);
  config.defaultAccounts.forEach(async (account) => {
    const role = (account.role as Role) || Role.USER;
    console.log(`  Creating user: ${account.email} with role: ${role}`);
    await prisma.user.upsert({
      where: { email: account.email },
      update: {},
      create: {
        email: account.email,
        password,
        role,
      },
    });
    // console.log(` Created user: ${user.email} with role: ${user.role}`);
  });
  for (const data of config.defaultData) {
    const condition = (data.condition as Condition) || Condition.good;
    console.log(`  Adding stuff: ${JSON.stringify(data)}`);
    // eslint-disable-next-line no-await-in-loop
    await prisma.stuff.upsert({
      where: { id: config.defaultData.indexOf(data) + 1 },
      update: {},
      create: {
        name: data.name,
        quantity: data.quantity,
        owner: data.owner,
        condition,
      },
    });
  }

  // Seed lost and found items
  const lostFoundItems = [
    {
      name: 'Black Backpack',
      description: 'Black JanSport backpack with laptop compartment',
      category: Category.ACCESSORIES,
      status: Status.FOUND,
      building: Building.CAMPUS_CENTER,
      location: 'Near the food court',
      date: new Date('2025-11-28'),
      contactInfo: 'john@hawaii.edu',
      reportedBy: 'John Doe',
      bountyStatus: false,
    },
    {
      name: 'iPhone 13',
      description: 'Blue iPhone 13 in a clear case',
      category: Category.ELECTRONICS,
      status: Status.LOST,
      building: Building.BIL,
      location: 'Room 205',
      date: new Date('2025-11-30'),
      contactInfo: 'jane@hawaii.edu',
      reportedBy: 'Jane Smith',
      bountyStatus: true,
      bountyReward: 50.0,
    },
    {
      name: 'Calculator',
      description: 'TI-84 Plus graphing calculator',
      category: Category.ELECTRONICS,
      status: Status.FOUND,
      building: Building.KELL,
      location: 'Math lab',
      date: new Date('2025-12-01'),
      contactInfo: 'admin@hawaii.edu',
      reportedBy: 'Admin Staff',
      bountyStatus: false,
    },
  ];

  for (let i = 0; i < lostFoundItems.length; i++) {
    console.log(`  Adding lost/found item: ${lostFoundItems[i].name}`);
    // eslint-disable-next-line no-await-in-loop
    await prisma.item.upsert({
      where: { id: i + 1 },
      update: {},
      create: lostFoundItems[i],
    });
  }
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
