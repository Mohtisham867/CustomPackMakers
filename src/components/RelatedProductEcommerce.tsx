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
import mailerBoxes from "@/assets/e-commerce/Mailer box.png";
import subscriptionBoxes from "@/assets/e-commerce/Subscription boxes.png";
import shippingBoxes from "@/assets/e-commerce/shipping-boxes.webp";
import ecommerceProductBoxes from "@/assets/e-commerce/product-boxes.png";
import corrugatedBoxes from "@/assets/e-commerce/Corrugated.png";
import insertsDividers from "@/assets/e-commerce/inserts-dividers.webp";

// Related products from E-commerce category
const relatedProducts = [
    { name: "Custom Mailer Boxes", image: mailerBoxes, description: "Durable and stylish mailers for brand impact featuring self-locking tabs and premium print surfaces", link: "/industries/e-commerce/custom-mailer-boxes" },
    { name: "Subscription Boxes", image: subscriptionBoxes, description: "Curated packaging experiences for subscribers designed for recurring transit and premium brand unboxing", link: "/industries/e-commerce/subscription-boxes" },
    { name: "Shipping Boxes", image: shippingBoxes, description: "Heavy-duty protection for transit utilizing reinforced corrugated board for maximum product security", link: "/industries/e-commerce/shipping-boxes" },
    { name: "E-commerce Product Boxes", image: ecommerceProductBoxes, description: "Versatile retail boxes for various products featuring high-definition graphics and secure closures", link: "/industries/e-commerce/e-commerce-product-boxes" },
    { name: "Corrugated Boxes", image: corrugatedBoxes, description: "Strong and lightweight corrugated solutions engineered for superior crush resistance during shipping", link: "/industries/e-commerce/corrugated-boxes" },
    { name: "Custom Inserts & Dividers", image: insertsDividers, description: "Organize and protect items inside the box with custom-fitted compartments for professional delivery", link: "/industries/e-commerce/custom-inserts-dividers" },
];

export function RelatedProductEcommerce() {
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
                        Related E-Commerce Packaging
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium e-commerce packaging solutions designed to protect and showcase your products.
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
