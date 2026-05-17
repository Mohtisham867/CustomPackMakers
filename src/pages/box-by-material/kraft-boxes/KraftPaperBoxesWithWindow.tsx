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
import { useState, useEffect } from "react";
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

// Product images
import kraftWindowHero from "@/assets/material/kraft-boxes/kraft-paper-boxes-with-window.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftPaperBoxesWithWindow = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: kraftWindowHero, alt: "Kraft Paper Boxes with Window - View 1" },
        { src: kraftWindowHero, alt: "Kraft Paper Boxes with Window - View 2" },
        { src: kraftWindowHero, alt: "Kraft Paper Boxes with Window - View 3" },
        { src: kraftWindowHero, alt: "Kraft Paper Boxes with Window - View 4" },
        { src: kraftWindowHero, alt: "Kraft Paper Boxes with Window - View 5" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Paper Boxes with Window | Wholesale Eco Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom kraft paper boxes with windows for premium product visibility. Sustainable, durable brown paper boxes with clear PET windows. Wholesale rates & fast shipping." />
                <meta name="keywords" content="kraft paper boxes with window, brown window boxes, eco friendly display packaging, custom printed kraft window boxes, retail paper boxes with window" />
                <meta property="og:title" content="Custom Kraft Paper Boxes with Window | Wholesale Eco Packaging | CustomPackMakers" />
                <meta property="og:description" content="High-visibility kraft paper window boxes for retail and gift products. Sustainable, elegant, and fully customizable. Get a free quote today." />
            </Helmet>
            <Header />

            {/* Breadcrumb Section */}
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
                                    <Link to="/box-by-materials">Box by Materials</Link>
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
                                <BreadcrumbPage>Kraft Paper Boxes with Window</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Window</span> Kraft Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Combine rustic charm with modern visibility. Our custom kraft paper boxes with windows offer a transparent look at your product while maintaining high-end eco-protection.
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

                        {/* RIGHT HERO IMAGE */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={kraftWindowHero}
                                    alt="Kraft Paper Boxes with Window Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT OVERVIEW SECTION */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Premium Visibility for Conscious Retail Brands
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom kraft paper boxes with window</strong> are designed for retail brands that believe seeing is believing. In a market where customer trust is built through transparency, these boxes provide a clear viewing portal for your products without compromising on the rustic, natural appeal of unbleached kraft paperboard. Whether you're packaging organic soaps, artisan snacks, or luxury cosmetics, our <strong className="text-foreground">windowed kraft packaging</strong> delivers a sophisticated and honest presentation that drives purchase intent.
                        </p>
                        <p>
                            Each box is constructed from high-GSM rigid kraft cardstock, ensuring structural integrity while providing a secure frame for the high-clarity PET window. We offer wholesale solutions with fully customizable dimensions and die-cut window shapes to perfectly fit your unique product profile. With our industry-leading 8–10 day turnaround, your <strong className="text-foreground">custom branded window boxes</strong> can be ready to hit retail shelves in record time, combining environmental responsibility with high-impact visual marketing.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        {/* LEFT SIDE: Product Gallery */}
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

                        {/* RIGHT SIDE: Sticky Quote Form */}
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Custom Window Box Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2" className="h-9 bg-white" />
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

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Strategic Value of Custom Kraft Paper Boxes with Window
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
                                In the diverse landscape of modern retail, packaging has evolved from being a simple container to a powerful silent salesperson. For brands that offer visually striking products, <strong>Custom Kraft Paper Boxes with Window</strong> represent the ultimate fusion of protection and presentation. Transparency is a psychological asset; it builds immediate trust by allowing the customer to verify the quality and color of the product before committing to a purchase.
                            </p>
                            <p>
                                At CustomPackMakers, we understand that your packaging is the final bridge between your product and your customer. Our kraft window boxes are designed to leverage the natural, unbleached texture of kraft paperboard—a material that signals "premium, sustainable quality"—while utilizing high-clarity viewing portals to create a compelling retail display. Whether you're a startup testing a new product or an established brand scaling your retail footprint, these boxes provide the versatility and impact needed to stand out on crowded shelves.
                            </p>

                            <h3>The Luxury of Visibility: Why Windows Drive Sales</h3>
                            <p>
                                Consumer behavior studies consistently show that "product visibility" is a major factor in impulse purchasing decisions. A window box removes the barrier of the unknown. For artisanal foods, color-coordinated cosmetics, or hand-crafted jewelry, the product itself is its own best advertisement. 
                            </p>
                            <ul>
                                <li><strong>Verification:</strong> Customers can see exactly what they are buying, which reduces product returns due to mismatched expectations.</li>
                                <li><strong>Hygiene:</strong> In the food and pharmaceutical sectors, a viewing window allows the customer to inspect the product without breaking the hygienic seal.</li>
                                <li><strong>Brand Honesty:</strong> Transparent packaging communicates that your brand has nothing to hide, fostering a deeper sense of reliability and trust.</li>
                            </ul>

                            <h3>Structural Integrity: Balancing Clear Film and Kraft Board</h3>
                            <p>
                                The most critical technical challenge in window box manufacturing is maintaining structural integrity. Removing a section of the box for a window naturally creates a weak point. We solve this through advanced material engineering. We use high-GSM (grams per square meter) rigid kraft cardstock that provides a sturdy frame, while our high-tensile viewing film is bonded with industrial-grade, food-safe adhesives.
                            </p>
                            <p>
                                Our PET windows are not just clear; they are durable. They resist puncturing and scuffing, ensuring that the viewing portal remains crystal clear even after long-distance shipping and multiple retail handlings. For brands with specific environmental requirements, we also offer plant-based, compostable window films that maintain the same clarity while adhering to a zero-plastic philosophy.
                            </p>

                            <h3>Versatility: From Bakeries to Retail Cosmetics</h3>
                            <p>
                                The applications for windowed kraft boxes are virtually unlimited. 
                            </p>
                            <ul>
                                <li><strong>Bakery and Gourmet Food:</strong> Show off the golden crust of a pastry or the vibrant colors of a macaron set. Our grease-resistant kraft prevents oil stains, keeping the presentation professional.</li>
                                <li><strong>Cosmetics and Skincare:</strong> Perfect for bath bombs, organic soaps, and serum sets where the texture and color are part of the brand appeal.</li>
                                <li><strong>Stationery and Gifts:</strong> Ideal for greeting card sets, candles, and artisan crafts where the intricate details need to be seen to be appreciated.</li>
                            </ul>

                            <h3>Custom Branding and Retail Finishes</h3>
                            <p>
                                Just because you're using a rustic material doesn't mean your branding has to be simple. We offer full-color CMYK printing using eco-friendly, soy-based inks. We can die-cut your windows into virtually any shape—from standard rectangles to brand-specific silhouettes like hearts or stars—creating a unique visual signature for your packaging. 
                            </p>
                            <p>
                                Add extra luxury with metallic foil stamping or tactile embossing. Imagine your logo in gold foil set against the matte, organic texture of a brown kraft box, with a crystal-clear window showcasing your high-end product. This combination of textures and transparency creates a world-class unboxing experience.
                            </p>

                            <h3>Sustainability: A Core Identity Asset</h3>
                            <p>
                                Choosing kraft isn't just a design choice; it's a statement of brand ethics. Our boxes are 100% recyclable and often sourced from upcycled wood fibers. By moving away from plastic-heavy containers and towards responsibly sourced paper with minimal film usage, you demonstrate your brand's commitment to the planet. This transparency builds significant loyalty, particularly with modern consumers who actively seek out "plastic-free" or "eco-forward" brand experiences.
                            </p>
                            <p>
                                Partnering with CustomPackMakers means gaining access to a dedicated packaging team. We work with you to choose the right box style, the perfect window dimensions, and the most impactful printing finishes for your brand. Let us help you create packaging that protects your product and empowers your sales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductKraftBoxes />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Display Excellence</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose Our <span className="text-primary">Window Box Solutions</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We bridge the gap between organic artisan aesthetics and high-visibility retail marketing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        {/* LEFT: typography */}
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Crystal Clear Viewing</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        High-clarity, scratch-resistant PET windows allow your product to shine while maintaining full protection from dust and handling.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 003 11c0-2.778 1.123-5.288 2.945-7.105m11.11 11.11L21 21m-6-6l1.171 1.171V14a2 2 0 112 2h-3.171L15 15z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Precision Die-Cutting</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Custom-shaped windows engineered to follow the silhouette of your product, providing a premium and unique retail signature.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Luxury Standard</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Combine high-visibility retail marketing with 100% recyclable kraft stock, demonstrating your commitment to sustainable logic.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={kraftWindowHero}
                                    alt="Luxury Kraft Window Engineering"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Transparency Built for Scale
                                    </p>
                                    <p className="text-white/75 text-sm">Empowering retail brands with clear product narratives</p>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">High</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Clarity PET</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={kraftWindowHero}
                                    alt="Differentiate Your Retail Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Brand</span> with Transparency
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that your window box is more than a container—it's a sales portal. We utilize advanced manufacturing to ensure that each kraft window box is structurally robust and visually striking. By combining high-clarity viewing portals with premium custom printing and sustainable textures, we help you create a world-class retail experience that builds immediate trust, reduces product returns, and drives repeat business across your entire product line.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* LEFT COLUMN: FAQs */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Insights into our retail-ready windowed solutions.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What material is the window made of?",
                                        answer: "We typically use high-clarity PET (Polyethylene Terephthalate) for its excellent transparency and scratch resistance. For brands looking for a completely zero-plastic solution, we also offer plant-based PLA films which are compostable and eco-friendly."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I get a custom-shaped window?",
                                        answer: "Absolutely! We can die-cut windows into virtually any silhouette, including hearts, stars, or even your brand's specific logo shape. This is a fantastic way to differentiate your packaging and add a premium, bespoke feel to your retail line."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Is the window material food-safe?",
                                        answer: "Yes, our viewing films are 100% food-grade and non-toxic. They are widely used in the bakery and confectionery industries to showcase products while maintaining full hygienic protection and preventing moisture absorption."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is the turnaround time for custom window box orders?",
                                        answer: "Our standard turnaround time is 8-10 business days after you approve the final digital design. We also offer expedited rush shipping for seasonal launches or time-sensitive retail events."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Will the window pop off during shipping?",
                                        answer: "No. We use industrial-grade, high-tack window adhesive systems that create a permanent bond between the film and the kraft board. Each box is tested for bond strength to ensure the window remains secure throughout the entire shipping and retail cycle."
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

                        {/* RIGHT COLUMN: FAQ Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Kraft Window Boxes Technical Support"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating & Bottom Quote Section */}
            <BrandRating />
            <div className="py-10">
                <QuoteForm />
            </div>

            <Footer />
        </div>
    );
};

export default KraftPaperBoxesWithWindow;
