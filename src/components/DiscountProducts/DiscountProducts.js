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


const DiscountProducts = async () => {
    // const productData = await fetchProducts();
    const productData = []
    return (
        <section className="nursery-products container mx-auto border-b border-t pb-12 mt-20">
            <h2 className="text-3xl font-semibold text-center pt-8">Discount Products</h2>

            <div className="all-nursery-products grid lg:grid-cols-4 grid-cols-1 mt-6 mx-8 gap-3">
                {productData?.slice(8, 16).map(product => (
                    <div key={product?.id} className="single-product p-3 hover:shadow-2xl rounded-lg">
                        <Link href={`/product/${product?.slug}`}>
                            <img src={product?.image} alt={product?.name} />
                        </Link>
                        <div className="single-product-details mt-2">
                            <h5 className="text-sm">{product?.category}</h5>
                            <Link href={`/product/${product?.slug}`}>
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

export default DiscountProducts;
