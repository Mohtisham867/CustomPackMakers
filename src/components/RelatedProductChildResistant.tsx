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

// Import professional product images
import mylarBags from "@/assets/shape-style/child-resistant-packaging/child-resistant-mylar-bags.webp";
import bluntPackaging from "@/assets/shape-style/child-resistant-packaging/child-resistant-blunt-packaging.webp";
import cigaretteBoxes from "@/assets/shape-style/child-resistant-packaging/child-resistant-cigarette-boxes.webp";
import jointPackaging from "@/assets/shape-style/child-resistant-packaging/child-resistant-joint-packaging.webp";
import preRollBox from "@/assets/shape-style/child-resistant-packaging/child-resistant-pre-roll-box.webp";

// Related products from Child Resistant Packaging category
const relatedProducts = [
    {
        name: "Child Resistant Mylar Bags",
        image: mylarBags,
        description: "Secure, resealable mylar bags with certified child-resistant closures for safety and regulatory compliance.",
        slug: "/shapes-styles/child-resistant-packaging/child-resistant-mylar-bags"
    },
    {
        name: "Child Resistant Blunt Packaging",
        image: bluntPackaging,
        description: "Custom printed blunt boxes featuring press-and-release locking mechanisms for maximum safety and branding.",
        slug: "/shapes-styles/child-resistant-packaging/child-resistant-blunt-packaging"
    },
    {
        name: "Child Resistant Cigarette Boxes",
        image: cigaretteBoxes,
        description: "Durable cigarette style boxes with added child-safety locking features and high-quality custom printing.",
        slug: "/shapes-styles/child-resistant-packaging/child-resistant-cigarette-boxes"
    },
    {
        name: "Child Resistant Joint Packaging",
        image: jointPackaging,
        description: "Rigid tubes and cases designed to keep joints fresh and secure from children with innovative lock designs.",
        slug: "/shapes-styles/child-resistant-packaging/child-resistant-joint-packaging"
    },
    {
        name: "Child Resistant Pre Roll Box",
        image: preRollBox,
        description: "Premium pre-roll packaging with slide-locking mechanisms for maximum safety and sophisticated retail display.",
        slug: "/shapes-styles/child-resistant-packaging/child-resistant-pre-roll-box"
    },
];

export function RelatedProductChildResistant() {
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
                        Related Child Resistant Packaging
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium child-resistant packaging solutions designed for safety and compliance.
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
                                        <Link to={product.slug} className="block h-full">
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
