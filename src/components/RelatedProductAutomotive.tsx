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

// Import professional product images
import carAccessoriesBoxes from "@/assets/industry/automotive-boxes/car-accessories-boxes.webp";
import sparePartsBoxes from "@/assets/industry/automotive-boxes/spare-parts-boxes.webp";
import lubricantPackaging from "@/assets/industry/automotive-boxes/lubricant-packaging.webp";
import electronicComponentBoxes from "@/assets/industry/automotive-boxes/electronic-component-boxes.webp";
import brakePadsPackaging from "@/assets/industry/automotive-boxes/brake-pads-packaging.webp";
import airFilterBoxes from "@/assets/industry/automotive-boxes/air-filter-boxes.webp";
import toolKitBoxes from "@/assets/industry/automotive-boxes/tool-kit-boxes.webp";
import tireAccessoriesPackaging from "@/assets/industry/automotive-boxes/tire-accessories-packaging.webp";
import headlightBoxes from "@/assets/industry/automotive-boxes/headlight-boxes.webp";
import carCleaningKitsBoxes from "@/assets/industry/automotive-boxes/car-cleaning-kits-boxes.webp";

// Related products from Automotive Boxes category
const relatedProducts = [
    { name: "Car Accessories Boxes", image: carAccessoriesBoxes, description: "Premium packaging for automotive accessories ensuring protection and professional retail presentation", link: "/industries/automotive-boxes/car-accessories-boxes" },
    { name: "Spare Parts Boxes", image: sparePartsBoxes, description: "Durable boxes designed to protect spare parts during storage and shipping with reinforced construction", link: "/industries/automotive-boxes/spare-parts-boxes" },
    { name: "Lubricant Packaging", image: lubricantPackaging, description: "Professional packaging for oil and lubricant products with leak-resistant design and clear branding", link: "/industries/automotive-boxes/lubricant-packaging-boxes" },
    { name: "Electronic Components", image: electronicComponentBoxes, description: "Protective packaging for sensitive electronic parts featuring anti-static materials and secure closures", link: "/industries/automotive-boxes/electronic-component-boxes" },
    { name: "Brake Pads Packaging", image: brakePadsPackaging, description: "Heavy-duty boxes engineered for brake components offering maximum protection and easy identification", link: "/industries/automotive-boxes/brake-pads-packaging" },
    { name: "Air Filter Boxes", image: airFilterBoxes, description: "Clean storage solutions for air filters with dust-proof design and convenient stacking capabilities", link: "/industries/automotive-boxes/air-filter-boxes" },
    { name: "Tool Kit Boxes", image: toolKitBoxes, description: "Robust packaging for automotive tools featuring sturdy construction and organized compartment layouts", link: "/industries/automotive-boxes/tool-kit-boxes" },
    { name: "Tire Accessories", image: tireAccessoriesPackaging, description: "Secure boxes for tire accessories designed to withstand heavy loads and protect contents during transit", link: "/industries/automotive-boxes/tire-accessories-packaging" },
    { name: "Headlight Boxes", image: headlightBoxes, description: "Protective packaging for lighting components with cushioned interiors preventing damage and scratches", link: "/industries/automotive-boxes/headlight-boxes" },
    { name: "Car Cleaning Kits", image: carCleaningKitsBoxes, description: "Premium boxes for detailing kits offering organized storage and attractive retail shelf presentation", link: "/industries/automotive-boxes/car-cleaning-kits-boxes" },
];

export function RelatedProductAutomotive() {
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
                        Related Automotive Products
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium automotive packaging solutions designed to protect and showcase your products.
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
                                        {product.link ? (
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
                                        ) : (
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
                                        )}
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
