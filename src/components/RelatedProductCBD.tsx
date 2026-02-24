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

// CBD Product Images
import cbdCapsuleBoxes from "@/assets/cbd-boxes/custom-cbd-capsule-boxes.webp";
import cbdCreamBoxes from "@/assets/cbd-boxes/custom-cbd-cream-boxes.webp";
import cbdLotionBoxes from "@/assets/cbd-boxes/custom-cbd-lotion-boxes.webp";
import cbdOilBoxes from "@/assets/cbd-boxes/cbd-oil-boxes.webp";
import essentialOilBoxes from "@/assets/cbd-boxes/essential-oil-boxes.webp";
import cbdIsolateBoxes from "@/assets/cbd-boxes/custom-cbd-isolate-boxes.webp";
import cbdPodBoxes from "@/assets/cbd-boxes/custom-cbd-pod-boxes.webp";
import cbdLollipopBoxes from "@/assets/cbd-boxes/cbd-lollipop-boxes.webp";
import cbdGummiesBoxes from "@/assets/cbd-boxes/cbd-gummies-boxes.webp";
import delta8ThcBoxes from "@/assets/cbd-boxes/delta-8-thc-boxes.webp";
import cbdDisplayBoxes from "@/assets/cbd-boxes/cbd-display-boxes.webp";
import tinctureBoxes from "@/assets/cbd-boxes/tincture-boxes.webp";
import bluntBoxes from "@/assets/cbd-boxes/blunt-boxes.webp";
import cbdTinctureBoxes from "@/assets/cbd-boxes/cbd-tincture-boxes.webp";
import dropperBottleBoxes from "@/assets/cbd-boxes/dropper-bottle-boxes.webp";
import cbdChocolateBoxes from "@/assets/cbd-boxes/cbd-chocolate-boxes.webp";
import cbdMailerBoxes from "@/assets/cbd-boxes/cbd-mailer-boxes.webp";
import cbdHempOilBoxes from "@/assets/cbd-boxes/cbd-hemp-oil-boxes.webp";
import cbdSoapBoxes from "@/assets/cbd-boxes/cbd-soap-boxes.webp";
import delta9Packaging from "@/assets/cbd-boxes/delta-9-packaging.webp";
import cbdVapeBoxes from "@/assets/cbd-boxes/cbd-vape-boxes.webp";
import cbdPreRollBoxes from "@/assets/cbd-boxes/cbd-pre-roll-boxes.webp";
import concentratePackaging from "@/assets/cbd-boxes/concentrate-packaging.webp";
import cbdSubscriptionBoxes from "@/assets/cbd-boxes/cbd-subscription-boxes.webp";
import cbdBathBombBoxes from "@/assets/cbd-boxes/cbd-bath-bomb-boxes.webp";

const relatedProducts = [
    { name: "CBD Capsule Boxes", image: cbdCapsuleBoxes, description: "Secure and compliant packaging for CBD capsules and supplements.", link: "/industries/cbd-packaging/custom-cbd-capsule-boxes" },
    { name: "CBD Cream Boxes", image: cbdCreamBoxes, description: "Premium boxes for topical CBD creams with luxury retail appeal.", link: "/industries/cbd-packaging/custom-cbd-cream-boxes" },
    { name: "CBD Lotion Boxes", image: cbdLotionBoxes, description: "Heavy-duty packaging for CBD lotions ensuring safe glass transport.", link: "/industries/cbd-packaging/custom-cbd-lotion-boxes" },
    { name: "CBD Oil Boxes", image: cbdOilBoxes, description: "Tuck-end boxes for CBD oil droppers with custom protective inserts.", link: "/industries/cbd-packaging/cbd-oil-boxes" },
    { name: "Essential Oil Boxes", image: essentialOilBoxes, description: "Aroma-preserving packaging for natural essential oil collections.", link: "/industries/cbd-packaging/essential-oil-boxes" },
    { name: "CBD Isolate Boxes", image: cbdIsolateBoxes, description: "Professional containers for pure CBD isolates with airtight sealing.", link: "/industries/cbd-packaging/custom-cbd-isolate-boxes" },
    { name: "CBD Pod Boxes", image: cbdPodBoxes, description: "Modern, child-resistant boxes for CBD vape pods and cartridges.", link: "/industries/cbd-packaging/custom-cbd-pod-boxes" },
    { name: "CBD Lollipop Boxes", image: cbdLollipopBoxes, description: "Food-safe, colorful packaging for CBD-infused lollipops and treats.", link: "/industries/cbd-packaging/cbd-lollipop-boxes" },
    { name: "CBD Gummies Boxes", image: cbdGummiesBoxes, description: "Barrier-lined boxes designed to keep CBD gummies fresh and soft.", link: "/industries/cbd-packaging/cbd-gummies-boxes" },
    { name: "Delta 8 THC Boxes", image: delta8ThcBoxes, description: "Compliant packaging solutions for Delta 8 THC retail products.", link: "/industries/cbd-packaging/delta-8-thc-boxes" },
    { name: "CBD Display Boxes", image: cbdDisplayBoxes, description: "Counter-top POP displays designed to maximize CBD retail visibility.", link: "/industries/cbd-packaging/cbd-display-boxes" },
    { name: "Tincture Boxes", image: tinctureBoxes, description: "Structural boxes for tincture bottles with secure base plates.", link: "/industries/cbd-packaging/tincture-boxes" },
    { name: "Blunt Boxes", image: bluntBoxes, description: "Eco-friendly moisture-proof packaging for pre-rolled blunts.", link: "/industries/cbd-packaging/blunt-boxes" },
    { name: "CBD Tincture Boxes", image: cbdTinctureBoxes, description: "High-end dropper bottle packaging with custom branding options.", link: "/industries/cbd-packaging/cbd-tincture-boxes" },
    { name: "Dropper Bottle Boxes", image: dropperBottleBoxes, description: "Reinforced packaging for secondary protection of glass droppers.", link: "/industries/cbd-packaging/dropper-bottle-boxes" },
    { name: "CBD Chocolate Boxes", image: cbdChocolateBoxes, description: "Luxury edible packaging with grease-proof lining and foil work.", link: "/industries/cbd-packaging/cbd-chocolate-boxes" },
    { name: "CBD Mailer Boxes", image: cbdMailerBoxes, description: "Corrugated shipping boxes for secure e-commerce CBD delivery.", link: "/industries/cbd-packaging/cbd-mailer-boxes" },
    { name: "Hemp Oil Boxes", image: cbdHempOilBoxes, description: "Sustainable packaging for hemp seed oils and CBD concentrates.", link: "/industries/cbd-packaging/cbd-hemp-oil-boxes" },
    { name: "CBD Soap Boxes", image: cbdSoapBoxes, description: "Water-resistant artisan boxes for CBD-infused bars and soaps.", link: "/industries/cbd-packaging/cbd-soap-boxes" },
    { name: "Delta 9 Packaging", image: delta9Packaging, description: "Strictly compliant packaging for Delta 9 THC legalized products.", link: "/industries/cbd-packaging/delta-9-packaging" },
    { name: "CBD Vape Boxes", image: cbdVapeBoxes, description: "Sleek, compact designs for CBD vape kits and accessories.", link: "/industries/cbd-packaging/cbd-vape-boxes" },
    { name: "CBD Pre-Roll Boxes", image: cbdPreRollBoxes, description: "Child-resistant pre-roll tins and boxes for CBD joints.", link: "/industries/cbd-packaging/cbd-pre-roll-boxes" },
    { name: "Concentrate Packaging", image: concentratePackaging, description: "Barrier-heavy boxes for waxes, badders, and CBD concentrates.", link: "/industries/cbd-packaging/concentrate-packaging" },
    { name: "CBD Subscription Boxes", image: cbdSubscriptionBoxes, description: "Engagement-focused mailers for monthly CBD subscription kits.", link: "/industries/cbd-packaging/cbd-subscription-boxes" },
    { name: "CBD Bath Bomb Boxes", image: cbdBathBombBoxes, description: "Beautifully printed, moisture-resistant bath bomb packaging.", link: "/industries/cbd-packaging/cbd-bath-bomb-boxes" },
];

export function RelatedProductCBD() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;
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
                        Related CBD Packaging
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our compliant and premium range of secondary packaging solutions for all your CBD and hemp products.
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
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
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
