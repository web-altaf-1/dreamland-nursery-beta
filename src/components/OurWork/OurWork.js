import React from 'react';

const OurWork = () => {
    return (
        <section class="container mx-auto py-12">
            <h2 class="text-3xl font-semibold text-center my-5">Our Works</h2>
            <div className="lg:mx-12 mx-3">
                <div className='grid grid-cols-3 gap-5'>
                    <img src="/images/work/img1.webp" alt="" />
                    <img src="/images/work/img2.webp" alt="" />
                    <img src="/images/work/img3.webp" alt="" />
                    <img src="/images/work/img1.webp" alt="" />
                    <img src="/images/work/img2.webp" alt="" />
                    <img src="/images/work/img3.webp" alt="" />
                </div>
            </div>
        </section>
    );
};

export default OurWork;