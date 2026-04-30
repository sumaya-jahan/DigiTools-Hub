import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-white border-b px-6 md:px-12">

            {/* Logo */}
            <div className="navbar-start">
                <h1 className="text-2xl font-bold text-purple-600 cursor-pointer">
                    DigiTools
                </h1>
            </div>

            {/* Navigation Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 text-sm text-gray-600">
                    <li><a className="hover:text-black transition">Products</a></li>
                    <li><a className="hover:text-black transition">Features</a></li>
                    <li><a className="hover:text-black transition">Pricing</a></li>
                    <li><a className="hover:text-black transition">Testimonials</a></li>
                    <li><a className="hover:text-black transition">FAQ</a></li>
                </ul>
            </div>

            {/* Right Side Actions */}
            <div className="navbar-end flex items-center gap-4">

                <span className="hidden lg:block text-gray-600 cursor-pointer">
                    🛒
                </span>

                <button className="hidden lg:block text-gray-600 text-sm hover:text-black transition">
                    Login
                </button>

                <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm hover:bg-purple-700 transition">
                    Get Started
                </button>

            </div>
        </nav>
    );
};

export default Navbar;