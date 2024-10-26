// src/app/api/products/[slug]/route.js

import { NextResponse } from 'next/server';
import products from '@/products.json'; // Adjust the path if needed

export async function GET(request, { params }) {
    const { slug } = params;

    // Find the product with the matching slug
    const product = products.find((p) => p.slug === `/product/${slug}`);

    if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
}
