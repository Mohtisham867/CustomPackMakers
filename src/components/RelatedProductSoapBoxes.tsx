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

// Specific images
import kraftSoapBoxes from "@/assets/soap-boxes/custom-kraft-soap-boxes.webp";
import bathBombPackaging from "@/assets/soap-boxes/bath-bomb-packaging.webp";
import wrappingPaper from "@/assets/soap-boxes/custom-soap-wrapping-paper.webp";
import handmadeSoapBoxes from "@/assets/soap-boxes/custom-handmade-soap-boxes.webp";
import squareSoapBoxes from "@/assets/soap-boxes/square-soap-boxes.webp";
import soapBarBoxes from "@/assets/soap-boxes/custom-soap-bar-boxes.webp";
import luxurySoapPackaging from "@/assets/soap-boxes/luxury-soap-packaging.webp";
import soapSleeves from "@/assets/soap-boxes/soap-sleeves.webp";
import soapBarLabels from "@/assets/soap-boxes/Soap Bar Labels.webp";

const relatedProducts = [
    { name: "Custom Kraft Soap Boxes", image: kraftSoapBoxes, description: "Eco-friendly, rustic packaging for natural soaps featuring sustainable materials and organic aesthetic appeal", link: "/industries/soap-boxes/custom-kraft-soap-boxes" },
    { name: "Bath Bomb Packaging", image: bathBombPackaging, description: "Vibrant and protective boxes for bath bombs designed to keep products fresh and aromatic during retail display", link: "/industries/soap-boxes/bath-bomb-packaging" },
    { name: "Custom Soap Wrapping Paper", image: wrappingPaper, description: "Elegant wrapping paper for a premium touch, providing a sophisticated layer of protection for artisanal soaps", link: "/industries/soap-boxes/custom-soap-wrapping-paper" },
    { name: "Custom Handmade Soap Boxes", image: handmadeSoapBoxes, description: "Artisanal boxes crafted for your handmade creations, highlighting the unique quality of your specialty soap line", link: "/industries/soap-boxes/custom-handmade-soap-boxes" },
    { name: "Square Soap Boxes", image: squareSoapBoxes, description: "Modern square boxes for unique soap shapes, offering a clean and contemporary look for professional branding", link: "/industries/soap-boxes/square-soap-boxes" },
    { name: "Custom Soap Bar Boxes", image: soapBarBoxes, description: "Standard fit boxes for soap bars of all sizes, featuring durable construction and high-quality printed designs", link: "/industries/soap-boxes/custom-soap-bar-boxes" },
    { name: "Luxury Soap Packaging", image: luxurySoapPackaging, description: "Premium rigid boxes for high-end soap brands, combining luxurious finishes with superior product protection", link: "/industries/soap-boxes/luxury-soap-packaging" },
    { name: "Soap Sleeves", image: soapSleeves, description: "Minimalist sleeves to showcase your soap, allowing customers to see the product while maintaining brand identity", link: "/industries/soap-boxes/soap-sleeves" },
    { name: "Soap Bar Labels", image: soapBarLabels, description: "Custom labels to brand your soap bars with professional graphics and essential product information display", link: "/industries/soap-boxes/soap-bar-labels" },
];

export function RelatedProductSoapBoxes() {
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
                        Related Soap Packaging
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium soap packaging solutions designed to protect and showcase your bath creations.
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
