import React from 'react';

const QuestionSection = () => {
    return (
        <section className="py-20 bg-gray-100 py-12">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Text Section */}
                    <div className="lg:w-1/2 text-center lg:text-left py-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                            Any questions?
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Do you have a question? Need advice? Personalized support for your
                            project? Please contact us!
                        </p>
                        <a
                            href="/en/contact"
                            className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded shadow hover:bg-blue-700 transition duration-300"
                        >
                            Contact us
                        </a>
                    </div>

                    {/* Right Image Section */}
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <img
                            src="/images/contact.jpg"
                            alt="Contact Us Illustration"
                            className="w-full max-w-md rounded-lg shadow"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuestionSection;
