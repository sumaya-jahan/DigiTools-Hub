import React from "react";

const ToolsCard = ({ tools, addToCart }) => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool) => (
                <div
                    key={tool.id}
                    className="border rounded-xl p-5 shadow-sm"
                >
                    <div className="text-2xl">{tool.icon}</div>

                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 inline-block mt-2">
                        {tool.tag}
                    </span>
                    <h2 className="font-semibold mt-2">
                        {tool.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        {tool.description}
                    </p>
                    <p className="mt-3 font-bold">
                        ${tool.price}
                        <span className="text-sm text-gray-400">
                            /{tool.period}
                        </span>
                    </p>

                    <ul className="text-sm mt-3 space-y-1">
                        {tool.features.map((f, i) => (
                            <li key={i}>✔ {f}</li>
                        ))}
                    </ul>

                    <button
                        onClick={() => addToCart(tool)}
                        className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full"
                    >
                        Buy Now
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ToolsCard;