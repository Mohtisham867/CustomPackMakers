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

// Image Imports
import beardOilBoxes from "@/assets/industry/cosmetic-boxes/Custom Beard Oil Boxes.webp";
import serumBoxes from "@/assets/industry/cosmetic-boxes/Serum Boxes.webp";
import hairColorBoxes from "@/assets/industry/cosmetic-boxes/hair-color-boxes.webp";
import hairExtensionBoxes from "@/assets/industry/cosmetic-boxes/Hair Extension Boxes.webp";
import hairSprayBoxes from "@/assets/industry/cosmetic-boxes/Hair Spray Boxes.webp";
import lipGlossBoxes from "@/assets/industry/cosmetic-boxes/Custom Lip Gloss Boxes.webp";
import lipLinerBoxes from "@/assets/industry/cosmetic-boxes/Custom Lip Liner Boxes.webp";
import lipstickBoxes from "@/assets/industry/cosmetic-boxes/Custom Lipstick Boxes.webp";
import mascaraBoxes from "@/assets/industry/cosmetic-boxes/Mascara Boxes.webp";
import nailPolishBoxes from "@/assets/industry/cosmetic-boxes/Nail Polish Boxes.webp";
import eyeShadowBoxes from "@/assets/industry/cosmetic-boxes/Custom Eye Shadow Boxes.webp";
import eyelashBoxes from "@/assets/industry/cosmetic-boxes/Eyelash Boxes.webp";
import essentialOilBoxes from "@/assets/industry/cosmetic-boxes/Essential Oil Boxes.webp";
import foundationBoxes from "@/assets/industry/cosmetic-boxes/Foundation Boxes.webp";
import lipBalmBoxes from "@/assets/industry/cosmetic-boxes/Lip Balm Boxes.webp";
import nailBoxes from "@/assets/industry/cosmetic-boxes/Nail Boxes.webp";
import cosmeticLabels from "@/assets/industry/cosmetic-boxes/Cosmetic Labels.webp";
import lipTintPackaging from "@/assets/industry/cosmetic-boxes/Lip Tint Packaging.webp";
import customWigBoxes from "@/assets/industry/cosmetic-boxes/Custom Wig Boxes.webp";
import skinCarePackaging from "@/assets/industry/cosmetic-boxes/Skin Care Packaging.webp";

const relatedProducts = [
    { name: "Custom Beard Oil Boxes", image: beardOilBoxes, description: "Rugged and sophisticated packaging for premium men's grooming oils.", link: "/industries/cosmetic-boxes/beard-oil-boxes" },
    { name: "Serum Boxes", image: serumBoxes, description: "Protective and elegant boxes for clinical skincare and beauty serums.", link: "/industries/cosmetic-boxes/serum-boxes" },
    { name: "Hair Color Boxes", image: hairColorBoxes, description: "Vibrant and durable packaging for professional hair dye products.", link: "/industries/cosmetic-boxes/hair-color-boxes" },
    { name: "Hair Extension Boxes", image: hairExtensionBoxes, description: "Luxury drawer and rigid boxes for premium hair extensions and weaves.", link: "/industries/cosmetic-boxes/hair-extension-boxes" },
    { name: "Hair Spray Boxes", image: hairSprayBoxes, description: "Structurally sound packaging designed for secure styling spray transport.", link: "/industries/cosmetic-boxes/hair-spray-boxes" },
    { name: "Custom Lip Gloss Boxes", image: lipGlossBoxes, description: "Vibrant packaging with high-clarity windows for luxury lip products.", link: "/industries/cosmetic-boxes/lip-gloss-boxes" },
    { name: "Custom Lip Liner Boxes", image: lipLinerBoxes, description: "Slim and sophisticated boxes for professional cosmetic lip liners.", link: "/industries/cosmetic-boxes/lip-liner-boxes" },
    { name: "Custom Lipstick Boxes", image: lipstickBoxes, description: "Elite packaging featuring premium finishes for signature lipstick lines.", link: "/industries/cosmetic-boxes/lipstick-boxes" },
    { name: "Mascara Boxes", image: mascaraBoxes, description: "Elegant and protective boxes for precision eye makeup products.", link: "/industries/cosmetic-boxes/mascara-boxes" },
    { name: "Nail Polish Boxes", image: nailPolishBoxes, description: "Durable and spill-resistant packaging for vibrant nail lacquer bottles.", link: "/industries/cosmetic-boxes/nail-polish-boxes" },
    { name: "Custom Eye Shadow Boxes", image: eyeShadowBoxes, description: "Artistic and protective packaging for luxury eye shadow palettes.", link: "/industries/cosmetic-boxes/eye-shadow-boxes" },
    { name: "Eyelash Boxes", image: eyelashBoxes, description: "Luxury lash packaging with custom trays for delicate eyelash sets.", link: "/industries/cosmetic-boxes/eyelash-boxes" },
    { name: "Essential Oil Boxes", image: essentialOilBoxes, description: "UV-protective and leak-resistant packaging for botanical oils.", link: "/industries/cosmetic-boxes/essential-oil-boxes" },
    { name: "Foundation Boxes", image: foundationBoxes, description: "High-end packaging for foundations featuring spill-proof engineering.", link: "/industries/cosmetic-boxes/foundation-boxes" },
    { name: "Lip Balm Boxes", image: lipBalmBoxes, description: "Compact and moisture-resistant boxes for organic lip care products.", link: "/industries/cosmetic-boxes/lip-balm-boxes" },
    { name: "Nail Boxes", image: nailBoxes, description: "Structured packaging for artificial nails and professional nail kits.", link: "/industries/cosmetic-boxes/nail-boxes" },
    { name: "Cosmetic Labels", image: cosmeticLabels, description: "HD waterproof and oil-resistant labels for all beauty containers.", link: "/industries/cosmetic-boxes/cosmetic-labels" },
    { name: "Lip Tint Packaging", image: lipTintPackaging, description: "Modern and vibrant packaging for long-wear lip tint formulations.", link: "/industries/cosmetic-boxes/lip-tint-packaging" },
    { name: "Custom Wig Boxes", image: customWigBoxes, description: "Rigid luxury boxes with satin linings for high-end hair pieces.", link: "/industries/cosmetic-boxes/wig-boxes" },
    { name: "Skin Care Packaging", image: skinCarePackaging, description: "Clinical-grade packaging solutions for specialized skincare regimens.", link: "/industries/cosmetic-boxes/skin-care-packaging" },
];

export function RelatedProductCosmetic() {
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
                        Related Beauty Solutions
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium cosmetic packaging solutions designed to protect and showcase your products.
                    </p>
                </div>

                <div className="relative px-4">
                    <Carousel
                        setApi={setApi}
                        opts={{ align: "start", loop: true }}
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
                                                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
                                                    >
                                                        View Product
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-2 mt-8 flex-wrap">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"}`}
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
