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
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";


// Reusing existing images 
import customShoeBoxes from "@/assets/apparel-boxes/custom-shoe-boxes.webp";
import shoeBox1 from "@/assets/apparel-boxes/shoe-boxes/shoe 1.jpg";
import shoeBox2 from "@/assets/apparel-boxes/shoe-boxes/shoe 2.png";
import shoeBox3 from "@/assets/apparel-boxes/shoe-boxes/shoe 3.jpg";
import shoeBox4 from "@/assets/apparel-boxes/shoe-boxes/shoe-4.png";
import shoeBox5 from "@/assets/apparel-boxes/shoe-boxes/deferent.png";
import shoeBoxHero from "@/assets/apparel-boxes/shoe-boxes/shoe 5.jpg";

//FAQ image
import FAQimage from "@/assets/FAQ-image.png";

// Placeholder specifically for related products
import { RelatedProductRigidBoxes } from "@/components/RelatedProductRigidBoxes";

export default function MagneticClosureBoxes() {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: shoeBox1, alt: "Custom Magnetic Closure Boxes - Main View" },
        { src: shoeBox2, alt: "Custom Magnetic Closure Boxes - Side Angle" },
        { src: shoeBox3, alt: "Custom Magnetic Closure Boxes - Open Box View" },
        { src: shoeBox4, alt: "Custom Magnetic Closure Boxes - Detail Shot" },
        { src: shoeBoxHero, alt: "Custom Magnetic Closure Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Magnetic Closure Boxes | Luxury Rigid Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom magnetic closure boxes wholesale. Premium rigid boxes with concealed magnetic latches for luxury retail, gifting & influencer kits." />
                <meta name="keywords" content="custom magnetic closure boxes, magnetic lid packaging, wholesale rigid boxes, custom branded rigid packaging, luxury magnetic boxes" />
                <meta property="og:title" content="Custom Magnetic Closure Boxes | Luxury Rigid Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom magnetic closure packaging for the ultimate unboxing experience. Rigid boxes with satisfying 'snap' closures. Get a free quote." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
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
                                    <Link to="/industries">All Industries</Link>
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
                                    <Link to="/categories/rigid-boxes">Rigid Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Magnetic Closure Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT: Product Title & Description */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Premium</span> Magnetic Closure Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded rigid boxes featuring concealed magnetic latches, engineered for a profoundly satisfying, premium unboxing experience built to scale.
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

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={shoeBoxHero} // Placeholder
                                    alt="Custom Magnetic Closure Boxes Hero"
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
                    {/* Section label + accent bar */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        The Ultimate Tactile Experience in Luxury Packaging
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom magnetic closure boxes</strong> represent the peak of modern luxury packaging. The secret lies in the satisfying, audible "snap" as the hidden magnets engage, securing the lid. This highly engineered mechanical interaction instantly communicates high value, making these boxes the undisputed standard for cosmetics, high-end electronics, premium spirits, luxury apparel, and exclusive VIP gifting or influencer kits. The robust rigid chipboard construction combined with the seamless magnetic seal ensures both impeccable presentation and superior product protection.
                        </p>
                        <p>
                            We specialize in customizing every aspect of your <strong className="text-foreground">magnetic lid packaging</strong>. Choose from standard "book-style" hinged lids or intricate multi-fold designs. The concealed magnets (usually rare-earth neodymium for maximum hold) are flawlessly integrated beneath the outer wrap, maintaining a perfectly clean exterior profile. With exquisite finishes like soft-touch matte lamination, deep foil stamping, and customized interior foam or velvet inserts, your <strong className="text-foreground">wholesale magnetic boxes</strong> are transformed into powerful brand statements. Order with CustomPackMakers for low minimums and rapid 8–10 day turnarounds.
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
                            {/* Large Main Image - 4:3 aspect ratio, object-cover */}
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Row — 5 images, aligned to main image width */}
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

                        {/* RIGHT SIDE: Sticky Quote Form - Compact & Styled */}
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="3" className="h-9 bg-white" />
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

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    {/* Heading outside the scrollable box */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Engineering the Perfect "Snap": The Mechanics of Luxury Packaging
                    </h2>

                    {/* Scrollable content box */}
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="
                            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0
                            [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2
                            [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In the hierarchy of premium packaging, human interaction with the box is just as important as the visual design. Custom magnetic closure boxes excel specifically in this tactile arena. The physical feedback—the gentle resistance when opening and the sharp, satisfying 'snap' when the magnets catch upon closing—speaks to the consumer on a subconscious level, signaling high engineering, security, and exceptional product quality. This is why magnetic boxes are the gold standard for PR influencer kits, high-end electronics, luxury cosmetics, and premium spirits.
                            </p>
                            <p>
                                At CustomPackMakers, we don't just insert magnets into cardboard; we engineer acoustic and tactile experiences. We understand that the strength of the magnet must be perfectly calibrated to the weight of the lid and that the magnets themselves must be entirely invisible to maintain the illusion of seamless luxury. By partnering with us for your custom magnetic packaging, you ensure that the first physical interaction a customer has with your brand is flawless and deeply memorable.
                            </p>

                            <h3>Precision Mechanics and Concealed Hardware</h3>
                            <p>
                                The magic of a magnetic box lies in its hidden mechanics. Our manufacturing process ensures a flawless exterior while housing powerful closure systems within the walls of the box:
                            </p>
                            <ul>
                                <li><strong>High-Strength Neodymium Magnets:</strong> We utilize rare-earth neodymium magnets, rather than standard weak flat magnets. These are incredibly strong despite their small size, ensuring a secure closure even on large, heavy-lidded boxes holding substantial weight.</li>
                                <li><strong>Complete Concealment:</strong> The magnets are countersunk directly into the thick rigid chipboard core during manufacturing. They are then seamlessly covered by the final interior and exterior wraps (paper, fabric, or leatherette). The result is a completely smooth, flush surface with no visible hardware.</li>
                                <li><strong>Calibrated Closure Strength:</strong> The size and number of magnets used are carefully calibrated based on the box dimensions. The closure must be strong enough to stay securely shut during transit or retail display, yet easy enough to open gracefully with one hand.</li>
                            </ul>

                            <h3>Architectural Styles for Magnetic Boxes</h3>
                            <p>
                                The magnetic closure mechanism can be adapted to several distinct box architectures, allowing you to choose the perfect opening ceremony for your product:
                            </p>
                            <ul>
                                <li><strong>The Classic "Book" Style:</strong> The most popular design. The box mimics a hardcover book, with a hinged spine and a front flap that folds over the opening and snaps magnetically to the front wall.</li>
                                <li><strong>The "Clamshell" Style:</strong> A variation of the book style where the entire bottom tray is enclosed within a single, continuous wrapped board that folds up over the front, back, and top.</li>
                                <li><strong>Collapsible / Fold-Flat Magnetic Boxes:</strong> A brilliant innovation for brands concerned with shipping and storage volume. These boxes ship completely flat. When popped open, hidden magnets in the corner walls snap together, instantly forming a rigid, highly protective box that looks identical to a standard non-collapsible setup box.</li>
                            </ul>

                            <h3>Elevating the Interior: Presentation is Everything</h3>
                            <p>
                                A box that opens beautifully must reveal an equally stunning interior. The value sequence established by the magnetic 'snap' must be maintained by the internal architecture:
                            </p>
                            <ul>
                                <li><strong>Custom Precision Inserts:</strong> We design bespoke inserts specifically for your product's dimensions. High-density EVA foam guarantees shock absorption for fragile items (electronics, glass bottles), while plush velvet-lined plastic or intricate paperboard structures offer unparalleled elegance for cosmetics or jewelry.</li>
                                <li><strong>Contrasting Interior Linings:</strong> The inside of the front flap is prime real estate. We frequently line the interior with a contrasting color, a striking foil-stamped brand message, or a luxurious material like suede or silk to differentiate the inside from the outside.</li>
                                <li><strong>Hidden Compartments:</strong> The solid structure allows for multi-tiered designs, including hidden ribbon-pulled drawers or false bottoms to house accessories, charging cables, or thank-you cards beneath the main product display.</li>
                            </ul>

                            <h3>The Long-Term Brand Value of Magnetic Packaging</h3>
                            <p>
                                Magnetic closure boxes offer one of the highest retention rates in the packaging industry. Because of their durability and the satisfying nature of opening and closing them, consumers rarely throw them away. They are frequently repurposed as storage for jewelry, keepsakes, or office supplies. This means your branded packaging—and by extension, your brand—lives on in the consumer's home, providing ongoing passive marketing and reinforcing brand loyalty long after the initial purchase.
                            </p>
                            <p>
                                Partner with CustomPackMakers to engineer magnetic closure packaging that defines luxury in your sector. With our expertise in structural mechanics, vast library of premium finishes, and large-scale wholesale production capabilities, we ensure your products deliver an unforgettable tactile experience from the very first touch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductRigidBoxes />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                {/* Subtle decorative blobs */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    {/* Centered Section Header */}
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine precise structural engineering, concealed hardware, and luxury materials to deliver magnetic packaging that performs flawlessly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

                        {/* LEFT: Luxury editorial typography */}
                        <div className="space-y-5">

                            {/* Feature 1 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Flawless Invisible Magnet Integration
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The magnets in our <strong>custom magnetic boxes</strong> are completely concealed. We utilize high-strength neodymium magnets, countersunk perfectly flush into the dense chipboard core before the final premium wrap is applied. The result is a clean, modern exterior profile with zero visible hardware but incredible holding power.
                                    </p>
                                </div>
                            </div>

                            {/* Thin divider */}
                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 2 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Calibrated Acoustic "Snap"
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Opening a magnetic box should be an event. We engineer our <strong>magnetic lid packaging</strong> to provide a very specific tactile resistance upon opening, followed by a satisfying, decisive acoustic "snap" upon closing. We meticulously calibrate magnet strength relative to box size to guarantee this premium mechanical feel at massive scale.
                                    </p>
                                </div>
                            </div>

                            {/* Thin divider */}
                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 3 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Collapsible Designs Available
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        For brands seeking luxury aesthetics without the massive shipping/storage footprint, we produce high-end fold-flat magnetic boxes. Hidden magnets in the corner construction snap together during assembly, instantly forming a rigid structure identical to a <strong>standard setup magnetic box</strong>, saving you significantly on freight.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            {/* Square image container */}
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={customShoeBoxes} // Placeholder
                                    alt="Premium Custom Magnetic Closure Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                {/* Bottom text overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Luxury Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering the ultimate unboxing experience</p>
                                </div>
                            </div>

                            {/* Floating badge — top right */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">99%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>

                            {/* Floating badge — bottom left */}
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* DIFFERENTIATE YOUR SHOES SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={shoeBox5} // Placeholder
                                    alt="Differentiate Your Unboxing Experience"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Unboxing Ceremony</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that a premium product deserves a presentation that commands attention before the box is even fully open. Our custom magnetic closure boxes deliver an unparalleled tactile and acoustic experience. The smooth resistance of the hidden neodymium magnets, followed by the satisfying 'snap' of the lid securing, instantly elevates the perceived value of your goods. We combine this high-end engineering with flawless exterior finishes—from rich soft-touch coatings to striking metallic foil stamping—and precision-cut interior inserts. We ensure your brand's physical impression is powerful, flawless, and undeniably luxurious.
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
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Are the magnets visible in a magnetic closure box?",
                                        answer: "No. The defining feature of high-quality magnetic packaging is that the hardware is completely invisible. We sink rare-earth neodymium magnets directly into the dense chipboard core before applying the final exterior and interior paper wraps, leaving the surface perfectly smooth and uninterrupted."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Will the magnets be strong enough to hold heavy products securely?",
                                        answer: "Yes. We engineer the magnet size and strength based specifically on the dimensions of the box and the weight of the intended product. We use high-grade neodymium magnets, which provide incredible holding power, ensuring the lid stays snapped shut during transit or retail handling."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What is a 'collapsible' magnetic box and how does it save money?",
                                        answer: "A collapsible magnetic box ships completely flat, drastically reducing freight and storage costs. To assemble, you simply pop the walls up; hidden magnets in the corners snap together, instantly forming a highly rigid, permanent box structure that looks identical to a standard un-foldable setup box."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can magnetic boxes be customized with inserts for specific products?",
                                        answer: "Absolutely. Because magnetic boxes are favored for luxury goods (cosmetics, spirits, electronics), we almost always pair them with custom inserts. We design and manufacture precision die-cut foam, flocked vacuum-formed trays, or elegant paperboard structures to cradle your specific items flawlessly within the box."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are magnetic closure boxes more expensive than standard rigid boxes?",
                                        answer: "Because they utilize specialized hardware (neodymium magnets) and require more complex manufacturing to conceal those magnets flawlessly, they do carry a premium over standard two-piece setup boxes. However, the immense boost in perceived luxury and brand retention almost always justifies the investment for high-tier products."
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

                        {/* RIGHT COLUMN: Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Custom Magnetic Closure Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating */}
            <BrandRating />

            {/* Main Quote Form */}
            <QuoteForm />

            <Footer />
        </div >
    );
};


