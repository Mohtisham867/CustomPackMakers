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
    { name: "Custom Auto Bottom Gable Bags", image: customAutoBottomGableBags, description: "Secure and convenient custom gable bags featuring an auto bottom for quick assembly and easy loading", link: "/industries/custom-paper-bags/custom-auto-bottom-gable-bags" },
    { name: "Custom Paper Food Bags", image: customPaperFoodBags, description: "Safe and hygienic paper bags designed for all types of food items with grease-resistant material", link: "/industries/custom-paper-bags/custom-paper-food-bags" },
    { name: "Christmas Paper Bags", image: christmasPaperBags, description: "Festive paper bags designed for Christmas gifts and treats featuring vibrant holiday-themed artwork", link: "/industries/custom-paper-bags/christmas-paper-bags" },
    { name: "Christmas Gift Bags", image: christmasGiftBags, description: "Beautifully designed gift bags for the holiday season with premium finishes and seasonal graphics", link: "/industries/custom-paper-bags/christmas-gift-bags" },
    { name: "Custom Brown Paper Bags", image: customBrownPaperBags, description: "Classic and eco-friendly brown paper bags crafted from high-quality durable and recycled materials", link: "/industries/custom-paper-bags/custom-brown-paper-bags" },
    { name: "Paper Shopping Bags", image: paperShoppingBags, description: "Durable paper shopping bags for retail and events featuring reinforced handles and sturdy bases", link: "/industries/custom-paper-bags/paper-shopping-bags" },
    { name: "White Paper Bags", image: whitePaperBags, description: "Clean and versatile white paper bags for any occasion with a smooth surface for custom branding", link: "/industries/custom-paper-bags/white-paper-bags" },
    { name: "Paper Gift Bags", image: paperGiftBags, description: "Elegant paper bags for packaging gifts for any special event with a premium feel and appearance", link: "/industries/custom-paper-bags/paper-gift-bags" },
    { name: "Paper Lunch Bags", image: paperLunchBags, description: "Standard paper bags perfect for lunch packaging and small grocery items with reliable strength", link: "/industries/custom-paper-bags/paper-lunch-bags" },
    { name: "Fries Bag", image: friesBag, description: "Specialized grease-resistant paper bags for serving french fries and hot snacks in food service", link: "/industries/custom-paper-bags/fries-bag" },
    { name: "Glassine Bags", image: glassineBags, description: "Grease-resistant glassine bags perfect for bakery and confectionery with a smooth translucent finish", link: "/industries/custom-paper-bags/glassine-bags" },
    { name: "Candy Bags", image: candyBags, description: "Colorful and fun bags for candies and sweets featuring attractive designs to appeal to customers", link: "/industries/custom-paper-bags/candy-bags" },
    { name: "Bakery Bags", image: bakeryBags, description: "Freshness-preserving bags for bread and pastries designed for sustainable food retail packaging", link: "/industries/custom-paper-bags/bakery-bags" },
    { name: "Cookie Bags", image: cookieBags, description: "Attractive bags for packaging cookies and biscuits with a protective lining to maintain freshness", link: "/industries/custom-paper-bags/cookie-bags" },
    { name: "Gift Bags", image: giftBags, description: "General purpose gift bags for various occasions featuring durable construction and elegant styles", link: "/industries/custom-paper-bags/gift-bags" },
    { name: "Carry Out Bags", image: carryOutBags, description: "Sturdy carry-out bags for restaurants and cafes designed to transport food containers safely", link: "/industries/custom-paper-bags/carry-out-bags" },
    { name: "Exotic Weed Bag", image: exoticWeedBag, description: "Custom packaging bags for exotic weed products featuring high-impact graphics and smell-proof seals", link: "/industries/custom-paper-bags/exotic-weed-bag" },
    { name: "Paper Bags With Handles", image: paperBagsWithHandles, description: "Convenient paper bags with durable handles designed for retail shopping and premium gift-giving", link: "/industries/custom-paper-bags/paper-bags-with-handles" },
];

export function RelatedProductPaperBags() {
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
                        Explore our complete range of premium custom paper bags designed to protect and showcase your items beautifully.
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
