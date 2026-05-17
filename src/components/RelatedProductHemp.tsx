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

// Hemp Product Images
import hempPaperBoxes from "@/assets/industry/custom-hemp-boxes/custom-cbd-isolate-boxes.webp";
import hempShippingBoxes from "@/assets/industry/custom-hemp-boxes/hemp-shipping-boxes.webp";
import hempPreRollBoxes from "@/assets/industry/custom-hemp-boxes/Hemp Pre Roll Boxes.webp";
import hempOilBoxes from "@/assets/industry/custom-hemp-boxes/Hemp Oil Boxes.webp";
import hempGiftBoxes from "@/assets/industry/custom-hemp-boxes/apparel-gift-boxes.webp";
import hempCardboardBoxes from "@/assets/industry/custom-hemp-boxes/Hemp Cardboard Boxes.webp";
import hempCigaretteBoxes from "@/assets/industry/custom-hemp-boxes/hemp-cigarette-boxes.webp";
import eLiquidBoxes from "@/assets/industry/custom-hemp-boxes/e-liquid-boxes.webp";
import hempTeaBags from "@/assets/industry/custom-hemp-boxes/tea-boxes.webp";
import cbdHempOilBoxes from "@/assets/industry/custom-hemp-boxes/cbd-oil-boxes.webp";

const relatedProducts = [
    { name: "Hemp Paper Boxes", image: hempPaperBoxes, description: "Sustainable paper packaging for eco-conscious brands featuring organic textures and eco-friendly print finishes.", link: "/industries/custom-hemp-boxes/hemp-paper-boxes" },
    { name: "Hemp Shipping Boxes", image: hempShippingBoxes, description: "Durable shipping solutions made for hemp products utilizing reinforced corrugated board for secure transit.", link: "/industries/custom-hemp-boxes/hemp-shipping-boxes" },
    { name: "Hemp Pre Roll Boxes", image: hempPreRollBoxes, description: "Secure and stylish boxes for hemp pre-rolls featuring child-resistant locks and premium custom branding.", link: "/industries/custom-hemp-boxes/hemp-pre-roll-boxes" },
    { name: "Hemp Oil Boxes", image: hempOilBoxes, description: "Protective packaging for hemp oil bottles designed for maximum shelf appeal and secure product containment.", link: "/industries/custom-hemp-boxes/hemp-oil-boxes" },
    { name: "Hemp Gift Boxes", image: hempGiftBoxes, description: "Elegant gift boxes for special hemp items featuring luxury finishes and custom-fitted protective inserts.", link: "/industries/custom-hemp-boxes/hemp-gift-boxes" },
    { name: "Hemp Cardboard Boxes", image: hempCardboardBoxes, description: "Robust cardboard boxes for various hemp goods engineered for durability and high-impact retail presentation.", link: "/industries/custom-hemp-boxes/hemp-cardboard-boxes" },
    { name: "Custom Hemp Cigarette Boxes", image: hempCigaretteBoxes, description: "Customized boxes for hemp cigarettes featuring unique opening styles and premium anti-counterfeit finishes.", link: "/industries/custom-hemp-boxes/custom-hemp-cigarette-boxes" },
    { name: "E Liquid Boxes", image: eLiquidBoxes, description: "Safe and compliant packaging for e-liquids designed to meet regulatory standards while maximizing brand impact.", link: "/industries/custom-hemp-boxes/e-liquid-boxes" },
    { name: "Hemp Tea Bags", image: hempTeaBags, description: "Flavor-preserving boxes for hemp tea featuring moisture-proof linings and vibrant, natural brand graphics.", link: "/industries/custom-hemp-boxes/hemp-tea-bags" },
    { name: "CBD Hemp Oil Boxes", image: cbdHempOilBoxes, description: "Premium packaging for CBD hemp oil designed to protect delicate liquids while conveying a luxury brand image.", link: "/industries/custom-hemp-boxes/cbd-hemp-oil-boxes" },
];

export function RelatedProductHemp() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;
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
                        Related Hemp Packaging
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our sustainable and premium range of secondary packaging solutions for all your hemp products.
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
