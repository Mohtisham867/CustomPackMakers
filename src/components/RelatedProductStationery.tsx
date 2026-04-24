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

// Product images
import businessCards from "@/assets/stationery-boxes/custom-business-cards.webp";
import documentFolder from "@/assets/stationery-boxes/document-folder.webp";
import penGiftBoxes from "@/assets/stationery-boxes/pen-gift-box.webp";
import mailingEnvelopes from "@/assets/stationery-boxes/mailing-envelopes.webp";
import invitationBoxes from "@/assets/stationery-boxes/invitation-boxes.webp";
import markerBoxes from "@/assets/stationery-boxes/marker-boxes.webp";
import stapleBoxes from "@/assets/stationery-boxes/staple-boxes.webp";
import cardboardPencilBoxes from "@/assets/stationery-boxes/cardboard-pencil-boxes.webp";
import packagingInserts from "@/assets/stationery-boxes/packaging-inserts.webp";
import pencilBoxes from "@/assets/stationery-boxes/pencil-boxes.webp";
import customBookmarks from "@/assets/stationery-boxes/custom-bookmarks.webp";
import bookBoxes from "@/assets/stationery-boxes/Book Box.webp";

// Related products from Stationery Boxes category
const relatedProducts = [
    { name: "Custom Business Cards", image: businessCards, description: "Professional cards for networking and branding featuring premium paper stocks and elegant custom finishes", link: "/industries/stationery-boxes/custom-business-cards" },
    { name: "Document Folder", image: documentFolder, description: "Organized storage for important documents featuring reinforced pockets and professional branded exteriors", link: "/industries/stationery-boxes/document-folder" },
    { name: "Pen Gift Boxes", image: penGiftBoxes, description: "Elegant packaging for premium pens featuring soft velvet linings and precise internal product fitment", link: "/industries/stationery-boxes/pen-gift-boxes" },
    { name: "Mailing Envelopes", image: mailingEnvelopes, description: "Secure envelopes for professional correspondence featuring peel-and-seal strips and durable paper material", link: "/industries/stationery-boxes/mailing-envelopes" },
    { name: "Invitation Boxes", image: invitationBoxes, description: "Premium boxes for special event invitations featuring luxury textures and sophisticated die-cut elements", link: "/industries/stationery-boxes/invitation-boxes" },
    { name: "Marker Boxes", image: markerBoxes, description: "Protective packaging for marker sets featuring organized internal trays and high-visibility retail graphics", link: "/industries/stationery-boxes/marker-boxes" },
    { name: "Staple Boxes", image: stapleBoxes, description: "Compact boxes for office staples featuring sturdy cardboard construction and clear product identification", link: "/industries/stationery-boxes/staple-boxes" },
    { name: "Cardboard Pencil Boxes", image: cardboardPencilBoxes, description: "Eco-friendly pencil storage solutions featuring sustainable materials and colorful custom-printed designs", link: "/industries/stationery-boxes/cardboard-pencil-boxes" },
    { name: "Packaging Inserts", image: packagingInserts, description: "Custom inserts for organized packaging featuring tailored compartments to keep stationery items in place", link: "/industries/stationery-boxes/packaging-inserts" },
    { name: "Pencil Boxes", image: pencilBoxes, description: "Durable boxes for pencil storage designed for school or office use with high-quality child-safe materials", link: "/industries/stationery-boxes/pencil-boxes" },
    { name: "Custom Bookmarks", image: customBookmarks, description: "Branded bookmarks for promotional use featuring double-sided printing and premium protective coatings", link: "/industries/stationery-boxes/custom-bookmarks" },
    { name: "Book Boxes", image: bookBoxes, description: "Protective packaging for books and publications featuring exact-fit dimensions and heavy-duty shipping board", link: "/industries/stationery-boxes/book-boxes" },
];

export function RelatedProductStationery() {
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
                        Related Products from Stationery Boxes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Explore our complete range of premium stationery packaging solutions designed to protect and showcase your products.
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
