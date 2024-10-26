import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    const { slug } = params;

    // Fetch the JSON file from the public folder
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
        cache: 'no-cache'
    });

    // Check if the response is okay
    if (!response.ok) {
        return NextResponse.json({ message: 'Failed to fetch data' }, { status: 500 });
    }

    // Parse the JSON data
    const products = await response.json();
    // Find the product by slug
    const product = products?.find((item) => item?.slug === slug);

    if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }
    console.log({ product, altt: 't' });

    return NextResponse.json(product);
}
