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
import walletBoxes from "@/assets/rigid-boxes/wallet-boxes-v2.webp";
import flipTopBoxes from "@/assets/rigid-boxes/flip-top-boxes-v2.webp";
import rigidGiftBoxes from "@/assets/rigid-boxes/rigid-gift-boxes-v2.webp";
import creditCardBoxes from "@/assets/rigid-boxes/credit-card-boxes-v2.webp";
import rigidSetupBoxes from "@/assets/rigid-boxes/rigid-setup-boxes-v2.webp";
import ribbonBoxes from "@/assets/rigid-boxes/ribbon-boxes-v2.webp";
import magneticClosureBoxes from "@/assets/rigid-boxes/magnetic-closure-boxes-v2.webp";
import rigidPaperBoxes from "@/assets/rigid-boxes/rigid-paper-boxes-v2.webp";
import flipTopMagneticClosure from "@/assets/rigid-boxes/flip-top-magnetic-closure-v2.webp";

// Related products from Rigid Boxes category
const relatedProducts = [
    { name: "Wallet Boxes", image: walletBoxes, description: "Premium wallet packaging featuring luxury finishes and protective inserts for a high-end retail presentation", link: "/shapes-styles/rigid-boxes/wallet-boxes" },
    { name: "Flip Top Boxes", image: flipTopBoxes, description: "Elegant flip-top rigid boxes with magnetic closures and sophisticated designs for premium gift packaging", link: "/shapes-styles/rigid-boxes/flip-top-boxes" },
    { name: "Rigid Gift Boxes", image: rigidGiftBoxes, description: "Luxury gift box solutions handcrafted with durable board and custom finishes to elevate your brand identity", link: "/shapes-styles/rigid-boxes/rigid-gift-boxes" },
    { name: "Credit Card Boxes", image: creditCardBoxes, description: "Secure credit card packaging with custom inserts and professional branding for financial products", link: "/shapes-styles/rigid-boxes/credit-card-boxes" },
    { name: "Rigid Setup Boxes", image: rigidSetupBoxes, description: "High-end setup boxes offering superior structural integrity and a premium unboxing experience for luxury items", link: "/shapes-styles/rigid-boxes/rigid-setup-boxes" },
    { name: "Ribbon Boxes", image: ribbonBoxes, description: "Decorative ribbon closure boxes perfect for special gift presentations and luxury brand storytelling", link: "/shapes-styles/rigid-boxes/ribbon-boxes" },
    { name: "Magnetic Closure Boxes", image: magneticClosureBoxes, description: "Premium magnetic closure packaging combining sleek aesthetics with functional security for high-value goods", link: "/shapes-styles/rigid-boxes/magnetic-closure-boxes" },
    { name: "Rigid Paper Boxes", image: rigidPaperBoxes, description: "Durable rigid paperboard boxes designed for maximum protection and elegant retail shelf presence", link: "/shapes-styles/rigid-boxes/rigid-paper-boxes" },
    { name: "Flip Top Boxes With Magnetic Closure", image: flipTopMagneticClosure, description: "Flip-top boxes with secure magnetic seals providing a refined and modern packaging solution for tech and gifts", link: "/shapes-styles/rigid-boxes/flip-top-boxes-with-magnetic-closure" },
];

export function RelatedProductRigidBoxes() {
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
                        Related Products from Rigid Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium rigid boxes designed to protect and showcase your products with elegance.
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
                                                            <h3 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
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
                                                        <h3 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
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
