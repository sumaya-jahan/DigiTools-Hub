import { FaUserPlus,FaCubes,FaRocket } from "react-icons/fa";

const Steps=()=>{
    const steps =[
        {
            id: 1,
            icon:<FaUserPlus />,
            title: "Create Account",
            description:
                "Sign up in a few seconds and get access to premium digital tools for your workflow.",
        },
        {
            id: 2,
            icon:<FaCubes />,
            title: "Choose Products",
            description:
                "Explore our collection and choose the right digital tools for your personal or business needs.",
        },
        {
            id: 3,
            icon:<FaRocket />,
            title: "Start Growing",
            description:
                "Complete your purchase and start improving your productivity with powerful tools.",
        },
    ];

    return (
        <section className="bg-slate-50 py-16 md:py-24">
            <div className="w-11/12 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
                        Start using premium digital tools in a few simple steps and make
                        your workflow faster and smarter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition duration-300"
                        >
                            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-2xl">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;