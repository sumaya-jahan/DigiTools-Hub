import React from 'react';
import bannerImg from '../assets/hero.png';

const Banner = () =>{
    return (
        <div className="bg-gray-50 px-6 md:px-12 py-16">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT */}
                <div>
                    
                    <p className="inline-block bg-purple-100 text-purple-600 text-sm px-4 py-1 rounded-full mb-4">
                        ● New: AI-Powered Tools Available
                    </p>

                    
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                   
                    <p className="text-gray-500 mb-6">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                   
                    <div className="flex gap-4">
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                            Explore Products
                        </button>
                        <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-50 transition">
                            ▶ Watch Demo
                        </button>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="flex justify-center">
                    <img src={bannerImg} alt="banner" />
                </div>

            </div>
        </div>
    );
};

export default Banner;