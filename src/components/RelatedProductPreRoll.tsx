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
import hempPreRollBoxes from "@/assets/pre-roll-boxes/hemp-pre-roll-boxes.webp";
import preRollDisplayBoxes from "@/assets/pre-roll-boxes/custom-pre-roll-display-boxes.webp";
import preRollLabels from "@/assets/pre-roll-boxes/pre-roll-packaging-labels.webp";
import luxuryPreRollPackaging from "@/assets/pre-roll-boxes/luxury-pre-roll-packaging.webp";
import preRollConePackaging from "@/assets/pre-roll-boxes/custom-pre-roll-cone-packaging.webp";
import preRollJointBoxes from "@/assets/pre-roll-boxes/pre-roll-joint-boxes.webp";
import childResistantPreRollBox from "@/assets/pre-roll-boxes/child-resistant-pre-roll-box.webp";

// Related products from Pre Roll Boxes category
const relatedProducts = [
    { name: "Hemp Pre Roll Boxes", image: hempPreRollBoxes, description: "Eco-friendly packaging for hemp pre-rolls featuring sustainable materials and organic-style custom graphics", link: "/industries/pre-roll-boxes/hemp-pre-roll-boxes" },
    { name: "Custom Pre Roll Display Boxes", image: preRollDisplayBoxes, description: "Retail display boxes optimized for counters featuring eye-catching tiers and sturdy marketing headers", link: "/industries/pre-roll-boxes/custom-pre-roll-display-boxes" },
    { name: "Pre Roll Packaging Labels", image: preRollLabels, description: "Custom labels for branding and compliance featuring durable adhesives and high-resolution legal text", link: "/industries/pre-roll-boxes/pre-roll-packaging-labels" },
    { name: "Luxury Pre Roll Packaging", image: luxuryPreRollPackaging, description: "Premium rigid boxes for a high-end experience featuring magnetic closures and custom-fitted foam inserts", link: "/industries/pre-roll-boxes/luxury-pre-roll-packaging" },
    { name: "Custom Pre Roll Cone Packaging", image: preRollConePackaging, description: "Protective cardboard or plastic tubes for pre-roll cones featuring airtight seals and opaque brand colors", link: "/industries/pre-roll-boxes/custom-pre-roll-cone-packaging" },
    { name: "Pre Roll Joint Boxes", image: preRollJointBoxes, description: "Classic cigarette-style boxes for joints featuring unique flip-top lids and premium tactile print effects", link: "/industries/pre-roll-boxes/pre-roll-joint-boxes" },
    { name: "Child Resistant Pre Roll Box", image: childResistantPreRollBox, description: "Safety-first packaging for compliance featuring certified child-resistant locks and durable outer shells", link: "/industries/pre-roll-boxes/child-resistant-pre-roll-box" },
];

export function RelatedProductPreRoll() {
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
                        Related Pre-Roll Packaging
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium pre-roll packaging solutions designed to protect your goods and stay compliant.
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

