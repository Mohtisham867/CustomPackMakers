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
import hairDryerBoxes from "@/assets/industry/electronics-packaging/hair-dryer-packaging.webp";
import chargerBoxes from "@/assets/charger_kabel_packaging.webp";
import batteryBoxes from "@/assets/industry/electronics-packaging/battery-packaging.webp";
import cdJackets from "@/assets/industry/electronics-packaging/cd-jackets.webp";
import cdCovers from "@/assets/industry/electronics-packaging/cd-covers.webp";
import cameraPackaging from "@/assets/industry/electronics-packaging/camera-packaging.webp";
import phoneBoxes from "@/assets/industry/electronics-packaging/Phone Boxes.webp";
import headphonePackaging from "@/assets/industry/electronics-packaging/Headphone Packaging.webp";
import softwareBoxes from "@/assets/industry/electronics-packaging/Software Boxes.webp";

// Related products from Electronics Boxes category
const relatedProducts = [
    { name: "Hair Dryer Packaging", image: hairDryerBoxes, description: "Protective packaging for hair styling tools with cushioned inserts and professional retail presentation", link: "/industries/electronics-boxes/hair-dryer-packaging" },
    { name: "Cell Phone Charger Boxes", image: chargerBoxes, description: "Compact boxes for chargers and cables featuring organized compartments and tech-focused branding design", link: "/industries/electronics-boxes/cell-phone-charger-boxes" },
    { name: "Battery Packaging", image: batteryBoxes, description: "Secure packaging for various battery sizes with safety certifications and clear product information display", link: "/industries/electronics-boxes/battery-packaging" },
    { name: "CD Jackets", image: cdJackets, description: "Sleek jackets for media storage offering protective sleeves and customizable artwork printing options", link: "/industries/electronics-boxes/cd-jackets" },
    { name: "CD Covers", image: cdCovers, description: "Custom covers for CDs and DVDs with high-quality printing and durable protective construction materials", link: "/industries/electronics-boxes/cd-covers" },
    { name: "Camera Packaging", image: cameraPackaging, description: "Durable protection for cameras and lenses featuring foam inserts and shock-resistant exterior construction", link: "/industries/electronics-boxes/camera-packaging" },
    { name: "Phone Boxes", image: phoneBoxes, description: "Premium rigid or tuck boxes for smartphones with magnetic closures and luxury unboxing experience design", link: "/industries/electronics-boxes/phone-boxes" },
    { name: "Headphone Packaging", image: headphonePackaging, description: "Stylish packaging for audio accessories with protective compartments and modern tech-inspired graphics", link: "/industries/electronics-boxes/headphone-packaging" },
    { name: "Software Boxes", image: softwareBoxes, description: "Professional boxes for software retail featuring security seals and comprehensive product information panels", link: "/industries/electronics-boxes/software-boxes" },
];

export function RelatedProductElectronics() {
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
                        Related Electronics Packaging
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium electronics packaging solutions designed to protect and showcase your products.
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
                                                            <h3 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
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
                                                        <h3 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
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
