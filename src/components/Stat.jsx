import React from "react";

function Stat() {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center">

                <div className="flex-1">
                    <h2 className="text-3xl font-bold">50K+</h2>
                    <p className="text-sm opacity-80 mt-1">Active Users</p>
                </div>

                <div className="hidden md:block w-px h-10 bg-white/40"></div>

                <div className="flex-1 mt-6 md:mt-0">
                    <h2 className="text-3xl font-bold">200+</h2>
                    <p className="text-sm opacity-80 mt-1">Premium Tools</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-white/40"></div>
                <div className="flex-1 mt-6 md:mt-0">
                    <h2 className="text-3xl font-bold">4.9</h2>
                    <p className="text-sm opacity-80 mt-1">Rating</p>
                </div>

            </div>
        </div>
    );
}

export default Stat;