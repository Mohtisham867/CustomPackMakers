import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

// Specific images - Using those from PharmaPackaging.tsx
import pillBoxes from "@/assets/industry/pharma-packaging/pill-boxes.webp";
import dispenserBoxes from "@/assets/industry/pharma-packaging/dispenser-boxes.webp";
import dietarySupplementPackaging from "@/assets/industry/pharma-packaging/dietary_supplement_packaging.webp";
import medicineBoxes from "@/assets/industry/pharma-packaging/medicine-boxes.webp";
import oliveOilBoxes from "@/assets/industry/pharma-packaging/olive-oil-boxes.webp";
import condomBoxes from "@/assets/industry/pharma-packaging/condom-boxes.webp";
import glovesBoxes from "@/assets/industry/pharma-packaging/gloves-boxes.webp";
// Substitute for Bandage Boxes
import bandageBoxes from "@/assets/industry/pharma-packaging/bandage-boxes.webp";

// Pharma Packaging related products
const relatedProducts = [
    { name: "Custom Pill Boxes", image: pillBoxes, description: "Secure packaging for pills and medications featuring child-resistant locks and high-impact medical branding", link: "/industries/pharma-packaging/custom-pill-boxes" },
    { name: "Custom Dispenser Boxes", image: dispenserBoxes, description: "Convenient dispenser packaging for medical supplies designed for easy access and professional retail display", link: "/industries/pharma-packaging/custom-dispenser-boxes" },
    { name: "Dietary Supplement Packaging", image: dietarySupplementPackaging, description: "Compliance-focused packaging for supplements featuring moisture-proof seals and vibrant nutritional graphics", link: "/industries/pharma-packaging/dietary-supplement-packaging" },
    { name: "Custom Medicine Boxes", image: medicineBoxes, description: "Professional boxes for various medicines engineered for protection and regulatory compliance with clear labeling", link: "/industries/pharma-packaging/custom-medicine-boxes" },
    { name: "Olive Oil Boxes", image: oliveOilBoxes, description: "Protective packaging for pharmaceutical oils featuring leak-proof design and premium light-shielding materials", link: "/industries/pharma-packaging/olive-oil-boxes" },
    { name: "Condom Boxes", image: condomBoxes, description: "Discreet and secure retail packaging for condoms featuring high-quality print finishes and durable construction", link: "/industries/pharma-packaging/condom-boxes" },
    { name: "Gloves Boxes", image: glovesBoxes, description: "Hygienic dispenser boxes for medical gloves designed for easy single-glove removal and sturdy wall mounting", link: "/industries/pharma-packaging/gloves-boxes" },
    { name: "Bandage Boxes", image: bandageBoxes, description: "Clean packaging for bandages and first aid kits featuring sterile seals and high-visibility branding elements", link: "/industries/pharma-packaging/bandage-boxes" },
];

export function RelatedProductPharma() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="py-8 bg-accent/20">
            <div className="container mx-auto px-[5vw]">
                {/* Section header */}
                <div className="flex flex-col items-center mb-10 text-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-primary rounded-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]" />
                        </div>
                        <span className="text-sm font-bold tracking-widest text-primary uppercase">Explore More</span>
                        <div className="w-12 h-1 bg-primary rounded-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                        Related <span className="text-primary relative inline-block">
                            Pharma Packaging
                            <svg className="absolute -bottom-2 w-full h-3 text-primary/20" viewBox="0 0 100 12" preserveAspectRatio="none">
                                <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base">
                        Discover other custom pharmaceutical and medical packaging solutions tailored precisely to protect, dispense, and showcase your products securely and professionally.
                    </p>
                </div>

                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                            stopOnInteraction: false,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {relatedProducts.map((product, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="h-full">
                                    {product.link ? (
                                        <Link to={product.link} className="block h-full">
                                            <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                                <CardContent className="p-0 flex flex-col h-full">
                                                    <div className="h-48 lg:h-56 w-full bg-slate-50 overflow-hidden relative">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                            loading="lazy"
                                                        />
                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <span className="text-white font-medium bg-primary/90 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                                View Details
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="p-5 border-t border-border flex-grow flex flex-col">
                                                        <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                                                            {product.name}
                                                        </h3>
                                                        <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-grow leading-relaxed">
                                                            {product.description}
                                                        </p>
                                                        <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-auto font-semibold">
                                                            View Product
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ) : (
                                        <Card className="overflow-hidden border-border bg-card h-full">
                                            <CardContent className="p-0 flex flex-col h-full">
                                                <div className="h-48 lg:h-56 w-full bg-slate-50 overflow-hidden relative">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="p-5 border-t border-border flex-grow flex flex-col">
                                                    <h3 className="font-semibold text-foreground text-lg mb-2">
                                                        {product.name}
                                                    </h3>
                                                    <p className="text-sm text-slate-600 line-clamp-2 flex-grow leading-relaxed">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Dot Navigation */}
                    <div className="flex justify-center flex-wrap gap-2 mt-8">
                        {api?.scrollSnapList().map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index ? "bg-primary w-6" : "bg-primary/20 hover:bg-primary/50"
                                    }`}
                                onClick={() => api.scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
