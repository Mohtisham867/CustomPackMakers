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
import businessCards from "@/assets/industry/retail-boxes/Custom Business Cards.webp";
import matchBoxes from "@/assets/industry/retail-boxes/Custom Match Boxes.webp";
import supplementPackaging from "@/assets/industry/retail-boxes/dietary_supplement_packaging.webp";
import businessLabels from "@/assets/industry/retail-boxes/Business Labels.webp";
import boxesWithLogo from "@/assets/industry/retail-boxes/Custom Boxes with Logo.webp";
import clamshellBoxes from "@/assets/industry/retail-boxes/Clamshell Boxes.webp";
import barbieBoxes from "@/assets/industry/retail-boxes/barbie-boxes.webp";
import foldingCartons from "@/assets/industry/retail-boxes/Folding Cartons.webp";

// Related products from Retail Boxes category
const relatedProducts = [
    { name: "Custom Business Cards", image: businessCards, description: "Premium business cards that make a lasting impression with high-quality cardstock and custom finishes", link: "/industries/retail-boxes/custom-business-cards" },
    { name: "Custom Match Boxes", image: matchBoxes, description: "Unique promotional packaging for branding featuring custom prints and functional friction surfaces", link: "/industries/retail-boxes/custom-match-boxes" },
    { name: "Dietary Supplement Packaging", image: supplementPackaging, description: "Secure and compliant packaging for supplements featuring child-resistant features and informative labels", link: "/industries/retail-boxes/dietary-supplement-packaging" },
    { name: "Business Labels", image: businessLabels, description: "Custom labels to enhance your brand identity and provide clear product information on any surface", link: "/industries/retail-boxes/business-labels" },
    { name: "Custom Boxes with Logo", image: boxesWithLogo, description: "Branded boxes designed to elevate your products with high-fidelity printing and robust board materials", link: "/industries/retail-boxes/custom-boxes-with-logo" },
    { name: "Clamshell Boxes", image: clamshellBoxes, description: "Clear, protective packaging for retail display allowing customers to view product features while staying secure", link: "/industries/retail-boxes/clamshell-boxes" },
    { name: "Barbie Boxes", image: barbieBoxes, description: "Fun, vibrant packaging for toys and dolls featuring clear windows and colorful character illustrations", link: "/industries/retail-boxes/barbie-boxes" },
    { name: "Folding Cartons", image: foldingCartons, description: "Versatile folding cartons for various retail needs offering easy storage and attractive branding possibilities", link: "/industries/retail-boxes/folding-cartons" },
];

export function RelatedProductRetail() {
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
                        Related Products from Retail Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium retail packaging solutions designed to elevate your brand.
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
