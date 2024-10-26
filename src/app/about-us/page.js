import Footer from '@/components/Shared/Footer/Footer';
import Header from '@/components/Shared/Header/Header';
import React from 'react';

const page = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-44'>
                <p className='text-center mt-10 text-red-500'>This is dreamland nursery.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;