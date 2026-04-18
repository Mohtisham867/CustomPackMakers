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
import candleBoxes from "@/assets/window-packaging/candle-boxes-with-window.webp";
import gableBoxes from "@/assets/window-packaging/gable-boxes-with-window.webp";
import halloweenBoxes from "@/assets/window-packaging/halloween-window-boxes.webp";
import soapBoxes from "@/assets/window-packaging/soap-boxes-with-window.webp";
import pillowBoxes from "@/assets/window-packaging/pillow-boxes-with-window.webp";
import kraftBoxes from "@/assets/window-packaging/kraft-paper-boxes-with-window.webp";
import candyBoxes from "@/assets/window-packaging/candy-boxes-with-window.webp";
import cookieBoxes from "@/assets/window-packaging/cookie-boxes-with-window.webp";

// Related products from Window Packaging category
const relatedProducts = [
    { name: "Candle Boxes With Window", image: candleBoxes, description: "Premium candle visibility, fragrance protection, and rigid window panes for luxury presentation.", link: "/shapes-styles/window-packaging/candle-boxes-with-window" },
    { name: "Gable Boxes with Window", image: gableBoxes, description: "Easy-carry handles, takeout/gift readiness, and transparent food-safe windows.", link: "/shapes-styles/window-packaging/gable-boxes-with-window" },
    { name: "Halloween Window Boxes", image: halloweenBoxes, description: "Festive themed packaging with die-cut spooky windows for seasonal display.", link: "/shapes-styles/window-packaging/halloween-window-boxes" },
    { name: "Soap Boxes With Window", image: soapBoxes, description: "Organic soap visibility and moisture-resistant packaging that lets natural aromas shine.", link: "/shapes-styles/window-packaging/soap-boxes-with-window" },
    { name: "Pillow Boxes With Window", image: pillowBoxes, description: "Elegant retail display with compact gifting shapes and clear center windows.", link: "/shapes-styles/window-packaging/pillow-boxes-with-window" },
    { name: "Kraft Paper Boxes With Window", image: kraftBoxes, description: "Eco-friendly aesthetics with rustic charm and transparent film for organic goods.", link: "/shapes-styles/window-packaging/kraft-paper-boxes-with-window" },
    { name: "Candy Boxes With Window", image: candyBoxes, description: "Sweet treats visibility with food-grade transparent sheets to boost impulse buys.", link: "/shapes-styles/window-packaging/candy-boxes-with-window" },
    { name: "Cookie Boxes With Window", image: cookieBoxes, description: "Bakery freshness with barrier films and mouth-watering transparent presentation.", link: "/shapes-styles/window-packaging/cookie-boxes-with-window" },
];

export function RelatedProductWindowPackaging() {
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
                        Related Products in Window Packaging
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of innovative window packaging solutions designed to showcase your products seamlessly.
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
