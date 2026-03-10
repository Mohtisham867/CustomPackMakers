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
import heatSealMylar from "@/assets/custom_bags/heat-seal-mylar-bags.webp";
import weedMylar from "@/assets/custom_bags/weed-mylar-bags.webp";
import edibleMylar from "@/assets/custom_bags/edible-mylar-bags.webp";
import paperBagsHandle from "@/assets/custom_bags/paper-bags-with-handles.webp";
import holographicBags from "@/assets/custom_bags/holographic-bags.webp";
import kraftBags from "@/assets/custom_bags/kraft-bags.webp";
import takeOutBags from "@/assets/custom_bags/take-out-bags.webp";
import tShirtBags from "@/assets/custom_bags/t-shirt-bags.webp";
import paperGroceryBags from "@/assets/custom_bags/paper-grocery-bags.webp";
import vacuumSealWebBags from "@/assets/custom_bags/vacuum-seal-weed-bags.webp";
import smellProofWeedBags from "@/assets/custom_bags/smell-proof-weed-bags.webp";
import weedBags35 from "@/assets/custom_bags/weed-bags-3-5.webp";
import sachetPackaging from "@/assets/custom_bags/sachet-packaging.webp";
import coffeeBags from "@/assets/custom_bags/coffee-bags.webp";
import flatBottomBags from "@/assets/custom_bags/flat-bottom-bags.webp";
import tinTiePaperBags from "@/assets/custom_bags/tin-tie-paper-bags.webp";

// Related products from Custom Bags category
const relatedProducts = [
    {
        name: "Heat Seal Mylar Bags",
        image: heatSealMylar,
        description: "Airtight heat-seal mylar bags that preserve freshness and protect high-value products during storage.",
        link: "/shapes-styles/custom-bags/heat-seal-mylar-bags",
    },
    {
        name: "Weed Mylar Bags",
        image: weedMylar,
        description: "Custom-branded mylar bags tailored for cannabis products with odor-locking seals and vibrant graphics.",
        link: "/shapes-styles/custom-bags/weed-mylar-bags",
    },
    {
        name: "Edible Mylar Bags",
        image: edibleMylar,
        description: "Child-resistant, tamper-evident edible pouches engineered for safety, compliance, and shelf appeal.",
        link: "/shapes-styles/custom-bags/edible-mylar-bags",
    },
    {
        name: "Paper Bags With Handles",
        image: paperBagsHandle,
        description: "Premium paper shopping bags with twisted handles designed for a refined and luxury unboxing experience.",
        link: "/shapes-styles/custom-bags/paper-bags-with-handles",
    },
    {
        name: "Holographic Bags",
        image: holographicBags,
        description: "Iridescent holographic pouches that capture attention on retail shelves with vivid reflective finishes.",
        link: "/shapes-styles/custom-bags/holographic-bags",
    },
    {
        name: "Kraft Bags",
        image: kraftBags,
        description: "Sustainable kraft paper bags offering a natural aesthetic and reliable strength for eco-conscious retail.",
        link: "/shapes-styles/custom-bags/kraft-bags",
    },
    {
        name: "Take Out Bags",
        image: takeOutBags,
        description: "Durable takeout bags designed for foodservice, combining high capacity with superior grease resistance.",
        link: "/shapes-styles/custom-bags/take-out-bags",
    },
    {
        name: "T Shirt Bags",
        image: tShirtBags,
        description: "Economical T-shirt carrier bags ideal for high-volume retail, perfectly balancing strength and cost.",
        link: "/shapes-styles/custom-bags/t-shirt-bags",
    },
    {
        name: "Paper Grocery Bags",
        image: paperGroceryBags,
        description: "Heavy-duty grocery bags built to carry bulky items securely with reinforced handles and sturdy bases.",
        link: "/shapes-styles/custom-bags/paper-grocery-bags",
    },
    {
        name: "Vacuum Seal Weed Bags",
        image: vacuumSealWebBags,
        description: "Vacuum-seal pouches that remove air to extend shelf life and maintain maximum product color and aroma.",
        link: "/shapes-styles/custom-bags/vacuum-seal-weed-bags",
    },
    {
        name: "Smell Proof Weed Bags",
        image: smellProofWeedBags,
        description: "Odor-locking bags engineered to contain scents while maintaining product integrity and regulatory compliance.",
        link: "/shapes-styles/custom-bags/smell-proof-weed-bags",
    },
    {
        name: "Weed Bags 3.5",
        image: weedBags35,
        description: "Eighth-sized bags designed for compliance and high-impact custom branding for targeted retail displays.",
        link: "/shapes-styles/custom-bags/weed-bags-3-5",
    },
    {
        name: "Sachet Packaging",
        image: sachetPackaging,
        description: "Single-serve sachets ideal for samples and travel sizes, offering portion control and clear branding.",
        link: "/shapes-styles/custom-bags/sachet-packaging",
    },
    {
        name: "Coffee Bags",
        image: coffeeBags,
        description: "Coffee bags with one-way degassing valves to preserve aroma and extend freshly roasted bean shelf life.",
        link: "/shapes-styles/custom-bags/coffee-bags",
    },
    {
        name: "Flat Bottom Bags",
        image: flatBottomBags,
        description: "Flat-bottom pouches that stand stable on store shelves while maximizing fill volume and brand visibility.",
        link: "/shapes-styles/custom-bags/flat-bottom-bags",
    },
    {
        name: "Tin Tie Paper Bags",
        image: tinTiePaperBags,
        description: "Reclosable tin-tie bakery bags that preserve freshness and offer convenient resealing for all customers.",
        link: "/shapes-styles/custom-bags/tin-tie-paper-bags",
    },
];

export function RelatedProductCustomBags() {
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
                        Related Products from Custom Bags
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium custom bag solutions designed to perfectly protect and showcase your products.
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
