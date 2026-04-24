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

// Import product images
import christmasGiftBoxes from "@/assets/holiday-boxes/christmas-gift-boxes.webp";
import halloweenBoxes from "@/assets/holiday-boxes/halloween-boxes.webp";
import holidayGiftBoxes from "@/assets/holiday-boxes/holiday-gift-boxes.webp";
import thanksgivingBoxes from "@/assets/holiday-boxes/thanksgiving-boxes.webp";
import thanksgivingFoodBoxes from "@/assets/holiday-boxes/Thanksgiving Food Boxes.webp";
import valentinesBoxes from "@/assets/holiday-boxes/valentines-boxes.webp";
import halloweenWindowBoxes from "@/assets/holiday-boxes/Halloween Window Boxes.webp";
import christmasPillowBoxes from "@/assets/holiday-boxes/Christmas pillow.webp";

// Related products from Holiday Boxes category
const relatedProducts = [
    { name: "Christmas Gift Boxes", image: christmasGiftBoxes, description: "Festive boxes perfect for holiday gifting featuring vibrant seasonal artwork and premium textured finishes", link: "/industries/holiday-boxes/christmas-gift-boxes" },
    { name: "Custom Halloween Boxes", image: halloweenBoxes, description: "Spooky and fun packaging for Halloween treats designed with high-impact graphics and durable construction", link: "/industries/holiday-boxes/custom-halloween-boxes" },
    { name: "Holiday Gift Boxes", image: holidayGiftBoxes, description: "Elegant boxes for any holiday celebration featuring versatile designs and premium customizable branding options", link: "/industries/holiday-boxes/holiday-gift-boxes" },
    { name: "Thanksgiving Boxes", image: thanksgivingBoxes, description: "Warm and inviting packaging for Thanksgiving celebrations featuring autumnal themes and sturdy construction", link: "/industries/holiday-boxes/thanksgiving-boxes" },
    { name: "Thanksgiving Food Boxes", image: thanksgivingFoodBoxes, description: "Durable boxes for Thanksgiving feasts designed for safe transport of baked goods and festive food items", link: "/industries/holiday-boxes/thanksgiving-food-boxes" },
    { name: "Custom Valentines Boxes", image: valentinesBoxes, description: "Romantic packaging for Valentine's Day gifts featuring heart-shaped die-cuts and premium soft-touch finishes", link: "/industries/holiday-boxes/custom-valentines-boxes" },
    { name: "Halloween Window Boxes", image: halloweenWindowBoxes, description: "Showcase your spooky treats with window boxes featuring clear PET windows and vibrant Halloween graphics", link: "/industries/holiday-boxes/halloween-window-boxes" },
    { name: "Christmas Pillow Boxes", image: christmasPillowBoxes, description: "Charming pillow boxes for small holiday favors featuring unique curved edges and festive holiday patterns", link: "/industries/holiday-boxes/christmas-pillow-boxes" },
];

export function RelatedProductHoliday() {
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
                        Related Products from Holiday Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of festive packaging solutions designed to celebrate and elevate your holiday products.
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
