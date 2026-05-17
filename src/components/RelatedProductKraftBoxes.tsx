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

// Generated Images
import customHandleBoxesV2 from "@/assets/material/kraft-boxes/custom-handle-boxes-v2.webp";
import customPaperCupsV2 from "@/assets/material/kraft-boxes/custom-paper-cups-v2.webp";
import kraftSandwichBoxesV2 from "@/assets/material/kraft-boxes/kraft-sandwich-boxes-v2.webp";
import customKraftSoapBoxesV2 from "@/assets/material/kraft-boxes/custom-kraft-soap-boxes-v2.webp";
import kraftPillowBoxesV2 from "@/assets/material/kraft-boxes/kraft-pillow-boxes-v2.webp";
import kraftJewelryBoxesV2 from "@/assets/material/kraft-boxes/kraft-jewelry-boxes-v2.webp";
import kraftGableBoxesV2 from "@/assets/material/kraft-boxes/kraft-gable-boxes-v2.webp";
import kraftLabelsV2 from "@/assets/material/kraft-boxes/kraft-labels-v2.webp";
import paperTubePackagingV2 from "@/assets/material/kraft-boxes/paper-tube-packaging-v2.webp";
import kraftGiftBoxesV2 from "@/assets/material/kraft-boxes/kraft-gift-boxes-v2.webp";

// Remaining Old/Other Images
import kraftBubbleMailers from "@/assets/material/kraft-boxes/kraft-bubble-mailers.webp";
import kraftCorrugatedBoxes from "@/assets/material/kraft-boxes/kraft-corrugated-boxes.webp";
import kraftTakeawayBoxes from "@/assets/material/kraft-boxes/kraft-takeaway-boxes.webp";
import kraftPaperBoxesWithWindow from "@/assets/material/kraft-boxes/kraft-paper-boxes-with-window.webp";
import kraftCupcakeBoxes from "@/assets/material/kraft-boxes/kraft-cupcake-boxes.webp";
import kraftBags from "@/assets/material/kraft-boxes/kraft-bags.webp";
import kraftPieBoxes from "@/assets/material/kraft-boxes/kraft-pie-boxes.webp";
import whiteKraftBoxes from "@/assets/material/kraft-boxes/white-kraft-boxes.webp";
import smallKraftBoxes from "@/assets/material/kraft-boxes/small-kraft-boxes.webp";
import kraftBoxesWithLids from "@/assets/material/kraft-boxes/kraft-boxes-with-lids.webp";
import kraftTuckTopBoxes from "@/assets/material/kraft-boxes/kraft-tuck-top-boxes.webp";
import kraftShippingLabels from "@/assets/material/kraft-boxes/kraft-shipping-labels.webp";

// Related products from Kraft Boxes category
const relatedProducts = [
    { name: "Custom Handle Boxes", image: customHandleBoxesV2, description: "Convenient kraft boxes with built-in handles designed for easy transport and attractive retail display", link: "/box-by-material/kraft-boxes/custom-handle-boxes" },
    { name: "Custom Paper Cups", image: customPaperCupsV2, description: "Eco-friendly disposable kraft paper cups featuring high-heat resistance and custom branding surfaces", link: "/box-by-material/kraft-boxes/custom-paper-cups" },
    { name: "Kraft Sandwich Boxes", image: kraftSandwichBoxesV2, description: "Wedge-shaped boxes with clear windows designed for sandwiches and fresh deli product presentations", link: "/box-by-material/kraft-boxes/kraft-sandwich-boxes" },
    { name: "Custom Kraft Soap Boxes", image: customKraftSoapBoxesV2, description: "Natural rustic packaging for handmade soaps featuring breathable materials and organic brand appeal", link: "/box-by-material/kraft-boxes/custom-kraft-soap-boxes" },
    { name: "Kraft Pillow Boxes", image: kraftPillowBoxesV2, description: "Unique pillow-shaped gift and favor boxes crafted from durable sustainable cardstock for unique gifting", link: "/box-by-material/kraft-boxes/kraft-pillow-boxes" },
    { name: "Kraft Jewelry Boxes", image: kraftJewelryBoxesV2, description: "Elegant brown paper boxes for jewelry featuring soft inserts and premium custom logo printing options", link: "/box-by-material/kraft-boxes/kraft-jewelry-boxes" },
    { name: "Kraft Gable Boxes", image: kraftGableBoxesV2, description: "Classic barn-style containers with handles perfect for holiday treats and seasonal gift presentations", link: "/box-by-material/kraft-boxes/kraft-gable-boxes" },
    { name: "Kraft Labels", image: kraftLabelsV2, description: "Rustic brown kraft paper stickers and labels designed to complement your eco-friendly brand identity", link: "/box-by-material/kraft-boxes/kraft-labels" },
    { name: "Paper Tube Packaging", image: paperTubePackagingV2, description: "Cylindrical kraft tubes for various products offering superior protection and unique retail shelf presence", link: "/box-by-material/kraft-boxes/paper-tube-packaging" },
    { name: "Kraft Gift Boxes", image: kraftGiftBoxesV2, description: "Beautifully simple gift boxes for any occasion featuring robust construction and elegant organic finishes", link: "/box-by-material/kraft-boxes/kraft-gift-boxes" },
    { name: "Kraft Bubble Mailers", image: kraftBubbleMailers, description: "Padded protective envelopes for shipping small items securely with eco-friendly kraft paper exteriors", link: "/box-by-material/kraft-boxes/kraft-bubble-mailers" },
    { name: "Kraft Corrugated Boxes", image: kraftCorrugatedBoxes, description: "Durable fluted boxes for shipping and storage engineered for maximum crush resistance and safety", link: "/box-by-material/kraft-boxes/kraft-corrugated-boxes" },
    { name: "Kraft Takeaway Boxes", image: kraftTakeawayBoxes, description: "Grease-resistant food pails and containers designed for sustainable and professional takeout services", link: "/box-by-material/kraft-boxes/kraft-takeaway-boxes" },
    { name: "Kraft Paper Boxes With Window", image: kraftPaperBoxesWithWindow, description: "Display your products through a clear window while maintaining a natural and sustainable aesthetic look", link: "/box-by-material/kraft-boxes/kraft-paper-boxes-with-window" },
    { name: "Kraft Cupcake Boxes", image: kraftCupcakeBoxes, description: "Secure holders for cupcakes with viewing windows and festive designs for a professional baker's finish", link: "/box-by-material/kraft-boxes/kraft-cupcake-boxes" },
    { name: "Kraft Bags", image: kraftBags, description: "Sturdy kraft shopping bags with twisted handles and reinforced bases for reliable retail use and carry", link: "/box-by-material/kraft-boxes/kraft-bags" },
    { name: "Kraft Pie Boxes", image: kraftPieBoxes, description: "Perfectly sized boxes for pies and tarts featuring grease-resistant coatings and secure closure tabs", link: "/box-by-material/kraft-boxes/kraft-pie-boxes" },
    { name: "White Kraft Boxes", image: whiteKraftBoxes, description: "Bleached white kraft paper for a clean and professional look with eco-friendly material benefits", link: "/box-by-material/kraft-boxes/white-kraft-boxes" },
    { name: "Small Kraft Boxes", image: smallKraftBoxes, description: "Tiny boxes for favors, samples, or small luxury items featuring durable cardstock and organic charm", link: "/box-by-material/kraft-boxes/small-kraft-boxes" },
    { name: "Kraft Boxes With Lids", image: kraftBoxesWithLids, description: "Classic two-piece telescopic kraft boxes designed for premium storage and high-end gift presentation", link: "/box-by-material/kraft-boxes/kraft-boxes-with-lids" },
    { name: "Kraft Tuck Top Boxes", image: kraftTuckTopBoxes, description: "Simple tuck-top retail packaging boxes offering easy assembly and secure product containment features", link: "/box-by-material/kraft-boxes/kraft-tuck-top-boxes" },
    { name: "Shipping Labels", image: kraftShippingLabels, description: "Essential shipping labels designed to adhere securely to your packages with clear informational layout", link: "/box-by-material/kraft-boxes/shipping-labels" },
];

export function RelatedProductKraftBoxes() {
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
                        Related Products from Kraft Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of eco-friendly kraft paper packaging solutions.
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
