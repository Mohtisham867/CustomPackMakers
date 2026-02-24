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
import chineseTakeout from "@/assets/food-boxes/chinese-takeout-box.webp";
import donutBoxes from "@/assets/food-boxes/donut-boxes.webp";
import popcornBoxes from "@/assets/food-boxes/popcorn-boxes.webp";
import dietarySupplements from "@/assets/food-boxes/dietary-supplements.webp";
import pizzaSliceBoxes from "@/assets/food-boxes/Custom Pizza Slice Boxes.webp";
import paperFoodBags from "@/assets/food-boxes/paper-food-bags.webp";
import paperFoodTrays from "@/assets/food-boxes/paper-food-trays.webp";
import miniCerealBoxes from "@/assets/food-boxes/mini-cereal-boxes.webp";

// Related products from Food Boxes category
const relatedProducts = [
    { name: "Chinese Takeout Boxes", image: chineseTakeout, description: "Classic and durable takeout containers with leak-resistant construction and convenient wire handles", link: "/industries/food-boxes/chinese-takeout-boxes" },
    { name: "Donut Boxes", image: donutBoxes, description: "Delightful packaging for bakery treats featuring grease-resistant materials and attractive window displays", link: "/industries/food-boxes/donut-boxes" },
    { name: "Custom Popcorn Boxes", image: popcornBoxes, description: "Eye-catching boxes for cinema snacks with vibrant graphics and easy-grip design for entertainment venues", link: "/industries/food-boxes/custom-popcorn-boxes" },
    { name: "Dietary Supplement Packaging", image: dietarySupplements, description: "Secure packaging for health products with FDA-compliant labeling and tamper-evident safety features", link: "/industries/food-boxes/dietary-supplement-packaging" },
    { name: "Custom Pizza Slice Boxes", image: pizzaSliceBoxes, description: "Convenient single-slice pizza holders with ventilation holes and grease-proof coating for freshness", link: "/industries/food-boxes/custom-pizza-slice-boxes" },
    { name: "Custom Paper Food Bags", image: paperFoodBags, description: "Eco-friendly bags for takeaway food featuring sustainable materials and comfortable carrying handles", link: "/industries/food-boxes/custom-paper-food-bags" },
    { name: "Paper Food Trays", image: paperFoodTrays, description: "Versatile trays for street food and snacks with sturdy construction and food-safe coating materials", link: "/industries/food-boxes/paper-food-trays" },
    { name: "Mini Cereal Boxes", image: miniCerealBoxes, description: "Compact cereal packaging for single servings with colorful designs and easy-open pour spouts", link: "/industries/food-boxes/mini-cereal-boxes" },
];

export function RelatedProductFood() {
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
                        Related Food Packaging
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium food packaging solutions designed to protect and showcase your culinary creations.
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
