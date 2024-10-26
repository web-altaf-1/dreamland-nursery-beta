import ProductDescription from '@/components/ProductDetails/ProductDescription';
import ProductDetailsAddToCart from '@/components/ProductDetails/ProductDetailsAddToCart';
import ProductDetailsRelatedProduct from '@/components/ProductDetails/ProductDetailsRelatedProduct';
import Footer from '@/components/Shared/Footer/Footer';
import Header from '@/components/Shared/Header/Header';
import React from 'react';

const fetchProductDetails = async (slug) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`, {
        cache: 'no-cache'
    });
    if (!response.ok) {
        throw new Error("Failed to fetch product details");
    }
    return response.json();
};

const page = async ({ params }) => {
    const slug = params?.slug


    const productDetails = await fetchProductDetails(slug);
    return (
        <div>
            <Header></Header>
            <div className='nursery-products container mx-auto border-b	pb-12'>
                <div className='lg:mx-8 mx-1'>
                    <p>Home / Flower Trees / Kauka Wilder</p>
                    <div className='lg:flex flex flex-col lg:flex-row gap-4'>
                        <div className='lg:w-1/2 w-full p-4'>
                            <img src={productDetails?.image} alt="" />
                        </div>
                        <div className='lg:w-1/2 w-full p-4'>
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



                    <ProductDescription></ProductDescription>

                    <ProductDetailsRelatedProduct />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;