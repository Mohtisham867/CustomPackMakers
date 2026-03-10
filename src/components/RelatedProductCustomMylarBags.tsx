import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

import dispensaryMylarBags from "@/assets/mylar-bags/dispensary-mylar-bags-premium.webp";
import dieCutMylarBags from "@/assets/mylar-bags/die-cut-mylar-bags-premium.webp";
import mylarVacuumSealBags from "@/assets/mylar-bags/mylar-vacuum-seal-bags-premium.webp";
import mylarFoodStorageBags from "@/assets/mylar-bags/mylar-food-storage-bags-premium.webp";
import blackMylarBags from "@/assets/mylar-bags/black-mylar-bags-premium-v2.webp";
import smellProofMylarBags from "@/assets/mylar-bags/smell-proof-mylar-bags-premium.webp";
import childResistantMylarBags from "@/assets/mylar-bags/child-resistant-mylar-bags-premium-v2.webp";
import exoticMylarBags from "@/assets/mylar-bags/exotic-mylar-bags-premium.webp";
import smallMylarBags from "@/assets/mylar-bags/small-mylar-bags-premium.webp";
import holographicMylarBags from "@/assets/mylar-bags/holographic-mylar-bags-premium.webp";
import kraftMylarBags from "@/assets/mylar-bags/kraft-mylar-bags-premium.webp";
import mylarZiplockBags from "@/assets/mylar-bags/mylar-ziplock-bags-premium.webp";
import clearMylarBags from "@/assets/mylar-bags/clear-mylar-bags-premium.webp";

const relatedProducts = [
    { name: "Dispensary Mylar Bags", image: dispensaryMylarBags, description: "Professional, compliant packaging for dispensaries with high-barrier protection and secure seals.", link: "/shapes-styles/custom-mylar-bags/dispensary-mylar-bags" },
    { name: "Die Cut Mylar Bags", image: dieCutMylarBags, description: "Custom-shaped mylar bags for unique brand identity and maximum retail shelf impact.", link: "/shapes-styles/custom-mylar-bags/die-cut-mylar-bags" },
    { name: "Mylar Vacuum Seal Bags", image: mylarVacuumSealBags, description: "Airtight sealing for maximum freshness using premium multi-layer barrier technology.", link: "/shapes-styles/custom-mylar-bags/mylar-vacuum-seal-bags" },
    { name: "Mylar Food Storage Bags", image: mylarFoodStorageBags, description: "Durable bags for long-term food preservation with moisture-proof and oxygen-blocking materials.", link: "/shapes-styles/custom-mylar-bags/mylar-food-storage-bags" },
    { name: "Black Mylar Bags", image: blackMylarBags, description: "Sleek, premium matte black finish for high-end products requiring opacity and luxury aesthetics.", link: "/shapes-styles/custom-mylar-bags/black-mylar-bags" },
    { name: "Smell Proof Mylar Bags", image: smellProofMylarBags, description: "Advanced odor-locking technology for total discretion and product aromatic profile maintenance.", link: "/shapes-styles/custom-mylar-bags/smell-proof-mylar-bags" },
    { name: "Child Resistant Mylar Bags", image: childResistantMylarBags, description: "Safe, compliant packaging with secure locking mechanisms meeting regulatory safety standards.", link: "/shapes-styles/custom-mylar-bags/child-resistant-mylar-bags" },
    { name: "Exotic Mylar Bags", image: exoticMylarBags, description: "Vibrant, artistic designs and high-gloss finishes to capture attention on crowded retail shelves.", link: "/shapes-styles/custom-mylar-bags/exotic-mylar-bags" },
    { name: "Small Mylar Bags", image: smallMylarBags, description: "Compact pouches for single servings or small items with easy-tear notches and secure seals.", link: "/shapes-styles/custom-mylar-bags/small-mylar-bags" },
    { name: "Holographic Mylar Bags", image: holographicMylarBags, description: "Eye-catching rainbow reflective finish providing a futuristic, premium look for limited editions.", link: "/shapes-styles/custom-mylar-bags/holographic-mylar-bags" },
    { name: "Kraft Mylar Bags", image: kraftMylarBags, description: "Eco-friendly natural look combined with superior moisture and light protection of mylar lining.", link: "/shapes-styles/custom-mylar-bags/kraft-mylar-bags" },
    { name: "Mylar Ziplock Bags", image: mylarZiplockBags, description: "Convenient resealable ziplock closure for repeated use while maintaining product freshness.", link: "/shapes-styles/custom-mylar-bags/mylar-ziplock-bags" },
    { name: "Clear Mylar Bags", image: clearMylarBags, description: "Transparent combination for full product visibility with the high-barrier performance of mylar.", link: "/shapes-styles/custom-mylar-bags/clear-mylar-bags" },
];

export function RelatedProductCustomMylarBags() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => { setCurrent(api.selectedScrollSnap()); });
    }, [api]);

    return (
        <section className="py-8 bg-accent/20">
            <div className="container mx-auto px-[5vw]">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Products from Custom Mylar Bags</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium custom mylar bag solutions designed to protect and showcase your products.</p>
                </div>
                <div className="relative px-4">
                    <Carousel setApi={setApi} opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]} className="w-full">
                        <CarouselContent className="-ml-4">
                            {relatedProducts.map((product, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <div className="h-full">
                                        <Link to={product.link} className="block h-full">
                                            <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                                <CardContent className="p-0 flex flex-col h-full">
                                                    <div className="h-48 lg:h-64 w-full bg-gray-50 overflow-hidden relative">
                                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                                                    </div>
                                                    <div className="p-5 border-t border-border flex-grow flex flex-col">
                                                        <h3 className="font-semibold text-foreground text-base mb-2">{product.name}</h3>
                                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">{product.description}</p>
                                                        <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto">View Product</Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-2 mt-8 flex-wrap">
                            {Array.from({ length: count }).map((_, index) => (
                                <button key={index} className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"}`} onClick={() => api?.scrollTo(index)} aria-label={`Go to slide ${index + 1}`} />
                            ))}
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
