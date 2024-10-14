import React from 'react';

const Banner = () => {
    return (
        <section class="bg-[#e1e6ef]">
            <div
                class="flex items-center flex-col-reverse lg:flex-row max-w-screen-2xl mx-auto lg:px-20 px-6 py-6 lg:py-10">
                <div class="lg:w-1/2 w-full">
                    <h1 class="lg:text-6xl text-4xl font-bold">Up to 10% off!</h1>
                    <p class="text-2xl mt-3 ">Don't miss out on some very special Fruit Trees at extraordinary sale prices.
                        For a
                        limited time!</p>
                    <button class="bg-[#7B8F36] px-8 py-5 text-white text-xl font-semibold rounded mt-8">Pick up a bargain
                        →</button>
                    <p class="mt-5 ">Dreamland Nursery</p>
                </div>
                <div class="w-1/2">
                    <img class="w-[519px] lg:mb-0 mb-10"
                        src="https://bangladeshagriculturenursery.com/wp-content/uploads/2023/06/fruitree-tree-font-1024x819-1.png"
                        alt="" />
                </div>
            </div>

        </section>
    );
};

export default Banner;