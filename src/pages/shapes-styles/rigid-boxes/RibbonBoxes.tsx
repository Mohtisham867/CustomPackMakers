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

export default function RibbonBoxes() {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: shoeBox1, alt: "Custom Ribbon Boxes - Main View" },
        { src: shoeBox2, alt: "Custom Ribbon Boxes - Side Angle" },
        { src: shoeBox3, alt: "Custom Ribbon Boxes - Open Box View" },
        { src: shoeBox4, alt: "Custom Ribbon Boxes - Detail Shot" },
        { src: shoeBoxHero, alt: "Custom Ribbon Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Ribbon Boxes | Luxury Rigid Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom ribbon boxes & luxury rigid packaging wholesale. Premium branded ribbon tie boxes with fast turnaround, free shipping & full customization." />
                <meta name="keywords" content="custom ribbon boxes, luxury ribbon tie packaging, wholesale rigid boxes, custom branded rigid packaging, rigid box manufacturer" />
                <meta property="og:title" content="Custom Ribbon Boxes | Luxury Rigid Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom ribbon packaging for luxury retail and gifting. Rigid boxes with elegant ribbon closures, full-color printing & eco-friendly options. Get a free quote." />
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
                                <BreadcrumbPage>Ribbon Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Premium</span> Ribbon Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded ribbon boxes engineered for exquisite presentation, unforgettable gifting, and undeniably elegant unboxing built to scale.
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
                                    alt="Custom Ribbon Boxes Hero"
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
                        Custom Ribbon Packaging Built for the Pinnacle of Gifting
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom ribbon boxes</strong> are precision-engineered for luxury brands, high-end confectioners, and premium gift curators who understand the emotional power of physically untying a present. Constructed from high-density rigid chipboard and wrapped in exquisite specialty papers, each box is finished with an integrated satin, grosgrain, or silk ribbon closure. This elegant mechanism transforms access to your product into a deliberate, ceremonious, and deeply satisfying unboxing experience. Whether you're presenting fine jewelry, artisan perfumes, or bridal party gifts, our <strong className="text-foreground">custom branded ribbon packaging</strong> ensures your brand is associated with ultimate luxury.
                        </p>
                        <p>
                            From classic lift-off lids secured by a cross-tied ribbon to sophisticated book-style boxes featuring a sleek ribbon tab pull, our <strong className="text-foreground">rigid ribbon boxes</strong> accommodate every opulent style and functional requirement. Each box features pristine structural integrity and the option for custom-cut protective bases (velvet-lined foam or paperboard trays) to cradle the contents. With exquisite foil stamping, deep debossing, and the tactile contrast of the ribbon against a soft-touch matte finish, your <strong className="text-foreground">luxury ribbon tie boxes</strong> become a highly desirable keepsake. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
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
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
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
                        The Art of Anticipation: Luxury Ribbon Tie Packaging
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
                                In the luxury goods and premium gifting sectors, packaging is far more than mere containment; it is a theatrical performance. Custom rigid ribbon boxes introduce an intensely physical, tactile element to the unboxing experience. The act of untying a meticulously styled ribbon forces the consumer to pause, building anticipation and dramatically heightening the emotional impact of the product reveal. This specific mechanism transforms an ordinary purchase into an extraordinary event, making it the preferred packaging choice for high-end fashion accessories, delicate artisan chocolates, luxury cosmetics, and exclusive bridal or corporate gifts.
                            </p>
                            <p>
                                At CustomPackMakers, we design and manufacture custom rigid ribbon packaging that serves as the ultimate expression of your brand's elegance. We recognize that the contrast between the unyielding rigid board and the soft, flowing ribbon creates a sensory dynamic that communicates immense value. By investing in our top-tier ribbon-tied boxes, you ensure your products command attention, foster immediate brand loyalty, and elevate the perceived value of your offerings.
                            </p>

                            <h3>Uncompromising Rigid Construction Meets Elegant Finishes</h3>
                            <p>
                                The foundation of a luxury ribbon box is its unyielding structural integrity, which must starkly contrast the delicacy of the closure. We utilize premium-grade materials to construct our rigid packaging:
                            </p>
                            <ul>
                                <li><strong>High-Density Chipboard:</strong> The core of our ribbon boxes is made from dense, premium chipboard (typically ranging from 1mm to 3mm). This solid construction prevents crushing or bending, ensuring the box maintains its perfect silhouette even under the tension of a tightly tied ribbon.</li>
                                <li><strong>Luxurious Wrap Materials:</strong> The sturdy chipboard is beautifully wrapped in premium papers or specialty fabrics. Popular choices for ribbon boxes include soft-touch matte finishes or textured linen covers, which provide a beautiful visual and tactile contrast against a glossy satin ribbon.</li>
                                <li><strong>Integrated Ribbon Mechanisms:</strong> The ribbon is never an afterthought. We engineer the ribbons to be integrated directly into the box's construction. Ribbons can be threaded securely through concealed slits in the board, anchored invisibly beneath the inner lining, or attached via elegant rivets or eyelets, ensuring they function flawlessly and cannot be lost.</li>
                            </ul>

                            <h3>Bespoke Customization and Ribbon Styles</h3>
                            <p>
                                The integration of a ribbon allows for endless creative interpretation. We empower brands to tailor both the box and the closure mechanism to their unique aesthetic:
                            </p>
                            <ul>
                                <li><strong>Ribbon Materials:</strong> Choose the texture that best represents your brand. Opt for the classic gleam of double-faced satin, the sophisticated ribbed texture of grosgrain, sheer organza for a delicate look, or even rustic twines or branded cotton ribbons.</li>
                                <li><strong>Closure Configurations:</strong> The ribbon can be utilized in various ways. A classic "book-style" or hinged box may feature two ribbon ends extending from the front edges to be tied in a bow. Alternatively, a two-piece setup box might feature a single ribbon anchored to the base that wraps fully over the lid.</li>
                                <li><strong>Ribbon Pull Tabs:</strong> For slipcase or sliding drawer boxes (matchbox style), a heavy-duty ribbon is often integrated into the inner tray. This serves as an elegant, functional pull-tab to smoothly extract the drawer, adding a touch of class to the mechanism.</li>
                            </ul>

                            <h3>Exquisite Finishing Touches for the Ultimate Unboxing</h3>
                            <p>
                                The true mark of premium ribbon packaging lies in the finishing details applied to the box itself. Our advanced manufacturing techniques complement the elegance of the ribbon closure perfectly:
                            </p>
                            <ul>
                                <li><strong>Branded Ribbons (Custom Printing):</strong> We can supply ribbons custom-printed with your brand's logo, typography, or custom patterns using foil stamping or screen printing directly onto the fabric.</li>
                                <li><strong>Hot Foil Stamping on the Box:</strong> Apply subtle, brilliant metallic foils (gold, rose gold, silver) over a soft matte finish to mimic the sheen of the ribbon and elevate the overall presentation.</li>
                                <li><strong>Custom Protective Inserts:</strong> Inside the box, we design custom die-cut inserts from high-density EVA foam, plush velvet, or elegant paperboard trays to cradle your specific items perfectly, ensuring the presentation inside matches the elegance outside.</li>
                            </ul>

                            <h3>The Emotional Impact of the Ceremonial Open</h3>
                            <p>
                                The ribbon tie is not just decorative; it demands physical engagement. It slows the customer down and turns the opening of a product into a deliberate, ceremonial act. This psychological anchoring associates your brand with mindfulness, luxury, and gifting, making your products far more likely to be photographed, shared online, and remembered.
                            </p>
                            <p>
                                Partner with CustomPackMakers to design rigid ribbon packaging that reflects the superior quality of your brand, protects your valuable products, and guarantees an unforgettable emotional connection with your customer. With our high-volume wholesale manufacturing capabilities, dedicated design support, and rapid turnaround times, achieving packaging perfection is seamless and highly effective.
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
                            We combine unparalleled craftsmanship, structural precision, and elegant finishing to deliver ribbon packaging that commands attention.
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
                                        Integrated Hardware & Mechanics
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The ribbons on every <strong>custom ribbon box</strong> we produce aren't just taped on. Our ribbons are structurally integrated—anchored deep beneath the inner linings or cleanly threaded through precision-cut slits in the rigid chipboard. We guarantee the closure mechanics will function beautifully and withstand repeated tying and untying.
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
                                        Tailored Presentation & Protection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A ribbon box is about the grand reveal. We engineer <strong>custom branded rigid packaging</strong> to your exact collection dimensions, with precision-cut velvet, foam, or rigid board inserts that secure the product flawlessly beneath the lid. Your brand's exact aesthetic vision, executed perfectly at scale.
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
                                        Luxury Hardware & Finishes
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The distinction is in the details. Our capabilities include precise foil stamping, custom-printed grosgrain and satin ribbons, intricate spot UV, and flawless soft-touch laminations applied to your <strong>wholesale rigid ribbon boxes</strong>. We deliver boutique-quality finishes consistently across massive production runs.
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
                                    alt="Premium Custom Rigid Ribbon Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                {/* Bottom text overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Luxury Gift Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium gifting experiences worldwide</p>
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
                                    alt="Differentiate Your Packaging Experience"
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
                                Differentiate Your <span className="text-primary">Brand Experience</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the steadfast ambassador of your brand's quality and your dedication to the customer. To ensure your products outshine the competition, we utilize state-of-the-art manufacturing processes combined with beautiful finishing details like ribbon ties and pull-tabs. Our team works closely with you to perfect the architectural style, ensuring a secure fit and a magnificent display. By integrating distinctive features like custom interior linings, high-end foil stamping, and precisely engineered closures, we help you create a world-class unboxing experience that builds lasting brand equity and drives premium positioning.
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
                                        question: "How are the ribbons attached to the rigid boxes?",
                                        answer: "The ribbons are structurally integrated into the box design. Depending on the style, ribbons are either permanently glued beneath the interior paper lining, securely threaded through precision-cut slits in the chipboard, or attached using metallic eyelets or rivets to ensure they cannot tear out during opening or closing."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I choose the specific type and color of the ribbon?",
                                        answer: "Yes, absolutely. We offer a vast selection of ribbon materials including glossy double-faced satin, textured grosgrain, sheer organza, and natural woven cottons. We can color-match the ribbon to your specific brand Pantone colors or provide contrasting options to make the closure pop."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can my brand pattern or logo be printed on the ribbon itself?",
                                        answer: "Yes. Custom-printed ribbons are a highly popular and premium option. We can apply flat-ink printing, raised screen printing, or beautiful hot foil stamping directly onto the ribbon surface to display your brand logo, name, or a custom, repeating pattern."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What box styles work best with ribbon closures or pull-tabs?",
                                        answer: "Ribbons are extremely versatile. They are most commonly used to tie the front flaps of hinged, magnetic 'book-style' boxes. They are also widely used as functional pull-tabs on the inner tray of slipcase / matchbox style rigid packaging to assist the user in sliding the tray out of the sleeve."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do ribbon boxes require more time to pack or fulfill on our end?",
                                        answer: "For boxes with a tying mechanism, there is a slight increase in fulfillment time as someone must physically tie the bow. However, for a luxury or gifting product, this is an accepted cost of presentation. Conversely, boxes using a ribbon merely as a pull-tab require absolutely no extra fulfillment time compared to standard boxes."
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
                                alt="Custom Ribbon Boxes FAQ"
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


