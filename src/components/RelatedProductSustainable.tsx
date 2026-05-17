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

// Product images
import customKraftSoapBoxes from "@/assets/industry/sustainable-packaging/kraft-soap-boxes.webp";
import kraftGiftBoxes from "@/assets/industry/sustainable-packaging/kraft-gift-boxes.webp";
import kraftMylarBags from "@/assets/industry/sustainable-packaging/kraft-mylar-bags.webp";
import kraftFoodBoxes from "@/assets/industry/sustainable-packaging/kraft-food-boxes.webp";
import kraftPieBoxes from "@/assets/industry/sustainable-packaging/kraft-pie-boxes.webp";
import kraftTuckTopBoxes from "@/assets/industry/sustainable-packaging/kraft-tuck-top-boxes.webp";
import kraftMailerBoxes from "@/assets/industry/sustainable-packaging/kraft-mailer-boxes.webp";

// Related products from Sustainable Packaging category
const relatedProducts = [
    { name: "Custom Kraft Soap Boxes", image: customKraftSoapBoxes, description: "Eco-friendly kraft soap packaging featuring organic textures and biodegradable materials for sustainable brands", link: "/industries/sustainable-packaging/custom-kraft-soap-boxes" },
    { name: "Kraft Gift Boxes", image: kraftGiftBoxes, description: "Natural look gift boxes for all occasions featuring reinforced structural walls and elegant hemp closures", link: "/industries/sustainable-packaging/kraft-gift-boxes" },
    { name: "Kraft Mylar Bags", image: kraftMylarBags, description: "Sustainable flexible packaging solutions featuring high-barrier liners and eco-friendly kraft paper exteriors", link: "/industries/sustainable-packaging/kraft-mylar-bags" },
    { name: "Kraft Food Boxes", image: kraftFoodBoxes, description: "Food-safe biodegradable kraft boxes featuring leak-resistant linings and vibrant soy-based custom inks", link: "/industries/sustainable-packaging/kraft-food-boxes" },
    { name: "Kraft Pie Boxes", image: kraftPieBoxes, description: "Sturdy kraft boxes for pastries and pies featuring clear compostable windows and reinforced easy-load design", link: "/industries/sustainable-packaging/kraft-pie-boxes" },
    { name: "Kraft Tuck Top Boxes", image: kraftTuckTopBoxes, description: "Versatile tuck top boxes in natural kraft featuring easy-assembly locks and sustainable recycled materials", link: "/industries/sustainable-packaging/kraft-tuck-top-boxes" },
    { name: "Kraft Mailer Boxes", image: kraftMailerBoxes, description: "Durable shipping solutions made from recycled materials featuring high-strength walls and eco-friendly print", link: "/industries/sustainable-packaging/kraft-mailer-boxes" },
];

export function RelatedProductSustainable() {
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
                        Related Products from Sustainable Packaging
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of eco-conscious packaging solutions designed for a greener future without compromising quality.
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
                                        <Link to={product.link} className="block h-full group">
                                            <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
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
                                                            asChild
                                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
                                                        >
                                                            <div className="flex items-center justify-center w-full">
                                                                View Product
                                                            </div>
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
