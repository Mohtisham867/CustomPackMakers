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
import favorBoxes from "@/assets/industry/gift-boxes/favor_boxes_square.webp";
import giftCardBoxes from "@/assets/industry/gift-boxes/Gift Card Boxes.webp";
import customPrintedGiftBoxes from "@/assets/industry/gift-boxes/Custom Printed Gift Boxes.webp";
import hempGiftBoxes from "@/assets/industry/gift-boxes/Hemp Gift Boxes.webp";
import cardboardGiftBoxes from "@/assets/industry/gift-boxes/Cardboard Gift Boxes.webp";
import chocolateGiftBoxes from "@/assets/industry/gift-boxes/Chocolate Gift Boxes.webp";
import giftTags from "@/assets/industry/gift-boxes/Gift Tags.webp";
import gableGiftBoxes from "@/assets/shape-style/gable-boxes/gable-gift-boxes.webp";

// Related products from Gift Boxes category
const relatedProducts = [
    { name: "Favor Boxes", image: favorBoxes, description: "Charming pillow boxes for party favors and gifts with easy assembly and elegant curved design.", link: "/industries/gift-boxes/favor-boxes" },
    { name: "Gift Card Boxes", image: giftCardBoxes, description: "Elegant sleeve and tray boxes for gift cards featuring premium finishes and secure closure.", link: "/industries/gift-boxes/gift-card-boxes" },
    { name: "Custom Printed Gift Boxes", image: customPrintedGiftBoxes, description: "High-end rigid boxes with custom printing offering luxurious presentation and durable construction.", link: "/industries/gift-boxes/custom-printed-gift-boxes" },
    { name: "Hemp Gift Boxes", image: hempGiftBoxes, description: "Eco-friendly hemp packaging for gifts featuring sustainable materials and natural aesthetic appeal.", link: "/industries/gift-boxes/hemp-gift-boxes" },
    { name: "Cardboard Gift Boxes", image: cardboardGiftBoxes, description: "Versatile cardboard boxes for any occasion with customizable sizes and attractive printing options.", link: "/industries/gift-boxes/cardboard-gift-boxes" },
    { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, description: "Deliciously designed boxes for chocolate gifts with protective inserts and premium presentation.", link: "/industries/gift-boxes/chocolate-gift-boxes" },
    { name: "Gift Tags", image: giftTags, description: "Custom tags to add a personal touch to your gifts with premium paper and elegant printing.", link: "/industries/gift-boxes/gift-tags" },
    { name: "Gable Gift Boxes", image: gableGiftBoxes, description: "Convenient handled boxes for easy gifting featuring sturdy construction and attractive designs.", link: "/industries/gift-boxes/gable-gift-boxes" },
];

export function RelatedProductGift() {
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
                        Related Products from Gift Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium gift packaging solutions designed to impress your recipients.
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
