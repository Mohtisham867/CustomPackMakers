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
import rollEndTrayImg from "@/assets/sleeves-and-trays/roll-end-tray.webp";
import customBowlSleevesImg from "@/assets/sleeves-and-trays/custom-bowl-sleeves.webp";
import customDrawerPaperBoxesImg from "@/assets/sleeves-and-trays/custom-drawer-paper-boxes.webp";
import paperFoodTraysImg from "@/assets/sleeves-and-trays/paper-food-trays.webp";
import hotDogSleevesImg from "@/assets/sleeves-and-trays/hot-dog-sleeves.webp";
import cupSleevesImg from "@/assets/sleeves-and-trays/cup-sleeves.webp";
import coffeeSleevesImg from "@/assets/sleeves-and-trays/coffee-sleeves.webp";
import packagingSleevesImg from "@/assets/sleeves-and-trays/packaging-sleeves.webp";
import soapSleevesImg from "@/assets/sleeves-and-trays/soap-sleeves.webp";
import giftCardSleevesImg from "@/assets/sleeves-and-trays/gift-card-sleeves.webp";
import packagingInsertsImg from "@/assets/sleeves-and-trays/packaging-inserts.webp";
import foamInsertsImg from "@/assets/sleeves-and-trays/foam-inserts.webp";
import slideBoxesImg from "@/assets/sleeves-and-trays/slide-boxes.webp";
import sleeveBoxesImg from "@/assets/sleeves-and-trays/sleeve-boxes.webp";
import customShrinkSleevesImg from "@/assets/sleeves-and-trays/custom-shrink-sleeves.webp";
import soapPackagingSleevesImg from "@/assets/sleeves-and-trays/soap-packaging-sleeves.webp";
import trayBoxesImg from "@/assets/sleeves-and-trays/tray-boxes.webp";
import kraftSleeveBoxesImg from "@/assets/sleeves-and-trays/kraft-sleeve-boxes.webp";
import customConeSleeveImg from "@/assets/sleeves-and-trays/custom-cone-sleeve.webp";

// Related products from SleevesTrays Boxes category
const relatedProducts = [
    { name: "Roll End Tray", image: rollEndTrayImg, description: "Self-locking tray box for retail and food featuring reinforced corners and easy-stacking structural design", link: "/shapes-styles/sleeves-trays/roll-end-tray" },
    { name: "Custom Bowl Sleeves", image: customBowlSleevesImg, description: "Branded sleeves for takeout bowls and containers designed for heat insulation and high-impact food branding", link: "/shapes-styles/sleeves-trays/custom-bowl-sleeves" },
    { name: "Custom Drawer Paper Boxes", image: customDrawerPaperBoxesImg, description: "Premium sliding drawer boxes for luxury gifts featuring smooth-glide action and elegant ribbon pull tabs", link: "/shapes-styles/sleeves-trays/custom-drawer-paper-boxes" },
    { name: "Paper Food Trays", image: paperFoodTraysImg, description: "Disposable trays for street food and events designed with moisture-resistant coatings and easy-carry edges", link: "/shapes-styles/sleeves-trays/paper-food-trays" },
    { name: "Hot Dog Sleeves", image: hotDogSleevesImg, description: "Convenient paper sleeves for hot dogs and sausages featuring grease-proof linings and vibrant food graphics", link: "/shapes-styles/sleeves-trays/hot-dog-sleeves" },
    { name: "Cup Sleeves", image: cupSleevesImg, description: "Protective sleeves for hot beverage cups designed with insulating corrugated texture and custom brand marks", link: "/shapes-styles/sleeves-trays/cup-sleeves" },
    { name: "Coffee Sleeves", image: coffeeSleevesImg, description: "Insulating sleeves for coffee cups with custom print featuring recycled materials and superior heat protection", link: "/shapes-styles/sleeves-trays/coffee-sleeves" },
    { name: "Packaging Sleeves", image: packagingSleevesImg, description: "Versatile paper sleeves to brand any box or item featuring cost-effective customization and premium finishes", link: "/shapes-styles/sleeves-trays/packaging-sleeves" },
    { name: "Soap Sleeves", image: soapSleevesImg, description: "Minimalist packaging band for soap bars featuring elegant textures and organic-style branding for retail", link: "/shapes-styles/sleeves-trays/soap-sleeves" },
    { name: "Gift Card Sleeves", image: giftCardSleevesImg, description: "Small sleeves designed to hold gift cards elegantly featuring precise die-cuts and luxury paper finishes", link: "/shapes-styles/sleeves-trays/gift-card-sleeves" },
    { name: "Packaging Inserts", image: packagingInsertsImg, description: "Custom inserts to secure products within a box featuring custom-fitted shapes and protective cushioning", link: "/shapes-styles/sleeves-trays/packaging-inserts" },
    { name: "Foam Inserts", image: foamInsertsImg, description: "Protective foam cutouts for delicate items featuring precision laser-cutting for a perfect snug fit", link: "/shapes-styles/sleeves-trays/foam-inserts" },
    { name: "Slide Boxes", image: slideBoxesImg, description: "Two-piece boxes with a sliding tray mechanism designed for a premium unboxing experience and high security", link: "/shapes-styles/sleeves-trays/slide-boxes" },
    { name: "Sleeve Boxes", image: sleeveBoxesImg, description: "Tray and sleeve combination for a premium unboxing featuring sleek slide-out action and durable construction", link: "/shapes-styles/sleeves-trays/sleeve-boxes" },
    { name: "Custom Shrink Sleeves", image: customShrinkSleevesImg, description: "Full-body labels that shrink to fit container contours featuring 360-degree graphics and tamper evidence", link: "/shapes-styles/sleeves-trays/custom-shrink-sleeves" },
    { name: "Soap Packaging Sleeves", image: soapPackagingSleevesImg, description: "Branded wraps for handmade soaps featuring moisture-proof coatings and vibrant full-color custom designs", link: "/shapes-styles/sleeves-trays/soap-packaging-sleeves" },
    { name: "Tray Boxes", image: trayBoxesImg, description: "Open top boxes perfect for product display featuring sturdy sidewalls and high-impact interior printing", link: "/shapes-styles/sleeves-trays/tray-boxes" },
    { name: "Kraft Sleeve Boxes", image: kraftSleeveBoxesImg, description: "Eco-friendly kraft slide boxes for a natural look featuring biodegradable material and minimalist branding", link: "/shapes-styles/sleeves-trays/kraft-sleeve-boxes" },
    { name: "Custom Cone Sleeve", image: customConeSleeveImg, description: "Printed paper sleeves for ice cream cones featuring food-safe materials and colorful child-friendly designs", link: "/shapes-styles/sleeves-trays/custom-cone-sleeve" },
];

export function RelatedProductSleevesTrays() {
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
                        Related Products from Sleeves & Trays
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium packaging sleeves and trays designed to protect and showcase your products.
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
