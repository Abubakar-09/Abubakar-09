import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: 1,
      name: 'The north coat',
      image: '/shirt.png',
      price: 100,
      originalPrice: 160,
      discount: '-40%',
      imageWidth: 180,
      imageHeight: 180,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti, voluptas dolore, veritatis blanditiis minus esse excepturi deserunt, ipsa ab debitis ratione!`
    },
    {
      id: 2,
      name: 'Gucci duffle bag',
      image: '/purse.png',
      price: 140,
      originalPrice: 160,
      discount: '-40%',
      imageWidth: 180,
      imageHeight: 180,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti, voluptas dolore, veritatis blanditiis minus esse excepturi deserunt, ipsa ab debitis ratione!`
    },
    {
      id: 3,
      name: 'RGB liquid CPU Cooler',
      image: '/speaker.png',
      price: 220,
      originalPrice: 160,
      discount: '-40%',
      imageWidth: 200,
      imageHeight: 180,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti, voluptas dolore, veritatis blanditiis minus esse excepturi deserunt, ipsa ab debitis ratione!`
    },
    {
      id: 4,
      name: 'Small BookSelf',
      image: '/table.png',
      price: 420,
      originalPrice: 160,
      discount: '-40%',
      imageWidth: 250,
      imageHeight: 180,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deleniti, voluptas dolore, veritatis blanditiis minus esse excepturi deserunt, ipsa ab debitis ratione!`
    },
  ];

  return NextResponse.json(products);
}
