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

// Import professional product images for Pillow Boxes
import whitePillowBoxes from "@/assets/pillow-boxes/white_pillow_boxes.webp";
import smallPillowBoxes from "@/assets/pillow-boxes/small_pillow_boxes.webp";
import kraftPillowBoxes from "@/assets/pillow-boxes/kraft_pillow_boxes.webp";
import largePillowBoxes from "@/assets/pillow-boxes/large_pillow_boxes.webp";
import pillowBoxesWithHandle from "@/assets/pillow-boxes/pillow_boxes_with_handle.webp";
import blackPillowBoxes from "@/assets/pillow-boxes/black_pillow_boxes.webp";
import pillowBoxesWithWindow from "@/assets/pillow-boxes/pillow_boxes_with_window.webp";
import cardboardPillowBoxes from "@/assets/pillow-boxes/cardboard_pillow_boxes.webp";
import paperPillowBox from "@/assets/pillow-boxes/paper_pillow_box.webp";
import pillowGiftBoxes from "@/assets/pillow-boxes/pillow_gift_boxes.webp";

const relatedProducts = [
    { name: "White Pillow Boxes", image: whitePillowBoxes, description: "Clean and elegant white pillow boxes for weddings and gift favors with a smooth matte finish and effortless self-locking assembly.", link: "/shapes-styles/pillow-boxes/white-pillow-boxes" },
    { name: "Small Pillow Boxes", image: smallPillowBoxes, description: "Compact pillow boxes perfect for jewelry, candy, and small gifts providing a unique curved shape for memorable product presentation.", link: "/shapes-styles/pillow-boxes/small-pillow-boxes" },
    { name: "Kraft Pillow Boxes", image: kraftPillowBoxes, description: "Eco-friendly kraft paper pillow boxes with a rustic aesthetic, crafted from sustainable materials for environmentally conscious brands.", link: "/shapes-styles/pillow-boxes/kraft-pillow-boxes" },
    { name: "Large Pillow Boxes", image: largePillowBoxes, description: "Spacious pillow boxes for apparel and larger items, combining structural strength with an elegant curved design that stands out on shelves.", link: "/shapes-styles/pillow-boxes/large-pillow-boxes" },
    { name: "Pillow Boxes With Handle", image: pillowBoxesWithHandle, description: "Convenient pillow boxes with built-in carrying handles, perfect for retail gift shops and easy customer transport.", link: "/shapes-styles/pillow-boxes/pillow-boxes-with-handle" },
    { name: "Black Pillow Boxes", image: blackPillowBoxes, description: "Sophisticated black pillow boxes for premium packaging with a deep matte finish that conveys high-end luxury and exclusivity.", link: "/shapes-styles/pillow-boxes/black-pillow-boxes" },
    { name: "Pillow Boxes With Window", image: pillowBoxesWithWindow, description: "Showcase your product with a clear die-cut window, allowing customers to preview quality contents while keeping items secure.", link: "/shapes-styles/pillow-boxes/pillow-boxes-with-window" },
    { name: "Cardboard Pillow Boxes", image: cardboardPillowBoxes, description: "Durable cardboard construction for secure shipping and retail display, providing excellent protection for fragile goods.", link: "/shapes-styles/pillow-boxes/cardboard-pillow-boxes" },
    { name: "Paper Pillow Box", image: paperPillowBox, description: "Lightweight paper pillow boxes for simple packaging needs, offering a cost-effective and attractively branded solution.", link: "/shapes-styles/pillow-boxes/paper-pillow-box" },
    { name: "Pillow Gift Boxes", image: pillowGiftBoxes, description: "Decorative pillow boxes designed specially for gifting with festive prints and premium cardstock for an unforgettable unboxing.", link: "/shapes-styles/pillow-boxes/pillow-gift-boxes" },
];

export function RelatedProductPillowBoxes() {
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
                        Explore More Pillow Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Discover our comprehensive range of customizable pillow boxes built for retail gifting, jewelry, apparel, and premium brand experiences.
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
