import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const products = [
    {
      name: "Slim Leather Wallet",
      description: "Full grain leather bifold wallet with 6 card slots.",
      price: 4999,
      imageUrl: "https://picsum.photos/seed/wallet/400/400",
      inventory: 50,
    },
    {
      name: "Canvas Tote Bag",
      description: "Heavyweight canvas tote, perfect for everyday carry.",
      price: 3499,
      imageUrl: "https://picsum.photos/seed/tote/400/400",
      inventory: 30,
    },
    {
      name: "Wool Beanie",
      description: "Soft merino wool beanie, one size fits all.",
      price: 2499,
      imageUrl: "https://picsum.photos/seed/beanie/400/400",
      inventory: 5,
    },
    {
      name: "Classic Sunglasses",
      description: "Polarized lenses with acetate frames.",
      price: 7999,
      imageUrl: "https://picsum.photos/seed/sunglasses/400/400",
      inventory: 20,
    },
    {
      name: "Minimalist Watch",
      description: "36mm case, sapphire glass, leather strap.",
      price: 14999,
      imageUrl: "https://picsum.photos/seed/watch/400/400",
      inventory: 15,
    },
    {
      name: "Leather Cardholder",
      description: "Slim front pocket cardholder, holds up to 4 cards.",
      price: 2999,
      imageUrl: "https://picsum.photos/seed/cardholder/400/400",
      inventory: 40,
    },
    {
      name: "Ceramic Pour-Over Set",
      description: "Handthrown ceramic dripper with matching carafe.",
      price: 5499,
      imageUrl: "https://picsum.photos/seed/pourover/400/400",
      inventory: 18,
    },
    {
      name: "Linen Desk Mat",
      description: "Natural linen surface, non-slip base, 60x30cm.",
      price: 3999,
      imageUrl: "https://picsum.photos/seed/deskmat/400/400",
      inventory: 25,
    },
    {
      name: "Brass Keychain",
      description: "Solid brass quick-release keychain, ages beautifully.",
      price: 1999,
      imageUrl: "https://picsum.photos/seed/keychain/400/400",
      inventory: 60,
    },
    {
      name: "Stainless Travel Mug",
      description: "12oz double-wall insulated, leak-proof lid.",
      price: 3299,
      imageUrl: "https://picsum.photos/seed/travelmug/400/400",
      inventory: 0,
    },
    {
      name: "Notebook — Dot Grid",
      description: "A5 hardcover, 160 pages, thread-sewn binding.",
      price: 1899,
      imageUrl: "https://picsum.photos/seed/notebook/400/400",
      inventory: 75,
    },
    {
      name: "Waxed Canvas Backpack",
      description: "20L capacity, roll-top closure, waxed canvas shell.",
      price: 11999,
      imageUrl: "https://picsum.photos/seed/backpack/400/400",
      inventory: 8,
    },
  ];

  const result = await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });

  console.log(`Inserted ${result.count} products`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
