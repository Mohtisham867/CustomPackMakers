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
import customHandleBoxesImg from "@/assets/shape-style/custom-shape-boxes/custom-handle-boxes.webp";
import customPieBoxesImg from "@/assets/shape-style/custom-shape-boxes/custom-pie-boxes.webp";
import braceletSquareBoxesImg from "@/assets/shape-style/custom-shape-boxes/bracelet-square-boxes.webp";
import customDieCutBoxesImg from "@/assets/shape-style/custom-shape-boxes/custom-die-cut-boxes.webp";
import squareSoapBoxesImg from "@/assets/shape-style/custom-shape-boxes/square-soap-boxes.webp";
import customPyramidBoxesImg from "@/assets/shape-style/custom-shape-boxes/custom-pyramid-boxes.webp";
import hexagonBoxesImg from "@/assets/shape-style/custom-shape-boxes/hexagon-boxes.webp";
import rectangularBoxesImg from "@/assets/shape-style/custom-shape-boxes/rectangular-boxes.webp";
import triangleBoxesImg from "@/assets/shape-style/custom-shape-boxes/triangle-boxes.webp";
import octagonBoxesImg from "@/assets/shape-style/custom-shape-boxes/octagon-boxes.webp";
import squareBoxesImg from "@/assets/shape-style/custom-shape-boxes/square-boxes.webp";
import cubeBoxesImg from "@/assets/shape-style/custom-shape-boxes/cube-boxes.webp";

const relatedProducts = [
    { name: "Custom Handle Boxes", image: customHandleBoxesImg, description: "Boxes with integrated handles for convenient carrying and high-impact retail branding visibility", link: "/shapes-styles/custom-shape-boxes/custom-handle-boxes" },
    { name: "Custom Pie Boxes", image: customPieBoxesImg, description: "Sturdy triangular or square packaging for pies and pastries featuring grease-resistant coatings", link: "/shapes-styles/custom-shape-boxes/custom-pie-boxes" },
    { name: "Bracelet Square Boxes", image: braceletSquareBoxesImg, description: "Elegant square boxes perfectly sized for jewelry featuring soft inserts and premium logo stamping", link: "/shapes-styles/custom-shape-boxes/bracelet-square-boxes" },
    { name: "Custom Die-Cut Boxes", image: customDieCutBoxesImg, description: "Precision-cut shapes tailored to your specific product for a memorable and unique brand identity", link: "/shapes-styles/custom-shape-boxes/custom-die-cut-boxes" },
    { name: "Square Soap Boxes", image: squareSoapBoxesImg, description: "Classic square packaging for artisanal soaps featuring breathable materials and rustic brand appeal", link: "/shapes-styles/custom-shape-boxes/square-soap-boxes" },
    { name: "Custom Pyramid Boxes", image: customPyramidBoxesImg, description: "Unique pyramid shape for distinctive gift packaging designed to fascinate and delight your customers", link: "/shapes-styles/custom-shape-boxes/custom-pyramid-boxes" },
    { name: "Hexagon Boxes", image: hexagonBoxesImg, description: "Six-sided boxes providing a modern, geometric look and superior structural strength for retail items", link: "/shapes-styles/custom-shape-boxes/hexagon-boxes" },
    { name: "Rectangular Boxes", image: rectangularBoxesImg, description: "Versatile rectangular shape for widely varied products featuring customizable sizes and high-end print", link: "/shapes-styles/custom-shape-boxes/rectangular-boxes" },
    { name: "Triangle Box", image: triangleBoxesImg, description: "Eye-catching triangular packaging for novelty items and gifts designed for maximum counter display impact", link: "/shapes-styles/custom-shape-boxes/triangle-box" },
    { name: "Octagon Box", image: octagonBoxesImg, description: "Eight-sided boxes for a premium, multi-faceted presentation and enhanced structural item protection", link: "/shapes-styles/custom-shape-boxes/octagon-box" },
    { name: "Square Boxes", image: squareBoxesImg, description: "Standard square boxes adaptable to any branding featuring durable construction and professional finishes", link: "/shapes-styles/custom-shape-boxes/square-boxes" },
    { name: "Cube Boxes", image: cubeBoxesImg, description: "Perfectly symmetrical cubes for compact products designed for creative retail branding and safe shipping", link: "/shapes-styles/custom-shape-boxes/cube-boxes" },
];

export function RelatedProductCustomShapeBoxes() {
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
                        Explore More Custom Shape Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Discover our versatile range of uniquely shaped packaging solutions tailored for your products.
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
                                        ) : null}
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
