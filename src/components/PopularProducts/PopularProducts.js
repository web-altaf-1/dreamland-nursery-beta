import React from 'react';

const PopularProducts = () => {
    const productData = [
        {
            id: 1,
            image: 'https://bangladeshagriculturenursery.com/wp-content/uploads/2024/10/coffea-arabica-variegated-2.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 2,
            image: 'https://bangladeshagriculturenursery.com/wp-content/uploads/2024/09/461302026_569302078763297_469327-1.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 3,
            image: 'https://bangladeshagriculturenursery.com/wp-content/uploads/2024/07/Kazi-Peyara-1-800x800.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 4,
            image: 'https://bangladeshagriculturenursery.com/wp-content/uploads/2024/07/Kazi-Peyara-1-800x800.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 5,
            image: 'https://bangladeshagriculturenursery.com/wp-content/uploads/2024/07/Kazi-Peyara-1-800x800.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 6,
            image: 'https://bangladeshagriculturenursery.com/wp-content/uploads/2024/07/Kazi-Peyara-1-800x800.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 7,
            image: 'https://bangladeshagriculturenursery.com/wp-content/uploads/2024/07/Kazi-Peyara-1-800x800.webp',
            category: 'FRUIT TREES',
            name: 'Mammoth Custard Apple',
            originalPrice: 850.00,
            discountedPrice: 800.00,
        },
        {
            id: 8,
            image: 'https://bangladeshagriculturenursery.com/wp-content/uploads/2024/07/Kauka-Wilder-4.webp',
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

export default PopularProducts;