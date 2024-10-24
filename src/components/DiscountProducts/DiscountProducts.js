import React from 'react';

// Sample product data


const DiscountProducts = () => {
    const productData = [
        {
            id: 1,
            image: '/images/products/9.jpg',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            slug: "/product/test-product",
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 2,
            image: '/images/products/10.jpg',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            slug: "/product/test-product",
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 3,
            image: '/images/products/11.jpg',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            slug: "/product/test-product",
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 4,
            image: '/images/products/12.jpg',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            slug: "/product/test-product",
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 5,
            image: '/images/products/13.jpg',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            slug: "/product/test-product",
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 6,
            image: '/images/products/14.jpg',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            slug: "/product/test-product",
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 7,
            image: '/images/products/15.jpg',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            slug: "/product/test-product",
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 8,
            image: '/images/products/16.jpg',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            slug: "/product/test-product",
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
    ];
    return (
        <section className="nursery-products container mx-auto border-b border-t pb-12 mt-20">
            <h2 className="text-3xl font-semibold text-center pt-8">Discount Products</h2>

            <div className="all-nursery-products grid lg:grid-cols-4 grid-cols-1 mt-6 mx-8 gap-3">
                {productData?.map(product => (
                    <div key={product?.id} className="single-product p-3 hover:shadow-2xl rounded-lg">
                        <img src={product?.image} alt={product?.name} />
                        <div className="single-product-details mt-2">
                            <h5 className="text-sm">{product?.category}</h5>
                            <h2 className="text-lg font-semibold font-inter">{product?.name}</h2>
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
