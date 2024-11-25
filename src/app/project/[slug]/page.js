import ImageCollage from '@/components/ImageCollage/ImageCollage';
import Footer from '@/components/Shared/Footer/Footer';
import Header from '@/components/Shared/Header/Header';
import React from 'react';
export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: params?.slug,
    }
}
const page = (props) => {
    const slug = props?.params?.slug
    return (
        <div>
            <Header></Header>
            <ImageCollage slug={slug}></ImageCollage>
            <Footer></Footer>
        </div>
    );
};

export default page;