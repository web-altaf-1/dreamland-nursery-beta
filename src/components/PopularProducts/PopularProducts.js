import Link from 'next/link';
import React from 'react';

const fetchProducts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
        cache: 'no-cache'
    });
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
};

const PopularProducts = async () => {
    const productData = await fetchProducts();

    return (
        <section class="nursery-products container mx-auto border-b	pb-12">
            <h2 class="text-3xl font-semibold text-center">Popular Products</h2>

            <div class="all-nursery-products grid lg:grid-cols-4 grid-cols-1 mt-6 mx-8">
                {productData?.slice(0, 8).map(product => (
                    <div key={product?.id} className="cursor-pointer single-product p-3 hover:shadow-2xl rounded-lg ">
                        <Link href={`/product/${product?.slug}`}><img src={product?.image} alt={product?.name} /></Link>
                        <div className="single-product-details mt-2">
                            <h5 className="text-sm">{product?.category}</h5>
                            <Link href={`/product/${product?.slug}`} >
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