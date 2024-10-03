import React, { useState } from 'react';
import Footer from './Footer'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <div className="container mx-auto py-10 px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p>
                        We would love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is 
                        ready to answer all your questions. Feel free to reach out to us through the contact details below, or simply fill out 
                        the contact form.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
                    <div className="space-y-4">
                        <p>
                            <strong>Email:</strong> tasvir.info.1@gmail.com
                        </p>
                        <p>
                            <strong>Phone:</strong> +918800311305
                        </p>
                        <p>
                            <strong>Address:</strong> Tasvir, A-72, Vijay Vihar, Rohini, New Delhi, India
                        </p>
                        <p>
                            <strong>Support Hours:</strong> Monday to Friday, 9:00 AM - 7:00 PM (IST)
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
                    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                rows="5"
                                placeholder="Type your message here..."
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
                    <p>
                        Before you reach out, you can check out our <a href="/faqs" className="text-blue-600 hover:underline">Frequently Asked Questions (FAQs)</a> 
                        section, where we address the most common queries about our services and policies.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
        
    );
};

export default ContactUs;
