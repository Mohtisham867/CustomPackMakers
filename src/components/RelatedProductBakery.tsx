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

// Import bakery product images
import customCakeBoxes from "@/assets/bakery-products/custom-cake-boxes.webp";
import pastryBoxes from "@/assets/bakery-products/pastry-boxes.webp";
import donutBoxes from "@/assets/bakery-products/donut-boxes.webp";
import cookieBoxes from "@/assets/bakery-products/cookie-boxes.webp";
import cupcakeBoxes from "@/assets/bakery-products/cupcake-boxes.webp";
import pieBoxes from "@/assets/bakery-products/Pie Boxes.webp";
import muffinBoxes from "@/assets/bakery-products/muffin-boxes.webp";
import breadPackaging from "@/assets/bakery-products/Bread Packaging.webp";
import macaronBoxes from "@/assets/bakery-products/Macaron Boxes.webp";
import chocolateBoxes from "@/assets/bakery-products/Chocolate Boxes.webp";

// Related products from Bakery Boxes category
const relatedProducts = [
    { name: "Custom Cake Boxes", image: customCakeBoxes, description: "Elegant food-safe boxes for cakes of all sizes featuring sturdy construction and beautiful presentation design", link: "/industries/bakery-boxes/custom-cake-boxes" },
    { name: "Pastry Boxes", image: pastryBoxes, description: "Perfect packaging for delicate pastries with grease-resistant materials and secure closure mechanisms", link: "/industries/bakery-boxes/pastry-boxes" },
    { name: "Donut Boxes", image: donutBoxes, description: "Sturdy boxes designed for donuts with glaze-resistant liners, convenient carry handles, and window displays", link: "/industries/bakery-boxes/donut-boxes" },
    { name: "Cookie Boxes", image: cookieBoxes, description: "Gift-ready cookie packaging featuring grease-proof barriers and protective inserts for freshness preservation", link: "/industries/bakery-boxes/cookie-boxes" },
    { name: "Cupcake Boxes", image: cupcakeBoxes, description: "Secure compartment boxes for cupcakes preventing frosting damage with clear dome lid options", link: "/industries/bakery-boxes/cupcake-boxes" },
    { name: "Pie Boxes", image: pieBoxes, description: "Window boxes for showcasing pies with ventilation features and a sturdy base for safe transportation", link: "/industries/bakery-boxes/pie-boxes" },
    { name: "Muffin Boxes", image: muffinBoxes, description: "Multi-compartment muffin carriers with individual slots ensuring products stay fresh and presentable", link: "/industries/bakery-boxes/muffin-boxes" },
    { name: "Bread Packaging", image: breadPackaging, description: "Fresh-keeping bread packaging with breathable materials maintaining optimal texture and quality throughout", link: "/industries/bakery-boxes/bread-packaging" },
    { name: "Macaron Boxes", image: macaronBoxes, description: "Luxury packaging for macarons featuring elegant design and protective inserts for delicate confections", link: "/industries/bakery-boxes/macaron-boxes" },
    { name: "Chocolate Boxes", image: chocolateBoxes, description: "Premium chocolate gift boxes with sophisticated finishes and compartments for assorted selections", link: "/industries/bakery-boxes/chocolate-boxes" },
];

export function RelatedProductBakery() {
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
                        Related Bakery Products
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium bakery packaging solutions designed to protect and showcase your baked goods.
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
