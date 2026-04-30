import React from "react";

const plans=[
    {
        name:"Starter",
        price:"$0",
        period: "Month",
        description: "A simple way to get going",
        button: "Start for Free",
        highlight: false,
        features: [
            "Access to 10 free tools",
            "Basic templates to try things out",
            "Help from the community",
            "1 project per month",
        ],
    },
    {
        name:"Pro",
        price:"$29",
        period:"Month",
        description: "For people who want to move faster",
        button: "Try Pro",
        highlight: true,
        badge: "Most Popular",
        features: [
            "Full access to premium tools",
            "All templates unlocked",
            "Priority support when you need it",
            "Unlimited projects",
            "Cloud sync across devices",
            "Deeper insights & analytics",
        ],
    },
    {
        name: "Enterprise",
        price: "$99",
        period: "Month",
        description: "Built for teams that ship together",
        button: "Talk to Sales",
        highlight: false,
        features: [
            "Everything in Pro, plus more",
            "Team collaboration tools",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding for your team",
        ],
    },
];

const Pricing =()=>{
    return(
        <section className="py-16 px-6 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Simple pricing that just makes sense</h2>
                <p className="text-gray-500 mt-2">
                    Pick what works for you — and change anytime as you grow.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`rounded-2xl p-6 border shadow-sm flex flex-col ${plan.highlight
                                ? "bg-gradient-to-b from-purple-600 to-purple-800 text-white scale-105"
                                : "bg-white"
                            }`}
                    >
                        {plan.badge && (
                            <span className="text-xs bg-yellow-300 text-black px-3 py-1 rounded-full w-fit mb-3">
                                {plan.badge}
                            </span>
                        )}

                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                        <p className="text-sm opacity-80">{plan.description}</p>

                        <div className="my-6">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <span className="text-sm">/{plan.period}</span>
                        </div>

                        <ul className="space-y-2 mb-6 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                    <span>✔</span> {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`w-full py-2 rounded-lg font-medium transition ${plan.highlight
                                    ? "bg-white text-purple-700 hover:bg-gray-100"
                                    : "bg-purple-600 text-white hover:bg-purple-700"
                                }`}
                        >
                            {plan.button}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;