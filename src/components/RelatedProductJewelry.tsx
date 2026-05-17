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
import { useEffect, useState } from "react";

import braceletSquareBoxes from "@/assets/industry/jewelry-boxes/Bracelet Square Boxes.webp";
import necklaceLidOffBoxes from "@/assets/industry/jewelry-boxes/necklace-lid-off-boxes.webp";
import pendantBoxes from "@/assets/industry/jewelry-boxes/Pendant Boxes.webp";
import braceletBoxes from "@/assets/industry/jewelry-boxes/bracelet-boxes.webp";
import ringBoxes from "@/assets/industry/jewelry-boxes/ring-boxes.webp";
import earringBoxes from "@/assets/industry/jewelry-boxes/Earring Boxes.webp";
import luxuryJewelryBoxes from "@/assets/industry/jewelry-boxes/luxury-jewelry-boxes.webp";
import necklaceBoxes from "@/assets/industry/jewelry-boxes/necklace-boxes.webp";

const relatedProducts = [
    {
        name: "Bracelet Square Boxes",
        image: braceletSquareBoxes,
        description: "Rigid square bracelet packaging with velvet inserts and premium finishing for elevated shelf and gifting presentation.",
        link: "/industries/jewelry-boxes/bracelet-square-boxes",
    },
    {
        name: "Custom Necklace Lid Off Packaging",
        image: necklaceLidOffBoxes,
        description: "Two-piece necklace boxes with refined lift-off lids, anti-tarnish interiors, and luxury printing options.",
        link: "/industries/jewelry-boxes/custom-necklace-lid-off-packaging",
    },
    {
        name: "Pendant Boxes",
        image: pendantBoxes,
        description: "Protective pendant boxes engineered to prevent chain tangling while preserving premium first-impression impact.",
        link: "/industries/jewelry-boxes/pendant-boxes",
    },
    {
        name: "Bracelet Boxes",
        image: braceletBoxes,
        description: "Elegant bracelet gift boxes with secure inserts, rigid structures, and soft-touch finishes for luxury brands.",
        link: "/industries/jewelry-boxes/bracelet-boxes",
    },
    {
        name: "Ring Boxes",
        image: ringBoxes,
        description: "High-end ring boxes with precision slots, anti-scratch lining, and premium branding for proposal and retail use.",
        link: "/industries/jewelry-boxes/ring-boxes",
    },
    {
        name: "Earring Boxes",
        image: earringBoxes,
        description: "Compact earring packaging designed to secure studs and drops with elegant interior pads and print detailing.",
        link: "/industries/jewelry-boxes/earring-boxes",
    },
    {
        name: "Luxury Jewelry Boxes",
        image: luxuryJewelryBoxes,
        description: "Statement packaging for premium jewelry collections featuring rigid board and couture finishing techniques.",
        link: "/industries/jewelry-boxes/luxury-jewelry-boxes",
    },
    {
        name: "Necklace Boxes",
        image: necklaceBoxes,
        description: "Premium necklace boxes with tailored inserts to stabilize chains and elevate unboxing with refined branding.",
        link: "/industries/jewelry-boxes/necklace-boxes",
    },
];

export function RelatedProductJewelry() {
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
                        Related Products from Jewelry Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete jewelry packaging lineup designed for luxury presentation, secure protection, and premium print performance.
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
                            {relatedProducts.map((product) => (
                                <CarouselItem key={product.link} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
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
                                </CarouselItem>
                            ))}
                        </CarouselContent>
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
