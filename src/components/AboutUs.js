import React from 'react';
import Footer from './Footer'

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <div className="container mx-auto py-10 px-4">
                <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-lg">
                        Welcome to <strong>Tasvir</strong>, your go-to platform for personalized AI-generated images! 
                        Our team is a group of passionate developers, designers, and AI enthusiasts committed to pushing the 
                        boundaries of creativity through cutting-edge technology. At Tasvir, we believe that everyone deserves 
                        access to high-quality, customized visuals that represent their unique personality and style.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg">
                        Our mission is simple: to empower creativity with AI. We aim to provide a platform where users can generate 
                        hyper-realistic headshots and creative portraits, without needing advanced skills in graphic design. We want 
                        to make AI-driven creativity accessible and affordable for everyone, whether you're an individual, a brand, or 
                        an organization.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
                    <ul className="list-disc pl-6 space-y-4">
                        <li>
                            <strong>Innovation:</strong> We continuously push the boundaries of what AI can do, exploring new ways to
                            make creativity effortless and exciting.
                        </li>
                        <li>
                            <strong>Customer-Centricity:</strong> Our users are at the heart of everything we do. We prioritize your
                            needs and feedback to constantly improve our platform.
                        </li>
                        <li>
                            <strong>Inclusivity:</strong> Creativity knows no boundaries. We strive to create an inclusive platform where
                            everyone can express themselves freely.
                        </li>
                        <li>
                            <strong>Transparency:</strong> We value honesty and openness. We aim to build trust with our users by being
                            clear about how we use AI and handle your data.
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                    <p className="text-lg">
                        Tasvir began as a passion project by our founder, <strong>Shahid Khan</strong>, who was fascinated by the potential 
                        of artificial intelligence. From humble beginnings in a home office in London, we have grown into a platform that serves 
                        users worldwide. What started as an experiment in generating artistic images quickly turned into a powerful tool for 
                        personalized content creation, and we haven't looked back since.
                    </p>
                    <p className="mt-4 text-lg">
                        Over the years, we have honed our technology, listened to feedback, and expanded our offerings to meet the needs of a 
                        creative global community. Our journey has been one of constant learning, and we are proud of the platform we have built.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <img src="shahid.jpg" alt="Shahid Khan" className="w-full object-center rounded-md mb-4" />
                            <h3 className="text-xl font-bold">Shahid Khan</h3>
                            <p className="text-gray-600">Founder & CEO</p>
                            <p className="mt-2 text-gray-700">
                                Shahid is the visionary behind Tasvir, with a passion for AI and design. He leads the company with a focus on 
                                innovation and creativity, driven by a mission to make personalized AI images accessible to all.
                            </p>
                        </div>
                        
                    </div>
                </section>

                {/* <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
                    <p className="text-lg">
                        We are always on the lookout for creative and talented individuals who share our vision. If you're interested in 
                        joining our team, check out our <a href="/careers" className="text-blue-600 hover:underline">Careers Page</a> for 
                        the latest opportunities.
                    </p>
                </section> */}

                <section className="text-center">
                    <h2 className="text-3xl font-semibold mb-4">Thank You for Your Support</h2>
                    <p className="text-lg">
                        We are grateful for the continued support of our community and look forward to creating even more amazing things 
                        together. Whether you're a long-time user or just getting started, we're excited to have you with us on this journey.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
