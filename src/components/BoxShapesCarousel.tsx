import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import childResistant from "@/assets/box-shapes/child-resistant-packaging.png";
import customBags from "@/assets/box-shapes/custom-bags.webp";
import customMylarBags from "@/assets/box-shapes/custom-mylar-bags.png";
import customPaperBags from "@/assets/box-shapes/custom-paper-bags.webp"; // Updated to png
import customShapeBoxes from "@/assets/box-shapes/custom-shape-boxes.webp";
import displayBoxes from "@/assets/box-shapes/display-boxes.png";
import gableBoxes from "@/assets/box-shapes/Gable box.png";
import hangTags from "@/assets/box-shapes/hang-tags.webp";
import mailerBoxes from "@/assets/box-shapes/mailer-boxes.webp";
import pillowBoxes from "@/assets/box-shapes/pillow-boxes.webp";
import shippingBoxes from "@/assets/box-shapes/shipping-boxes.png";
import sleeveAndTray from "@/assets/box-shapes/sleeve-and-tray.webp";
import stickersAndLabels from "@/assets/box-shapes/stickers-and-labels.webp";
import subscriptionBoxes from "@/assets/box-shapes/subscription-boxes.webp";
import tuckBoxes from "@/assets/box-shapes/tuck-boxes.webp";
import weedBags from "@/assets/box-shapes/weed-bags.webp";
import windowPackaging from "@/assets/box-shapes/window-packaging.webp";

const boxShapes = [
  { name: "Child Resistant Packaging", image: childResistant, link: "/shapes-styles/child-resistant-packaging" },
  { name: "Custom Bags", image: customBags, link: "/shapes-styles/custom-bags" },
  { name: "Custom Mylar Bags", image: customMylarBags, link: "/categories/custom-mylar-bags" },
  { name: "Custom Paper Bags", image: customPaperBags, link: "/shapes-styles/custom-paper-bags" },
  { name: "Custom Shape Boxes", image: customShapeBoxes, link: "/shapes-styles/custom-shape-boxes" },
  { name: "Display Boxes", image: displayBoxes, link: "/industries/display-boxes" },
  { name: "Gable Boxes", image: gableBoxes, link: "/shapes-styles/gable-boxes" },
  { name: "Hang Tags", image: hangTags, link: "/shapes-styles/hang-tags" },
  { name: "Mailer Boxes", image: mailerBoxes, link: "/industries/mailer-boxes" },
  { name: "Pillow Boxes", image: pillowBoxes, link: "/shapes-styles/pillow-boxes" },
  { name: "Shipping Boxes", image: shippingBoxes, link: "/shapes-styles/shipping-boxes" },
  { name: "Sleeve and Tray", image: sleeveAndTray, link: "/shapes-styles/sleeves-and-trays" },
  { name: "Stickers and Labels", image: stickersAndLabels, link: "/shapes-styles/stickers-and-labels" },
  { name: "Subscription Boxes", image: subscriptionBoxes, link: "/shapes-styles/subscription-boxes" },
  { name: "Tuck Boxes", image: tuckBoxes, link: "/industries/tuck-boxes" },
  { name: "Weed Bags", image: weedBags, link: "/shapes-styles/weed-bags" },
  { name: "Window Packaging", image: windowPackaging, link: "/shapes-styles/window-packaging" },
];

export const BoxShapesCarousel = () => {
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
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Customize Your Box In Unique Shapes & Styles
          </h2>
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
              {boxShapes.map((shape, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Link to={shape.link} className="block cursor-pointer">
                    <Card className="overflow-hidden border-border bg-card hover:shadow-lg transition-shadow duration-300 group">
                      <CardContent className="p-0">
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img
                            src={shape.image}
                            alt={shape.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-semibold text-foreground text-lg">
                            {shape.name}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
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
};
