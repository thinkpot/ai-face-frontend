import React from 'react';
import Footer from './Footer'

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <div className="container mx-auto py-10 px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                    <p>
                        Welcome to Tasvir. Your privacy is important to us, and this Privacy Policy explains how we
                        collect, use, and safeguard your personal information when you use our services. By using our services, 
                        you agree to the collection and use of information as described in this policy. Please read it carefully 
                        to understand how your data is treated.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                    <p>We collect several types of information, including:</p>
                    <ul className="list-disc ml-6">
                        <li>
                            <strong>Personal Identification Information:</strong> This includes your name, email address, contact details,
                            and payment information, which are necessary to create an account, process payments, and provide personalized services.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> We collect information on how you interact with our website, such as IP address, 
                            browser type, pages visited, and time spent on pages. This helps us analyze trends and improve our services.
                        </li>
                        <li>
                            <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to 
                            monitor activity on our website, store user preferences, and deliver personalized content.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                    <p>Your data is used for various purposes, including:</p>
                    <ul className="list-disc ml-6">
                        <li><strong>Service Delivery:</strong> To provide, operate, and maintain our services, including managing your account and processing payments.</li>
                        <li><strong>Personalization:</strong> To customize our services based on your preferences and improve your overall experience.</li>
                        <li><strong>Communication:</strong> To contact you regarding updates, notifications, or changes to our services.</li>
                        <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, or unauthorized access to our systems.</li>
                        <li><strong>Analytics:</strong> To understand user behavior, monitor usage trends, and improve our platform and features.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies and similar tracking technologies to enhance your experience. Cookies are small text files that are 
                        stored on your device when you visit our website. These cookies allow us to recognize your browser and remember 
                        certain information, such as login credentials and user preferences. You can control or disable cookies through 
                        your browser settings, but this may affect your ability to use certain features of our services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
                    <p>
                        We will retain your personal data only for as long as is necessary for the purposes outlined in this Privacy Policy.
                        Once the data is no longer required, we will securely delete or anonymize it. If you wish to delete your account 
                        or request the removal of your data, please contact us at support@tasvir.com.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                    <p>
                        We may use third-party service providers to facilitate our services, such as payment processors (e.g., Razorpay),
                        cloud storage, and analytics providers. These third-party services have access to your personal information
                        only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        Each third-party provider has its own privacy policies, and we recommend reviewing them before using their services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                    <p>
                        We take data security seriously and implement a variety of measures to protect your personal information.
                        These include encryption, secure server environments, and limiting access to your data to authorized personnel only.
                        However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.
                        While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                    <p>
                        Our services are not directed at individuals under the age of 13, and we do not knowingly collect personal 
                        information from children under 13. If we become aware that a child under 13 has provided us with personal data, 
                        we will take steps to remove such information from our records. If you are a parent or guardian and believe that 
                        your child has provided us with personal information, please contact us at support@tasvir.com.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Your Data Rights</h2>
                    <p>
                        You have the right to access, modify, or delete your personal information. You can also withdraw consent to 
                        data processing at any time. If you wish to exercise any of these rights, please contact us at support@tasvir.com. 
                        We will respond to your request within a reasonable timeframe.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
                    <p>
                        Your information may be transferred to, and maintained on, servers located outside of your state, province, country, 
                        or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. If you are 
                        located outside of our primary operating region and choose to provide information to us, please note that we transfer 
                        your data to that region and process it there.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated date at 
                        the top of the policy. We encourage you to review this Privacy Policy periodically for any updates. Your continued use 
                        of our services after the posting of changes constitutes your acceptance of those changes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                        <br />
                        <strong>Email:</strong> tasvir.info.1@gmail.com
                        <br />
                    
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
