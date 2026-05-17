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

import customAutoBottomGableBags from "@/assets/shape-style/custom-paper-bags/custom-auto-bottom-gable-bags.webp";
import customPaperFoodBags from "@/assets/shape-style/custom-paper-bags/custom-paper-food-bags.webp";
import christmasPaperBags from "@/assets/shape-style/custom-paper-bags/christmas-paper-bags.webp";
import christmasGiftBags from "@/assets/shape-style/custom-paper-bags/christmas-gift-bags.webp";
import customBrownPaperBags from "@/assets/shape-style/custom-paper-bags/custom-brown-paper-bags.webp";
import paperShoppingBags from "@/assets/shape-style/custom-paper-bags/paper-shopping-bags.webp";
import whitePaperBags from "@/assets/shape-style/custom-paper-bags/white-paper-bags.webp";
import paperGiftBags from "@/assets/shape-style/custom-paper-bags/paper-gift-bags.webp";
import paperLunchBags from "@/assets/shape-style/custom-paper-bags/paper-lunch-bags.webp";
import friesBag from "@/assets/shape-style/custom-paper-bags/fries-bag.webp";
import glassineBags from "@/assets/shape-style/custom-paper-bags/glassine-bags.webp";
import candyBags from "@/assets/shape-style/custom-paper-bags/candy-bags.webp";
import bakeryBags from "@/assets/shape-style/custom-paper-bags/bakery-bags.webp";
import cookieBags from "@/assets/shape-style/custom-paper-bags/cookie-bags.webp";
import giftBags from "@/assets/shape-style/custom-paper-bags/gift-bags.webp";
import carryOutBags from "@/assets/shape-style/custom-paper-bags/carry-out-bags.webp";
import exoticWeedBag from "@/assets/shape-style/custom-paper-bags/exotic-weed-bag.webp";
import paperBagsWithHandles from "@/assets/shape-style/custom-paper-bags/paper-bags-with-handles.webp";

const relatedProducts = [
    { name: "Custom Auto Bottom Gable Bags", image: customAutoBottomGableBags, link: "/shapes-styles/custom-paper-bags/custom-auto-bottom-gable-bags", description: "Secure and convenient custom gable bags featuring an auto bottom for quick assembly and easy loading" },
    { name: "Custom Paper Food Bags", image: customPaperFoodBags, link: "/shapes-styles/custom-paper-bags/custom-paper-food-bags", description: "Safe and hygienic paper bags designed for all types of food items with grease-resistant material" },
    { name: "Christmas Paper Bags", image: christmasPaperBags, link: "/shapes-styles/custom-paper-bags/christmas-paper-bags", description: "Festive paper bags designed for Christmas gifts and treats featuring vibrant holiday-themed artwork" },
    { name: "Christmas Gift Bags", image: christmasGiftBags, link: "/shapes-styles/custom-paper-bags/christmas-gift-bags", description: "Beautifully designed gift bags for the holiday season with premium finishes and seasonal graphics" },
    { name: "Custom Brown Paper Bags", image: customBrownPaperBags, link: "/shapes-styles/custom-paper-bags/custom-brown-paper-bags", description: "Classic and eco-friendly brown paper bags crafted from high-quality durable and recycled materials" },
    { name: "Paper Shopping Bags", image: paperShoppingBags, link: "/shapes-styles/custom-paper-bags/paper-shopping-bags", description: "Durable paper shopping bags for retail and events featuring reinforced handles and sturdy bases" },
    { name: "White Paper Bags", image: whitePaperBags, link: "/shapes-styles/custom-paper-bags/white-paper-bags", description: "Clean and versatile white paper bags for any occasion with a smooth surface for custom branding" },
    { name: "Paper Gift Bags", image: paperGiftBags, link: "/shapes-styles/custom-paper-bags/paper-gift-bags", description: "Elegant paper bags for packaging gifts for any special event with a premium feel and appearance" },
    { name: "Paper Lunch Bags", image: paperLunchBags, link: "/shapes-styles/custom-paper-bags/paper-lunch-bags", description: "Standard paper bags perfect for lunch packaging and small grocery items with reliable strength" },
    { name: "Fries Bag", image: friesBag, link: "/shapes-styles/custom-paper-bags/fries-bag", description: "Specialized grease-resistant paper bags for serving french fries and hot snacks in food service" },
    { name: "Glassine Bags", image: glassineBags, link: "/shapes-styles/custom-paper-bags/glassine-bags", description: "Grease-resistant glassine bags perfect for bakery and confectionery with a smooth translucent finish" },
    { name: "Candy Bags", image: candyBags, link: "/shapes-styles/custom-paper-bags/candy-bags", description: "Colorful and fun bags for candies and sweets featuring attractive designs to appeal to customers" },
    { name: "Bakery Bags", image: bakeryBags, link: "/shapes-styles/custom-paper-bags/bakery-bags", description: "Freshness-preserving bags for bread and pastries designed for sustainable food retail packaging" },
    { name: "Cookie Bags", image: cookieBags, link: "/shapes-styles/custom-paper-bags/cookie-bags", description: "Attractive bags for packaging cookies and biscuits with a protective lining to maintain freshness" },
    { name: "Gift Bags", image: giftBags, link: "/shapes-styles/custom-paper-bags/gift-bags", description: "General purpose gift bags for various occasions featuring durable construction and elegant styles" },
    { name: "Carry Out Bags", image: carryOutBags, link: "/shapes-styles/custom-paper-bags/carry-out-bags", description: "Sturdy carry-out bags for restaurants and cafes designed to transport food containers safely" },
    { name: "Exotic Weed Bag", image: exoticWeedBag, link: "/shapes-styles/custom-paper-bags/exotic-weed-bag", description: "Custom packaging bags for exotic weed products featuring high-impact graphics and smell-proof seals" },
    { name: "Paper Bags With Handles", image: paperBagsWithHandles, link: "/shapes-styles/custom-paper-bags/paper-bags-with-handles", description: "Convenient paper bags with durable handles designed for retail shopping and premium gift-giving" },
];

export function RelatedProductCustomPaperBags() {
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
                        Related Products from Custom Paper Bags
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium paper bag packaging solutions designed to protect and showcase your products.
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
