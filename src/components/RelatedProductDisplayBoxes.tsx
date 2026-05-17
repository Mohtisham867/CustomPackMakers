import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import brochureDisplayHolder from "@/assets/shape-style/display-boxes/brochure-display-holder.webp";
import customCandleDisplayBoxes from "@/assets/shape-style/display-boxes/custom-candle-display-boxes.webp";
import customPreRollDisplayBoxes from "@/assets/shape-style/display-boxes/custom-pre-roll-display-boxes.webp";
import vapeDisplayBoxes from "@/assets/shape-style/display-boxes/vape-display-boxes.webp";
import cardboardDisplayBoxes from "@/assets/shape-style/display-boxes/cardboard-display-boxes.webp";
import counterDisplayBoxes from "@/assets/shape-style/display-boxes/counter-display-boxes.webp";
import jewelryDisplayBoxes from "@/assets/shape-style/display-boxes/jewelry-display-boxes.webp";
import cbdDisplayBoxes from "@/assets/shape-style/display-boxes/cbd-display-boxes.webp";
import lollipopDisplayBoxes from "@/assets/shape-style/display-boxes/lollipop-display-boxes.webp";
import cigaretteDisplayBoxes from "@/assets/shape-style/display-boxes/cigarette-display-boxes.webp";
import cosmeticDisplayBoxes from "@/assets/shape-style/display-boxes/cosmetic-display-boxes.webp";
import clearLidBoxes from "@/assets/shape-style/display-boxes/clear-lid-boxes.webp";
import productDisplayBoxes from "@/assets/shape-style/display-boxes/product-display-boxes.webp";
import countertopDisplayBoxes from "@/assets/shape-style/display-boxes/countertop-display-boxes.webp";
import watchDisplayBoxes from "@/assets/shape-style/display-boxes/watch-display-boxes.webp";
import healthCounterDisplayBoxes from "@/assets/shape-style/display-boxes/health-counter-display-boxes.webp";
import candyDisplayBoxes from "@/assets/shape-style/display-boxes/candy-display-boxes.webp";

const carouselProducts = [
    { name: "Brochure Display Holder", image: brochureDisplayHolder, description: "Professional holders for brochures and flyers designed for high visibility in lobbies and retail settings.", link: "/shapes-styles/display-boxes/brochure-display-holder" },
    { name: "Custom Candle Display Boxes", image: customCandleDisplayBoxes, description: "Attractive display boxes for candles with protective inserts and premium branding for maximum shelf appeal.", link: "/shapes-styles/display-boxes/custom-candle-display-boxes" },
    { name: "Custom Pre Roll Display Boxes", image: customPreRollDisplayBoxes, description: "Secure display packaging for pre-rolls offering clear product visibility and organized retail counter presence.", link: "/shapes-styles/display-boxes/custom-pre-roll-display-boxes" },
    { name: "Vape Display Boxes", image: vapeDisplayBoxes, description: "Custom displays for vape products with eye-catching graphics and sturdy construction for retail use.", link: "/shapes-styles/display-boxes/vape-display-boxes" },
    { name: "Cardboard Display Boxes", image: cardboardDisplayBoxes, description: "Eco-friendly cardboard display solutions providing sustainable and lightweight packaging for general retail.", link: "/shapes-styles/display-boxes/cardboard-display-boxes" },
    { name: "Counter Display Boxes", image: counterDisplayBoxes, description: "Eye-catching counter-placement boxes designed to drive impulse purchases with bold branding and clear layout.", link: "/shapes-styles/display-boxes/counter-display-boxes" },
    { name: "Jewelry Display Boxes", image: jewelryDisplayBoxes, description: "Elegant displays for jewelry items highlighting detail and luxury with premium finishes and protective linings.", link: "/shapes-styles/display-boxes/jewelry-display-boxes" },
    { name: "CBD Display Boxes", image: cbdDisplayBoxes, description: "Custom packaging for CBD product displays with compliant labeling and attractive design elements.", link: "/shapes-styles/display-boxes/cbd-display-boxes" },
    { name: "Lollipop Display Boxes", image: lollipopDisplayBoxes, description: "Fun and functional lollipop displays with secure holders designed to catch the eye of younger consumers.", link: "/shapes-styles/display-boxes/lollipop-display-boxes" },
    { name: "Cigarette Display Boxes", image: cigaretteDisplayBoxes, description: "Organized display units for cigarette packs providing efficient retail storage and prominent brand visibility.", link: "/shapes-styles/display-boxes/cigarette-display-boxes" },
    { name: "Cosmetic Display Boxes", image: cosmeticDisplayBoxes, description: "Stylish displays for cosmetic lines offering tiered layouts for product organization and high-end aesthetics.", link: "/shapes-styles/display-boxes/cosmetic-display-boxes" },
    { name: "Clear Lid Boxes", image: clearLidBoxes, description: "Boxes with clear lids for product visibility allowing customers to view contents while ensuring full protection.", link: "/shapes-styles/display-boxes/clear-lid-boxes" },
    { name: "Product Display Boxes", image: productDisplayBoxes, description: "Versatile boxes for various retail products designed for multi-functional storage and attractive shelf presence.", link: "/shapes-styles/display-boxes/product-display-boxes" },
    { name: "Countertop Display Boxes", image: countertopDisplayBoxes, description: "Compact displays for limited counter space offering efficient product merchandising in smaller retail areas.", link: "/shapes-styles/display-boxes/countertop-display-boxes" },
    { name: "Watch Display Boxes", image: watchDisplayBoxes, description: "Premium display boxes for watches featuring cushioned interiors and luxury exterior branding for retailers.", link: "/shapes-styles/display-boxes/watch-display-boxes" },
    { name: "Health Counter Display Boxes", image: healthCounterDisplayBoxes, description: "Clean and professional health product displays designed for pharmacies and health-conscious retail stores.", link: "/shapes-styles/display-boxes/health-counter-display-boxes" },
    { name: "Candy Display Boxes", image: candyDisplayBoxes, description: "Bright and appealing candy display boxes with colorful graphics and divided compartments for product variety.", link: "/shapes-styles/display-boxes/candy-display-boxes" },
];

export const RelatedProductDisplayBoxes = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    return (
        <section className="py-8 bg-accent/20">
            <div className="container mx-auto px-[5vw]">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Display Box Products</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium display packaging solutions designed to showcase your products.</p>
                </div>
                <div className="relative px-4">
                    <Carousel setApi={setApi} opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]} className="w-full">
                        <CarouselContent className="-ml-4">
                            {carouselProducts.map((product, index) => (
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
};
