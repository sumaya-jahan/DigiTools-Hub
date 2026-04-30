import React from "react";
import { FaFacebookF,FaGithub,FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            {/* Top CTA Section */}
            <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white text-center py-16 px-6">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Ready to simplify your workflow?
                </h2>

                <p className="text-sm md:text-base mb-6 text-gray-200 max-w-2xl mx-auto">
                    Thousands of creators and teams already rely on DigiTools to get more
                    done in less time. Give it a try and see the difference for yourself.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <button className="bg-white text-purple-700 font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition">
                        Explore Products
                    </button>

                    <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-700 transition">
                        View Pricing
                    </button>
                </div>

                <p className="text-xs mt-4 text-gray-300">
                    Free for 14 days • No card needed • Cancel anytime
                </p>
            </section>

            <footer className="bg-[#0b1220] text-gray-300 pt-12 pb-6 px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">

                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-4">DigiTools</h2>
                        <p className="text-sm leading-6">
                            Tools that help you work faster and smarter. Built for developers,
                            designers, and modern teams who want simple, effective solutions.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Templates</a></li>
                            <li><a href="#" className="hover:text-white">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Docs</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Community</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">

                    <p className="text-sm text-gray-400">
                        © 2026 DigiTools. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                            <FaGithub size={14} />
                        </a>
                        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
                            <FaTwitter size={14} />
                        </a>
                    </div>

                   
                    <div className="flex gap-4 text-sm text-gray-400">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;