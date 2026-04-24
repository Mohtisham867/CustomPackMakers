import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEOContent } from "@/components/SEOContent";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductKraftBoxes } from "@/components/RelatedProductKraftBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Images
import heroImg from "@/assets/kraft-boxes/kraft-pillow-boxes-v2.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftPillowBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Kraft Pillow Boxes - Main View" },
        { src: heroImg, alt: "Kraft Pillow Boxes - Curved Shape" },
        { src: heroImg, alt: "Kraft Pillow Boxes - Gift Presentation" },
        { src: heroImg, alt: "Kraft Pillow Boxes - Side View" },
        { src: heroImg, alt: "Kraft Pillow Boxes - Branding Display" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Kraft Pillow Boxes | Unique Curved Gift Packaging | CustomPackMakers</title>
                <meta name="description" content="Order kraft pillow boxes for unique gift and retail packaging. Elegant curved shapes made from high-quality eco-friendly kraft paper. Perfect for jewelry, favors, and small gifts." />
                <meta name="keywords" content="kraft pillow boxes, custom pillow boxes, curved gift boxes, eco-friendly retail packaging, wholesale kraft gift boxes" />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/kraft-boxes">Kraft Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Kraft Pillow Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Kraft</span> Pillow Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Elegant curved packaging that stands out with ease. Eco-friendly kraft material combined with a unique aesthetic for jewelry, favors, and boutique items.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get a Quote
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={heroImg}
                                    alt="Kraft Pillow Boxes Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Unique Geometric Elegance Meets Sustainable Craftsmanship
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">kraft pillow boxes</strong> are the perfect choice for retailers seeking a departure from conventional rectangular packaging. The distinct curved shape creates a natural tension that keeps the box securely closed while providing a soft, tactile experience for the customer. Manufactured from high-tensile kraft paper, these boxes offer exceptional durability in a compact form factor, making them ideal for high-end accessories, skincare samples, and organic retail items.
                        </p>
                        <p>
                            We provide <strong className="text-foreground">wholesale custom pillow packaging</strong> that can be tailored to your brand's specific needs. The earthy, organic background of the kraft material provides a high-contrast canvas for elegant black, white, or metallic printing. With easy-pop assembly and secure side-flaps, our pillow boxes are as efficient in the retail back-room as they are beautiful on the shelf. Let your brand stand out with a geometric shape that customers will love to keep.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index
                                            ? 'border-primary shadow-md ring-2 ring-primary/20'
                                            : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                                            }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                                        >
                                            Submit Inquiry
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <TechnicalSpecsSection />

            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Modern Branding with Custom Kraft Pillow Boxes: A Complete Guide
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="
                            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0
                            [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In the diverse landscape of modern retail, standard packaging can often blend into the background. For brands looking to make a memorable impact, kraft pillow boxes offer a refreshing and elegant solution. These unique, curved containers provide a sophisticated unboxing moment that resonates with consumers who value aesthetics as much as sustainability.
                            </p>

                            <h3>The Aesthetics of the Curve</h3>
                            <p>
                                The pillow box gets its name from its distinctive bowed shape, which resembles a small pillow when assembled. This geometric departure from the "traditional box" creates immediate visual interest. Psychologically, curved lines are often associated with comfort, elegance, and approachability. When paired with the natural, rustic texture of kraft paper, the result is a piece of packaging that feels both high-end and organic.
                            </p>

                            <h3>Why Kraft Material? Sustainability and Strength</h3>
                            <p>
                                Kraft paper is the environmental champion of the packaging world. It is 100% biodegradable, recyclable, and requires fewer chemical treatments during manufacturing than bleached papers. Beyond its eco-credentials, our kraft board is selected for its high bursting strength. This ensures that even with the curved structural tension of the pillow shape, the box remains secure and durable throughout the shipping and handling process. For brands with a strong commitment to environmental ethics, kraft pillow boxes are an effortless way to demonstrate those values.
                            </p>

                            <h3>Functional Benefits: Compact and Quick</h3>
                            <p>
                                Our kraft pillow boxes are as practical as they are pretty. They offer several operational advantages for busy retailers:
                            </p>
                            <ul>
                                <li><strong>Space Efficiency:</strong> These boxes ship flat and take up incredibly little storage space in your back-room or warehouse.</li>
                                <li><strong>Speed of Assembly:</strong> The 'pop-and-fold' design allows staff to assemble the boxes in under three seconds, making them perfect for high-volume gift wrapping or event favors.</li>
                                <li><strong>Secure Closure:</strong> The natural tension created by the curved sides keeps the overlapping end-flaps firmly in place without the need for adhesive tape or stickers.</li>
                            </ul>

                            <h3>Customizing Your Unique Pillow Box</h3>
                            <p>
                                While the shape is the main attraction, customization allows your brand identity to shine. We offer a range of specialized printing and finishing techniques:
                            </p>
                            <ul>
                                <li><strong>Artisan Printing:</strong> Using high-resolution digital or offset printing, we can place your logo, socials, or intricate patterns in high-contrast black or vibrant colors.</li>
                                <li><strong>Specialty Finishes:</strong> Metallic foil stamping in gold or copper adds a touch of luxury that catch the light against the matte kraft background.</li>
                                <li><strong>Custom Cutouts:</strong> Precision die-cutting can add small windows or decorative shapes, allowing customers to catch a glimpse of the product inside.</li>
                                <li><strong>Ribbon Attachments:</strong> Many luxury gift brands use pre-cut holes to attach satin or twine ribbons, further elevating the unboxing experience.</li>
                            </ul>

                            <h3>Diverse Industry Applications</h3>
                            <p>
                                Custom kraft pillow boxes are incredibly versatile across multiple sectors. In the jewelry industry, they are a staple for earrings, necklaces, and delicate bracelets. The skincare and beauty industry uses them for samples, travel-sized products, and organic soaps. They are also the preferred choice for events, including wedding favors, corporate gifting suites, and boutique confectionery. No matter the industry, the pillow box adds an immediate sense of "curated care" to the product.
                            </p>

                            <h3>The Advantage of Purchasing Wholesale</h3>
                            <p>
                                For growing businesses, consistency and cost-efficiency are critical. Purchasing your pillow boxes wholesale from CustomPackMakers guarantees that every unit meets the same high structural and aesthetic standards. We offer competitive pricing for volume orders while maintaining the flexibility to support smaller, niche brands with localized quantities. Our industry-leading lead times ensure that you have your branded packaging ready for your next big product launch or seasonal event.
                            </p>

                            <h3>Why Choose CustomPackMakers for Your Pillow Boxes?</h3>
                            <p>
                                We combine decades of manufacturing expertise with a passion for creative design. Our team doesn't just make boxes; we engineer brand experiences. From the initial die-line layout to the final quality control check, we ensure your kraft pillow boxes are flawless. Partnering with us means gaining access to expert advice on material selection, design optimization, and sustainable best practices. Let us help you turn a simple purchase into an unforgettable brand moment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductKraftBoxes />

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Geometric charm</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Elegance in <span className="text-primary">Every Curve</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Discover why boutique brands are moving away from squares. Our pillow boxes create an instant premium feel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Distinctive Silhouette</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The curved geometry of the pillow box creates immediate visual impact, distinguishing your brand in a world of square containers.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Rapid Assembly</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Pop and fold design allows for assembly in seconds, saving valuable retail time during peak gift-giving seasons and events.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Luxury Texture</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our premium kraft cardstock provides a high-end tactile feel while signaling 100% environmental responsibility to your buyers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImg}
                                    alt="Unique Kraft Pillow Packaging Presentation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Make an Unforgettable Impression</p>
                                    <p className="text-white/75 text-sm">Packaging that customers want to keep and reuse</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">FREE</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Design Consult</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Answers to popular pillow box questions.
                                </p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "How do the boxes stay closed without tape?",
                                        answer: "The pillow box design relies on the natural structural tension of the curved sides. When the end flaps are folded inward, they engage with this curved edge, creating a secure mechanical lock that stays closed under normal handling without needing adhesive."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can these boxes be used for shipping?",
                                        answer: "Pillow boxes are primarily retail and gift packaging. While they are very sturdy, we generally recommend placing them inside a larger corrugated mailer box if they are being shipped through standard courier services to protect the distinctive curved shape."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What is the best way to add my logo to a pillow box?",
                                        answer: "We recommend centering the logo on the flat-facing panel of the box. High-contrast black ink looks stunning on natural kraft, or you can opt for metallic foil stamping for an extra touch of luxury."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer different sizes for jewelry?",
                                        answer: "Yes! We have standard miniature sizes perfect for earrings and rings, as well as medium and large sizes for necklaces and bracelets. We can also create custom dimensions for your specific jewelry products."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are these boxes 100% recyclable?",
                                        answer: "Absolutely. Our kraft pillow boxes are made from unbleached plant fibers and are 100% recyclable and biodegradable, making them a top choice for zero-waste branding."
                                    }
                                ].map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300"
                                    >
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Kraft Pillow Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default KraftPillowBoxes;
