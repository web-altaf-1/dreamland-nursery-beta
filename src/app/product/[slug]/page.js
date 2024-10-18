import ProductDetailsAddToCart from '@/components/ProductDetails/ProductDetailsAddToCart';
import Header from '@/components/Shared/Header/Header';
import React from 'react';

const page = () => {
    const productDetails = {
        id: 142,
        name: "Kauka Wilder",
        photo: "/images/products/product1.webp",
        price: 550,
        description: "Kauka Wilder aka Doctor Wilder, Fire Star, not Solar Flare, not Teresa Wilder, Aussie Dreaming, Oz Tequila Sunrise. #142 1978 3″ pink and orange, grainy and veined with fruity fragrance. An early, easy blooming red streaked with strong yellow, on narrow, pointed petals. Unusually nice spicy fragrance. Strong reddish-yellow with a large bright yellow center, wide moderate red band on back. Petals are narrow and elliptical with pointed tips and slightly overlapping. 3”, strong sweet fragrance.",
        dimensions: {
            height: "1.5′ – 2′",
            nurseryTreeSize: "2.5″"
        },
        sunlight: "Medium Light with mostly indirect light",
        delivery: {
            dhaka: {
                description: "Dhaka Plant Delivery Van",
                price: 100,
                region: "Dhaka City"
            },
            worldwide: {
                description: "NYC Plant Delivery Van",
                price: 100,
                region: "Worldwide",
                currency: "USD"
            }
        },
        availability: {
            stock: 988,
            replacementPolicy: "Replacement Guaranteed",
            replacementDetails: "দুই মাসের মধ্যে আমাদের কোন গাছ মারা গেলে বা কোন ধরনের ক্ষতিগ্রস্ত হলেও রিপ্লেস করে দেওয়া হয়",
        },
        categories: ["Home", "Flower Trees"],
        policies: {
            returnPolicy: "Final Sale Only",
            exchangePolicy: "Return & Exchange Policy"
        },
        features: {
            size: "3″",
            fragrance: "Strong sweet fragrance",
            color: "Strong reddish-yellow with a large bright yellow center",
            petalDetails: "Narrow, elliptical with pointed tips and slightly overlapping",
            extraDetails: "Red streaked with strong yellow"
        },
        reviews: [],
        additionalInfo: "কাঠগোলাপ দেশের ছোট-বড় সবার কাছে পরিচিত ফুল। পাতা আকারে বেশ বড় ও পুরু। শিরা-উপশিরা স্পষ্ট।",
    };

    return (
        <div>
            <Header></Header>
            <div className='nursery-products container mx-auto border-b	pb-12'>
                <div className='mx-8'>
                    <p>Home / Flower Trees / Kauka Wilder</p>
                    <div className='flex gap-4'>
                        <div className='w-1/2 p-4'>
                            <img src={productDetails?.photo} alt="" />
                        </div>
                        <div className='w-1/2 p-4'>
                            <h1 className='text-3xl'>{productDetails?.name} </h1>
                            <h6 className='text-2xl'>৳ {productDetails?.price} </h6>
                            <p className='my-3'>{productDetails?.description}</p>
                            <p>Stands 1.5′ – 2′ tall. Nursery Trees is 2.5″</p>
                            <p>Ready mix soil is completely prepared soil. </p>
                            <p>Local delivery in the Mumbai City area from 100 INR.</p>
                            <p>200 taka service charge will be added if our people lift the soil from 3th to 7th floor.</p>

                            <hr className='my-3' />

                            <p><i class="fa-solid fa-check text-lime-700"></i> 485 in stock</p>

                            <ProductDetailsAddToCart productDetails={productDetails}></ProductDetailsAddToCart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;