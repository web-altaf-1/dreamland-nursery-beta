'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const projects = [
    { id: 1, slug: 'sky-photography', images: ['/images/work/img1.webp'] },
    { id: 2, slug: 'nature', images: ['https://thefinishingtouchco.in/wp-content/uploads/2021/05/PATNI-3-scaled.jpg'] },
    { id: 3, slug: 'project-1', images: ['/images/work/img (7).jpg'] },
    { id: 4, slug: 'project-2', images: ['/images/work/img (1).jpg'] },
    { id: 5, slug: 'project-3', images: ['/images/work/img (6).jpg'] },
    { id: 6, slug: 'project-4', images: ['/images/work/img (8).jpg'] },
    { id: 7, slug: 'project-5', images: ['/images/work/img (14).jpg'] },
    { id: 8, slug: 'project-6', images: ['/images/work/img (12).jpg'] },
];

const OurWork = () => {
    const router = useRouter();

    const handleImageClick = (slug) => {
        router.push(`/project/${slug}`);
    };

    return (
        <section className="container mx-auto py-12">
            <h2 className="text-3xl font-semibold text-center my-5">Our Works</h2>
            <div className="lg:mx-12 mx-3">
                <div className="gallery">
                    {projects.map((project) => (
                        <div key={project.id} onClick={() => handleImageClick(project.slug)} className="cursor-pointer mb-4">
                            <img src={project.images[0]} alt={`Project ${project.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;
