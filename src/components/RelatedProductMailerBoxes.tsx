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

// Import professional product images for Mailer Boxes
import vinylRecordMailers from "@/assets/mailer-boxes/vinyl-record-mailers.webp";
import bubbleMailers from "@/assets/mailer-boxes/bubble-mailers.webp";
import fourByEightBubbleMailers from "@/assets/mailer-boxes/4x8-bubble-mailers.webp";
import kraftBubbleMailers from "@/assets/mailer-boxes/kraft-bubble-mailers.webp";
import corrugatedMailerBoxes from "@/assets/mailer-boxes/corrugated-mailer-boxes.webp";
import earLockMailerBox from "@/assets/mailer-boxes/ear-lock-mailer-box-updated.webp";
import polyBubbleMailers from "@/assets/mailer-boxes/poly-bubble-mailers.webp";
import whiteMailerBoxes from "@/assets/mailer-boxes/white-mailer-boxes.webp";
import kraftMailerBoxes from "@/assets/mailer-boxes/kraft-mailer-boxes.webp";
import blackMailerBoxes from "@/assets/mailer-boxes/black-mailer-boxes.webp";
import coloredMailerBoxes from "@/assets/mailer-boxes/colored-mailer-boxes.webp";
import tuckTopMailerBoxes from "@/assets/mailer-boxes/tuck-top-mailer-boxes.webp";

// Related products from Mailer Boxes category
const relatedProducts = [
    { name: "Vinyl Record Mailers", image: vinylRecordMailers, description: "Protective mailers specially designed to keep vinyl records safe from bending during transit.", link: "/shapes-styles/mailer-boxes/vinyl-record-mailers" },
    { name: "Bubble Mailers", image: bubbleMailers, description: "Lightweight, cushioned mailers offering superior protection for a variety of fragile items.", link: "/shapes-styles/mailer-boxes/bubble-mailers" },
    { name: "4x8 Bubble Mailers", image: fourByEightBubbleMailers, description: "Compact and durable bubble mailers perfectly sized for small cosmetics, jewelry, and accessories.", link: "/shapes-styles/mailer-boxes/4x8-bubble-mailers" },
    { name: "Kraft Bubble Mailers", image: kraftBubbleMailers, description: "Eco-friendly kraft exterior combined with bubble padding for sustainable product protection.", link: "/shapes-styles/mailer-boxes/kraft-bubble-mailers" },
    { name: "Corrugated Mailer Boxes", image: corrugatedMailerBoxes, description: "Sturdy corrugated construction designed for heavy-duty shipping and premium unboxing.", link: "/shapes-styles/mailer-boxes/corrugated-mailer-boxes" },
    { name: "Ear Lock Mailer Box", image: earLockMailerBox, description: "Secure, self-locking mailers that ensure safe delivery without the need for additional tape.", link: "/shapes-styles/mailer-boxes/ear-lock-mailer-box" },
    { name: "Poly Bubble Mailers", image: polyBubbleMailers, description: "Water-resistant and tear-proof mailers providing maximum security for your shipments.", link: "/shapes-styles/mailer-boxes/poly-bubble-mailers" },
    { name: "White Mailer Boxes", image: whiteMailerBoxes, description: "Clean, professional white mailers providing a brilliant canvas for your custom brand artwork.", link: "/shapes-styles/mailer-boxes/white-mailer-boxes" },
    { name: "Kraft Mailer Boxes", image: kraftMailerBoxes, description: "Natural, rustic mailers crafted from high-quality kraft board for sustainable and durable shipping.", link: "/shapes-styles/mailer-boxes/kraft-mailer-boxes" },
    { name: "Black Mailer Boxes", image: blackMailerBoxes, description: "Sleek, stylish black mailer boxes that instantly communicate luxury and premium value.", link: "/shapes-styles/mailer-boxes/black-mailer-boxes" },
    { name: "Colored Mailer Boxes", image: coloredMailerBoxes, description: "Vibrant and eye-catching colored mailers designed to make your packages stand out.", link: "/shapes-styles/mailer-boxes/colored-mailer-boxes" },
    { name: "Tuck Top Mailer Boxes", image: tuckTopMailerBoxes, description: "Classic tuck top design allowing for fast assembly and an impressive opening experience.", link: "/shapes-styles/mailer-boxes/tuck-top-mailer-boxes" },
];

export function RelatedProductMailerBoxes() {
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
                        Explore More Mailer Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Discover our comprehensive range of customizable mailer boxes built for e-commerce, durability, and a premium unboxing experience.
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
