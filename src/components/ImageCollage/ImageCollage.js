import React from 'react';
const imageCategories = [
    {
        slug: "abstract-art",
        images: [
            "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
            "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
            "https://images.unsplash.com/photo-1505178041309-ad46d2e4207b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
        ],
    },
    {
        slug: "nature",
        images: [
            "https://images.unsplash.com/photo-1497114046243-1154db4f4abf?ixlib=rb-4.0.3&auto=format&fit=crop&w=948&q=80",
            "https://images.unsplash.com/photo-1573655349936-de6bed86f839?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=327&q=80",
        ],
    },
    {
        slug: "sky-photography",
        images: [
            "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        ],
    },
    {
        slug: "project-1",
        images: [
            "/images/work/img (1).jpg",
            "/images/work/img (2).jpg",
            "/images/work/img (3).jpg",
            "/images/work/img (4).jpg",
            "/images/work/img (5).jpg",
            "/images/work/img (6).jpg",
            "/images/work/img (7).jpg",
            "/images/work/img (8).jpg",
        ],
    },
    {
        slug: "project-2",
        images: [
            "/images/work/img (8).jpg",
            "/images/work/img (9).jpg",
            "/images/work/img (10).jpg",
            "/images/work/img (11).jpg",
            "/images/work/img (12).jpg",
            "/images/work/img (13).jpg",
            "/images/work/img (14).jpg",
            "/images/work/img (15).jpg",
        ],
    },
    {
        slug: "project-3",
        images: [
            "/images/work/img (8).jpg",
            "/images/work/img (9).jpg",
            "/images/work/img (10).jpg",
            "/images/work/img (11).jpg",
            "/images/work/img (12).jpg",
            "/images/work/img (13).jpg",
            "/images/work/img (14).jpg",
            "/images/work/img (15).jpg",
        ],
    },
    {
        slug: "project-4",
        images: [
            "/images/work/img (8).jpg",
            "/images/work/img (9).jpg",
            "/images/work/img (10).jpg",
            "/images/work/img (11).jpg",
            "/images/work/img (12).jpg",
            "/images/work/img (13).jpg",
            "/images/work/img (14).jpg",
            "/images/work/img (15).jpg",
        ],
    },
    {
        slug: "project-5",
        images: [
            "/images/work/img (8).jpg",
            "/images/work/img (9).jpg",
            "/images/work/img (10).jpg",
            "/images/work/img (11).jpg",
            "/images/work/img (12).jpg",
            "/images/work/img (13).jpg",
            "/images/work/img (14).jpg",
            "/images/work/img (15).jpg",
        ],
    },
    {
        slug: "project-6",
        images: [
            "/images/work/img (8).jpg",
            "/images/work/img (15).jpg",
            "/images/work/img (12).jpg",
            "/images/work/img (11).jpg",
            "/images/work/img (9).jpg",
            "/images/work/img (14).jpg",
            "/images/work/img (10).jpg",
            "/images/work/img (13).jpg",
        ],
    },
];
const ImageCollage = ({ slug }) => {
    const category = imageCategories.find(category => category.slug === slug);
    return (
        <div>
            <section className="gallery">
                {category?.images?.map((url, index) => (
                    <div className="image" key={index}>
                        <img src={url} alt={`image-${index + 1}`} />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ImageCollage;
