// src/app/api/products/route.js

import { NextResponse } from 'next/server';
import products from '@/products.json'; // Adjust path if needed

export async function GET() {
    return NextResponse.json(products);
}
