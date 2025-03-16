import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }) {
    const  { id }  = (await params);
    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
   
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
            return NextResponse.json({ error: 'Product not found' }, { status: response.status });
        }

        const product = await response.json();
        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: `Internal server error: ${error}` }, { status: 500 });
    }
}
