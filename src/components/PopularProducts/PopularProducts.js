import Link from 'next/link';
import React from 'react';

const PopularProducts = () => {
    const productData = [
        {
            id: 1,
            slug: "/product/test-product",
            image: '/images/products/product1.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 2,
            slug: "/product/test-product",
            image: '/images/products/product1.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 3,
            slug: "/product/test-product",
            image: '/images/products/product1.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 4,
            slug: "/product/test-product",
            image: '/images/products/product1.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 5,
            slug: "/product/test-product",
            image: '/images/products/product1.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 6,
            slug: "/product/test-product",
            image: '/images/products/product1.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 7,
            slug: "/product/test-product",
            image: '/images/products/product1.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 8,
            slug: "/product/test-product",
            image: '/images/products/product1.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
    ];
    return (
        <section class="nursery-products container mx-auto border-b	pb-12">
            <h2 class="text-3xl font-semibold text-center">Popular Products</h2>

            <div class="all-nursery-products grid lg:grid-cols-4 grid-cols-1 mt-6 mx-8">
                {productData?.map(product => (
                    <div key={product?.id} className="cursor-pointer single-product p-3 hover:shadow-2xl rounded-lg ">
                        <Link href={product?.slug}><img src={product?.image} alt={product?.name} /></Link>
                        <div className="single-product-details mt-2">
                            <h5 className="text-sm">{product?.category}</h5>
                            <Link href={product?.slug} >
                                <h2 className="text-lg font-semibold font-inter">{product?.name}</h2>
                            </Link>

                            <span>
                                <del className="text-sm">৳ {product?.originalPrice?.toFixed(2)}</del> ৳ {product?.discountedPrice?.toFixed(2)}
                            </span>
                            <br />
                            <button className="bg-lime-800 text-white px-4 py-2 w-full rounded-md mt-2">Add to Cart</button>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default PopularProducts;