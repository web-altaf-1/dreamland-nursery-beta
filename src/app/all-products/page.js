import DiscountProducts from '@/components/DiscountProducts/DiscountProducts';
import PopularProducts from '@/components/PopularProducts/PopularProducts';
import Header from '@/components/Shared/Header/Header';
import React from 'react';

const page = () => {
    return (
        <div>
            <Header></Header>
            <PopularProducts />
            <DiscountProducts></DiscountProducts>
        </div>
    );
};

export default page;