import Footer from '@/components/Shared/Footer/Footer';
import Header from '@/components/Shared/Header/Header';
import React from 'react';

const page = () => {
    return (
        <div>
            <Header></Header>
            <div className="bg-gray-50 min-h-screen py-10">
                <div className="container mx-auto px-4">
                    {/* Header Section */}
                    <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
                        About Us
                    </h1>
                    <div className="bg-white shadow-md rounded-lg p-6 mb-10">
                        <p className="text-gray-700 text-lg mb-4">
                            Welcome to <span className="font-semibold text-green-500">Dreamland Nursery</span>,
                            where we believe every child deserves a nurturing and stimulating environment to
                            grow and thrive. Our mission is to provide a safe, creative, and joyful space
                            for young learners, fostering their curiosity and creativity at every step of their journey.
                        </p>
                        <p className="text-gray-700 text-lg">
                            Our dedicated team of educators and caregivers are passionate about helping children
                            discover their unique potential through a balanced curriculum, hands-on activities,
                            and social interactions. At Dreamland Nursery, we’re not just shaping minds—we’re
                            building futures.
                        </p>
                    </div>

                    {/* Our Core Values Section */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
                            Our Core Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Value 1 */}
                            <div className="bg-white shadow-md rounded-lg p-6 text-center">
                                <i className="fas fa-heart text-green-500 text-4xl mb-4"></i>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Love & Care
                                </h3>
                                <p className="text-gray-700">
                                    We provide a warm and loving environment where every child feels valued and cherished.
                                </p>
                            </div>
                            {/* Value 2 */}
                            <div className="bg-white shadow-md rounded-lg p-6 text-center">
                                <i className="fas fa-chalkboard-teacher text-green-500 text-4xl mb-4"></i>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Excellence in Education
                                </h3>
                                <p className="text-gray-700">
                                    Our curriculum is designed to ignite curiosity and foster a lifelong love for learning.
                                </p>
                            </div>
                            {/* Value 3 */}
                            <div className="bg-white shadow-md rounded-lg p-6 text-center">
                                <i className="fas fa-seedling text-green-500 text-4xl mb-4"></i>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Growth & Creativity
                                </h3>
                                <p className="text-gray-700">
                                    We focus on holistic growth, nurturing each child’s creative, physical, and emotional well-being.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
                            Why Choose Us
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Point 1 */}
                            <div className="flex items-start bg-white shadow-md rounded-lg p-6">
                                <i className="fas fa-smile text-green-500 text-3xl mr-4"></i>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        Nurturing Environment
                                    </h3>
                                    <p className="text-gray-700">
                                        We create a caring atmosphere where children feel secure and confident to explore.
                                    </p>
                                </div>
                            </div>
                            {/* Point 2 */}
                            <div className="flex items-start bg-white shadow-md rounded-lg p-6">
                                <i className="fas fa-user-friends text-green-500 text-3xl mr-4"></i>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        Experienced Staff
                                    </h3>
                                    <p className="text-gray-700">
                                        Our skilled educators are committed to helping each child reach their fullest potential.
                                    </p>
                                </div>
                            </div>
                            {/* Point 3 */}
                            <div className="flex items-start bg-white shadow-md rounded-lg p-6">
                                <i className="fas fa-leaf text-green-500 text-3xl mr-4"></i>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        Hands-On Learning
                                    </h3>
                                    <p className="text-gray-700">
                                        Engaging activities and interactive experiences that make learning fun and meaningful.
                                    </p>
                                </div>
                            </div>
                            {/* Point 4 */}
                            <div className="flex items-start bg-white shadow-md rounded-lg p-6">
                                <i className="fas fa-book-open text-green-500 text-3xl mr-4"></i>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        Comprehensive Curriculum
                                    </h3>
                                    <p className="text-gray-700">
                                        A balanced mix of academics, play, and creativity for holistic development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Join Us Section */}
                    <div className="bg-green-100 shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-3xl font-bold text-green-600 mb-4">
                            Join the Dreamland Family
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Give your child the best start in life with Dreamland Nursery. Contact us today to learn more
                            about our programs and schedule a visit!
                        </p>
                        <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;