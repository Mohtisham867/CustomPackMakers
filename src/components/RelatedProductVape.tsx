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

import customECigaretteBoxes from "@/assets/vape-boxes/custom-e-cigarette-boxes.webp";
import customVapeCartridgeBoxes from "@/assets/vape-boxes/custom-vape-cartridge-boxes.webp";
import vapePenBoxes from "@/assets/vape-boxes/vape-pen-boxes.webp";
import cannabisVapePackaging from "@/assets/vape-boxes/Cannabis Vape Packaging.webp";
import oneMlVapeCartridgeBoxes from "@/assets/vape-boxes/1ml Vape Cartridge Boxes.webp";
import vapeDisplayBoxes from "@/assets/vape-boxes/Vape Display.webp";
import disposableVapeBoxes from "@/assets/vape-boxes/disposable-vape-boxes.webp";
import emptyVapeCartridgeBoxes from "@/assets/vape-boxes/empty-vape-cartridge-boxes.webp";
import dankVapePackaging from "@/assets/vape-boxes/dank-vape-packaging.webp";
import cbdVapeBoxes from "@/assets/vape-boxes/cbd-vape-boxes.webp";
import vapeJuiceBoxes from "@/assets/vape-boxes/vape-juice-boxes.webp";
import juulPackaging from "@/assets/vape-boxes/juul-packaging.webp";

const relatedProducts = [
    { name: "Custom E-Cigarette Boxes", image: customECigaretteBoxes, description: "Premium packaging for e-cigarettes featuring secure device fitment and luxury high-gloss print finishes", link: "/industries/vape-boxes/custom-e-cigarette-boxes" },
    { name: "Custom Vape Cartridge Boxes", image: customVapeCartridgeBoxes, description: "Secure boxes for vape cartridges featuring child-resistant locks and precision-cut protective inserts", link: "/industries/vape-boxes/custom-vape-cartridge-boxes" },
    { name: "Vape Pen Boxes", image: vapePenBoxes, description: "Stylish packaging for vape pens featuring sleek elongated design and elegant soft-touch matte finishes", link: "/industries/vape-boxes/vape-pen-boxes" },
    { name: "Cannabis Vape Packaging", image: cannabisVapePackaging, description: "Compliant cannabis vape solutions featuring mandatory legal icons and high-impact retail branding", link: "/industries/vape-boxes/cannabis-vape-packaging" },
    { name: "1ml Vape Cartridge Boxes", image: oneMlVapeCartridgeBoxes, description: "Precision packaging for 1ml cartridges featuring compact design and durable high-quality cardstock", link: "/industries/vape-boxes/1ml-vape-cartridge-boxes" },
    { name: "Vape Display Boxes", image: vapeDisplayBoxes, description: "Eye-catching retail display packaging featuring tiered shelves and high-visibility marketing headers", link: "/industries/vape-boxes/vape-display-boxes" },
    { name: "Disposable Vape Boxes", image: disposableVapeBoxes, description: "Convenient disposable vape packaging featuring easy-open tabs and vibrant product-specific graphics", link: "/industries/vape-boxes/disposable-vape-boxes" },
    { name: "Empty Vape Cartridge Boxes", image: emptyVapeCartridgeBoxes, description: "Protective boxes for empty cartridges featuring clear viewing windows and sturdy outer cardboard walls", link: "/industries/vape-boxes/empty-vape-cartridge-boxes" },
    { name: "Dank Vape Packaging", image: dankVapePackaging, description: "Custom branded vape packaging featuring edgy graphics and premium metallic foil stamping effects", link: "/industries/vape-boxes/dank-vape-packaging" },
    { name: "CBD Vape Boxes", image: cbdVapeBoxes, description: "Specialized CBD vape product packaging featuring calming color palettes and organic-style textures", link: "/industries/vape-boxes/cbd-vape-boxes" },
    { name: "Vape Juice Boxes", image: vapeJuiceBoxes, description: "Secure packaging for vape liquids featuring leak-proof design and vibrant flavor-specific branding", link: "/industries/vape-boxes/vape-juice-boxes" },
    { name: "Juul Packaging", image: juulPackaging, description: "Compatible Juul device packaging featuring precise internal sizing and professional retail graphics", link: "/industries/vape-boxes/juul-packaging" },
];

export function RelatedProductVape() {
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
                        Related Products from Vape Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium vape packaging solutions designed to protect and showcase your products.
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
