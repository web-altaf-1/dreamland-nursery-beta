import DiscountProducts from '@/components/DiscountProducts/DiscountProducts';
import PopularProducts from '@/components/PopularProducts/PopularProducts';
import Footer from '@/components/Shared/Footer/Footer';
import Header from '@/components/Shared/Header/Header';
import React from 'react';

const page = () => {
    return (
        <div>
            <Header></Header>
            <PopularProducts />
            <DiscountProducts></DiscountProducts>
            <Footer></Footer>
        </div>
    );
};

export default page;