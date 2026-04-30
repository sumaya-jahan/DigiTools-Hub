import React, { useEffect, useState } from "react";
import ToolsCard from "./ToolsCard";

const AllTools = ({ cart, setCart }) => {
    const [tools, setTools] = useState([]);
    const [view, setView] = useState("products");

    useEffect(() => {
        fetch("/tools.json")
            .then((res) => res.json())
            .then((data) => setTools(data));
    }, []);

    const addToCart = (tool) => {
        const exists = cart.find((item) => item.id === tool.id);
        if (!exists) {
            setCart([...cart, tool]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <div className="py-12 max-w-6xl mx-auto">

            <div className="text-center">
                <h1 className="text-3xl font-bold">
                    Premium Digital Tools
                </h1>

                <p className="text-gray-500 mt-2 text-sm">
                    Choose from our curated collection of premium digital products.
                </p>

                <div className="mt-4 flex justify-center gap-3">
                    <button
                        onClick={()=>setView("products")}
                        className={`px-4 py-2 rounded-full ${view==="products"
                                ? "bg-purple-600 text-white"
                                : "bg-gray-200"
                            }`}
                    >
                        Products
                    </button>

                    <button
                        onClick={()=>setView("cart")}
                        className={`px-4 py-2 rounded-full ${view==="cart"
                                ? "bg-purple-600 text-white"
                                : "bg-gray-200"
                            }`}
                    >
                        Cart ({cart.length})
                    </button>
                </div>
            </div>

            {view==="products" && (
                <div className="mt-10">
                    <ToolsCard tools={tools} addToCart={addToCart} />
                </div>
            )}

            {/* CART */}
            {view === "cart" && (
                <div className="mt-10 border rounded-xl p-6">
                    {cart.length===0 ? (
                        <p className="text-center text-gray-500">
                            Your cart is empty
                        </p>
                    ) : (
                        <>
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border-b py-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <span>{item.icon}</span>
                                        <p>{item.name}</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span>${item.price}</span>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 text-sm"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={clearCart}
                                className="mt-6 w-full bg-purple-600 text-white py-3 rounded-full"
                            >
                                Proceed to Checkout
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllTools;