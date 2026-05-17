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

// Generated Images
import hempCardboardBoxes from "@/assets/material/cardboard-boxes/hemp-cardboard-boxes.webp";
import cardboardCigaretteBoxes from "@/assets/material/cardboard-boxes/cardboard-cigarette-boxes.webp";
import cardboardGiftBoxes from "@/assets/material/cardboard-boxes/cardboard-gift-boxes.webp";
import blackCardboardBoxes from "@/assets/material/cardboard-boxes/black-cardboard-boxes.webp";
import whiteCardboardBoxes from "@/assets/material/cardboard-boxes/white-cardboard-boxes.webp";
import cardboardDividerBoxes from "@/assets/material/cardboard-boxes/cardboard-divider-boxes.webp";
import cardboardJewelryBoxes from "@/assets/material/cardboard-boxes/cardboard-jewelry-boxes.webp";
import cardboardBoxWithHandle from "@/assets/material/cardboard-boxes/cardboard-box-with-handle.webp";

import ammoCardboardBoxes from "@/assets/material/cardboard-boxes/ammo-cardboard-boxes.webp";
import cardboardInserts from "@/assets/material/cardboard-boxes/cardboard-inserts.webp";
import paperboardBoxes from "@/assets/material/cardboard-boxes/paperboard-boxes.webp";
import cardboardShoeBoxes from "@/assets/material/cardboard-boxes/cardboard-shoe-boxes.webp";
import cardboardBoxWithInserts from "@/assets/material/cardboard-boxes/cardboard-box-with-inserts.webp";
import cardboardCigarBoxes from "@/assets/material/cardboard-boxes/Cardboard Cigar Boxes.webp";
import cosmeticCardboardBoxes from "@/assets/material/cardboard-boxes/cosmetic-cardboard-boxes.webp";
import cardboardSoapBoxes from "@/assets/material/cardboard-boxes/cardboard-soap-boxes.webp";

// Related products from Cardboard Boxes category
const relatedProducts = [
    { name: "Hemp Cardboard Boxes", image: hempCardboardBoxes, description: "Sustainable rigid cardboard boxes infused with hemp fibers for eco-conscious luxury branding and retail display.", link: "/box-by-material/cardboard-boxes/hemp-cardboard-boxes" },
    { name: "Cardboard Cigarette Boxes", image: cardboardCigaretteBoxes, description: "Precision-cut protective cardboard packaging for tobacco and pre-rolls, featuring custom structural designs.", link: "/box-by-material/cardboard-boxes/cardboard-cigarette-boxes" },
    { name: "Cardboard Gift Boxes", image: cardboardGiftBoxes, description: "Premium cardboard enclosures tailored for elegant retail presentation, gifting, and brand enhancement.", link: "/box-by-material/cardboard-boxes/cardboard-gift-boxes" },
    { name: "Black Cardboard Boxes", image: blackCardboardBoxes, description: "Sophisticated matte black cardboard construction providing a striking and luxurious backdrop for any product.", link: "/box-by-material/cardboard-boxes/black-cardboard-boxes" },
    { name: "White Cardboard Boxes", image: whiteCardboardBoxes, description: "Pristine bleached cardboard boxes perfect for minimalist branding, offering superior print clarity and structural strength.", link: "/box-by-material/cardboard-boxes/white-cardboard-boxes" },
    { name: "Cardboard Divider Boxes", image: cardboardDividerBoxes, description: "Structured cardboard packaging featuring built-in grid dividers for securing fragile multi-item assemblies safely.", link: "/box-by-material/cardboard-boxes/cardboard-divider-boxes" },
    { name: "Cardboard Jewelry Boxes", image: cardboardJewelryBoxes, description: "Compact, sturdy cardboard boxes designed to present and protect fine jewelry and boutique artisan accessories.", link: "/box-by-material/cardboard-boxes/cardboard-jewelry-boxes" },
    { name: "Cardboard Box With Handle", image: cardboardBoxWithHandle, description: "High-end retail cardboard containers equipped with integrated handles for convenient customer carry and display.", link: "/box-by-material/cardboard-boxes/cardboard-box-with-handle" },
    { name: "Ammo Cardboard Boxes", image: ammoCardboardBoxes, description: "Heavy-duty reinforced cardboard boxes designed for secure organization, shipping, and storage in demanding environments.", link: "/box-by-material/cardboard-boxes/ammo-cardboard-boxes" },
    { name: "Cardboard Inserts", image: cardboardInserts, description: "Custom-die-cut structural cardboard inserts engineered to provide static positioning and internal product shock absorption.", link: "/box-by-material/cardboard-boxes/cardboard-inserts" },
    { name: "Paperboard Boxes", image: paperboardBoxes, description: "Versatile folding carton paperboard suitable for cosmetics, electronics, and pharmaceuticals offering high-fidelity printing.", link: "/box-by-material/cardboard-boxes/paperboard-boxes" },
    { name: "Cardboard Shoe Boxes", image: cardboardShoeBoxes, description: "Sturdy retail-grade cardboard containers ensuring crush resistance and aesthetic harmony for footwear brands.", link: "/box-by-material/cardboard-boxes/cardboard-shoe-boxes" },
    { name: "Cardboard Box With Inserts", image: cardboardBoxWithInserts, description: "Complete protective packaging solutions that integrate custom cardboard boxes with precision-matched internal fitments.", link: "/box-by-material/cardboard-boxes/cardboard-box-with-inserts" },
    { name: "Cardboard Cigar Boxes", image: cardboardCigarBoxes, description: "Classic, rigid cardboard boxes designed to mirror the presentation of humidors and maintain structural integrity.", link: "/box-by-material/cardboard-boxes/cardboard-cigar-boxes" },
    { name: "Cosmetic Cardboard Boxes", image: cosmeticCardboardBoxes, description: "Elegant and highly-customizable packaging perfect for securing skincare lines with eye-catching visual appeal.", link: "/box-by-material/cardboard-boxes/cosmetic-cardboard-boxes" },
    { name: "Cardboard Soap Boxes", image: cardboardSoapBoxes, description: "Durable and breathable cardboard packaging designed to protect artisanal soaps while projecting an organic brand identity.", link: "/box-by-material/cardboard-boxes/cardboard-soap-boxes" },
];

export function RelatedProductCardboardBoxes() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="py-8 bg-accent/20">
            <div className="container mx-auto px-[5vw]">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Related Products from Cardboard Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium cardboard packaging solutions, engineered for strength and presentation.
                    </p>
                </div>

                <div className="relative px-4">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                                stopOnInteraction: false,
                                stopOnMouseEnter: true,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {relatedProducts.map((product, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <div className="h-full">
                                        <Link to={product.link} className="block h-full">
                                            <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                                <CardContent className="p-0 flex flex-col h-full">
                                                    <div className="h-48 lg:h-64 w-full bg-gray-50 overflow-hidden relative">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="p-5 border-t border-border flex-grow flex flex-col">
                                                        <h3 className="font-semibold text-foreground text-base mb-2">
                                                            {product.name}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                                                            {product.description}
                                                        </p>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
                                                        >
                                                            View Product
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* Dot Navigation */}
                        <div className="flex justify-center gap-2 mt-8 flex-wrap">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"
                                        }`}
                                    onClick={() => api?.scrollTo(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
