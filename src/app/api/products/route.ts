import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://dummyjson.com/products');

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch products' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data.products);
  } catch (error) {
    return NextResponse.json({ error: `Internal server error: ${error}` }, { status: 500 });
  }
}