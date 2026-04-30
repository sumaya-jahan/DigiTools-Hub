import React from "react";

const Navbar = ({ cartCount }) => {
    return (
        <nav className="navbar bg-white border-b px-6 md:px-12">

            <div className="navbar-start">
                <h1 className="text-2xl font-bold text-purple-600">
                    DigiTools
                </h1>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 text-sm text-gray-600">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-4">

                <div className="relative">
                    <span className="text-xl">🛒</span>

                    {cartCount>0 && (
                        <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div>

                <button className="hidden lg:block text-gray-600 text-sm">
                    Login
                </button>

                <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm">
                    Get Started
                </button>

            </div>
        </nav>
    );
};

export default Navbar;