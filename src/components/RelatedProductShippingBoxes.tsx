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

// Images
import chineseTakeoutBox from "@/assets/shape-style/shipping-boxes/chinese-takeout-boxes.webp";
import hempShippingBox from "@/assets/shape-style/shipping-boxes/hemp-shipping-boxes.webp";
import doubleWallTuck from "@/assets/shape-style/shipping-boxes/double-wall-tuck-front.webp";
import whiteShippingBox from "@/assets/shape-style/shipping-boxes/white-shipping-boxes.webp";
import deliveryBox from "@/assets/shape-style/shipping-boxes/delivery-boxes.webp";
import candleShippingBox from "@/assets/shape-style/shipping-boxes/candle-shipping-boxes.webp";
import hatShippingBox from "@/assets/shape-style/shipping-boxes/hat-shipping-boxes.webp";
import box8x6x4Box from "@/assets/shape-style/shipping-boxes/8x6x4-shipping-boxes.webp";
import box5x5x5Box from "@/assets/shape-style/shipping-boxes/5x5x5-boxes.webp";
import wineShippingBox from "@/assets/shape-style/shipping-boxes/wine-shipping-boxes.webp";
import longNarrowBox from "@/assets/shape-style/shipping-boxes/long-narrow-shipping-boxes.webp";
import shippingLabelsBox from "@/assets/shape-style/shipping-boxes/shipping-labels.webp";

// Related products from Shipping Boxes category
const relatedProducts = [
    { name: "Chinese Takeout Boxes", image: chineseTakeoutBox, description: "Classic folded design with wire handle for easy carry and leak-resistant coating for food safety", link: "/shapes-styles/shipping-boxes/chinese-takeout-boxes" },
    { name: "Double Wall Tuck Front", image: doubleWallTuck, description: "Extra durability with reinforced walls for heavy items ensuring safe transport and stackable retail displays", link: "/shapes-styles/shipping-boxes/double-wall-tuck-front" },
    { name: "Hemp Shipping Boxes", image: hempShippingBox, description: "Sustainable and sturdy hemp-based material providing an eco-friendly alternative for conscious brands", link: "/shapes-styles/shipping-boxes/hemp-shipping-boxes" },
    { name: "Candle Shipping Boxes", image: candleShippingBox, description: "Protective packaging specifically for fragile candles featuring corrugated board to prevent heat damage", link: "/shapes-styles/shipping-boxes/candle-shipping-boxes" },
    { name: "Hat Shipping Boxes", image: hatShippingBox, description: "Spacious boxes to keep hats in perfect shape and prevent crushing during complex logistic processes", link: "/shapes-styles/shipping-boxes/hat-shipping-boxes" },
    { name: "8x6x4 Shipping Boxes", image: box8x6x4Box, description: "Standard size ideal for small to medium retail items offering reliable strength for daily parcel shipping", link: "/shapes-styles/shipping-boxes/8x6x4-shipping-boxes" },
    { name: "5x5x5 Boxes", image: box5x5x5Box, description: "Perfect cube shape for compact secure shipping of small gadgets and delicate electronic accessories", link: "/shapes-styles/shipping-boxes/5x5x5-boxes" },
    { name: "Wine Shipping Boxes", image: wineShippingBox, description: "Designed to protect bottles during transit with specialized inserts for secure individual bottle placement", link: "/shapes-styles/shipping-boxes/wine-shipping-boxes" },
    { name: "Long Narrow Shipping Boxes", image: longNarrowBox, description: "Ideal for elongated items like posters or tools providing longitudinal support and reinforced ends", link: "/shapes-styles/shipping-boxes/long-narrow-shipping-boxes" },
    { name: "Shipping Labels", image: shippingLabelsBox, description: "Custom branded labels for professional delivery featuring high-quality adhesive and clear informational layout", link: "/shapes-styles/shipping-boxes/shipping-labels" },
    { name: "White Shipping Boxes", image: whiteShippingBox, description: "Clean, professional white finish for premium brands offering a sleek aesthetic for e-commerce deliveries", link: "/shapes-styles/shipping-boxes/white-shipping-boxes" },
    { name: "Delivery Boxes", image: deliveryBox, description: "Reliable standardized boxes for all logistics needs crafted from heavy-duty corrugated cardboard for safety", link: "/shapes-styles/shipping-boxes/delivery-boxes" },
];

export function RelatedProductShippingBoxes() {
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
                        Related Products from Shipping Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium shipping and mailing solutions designed to protect and showcase your products.
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
                                                        <div className="aspect-[4/3] w-full bg-gray-50 overflow-hidden relative">
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
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
                                                    <div className="aspect-[4/3] w-full bg-gray-50 overflow-hidden relative">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
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
