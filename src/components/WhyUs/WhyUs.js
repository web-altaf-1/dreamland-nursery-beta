import React from 'react';

const WhyUs = () => {
    return (
        <section class="container mx-auto py-12">
            <h2 class="text-3xl font-semibold text-center">Why Us ?</h2>
            <div className="lg:mx-12 mx-3">
                <h3 className='text-5xl font-semibold my-5'>Plant Care, The Finishing Touch Way!</h3>
                <p className='text-xl'>Why must you believe us as the best landscape consultant</p>

                <p className='mt-5'>We aim to add a touch of green to your living spaces. The Finishing Touch offers an array of striking garden accessories and landscaping solutions for your home which are not only aesthetically appealing but add value to your properties! The Finishing Touch have a team of best landscape architect which makes us one of the leading Landscape consultant in Kolkata. We believe in our work, we believe in our team.</p>

            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-10 lg:mx-12 mx-3 my-12' >
                <div className='flex flex-col items-center justify-end'>
                    <img src="/images/why/img1.webp" alt="" />
                    <p className='text-center text-xl font-semibold'>Customized Designs </p>
                </div>
                <div className='flex flex-col items-center justify-end'>
                    <img src="/images/why/img2.webp" alt="" />
                    <p className='text-center text-xl font-semibold'>One Stop Shop </p>
                </div>
                <div className='flex flex-col items-center justify-end'>
                    <img src="/images/why/img3.webp" alt="" />
                    <p className='text-center text-xl font-semibold'>Durable Upkeep Techniques</p>
                </div>
                <div className='flex flex-col items-center justify-end'>
                    <img src="/images/why/img4.webp" alt="" />
                    <p className='text-center text-xl font-semibold'>Durable Upkeep Techniques</p>
                </div>
                <div className='flex flex-col items-center justify-end'>
                    <img src="/images/why/img5.webp" alt="" />
                    <p className='text-center text-xl font-semibold'>Durable Upkeep Techniques</p>
                </div>
                <div className='flex flex-col items-center justify-end'>
                    <img src="/images/why/img6.webp" alt="" />
                    <p className='text-center text-xl font-semibold'>Durable Upkeep Techniques</p>
                </div>

            </div>
        </section>
    );
};

export default WhyUs;