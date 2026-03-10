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

// Import Hang Tag Images
import customDoorHangers from "@/assets/hang-tags/custom-door-hangers.webp";
import christmasTags from "@/assets/hang-tags/christmas-tags.webp";
import giftTags from "@/assets/hang-tags/gift-tags.webp";
import paperTags from "@/assets/hang-tags/paper-tags.webp";
import clothingHangTags from "@/assets/hang-tags/clothing-hang-tags.webp";
import jewelryHangTags from "@/assets/hang-tags/jewelry-hang-tags.webp";
import customBookmarks from "@/assets/hang-tags/custom-bookmarks.webp";
import shippingTags from "@/assets/hang-tags/shipping-tags.webp";

const relatedProducts = [
    { name: "Custom Door Hangers", image: customDoorHangers, description: "Professional door hangers for marketing and alerts designed with durable cardstock and custom die-cut holes", link: "/shapes-styles/hang-tags/custom-door-hangers" },
    { name: "Christmas Tags", image: christmasTags, description: "Festive tags for holiday gifts and products featuring seasonal graphics and premium twine attachment holes", link: "/shapes-styles/hang-tags/christmas-tags" },
    { name: "Gift Tags", image: giftTags, description: "Personalized tags for special occasions designed to add a thoughtful touch to any gift or branded package", link: "/shapes-styles/hang-tags/gift-tags" },
    { name: "Paper Tags", image: paperTags, description: "Versatile paper tags for retail and labeling featuring high-quality print surfaces and multiple string options", link: "/shapes-styles/hang-tags/paper-tags" },
    { name: "Clothing Hang Tags", image: clothingHangTags, description: "Brand-enhancing tags for apparel and garments designed to convey quality and vital brand information at a glance", link: "/shapes-styles/hang-tags/clothing-hang-tags" },
    { name: "Jewelry Hang Tags", image: jewelryHangTags, description: "Elegant small tags for jewelry items featuring precise die-cutting and smooth surfaces for price or brand marks", link: "/shapes-styles/hang-tags/jewelry-hang-tags" },
    { name: "Custom Bookmarks", image: customBookmarks, description: "Durable and creative bookmarks for readers featuring vibrant double-sided printing and premium protective coatings", link: "/shapes-styles/hang-tags/custom-bookmarks" },
    { name: "Shipping Tags", image: shippingTags, description: "Robust tags for identifying shipping items engineered to withstand transit rigors with reinforced attachment points", link: "/shapes-styles/hang-tags/shipping-tags" },
];

export function RelatedProductHangTags() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    return (
        <section className="py-8 bg-accent/20">
            <div className="container mx-auto px-[5vw]">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Related Hang Tags
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our full collection of premium hang tags designed to elevate your brand identity.
                    </p>
                </div>

                <div className="relative px-4">
                    <Carousel
                        setApi={setApi}
                        opts={{ align: "start", loop: true }}
                        plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {relatedProducts.map((product, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
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
                                    className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"}`}
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
