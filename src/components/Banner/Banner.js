'use client'
import React, { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        const images = document.querySelectorAll('.carousel-image');
        let currentImageIndex = 0;

        function showNextImage() {
            // Hide the current image
            images[currentImageIndex].style.opacity = 0;

            // Update the image index and loop back if necessary
            currentImageIndex = (currentImageIndex + 1) % images.length;

            // Show the next image
            images[currentImageIndex].style.opacity = 1;
        }

        // Set the initial image visible
        if (images.length > 0) {
            images[currentImageIndex].style.opacity = 1;
        }

        // Start the interval for image sliding
        const interval = setInterval(showNextImage, 4000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-[#e1e6ef] hero-section">
            {/* Image Slider */}
            <div className="absolute inset-0 image-carousel">
                <div className="slider-overlay"></div>
                <img
                    className="carousel-image absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                    src="/images/work/img (2).jpg"
                    alt="Image 1"
                />
                <img
                    className="carousel-image absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                    src="/images/work/img (5).jpg"
                    alt="Image 2"
                />
                <img
                    className="carousel-image absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                    src="/images/work/img (3).jpg"
                    alt="Image 3"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center flex-col-reverse lg:flex-row max-w-screen-2xl mx-auto lg:px-20 px-6 py-6 lg:py-10">
                <div className="lg:w-1/2 w-full text-center lg:text-left">
                    <h1 className="lg:text-6xl text-4xl font-bold text-white">Up to 10% off!</h1>
                    <p className="text-2xl mt-3 text-white">
                        Don't miss out on some very special Fruit Trees at extraordinary sale prices.
                        For a limited time!
                    </p>
                    <button className="bg-[#7B8F36] px-8 py-5 text-white text-xl font-semibold rounded mt-8">
                        Pick up a bargain →
                    </button>
                    <p className="mt-5 text-white">Dreamland Nursery</p>
                </div>
                {/* <div className="w-1/2">
                    <img
                        className="w-[519px] lg:mb-0 mb-10"
                        src="https://bangladeshagriculturenursery.com/wp-content/uploads/2023/06/fruitree-tree-font-1024x819-1.png"
                        alt="Fruit Tree"
                    />
                </div> */}
            </div>
        </section>
    );
};

export default Banner;
