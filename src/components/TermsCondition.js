import React from 'react';
import Footer from './Footer'

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <div className="container mx-auto py-10 px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                    <p>
                        Welcome to Tasvir! These Terms and Conditions outline the rules and regulations for the use of our website 
                        and services. By accessing or using Tasvir, you agree to be bound by these terms. If you do not agree with 
                        any part of these terms, please do not use our services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                    <p>
                        By using our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. 
                        This agreement is legally binding between you and Tasvir. We may update these terms at any time, and continued use 
                        of the services after such changes will constitute your acceptance of the updated terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">User Obligations</h2>
                    <p>As a user of Tasvir, you agree to the following obligations:</p>
                    <ul className="list-disc ml-6">
                        <li>You must provide accurate and up-to-date personal information when registering an account.</li>
                        <li>You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.</li>
                        <li>You agree not to use the service for any illegal or unauthorized purposes.</li>
                        <li>You agree not to modify, adapt, hack, or reverse engineer any part of the service.</li>
                        <li>You will not use the service to upload or transmit any harmful content, including viruses, malware, or offensive material.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                    <p>
                        All content and materials provided on Tasvir, including but not limited to text, images, graphics, logos, and software, 
                        are the intellectual property of Tasvir or its licensors. You agree not to copy, distribute, modify, or create derivative 
                        works from any content without our explicit permission. Unauthorized use of our intellectual property is strictly prohibited.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Account Termination</h2>
                    <p>
                        Tasvir reserves the right to terminate or suspend your account at any time for violating these Terms and Conditions 
                        or for any other reason deemed appropriate. If your account is terminated, you may lose access to your account data 
                        and any associated services. You may terminate your account at any time by contacting us at support@tasvir.com.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Payments and Refunds</h2>
                    <p>
                        By using our paid services, you agree to the pricing and payment terms detailed on our platform. Payments are processed 
                        through third-party providers, and you are responsible for reviewing their terms before completing a transaction. 
                        All fees are non-refundable unless otherwise specified. We reserve the right to change our pricing at any time, 
                        but such changes will not affect any ongoing services for which you have already paid.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                    <p>
                        Tasvir will not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising 
                        from your use of the service. This includes any loss of data, revenue, profits, or business opportunities resulting 
                        from service interruptions, errors, or unauthorized access to your account. We provide our services "as is" 
                        without warranties of any kind, either express or implied.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites or services that are not owned or controlled by Tasvir. 
                        We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party 
                        websites. You acknowledge and agree that Tasvir shall not be liable for any damages or losses caused by the use 
                        of third-party services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
                    <p>
                        You agree to indemnify and hold harmless Tasvir, its officers, directors, employees, and affiliates from any claims, 
                        damages, losses, liabilities, and expenses arising from your violation of these Terms and Conditions or your 
                        use of our services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                    <p>
                        We reserve the right to modify or replace these Terms and Conditions at any time. If a revision is material, we will 
                        provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be 
                        determined at our sole discretion. By continuing to use our services after those changes become effective, you agree 
                        to be bound by the revised terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                    <p>
                        These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Kingdom, 
                        without regard to its conflict of law provisions. Any legal disputes arising from these terms will be subject 
                        to the exclusive jurisdiction of the courts of London.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p>
                        If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
                        <br />
                        <strong>Email:</strong> tasvir.info.1@gmail.com
                        
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
