import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
import React from "react";

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
            <div className="bg-gray-50 min-h-screen py-10">
                <div className="container mx-auto px-4">
                    {/* Header Section */}
                    <h1 className="text-4xl font-bold text-center text-dark mb-6">
                        Contact Us
                    </h1>
                    <p className="text-gray-700 text-lg text-center mb-10">
                        We'd love to hear from you! Feel free to reach out to us with any questions or concerns.
                    </p>

                    {/* Contact Information Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Address */}
                        <div className="flex items-start bg-white shadow-md rounded-lg p-6">
                            <i className="fas fa-map-marker-alt text-green-500 text-3xl mr-4"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Our Location
                                </h3>
                                <p className="text-gray-700">
                                    123 Dreamland Avenue, Green City, Wonderland 4567
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start bg-white shadow-md rounded-lg p-6">
                            <i className="fas fa-phone-alt text-green-500 text-3xl mr-4"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Call Us
                                </h3>
                                <p className="text-gray-700">
                                    +1 234 567 8900
                                </p>
                                <p className="text-gray-700">
                                    Mon - Fri: 8:00 AM - 5:00 PM
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start bg-white shadow-md rounded-lg p-6">
                            <i className="fas fa-envelope text-green-500 text-3xl mr-4"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Email Us
                                </h3>
                                <p className="text-gray-700">
                                    contact@dreamlandnursery.com
                                </p>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="flex items-start bg-white shadow-md rounded-lg p-6">
                            <i className="fas fa-clock text-green-500 text-3xl mr-4"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Working Hours
                                </h3>
                                <p className="text-gray-700">
                                    Mon - Fri: 8:00 AM - 5:00 PM
                                </p>
                                <p className="text-gray-700">
                                    Sat: 9:00 AM - 2:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                        <h2 className="text-3xl font-bold text-dark mb-6 text-center">
                            Send Us a Message
                        </h2>
                        <form className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-green-300 focus:border-green-400"
                                    placeholder="Your Name"
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-green-300 focus:border-green-400"
                                    placeholder="Your Email"
                                />
                            </div>
                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-green-300 focus:border-green-400"
                                    placeholder="Subject"
                                />
                            </div>
                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-green-300 focus:border-green-400"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white py-3 px-6 rounded-lg shadow hover:bg-green-700 transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default ContactUs;
