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

// Import Gable Box Images
import kraftGableBox from "@/assets/shape-style/gable-boxes/kraft-gable-boxes.webp";
import christmasGableBox from "@/assets/shape-style/gable-boxes/christmas-gable-boxes.webp";
import whiteGableBox from "@/assets/shape-style/gable-boxes/white-gable-boxes.webp";
import largeGableBox from "@/assets/shape-style/gable-boxes/large-gable-boxes.webp";
import gableGiftBox from "@/assets/shape-style/gable-boxes/gable-gift-boxes.webp";
import blackGableBox from "@/assets/shape-style/gable-boxes/black-gable-boxes.webp";
import gableBoxWindow from "@/assets/shape-style/gable-boxes/gable-boxes-with-window.webp";
import gableBag from "@/assets/shape-style/gable-boxes/gable-bags.webp";
import blueGableBox from "@/assets/shape-style/gable-boxes/blue-gable-boxes.webp";
import cardboardGableBox from "@/assets/shape-style/gable-boxes/cardboard-gable-boxes.webp";
import redGableBox from "@/assets/shape-style/gable-boxes/red-gable-boxes.webp";
import kraftPaperGableBox from "@/assets/shape-style/gable-boxes/kraft-paper-gable-box.webp";

const relatedProducts = [
    { name: "Kraft Gable Boxes", image: kraftGableBox, description: "Natural eco-friendly kraft gable boxes featuring a rustic charm and durable eco-conscious material", link: "/shapes-styles/gable-boxes/kraft-gable-boxes" },
    { name: "Christmas Gable Boxes", image: christmasGableBox, description: "Festive holiday themed gable packing designed with seasonal motifs to delight your gift recipients", link: "/shapes-styles/gable-boxes/christmas-gable-boxes" },
    { name: "White Gable Boxes", image: whiteGableBox, description: "Clean and elegant white gable boxes offering a versatile professional look for any retail product", link: "/shapes-styles/gable-boxes/white-gable-boxes" },
    { name: "Large Gable Boxes", image: largeGableBox, description: "Extra spacious gable boxes for larger items featuring reinforced bases and sturdy carrying handles", link: "/shapes-styles/gable-boxes/large-gable-boxes" },
    { name: "Gable Gift Boxes", image: gableGiftBox, description: "Perfect for gifting and special occasions featuring unique shapes and premium customizable branding", link: "/shapes-styles/gable-boxes/gable-gift-boxes" },
    { name: "Black Gable Boxes", image: blackGableBox, description: "Premium black finish for a luxury look designed for high-end boutique retail and gift presentations", link: "/shapes-styles/gable-boxes/black-gable-boxes" },
    { name: "Gable Boxes with Window", image: gableBoxWindow, description: "Showcase your product with a clear window inset perfect for bakery items and visual retail display", link: "/shapes-styles/gable-boxes/gable-boxes-with-window" },
    { name: "Gable Bags", image: gableBag, description: "Convenient bag-style gable packaging designed for easy carry and stylish retail shelf presentation", link: "/shapes-styles/gable-boxes/gable-bags" },
    { name: "Blue Gable Boxes", image: blueGableBox, description: "Vibrant blue boxes to stand out on retail shelves featuring high-quality print and durable board", link: "/shapes-styles/gable-boxes/blue-gable-boxes" },
    { name: "Cardboard Gable Boxes", image: cardboardGableBox, description: "Sturdy cardboard construction offering maximum protection for food items and small retail products", link: "/shapes-styles/gable-boxes/cardboard-gable-boxes" },
    { name: "Red Gable Boxes", image: redGableBox, description: "Bold red gable boxes for high visibility and festive impact perfect for seasonal retail promotions", link: "/shapes-styles/gable-boxes/red-gable-boxes" },
    { name: "Kraft Paper Gable Box", image: kraftPaperGableBox, description: "Simple and classic kraft paper design engineered for sustainability and professional minimalist style", link: "/shapes-styles/gable-boxes/kraft-paper-gable-box" },
];

export function RelatedProductGableBoxes() {
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
                        Related Gable Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our full collection of premium gable packaging solutions designed for portability and style.
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
