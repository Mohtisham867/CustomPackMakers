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

// Import product images from stickers-and-labels category
import preRollLabelsImg from "@/assets/stickers-and-labels/pre-roll-labels.webp";
import foodLabelsImg from "@/assets/stickers-and-labels/food-labels.webp";
import circleLabelsImg from "@/assets/stickers-and-labels/circle-labels.webp";
import dieCutStickersImg from "@/assets/stickers-and-labels/die-cut-stickers.webp";
import soapBarLabelsImg from "@/assets/stickers-and-labels/soap-bar-labels.webp";
import tableTentsImg from "@/assets/stickers-and-labels/table-tents.webp";
import christmasStickersImg from "@/assets/stickers-and-labels/christmas-stickers.webp";
import paperStickersImg from "@/assets/stickers-and-labels/paper-stickers.webp";
import businessLabelsImg from "@/assets/stickers-and-labels/business-labels.webp";
import candleLabelsImg from "@/assets/stickers-and-labels/candle-labels.webp";
import soapLabelsImg from "@/assets/stickers-and-labels/soap-labels.webp";
import wineLabelsImg from "@/assets/stickers-and-labels/wine-labels.webp";
import kraftLabelsImg from "@/assets/stickers-and-labels/kraft-labels.webp";
import chapstickLabelsImg from "@/assets/stickers-and-labels/chapstick-labels.webp";
import metallicLabelsImg from "@/assets/stickers-and-labels/metallic-labels.webp";
import bottleLabelsImg from "@/assets/stickers-and-labels/bottle-labels.webp";
import cosmeticLabelsImg from "@/assets/stickers-and-labels/cosmetic-labels.webp";
import sprayBottleLabelsImg from "@/assets/stickers-and-labels/spray-bottle-labels.webp";
import bagLabelsImg from "@/assets/stickers-and-labels/bag-labels.webp";
import iceCreamLabelsImg from "@/assets/stickers-and-labels/ice-cream-labels.webp";
import honeyLabelsImg from "@/assets/stickers-and-labels/honey-labels.webp";
import bodyButterLabelsImg from "@/assets/stickers-and-labels/body-butter-labels.webp";
import cookieLabelsImg from "@/assets/stickers-and-labels/cookie-labels.webp";
import lotionLabelsImg from "@/assets/stickers-and-labels/lotion-labels.webp";
import bathBombLabelsImg from "@/assets/stickers-and-labels/bath-bomb-labels.webp";
import colorLabelsImg from "@/assets/stickers-and-labels/color-labels.webp";
import vinylStickersImg from "@/assets/stickers-and-labels/vinyl-stickers.webp";
import customRollLabelsImg from "@/assets/stickers-and-labels/custom-roll-labels.webp";
import waterproofLabelsImg from "@/assets/stickers-and-labels/waterproof-labels.webp";
import packagingLabelsImg from "@/assets/stickers-and-labels/packaging-labels.webp";
import decalsImg from "@/assets/stickers-and-labels/decals.webp";
import privateLabelPackagingImg from "@/assets/stickers-and-labels/private-label-packaging.webp";

const relatedProducts = [
    { name: "Pre Roll Packaging Labels", image: preRollLabelsImg, description: "Professional labels for pre-roll tubes and containers featuring durable high-tack adhesive and compliant legal text", link: "/shapes-styles/stickers-labels/pre-roll-packaging-labels" },
    { name: "Food Labels", image: foodLabelsImg, description: "Compliant and appetizing labels for food products featuring moisture-resistant liners and vibrant non-toxic inks", link: "/shapes-styles/stickers-labels/food-labels" },
    { name: "Circle Labels", image: circleLabelsImg, description: "Versatile round labels for logos and branding featuring precision die-cuts and premium protective gloss finishes", link: "/shapes-styles/stickers-labels/circle-labels" },
    { name: "Circle Stickers", image: circleLabelsImg, description: "Fun and effective round stickers for promotion featuring durable vinyl material and high-impact custom graphics", link: "/shapes-styles/stickers-labels/circle-stickers" },
    { name: "Die Cut Stickers", image: dieCutStickersImg, description: "Custom shaped stickers cut precisely to your design featuring weather-resistant vinyl and easy-peel backing", link: "/shapes-styles/stickers-labels/die-cut-stickers" },
    { name: "Soap Bar Labels", image: soapBarLabelsImg, description: "Elegant labels wrapping perfectly around soap bars featuring textured paper stocks and moisture-resistant coatings", link: "/shapes-styles/stickers-labels/soap-bar-labels" },
    { name: "Table Tents", image: tableTentsImg, description: "Freestanding display cards for menus or promotions featuring sturdy cardstock and high-resolution double-sided print", link: "/shapes-styles/stickers-labels/table-tents" },
    { name: "Christmas Stickers", image: christmasStickersImg, description: "Festive stickers to add holiday cheer to packaging featuring metallic foil accents and vibrant seasonal designs", link: "/shapes-styles/stickers-labels/christmas-stickers" },
    { name: "Paper Stickers", image: paperStickersImg, description: "Cost-effective, classic paper-based stickers featuring versatile matte finishes and reliable permanent adhesive", link: "/shapes-styles/stickers-labels/paper-stickers" },
    { name: "Business Labels", image: businessLabelsImg, description: "Professional labels for office and branding needs featuring clean typography and high-quality thermal-ready stock", link: "/shapes-styles/stickers-labels/business-labels" },
    { name: "Business Stickers", image: businessLabelsImg, description: "Promotional stickers to boost brand visibility featuring durable materials and eye-catching full-color printing", link: "/shapes-styles/stickers-labels/business-stickers" },
    { name: "Candle Labels", image: candleLabelsImg, description: "Heat-resistant labels designed for candle jars featuring specialized adhesives and elegant luxury textures", link: "/shapes-styles/stickers-labels/candle-labels" },
    { name: "Soap Labels", image: soapLabelsImg, description: "Water-resistant labels perfect for soap packaging featuring durable poly-stocks and smudge-proof ink technology", link: "/shapes-styles/stickers-labels/soap-labels" },
    { name: "Wine Labels", image: wineLabelsImg, description: "Premium labels for wine bottles with refined finishes featuring textured stocks and elegant gold foil stamping", link: "/shapes-styles/stickers-labels/wine-labels" },
    { name: "Kraft Labels", image: kraftLabelsImg, description: "Eco-friendly, rustic labels with a natural look featuring biodegradable material and organic-style branding", link: "/shapes-styles/stickers-labels/kraft-labels" },
    { name: "Chapstick Labels", image: chapstickLabelsImg, description: "Small, precise labels for lip balm tubes featuring protective coatings and vibrant high-resolution graphics", link: "/shapes-styles/stickers-labels/chapstick-labels" },
    { name: "Metallic Labels", image: metallicLabelsImg, description: "Shiny foil labels for a luxury, high-end appeal featuring mirror-like finishes and deep-embossed detailing", link: "/shapes-styles/stickers-labels/metallic-labels" },
    { name: "Bottle Labels", image: bottleLabelsImg, description: "Durable labels suitable for glass and plastic bottles featuring squeeze-resistant materials and waterproof ink", link: "/shapes-styles/stickers-labels/bottle-labels" },
    { name: "Lip Balm Labels", image: chapstickLabelsImg, description: "Custom tags for various lip balm containers featuring precise die-cuts and high-impact small-format branding", link: "/shapes-styles/stickers-labels/lip-balm-labels" },
    { name: "Cosmetic Labels", image: cosmeticLabelsImg, description: "Beautiful labels enhancing beauty product packaging featuring luxury finishes and smudge-resistant surfaces", link: "/shapes-styles/stickers-labels/cosmetic-labels" },
    { name: "Spray Bottle Labels", image: sprayBottleLabelsImg, description: "Waterproof labels for cleaning or cosmetic sprays featuring chemical-resistant liners and durable poly material", link: "/shapes-styles/stickers-labels/spray-bottle-labels" },
    { name: "Bag Labels", image: bagLabelsImg, description: "Identity labels for paper or plastic retail bags featuring strong adhesives and high-visibility brand marks", link: "/shapes-styles/stickers-labels/bag-labels" },
    { name: "Ice Cream Labels", image: iceCreamLabelsImg, description: "Cold-resistant labels for frozen treat containers featuring specialized low-temperature adhesive technology", link: "/shapes-styles/stickers-labels/ice-cream-labels" },
    { name: "Honey Labels", image: honeyLabelsImg, description: "Sweet designs for honey jars and bottles featuring golden-tone prints and durable moisture-proof paper", link: "/shapes-styles/stickers-labels/honey-labels" },
    { name: "Body Butter Labels", image: bodyButterLabelsImg, description: "Grease-resistant labels for skincare tubs featuring luxury textures and high-impact cosmetic branding", link: "/shapes-styles/stickers-labels/body-butter-labels" },
    { name: "Cookie Labels", image: cookieLabelsImg, description: "Charming labels for bakery boxes and bags featuring food-safe materials and colorful artisanal graphics", link: "/shapes-styles/stickers-labels/cookie-labels" },
    { name: "Lotion Labels", image: lotionLabelsImg, description: "Moisture-proof labels for lotion bottles and pumps featuring elegant textures and durable protective coatings", link: "/shapes-styles/stickers-labels/lotion-labels" },
    { name: "Bath Bomb Labels", image: bathBombLabelsImg, description: "Fun, vibrant labels for bath bomb packaging featuring moisture-resistant stocks and bright playful colors", link: "/shapes-styles/stickers-labels/bath-bomb-labels" },
    { name: "Color Labels", image: colorLabelsImg, description: "Full-color printed labels for vivid branding featuring high-fidelity color matching and premium finishes", link: "/shapes-styles/stickers-labels/color-labels" },
    { name: "Vinyl Stickers", image: vinylStickersImg, description: "Durable, weather-resistant stickers for outdoor use featuring high-grade vinyl and UV-protective coatings", link: "/shapes-styles/stickers-labels/vinyl-stickers" },
    { name: "Custom Roll Labels", image: customRollLabelsImg, description: "Efficient labeling solution on rolls for high volume featuring automatic application ready technology", link: "/shapes-styles/stickers-labels/custom-roll-labels" },
    { name: "Waterproof Labels", image: waterproofLabelsImg, description: "Labels that withstand moisture and washing featuring durable synthetic materials and specialized adhesives", link: "/shapes-styles/stickers-labels/waterproof-labels" },
    { name: "Packaging Labels", image: packagingLabelsImg, description: "Essential information and branding for shipping boxes featuring high-visibility print and strong adhesive", link: "/shapes-styles/stickers-labels/packaging-labels" },
    { name: "Decals", image: decalsImg, description: "High-quality transfer stickers for display featuring precision cutting and durable outdoor-grade materials", link: "/shapes-styles/stickers-labels/decals" },
    { name: "Private Label Packaging", image: privateLabelPackagingImg, description: "Custom labeling for your exclusive product usage featuring premium materials and tailored brand graphics", link: "/shapes-styles/stickers-labels/private-label-packaging" },
];

export function RelatedProductStickersLabels() {
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
                        Related Products from Stickers &amp; Labels
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium custom stickers and labels designed for every surface, product, and industry.
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
