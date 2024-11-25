import React from 'react';

const Facts = () => {
    return (
        <section class="container mx-auto">
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-3 lg:gap-7 lg:my-12 my-4 lg:mx-12 mx-4">
                <div class="gallery-item relative">
                    <div class="thumbnail gallery-img-home">
                        <img class="" src="/images/frutitres1.webp" alt="" />
                    </div>
                    <div class="gal-details absolute top-8 left-8 text-white">
                        <h1 class="text-2xl font-semibold">Fruit Trees</h1>
                        <p>All types of fruit trees</p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div class="gallery-item relative">
                    <div class="thumbnail gallery-img-home">
                        <img class="" src="/images/frutitres1.webp" alt="" />
                    </div>
                    <div class="gal-details absolute top-8 left-8 text-white">
                        <h1 class="text-2xl font-semibold">Flowers Trees</h1>
                        <p>All types of flowers trees</p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div class="gallery-item relative">
                    <div class="thumbnail gallery-img-home">
                        <img class="" src="/images/frutitres1.webp" alt="" />
                    </div>
                    <div class="gal-details absolute top-8 left-8 text-white">
                        <h1 class="text-2xl font-semibold">Indoor Plants</h1>
                        <p>All types of indoor plants</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facts;