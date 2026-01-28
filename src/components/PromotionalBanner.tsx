import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const PromotionalBanner = () => {
    return (
        <section className="w-full py-16">
            <div
                className="w-full h-[450px] relative bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage: `url('/premium_luxury_boxes_banner.png')`
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        Elevate Your Brand with Premium Custom Packaging
                    </h2>
                    <p className="text-xl text-gray-200 max-w-2xl font-light">
                        High-quality materials, sustainable options, and fast turnaround.
                    </p>
                    <a
                        href="#quote"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                    >
                        Get Started <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};
