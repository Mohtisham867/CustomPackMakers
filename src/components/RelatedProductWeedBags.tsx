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

// Images specific to weed bags
import exoticWeedBag from "@/assets/weed-bags/exotic-weed-bag.webp";
import smellProofWeedBags from "@/assets/weed-bags/smell-proof-weed-bags.webp";
import weedBags35 from "@/assets/weed-bags/weed-bags-3-5.webp";
import zipWeedBags from "@/assets/weed-bags/zip-weed-bags.webp";
import weedPoundBags from "@/assets/weed-bags/weed-pound-bags.webp";

const relatedProducts = [
    { name: "Exotic Weed Bag", image: exoticWeedBag, description: "Vibrant designs for your premium exotic strains featuring holographic effects and high-barrier protection", link: "/shapes-styles/weed-bags/exotic-weed-bag" },
    { name: "Smell Proof Weed Bags", image: smellProofWeedBags, description: "Advanced odor-barrier material for discretion featuring multi-layer films and secure airtight zippers", link: "/shapes-styles/weed-bags/smell-proof-weed-bags" },
    { name: "Weed Bags 3.5", image: weedBags35, description: "Perfectly sized 3.5g pouches for retail flower featuring child-resistant seals and vibrant custom prints", link: "/shapes-styles/weed-bags/weed-bags-3-5" },
    { name: "Zip Weed Bags", image: zipWeedBags, description: "Reliable resealable zipper for freshness and safety featuring durable materials and high-impact branding", link: "/shapes-styles/weed-bags/zip-weed-bags" },
    { name: "Weed Pound Bags", image: weedPoundBags, description: "Heavy-duty bulk storage bags for larger quantities featuring reinforced seams and superior odor control", link: "/shapes-styles/weed-bags/weed-pound-bags" },
];

export function RelatedProductWeedBags() {
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
                        Related Products from Weed Bags
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium weed bag solutions designed to protect, preserve, and showcase your cannabis products securely.
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
