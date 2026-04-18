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

// Product Images
import reverseTuckEnd from "@/assets/tuck-boxes/reverse-tuck-end.webp";
import reverseTuckEndBoxes from "@/assets/tuck-boxes/reverse-tuck-end-boxes.webp";
import straightTuckEnd from "@/assets/tuck-boxes/straight-tuck-end.webp";
import straightTuckEndBoxes from "@/assets/tuck-boxes/straight-tuck-end-boxes.webp";
import tuckTopBox from "@/assets/tuck-boxes/tuck-top-box.webp";
import tuckTopBoxes from "@/assets/tuck-boxes/tuck-top-boxes.webp";
import tuckTopSnapBottom from "@/assets/tuck-boxes/tuck-top-snap-bottom-box.webp";
import tuckTopAutoBottom from "@/assets/tuck-boxes/tuck-top-auto-bottom-box.webp";
import tuckFrontBoxes from "@/assets/tuck-boxes/tuck-front-boxes.webp";
import doubleWallTuckFront from "@/assets/tuck-boxes/double-wall-tuck-front.webp";
import doubleWallTuckTopBoxes from "@/assets/tuck-boxes/double-wall-tuck-top-boxes.webp";
import straightTuckHangTab from "@/assets/tuck-boxes/straight-tuck-with-hang-tab.webp";
import reverseTuckHangTab from "@/assets/tuck-boxes/reverse-tuck-with-hang-tab.webp";
import straightTuckWindow from "@/assets/tuck-boxes/straight-tuck-with-customize-window.webp";
import reverseTuckWindow from "@/assets/tuck-boxes/reverse-tuck-with-customize-window.webp";

// Related products from Tuck Boxes category
const relatedProducts = [
    { name: "Reverse Tuck End", image: reverseTuckEnd, description: "Classic reverse tuck closure designed for secure packaging and easy assembly across various retail sectors.", link: "/shapes-styles/tuck-boxes/reverse-tuck-end" },
    { name: "Reverse Tuck End Boxes", image: reverseTuckEndBoxes, description: "Versatile reverse tuck boxes suitable for a wide range of products requiring reliable and elegant packaging.", link: "/shapes-styles/tuck-boxes/reverse-tuck-end-boxes" },
    { name: "Straight Tuck End", image: straightTuckEnd, description: "Clean straight tuck design offering a premium look with perfectly aligned closures for high-end retail displays.", link: "/shapes-styles/tuck-boxes/straight-tuck-end" },
    { name: "Straight Tuck End Boxes", image: straightTuckEndBoxes, description: "Standard straight tuck packaging solutions engineered for ease of use and professional product presentation.", link: "/shapes-styles/tuck-boxes/straight-tuck-end-boxes" },
    { name: "Tuck Top Box", image: tuckTopBox, description: "Simple and effective tuck top closure providing convenient access and secure containment for your retail goods.", link: "/shapes-styles/tuck-boxes/tuck-top-box" },
    { name: "Tuck Top Boxes", image: tuckTopBoxes, description: "Reliable tuck top boxes perfect for retail display and organized storage, featuring durable construction.", link: "/shapes-styles/tuck-boxes/tuck-top-boxes" },
    { name: "Tuck Top Snap Bottom Box", image: tuckTopSnapBottom, description: "Hybrid design featuring a secure snap-lock bottom and easy tuck top access for heavy or fragile products.", link: "/shapes-styles/tuck-boxes/tuck-top-snap-bottom-box" },
    { name: "Tuck Top Auto Bottom Box", image: tuckTopAutoBottom, description: "Quick-assembly auto bottom combined with a convenient tuck top to streamline your high-volume packaging line.", link: "/shapes-styles/tuck-boxes/tuck-top-auto-bottom-box" },
    { name: "Tuck Front Boxes", image: tuckFrontBoxes, description: "Durable tuck front design providing enhanced protection and a clean exterior surface for prominent branding.", link: "/shapes-styles/tuck-boxes/tuck-front-boxes" },
    { name: "Double Wall Tuck Front", image: doubleWallTuckFront, description: "Extra sturdy double wall construction offering maximum crush resistance for shipping and retail of heavier items.", link: "/shapes-styles/tuck-boxes/double-wall-tuck-front" },
    { name: "Double Wall Tuck Top Boxes", image: doubleWallTuckTopBoxes, description: "Reinforced top tuck design engineered specifically for heavier items requiring added structural security.", link: "/shapes-styles/tuck-boxes/double-wall-tuck-top-boxes" },
    { name: "Straight Tuck with Hang Tab", image: straightTuckHangTab, description: "Retail-ready packaging featuring an integrated hang tab for convenient pegboard display and easy visibility.", link: "/shapes-styles/tuck-boxes/straight-tuck-with-hang-tab" },
    { name: "Reverse Tuck with Hang Tab", image: reverseTuckHangTab, description: "Functional reverse tuck style with a built-in hang tab designed for efficient vertical retail merchandising.", link: "/shapes-styles/tuck-boxes/reverse-tuck-with-hang-tab" },
    { name: "Straight Tuck with Customize Window", image: straightTuckWindow, description: "Showcase your products through a custom clear window combined with a premium straight tuck closure design.", link: "/shapes-styles/tuck-boxes/straight-tuck-with-customize-window" },
    { name: "Reverse Tuck with Customize Window", image: reverseTuckWindow, description: "Professional reverse tuck box featuring a large product window to boost consumer interest and brand trust.", link: "/shapes-styles/tuck-boxes/reverse-tuck-with-customize-window" },
];

export function RelatedProductTuckBoxes() {
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
                        Related Products from Tuck Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium tuck box packaging solutions designed to protect and showcase your products.
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
