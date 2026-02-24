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

// Import Candy Product Images
import gummyBoxes from "@/assets/candy-products/custom-gummy-boxes.webp";
import lollipopBoxes from "@/assets/candy-products/custom-lollipop-boxes.webp";
import hardCandyBoxes from "@/assets/candy-products/custom-hard-candy-boxes.webp";
import chocolateBoxes from "@/assets/candy-products/chocolate-boxes.webp";
import candyAppleBoxes from "@/assets/candy-products/candy-apple-boxes.webp";
import candyBoxesWindow from "@/assets/candy-products/candy-boxes-window.webp";
import christmasCandyBoxes from "@/assets/candy-products/christmas-candy-boxes.webp";
import mylarBagsCandies from "@/assets/candy-products/mylar-bags-candies.webp";
import candyDisplayBoxes from "@/assets/candy-products/candy-display-boxes.webp";

const relatedProducts = [
    { name: "Custom Gummy Boxes", image: gummyBoxes, description: "Vibrant packaging for gummy candies featuring eye-catching designs and moisture-resistant materials", link: "/industries/custom-candy-boxes/custom-gummy-boxes" },
    { name: "Custom Lollipop Boxes", image: lollipopBoxes, description: "Fun and colorful packaging for lollipops and suckers with secure stick holders and playful graphics", link: "/industries/custom-candy-boxes/custom-lollipop-boxes" },
    { name: "Custom Hard Candy Boxes", image: hardCandyBoxes, description: "Durable boxes for hard candies with elegant finishes and protective compartments for freshness", link: "/industries/custom-candy-boxes/custom-hard-candy-boxes" },
    { name: "Chocolate Boxes", image: chocolateBoxes, description: "Premium chocolate packaging with luxurious presentation and temperature-resistant construction", link: "/industries/custom-candy-boxes/chocolate-boxes" },
    { name: "Candy Apple Boxes", image: candyAppleBoxes, description: "Protective packaging for caramel and candy apples with secure bases preventing tipping and damage", link: "/industries/custom-candy-boxes/candy-apple-boxes" },
    { name: "Candy Boxes With Window", image: candyBoxesWindow, description: "Display windows to showcase your colorful candies while maintaining freshness and product protection", link: "/industries/custom-candy-boxes/candy-boxes-window" },
    { name: "Custom Christmas Candy Boxes", image: christmasCandyBoxes, description: "Festive holiday candy packaging for seasonal treats featuring cheerful designs and gift-ready presentation", link: "/industries/custom-candy-boxes/custom-christmas-candy-boxes" },
    { name: "Mylar Bags for Candies", image: mylarBagsCandies, description: "Resealable mylar pouches for candy freshness with barrier protection and attractive printed designs", link: "/industries/custom-candy-boxes/mylar-bags-for-candies" },
    { name: "Custom Candy Display Boxes", image: candyDisplayBoxes, description: "Retail display boxes for candy merchandising with organized compartments and eye-level visibility", link: "/industries/custom-candy-boxes/custom-candy-display-boxes" },
];

export function RelatedProductCandy() {
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
                        Related Candy Products
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Discover our full range of premium candy packaging solutions designed to preserve freshness and enhance shelf appeal.
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
