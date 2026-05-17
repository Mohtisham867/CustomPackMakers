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
import { RelatedProductCosmetic } from "@/components/RelatedProductCosmetic";
import { WhyBrandsChooseCosmetic } from "@/components/WhyBrandsChooseCosmetic";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";


// Image Imports
import FAQimage from "@/assets/FAQ-image.webp";
import mainBeardOil from "@/assets/industry/cosmetic-boxes/Custom Beard Oil Boxes.webp";

const CustomBeardOilBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainBeardOil, alt: "Custom Beard Oil Box - Premium View" },
        { src: mainBeardOil, alt: "Custom Beard Oil Box - Detail View" },
        { src: mainBeardOil, alt: "Custom Beard Oil Box - Side View" },
        { src: mainBeardOil, alt: "Custom Beard Oil Box - Texture Shot" },
        { src: mainBeardOil, alt: "Custom Beard Oil Box - Group View" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Beard Oil Boxes | Premium Men's Grooming Packaging</title>
                <meta name="description" content="Order custom beard oil boxes wholesale. High-quality men's grooming packaging with leak-proof design, premium finishes, and fast turnaround." />
                <meta name="keywords" content="custom beard oil boxes, men's grooming packaging, wholesale beard oil boxes, luxury beard oil packaging, premium grooming boxes" />
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
                                    <Link to="/industries/cosmetic-boxes">Cosmetic Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Beard Oil Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Beard Oil Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Elevate your grooming brand with precision-engineered custom beard oil boxes that combine rugged durability with sophisticated aesthetics, ensuring your premium oils remain protected while delivering an unforgettable unboxing experience for modern gentlemen worldwide.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get custom quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainBeardOil}
                                    alt="Custom Beard Oil Boxes Hero"
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
                        Premium Beard Oil Packaging for The Modern Grooming Brand
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom beard oil boxes</strong> are designed for brands that prioritize both protection and presentation. We use high-quality, durable materials that protect fragile glass bottles from breakage while maintaining an upscale look that appeals to the discerning male consumer.
                        </p>
                        <p>
                            With options for custom inserts, specialized coatings, and eye-catching finishes like spot UV and foil stamping, your <strong className="text-foreground">beard oil packaging</strong> will stand out on any retail shelf or e-commerce platform.
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
                                                <Input id="length" type="number" placeholder="1" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="1" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
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
                        Mastering Beard Oil Packaging for Brand Dominance
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

                            <p>In the rapidly growing men’s grooming industry, beard oils have shifted from being a niche product to a mainstream essential. To capture the attention of modern consumers, packaging must go beyond simple utility. Custom beard oil boxes are your brand's silent salesman, communicating quality, masculinity, and attention to detail before the customer even applies a single drop. Premium packaging creates a perception of value, making it easier for customers to justify a higher price point for your specialty oils.</p>
                            <p>At CustomPackMakers, we specialize in creating bespoke beard oil packaging that marries structural innovation with high-end aesthetics. We understand that beard oils often come in delicate glass bottles with droppers, requiring packaging that offers maximum protection against impact and leakage during transit and on retail shelves. Our goal is to provide you with a packaging solution that not only protects your investment but also tells your brand's unique story and builds lasting loyalty among your clientele.</p>

                            <h3>The Anatomy of High-Performance Beard Oil Boxes</h3>
                            <p>Creating the perfect box requires a deep understanding of materials and construction. We offer several material options that provide the necessary rigidity and surface quality for high-definition printing:</p>
                            <ul>
                                <li><strong>Premium SBS Cardstock:</strong> Solid Bleached Sulfate cardstock is the industry standard for cosmetic packaging. It offers a bright white, smooth surface that makes colors pop and supports complex finishes like spot UV and foil stamping perfectly.</li>
                                <li><strong>Eco-Friendly Kraft Board:</strong> For brands that lean into a natural, rugged, or organic aesthetic, our brown kraft cardstock provides an authentic look while remaining 100% recyclable and biodegradable.</li>
                                <li><strong>Rigid Setup Boxes:</strong> For luxury limited editions or premium gift sets, rigid board options offer a high-end weight and "click" when opening that signifies ultimate quality.</li>
                                <li><strong>Corrugated Mailers:</strong> If you are primarily an e-commerce brand, we can design custom-sized corrugated boxes that eliminate the need for extra shipping protection while maintaining your brand’s visual impact.</li>
                            </ul>

                            <h3>Customizing the Unboxing Experience</h3>
                            <p>The moment of unboxing is the most pivotal physical interaction a customer has with your brand. We offer specialized customization options to ensure this moment is memorable:</p>
                            <ul>
                                <li><strong>Precision-Cut Inserts:</strong> We can create custom foam or cardboard inserts that hold your beard oil bottle securely in the center of the box, preventing it from rattling and creating an elegant "presentation" look.</li>
                                <li><strong>Thematic Finishes:</strong> Use Matte finishes for a "soft touch" feel that feels luxurious in the hand, or High Gloss for a vibrant, energetic appearance. We also offer aqueous coatings that protect against fingerprints and moisture.</li>
                                <li><strong>Textural Elements:</strong> Embossing or debossing your logo adds a tactile dimension to the packaging, inviting the customer to feel the quality of the box as much as they see it.</li>
                                <li><strong>Internal Printing:</strong> Surprise your customers with a hidden message, your brand story, or application instructions printed on the inside walls of the box.</li>
                            </ul>

                            <h3>Strategic Branding Through Premium Printing</h3>
                            <p>Our state-of-the-art printing facilities ensure that your brand artwork is reproduced with perfect accuracy. We use CMYK and Pantone color matching systems to guarantee that your brand’s specific shades are consistent across every batch of beard oil boxes. Whether you prefer minimalist monochrome designs that highlight your logo or complex, full-color patterns that wrap around the entire box, our offset and digital printing capabilities can handle it all.</p>
                            <p>Furthermore, we incorporate advanced finishing techniques like Metallic Gold and Silver Foiling to highlight premium ingredients or luxury branding. Spot UV can be used to add a subtle shine to specific patterns or text, creating dynamic visual interest as the box catches the light. These small details aggregate to create a high-quality perception that distinguishes your brand from competitors using generic, low-quality packaging.</p>

                            <h3>Sustainability in Men’s Grooming</h3>
                            <p>Modern consumers are increasingly aware of their environmental footprint, and they expect the brands they support to share these values. We offer a range of sustainable packaging solutions that do not compromise on durability or design. Our vegetable-based inks and FSC-certified materials ensure that your beard oil boxes are as kind to the planet as they are effective for your business. By highlighting your commitment to sustainable packaging, you can build deeper trust and rapport with eco-conscious grooming enthusiasts.</p>

                            <h3>Scalable Wholesale Solutions for Growing Brands</h3>
                            <p>Whether you are a local artisan producer or a national grooming brand, our production capabilities are built to scale with you. We offer low minimum order quantities (MOQs) for startups testing new product lines, alongside massive production capacity for established wholesale accounts. Our streamlined manufacturing process ensures a rapid 8-10 day turnaround, allowing you to react quickly to market trends and keep your inventory replenished without long wait times. Partnering with CustomPackMakers means you have a dedicated packaging expert focused on your growth and success in the competitive beard oil market.</p>
                            <p>By investing in custom beard oil boxes, you are investing in the long-term health of your brand. Let us help you create the perfect blend of protection, style, and sustainability that will make your beard oil the top choice for discerning men everywhere. Our team is ready to assist with design consultation and technical specifications to bring your vision to life.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Beard Oil Box" productImage={mainBeardOil} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainBeardOil} alt="Differentiate Your Grooming Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Beard Oil</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our custom beard oil boxes are meticulously designed to differentiate your grooming products in an increasingly crowded marketplace. By utilizing high-density paperboard and advanced leak-proof structural engineering, we ensure that every bottle of oil is cradled in safety. From textured matte finishes that evoke a sense of heritage to modern holographic accents for a contemporary look, our packaging solutions are fully customizable. Partner with us to create a cohesive brand identity that resonates with your target audience and drives significant long-term growth.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Grooming Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert answers for your beard oil branding questions.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Can you guarantee leak-proof design for oil shipping?", answer: "Yes, we utilize reinforced structural designs and optional custom inserts that keep bottles upright and secure, minimizing the risk of leaks during transit." },
                                    { id: "item-2", question: "Are these boxes resistant to oil stains?", answer: "We offer specialized matte and gloss lamination that creates a protective barrier, making the boxes resistant to most grooming oil stains and fingerprints." },
                                    { id: "item-3", question: "Do you offer UV protection for photosensitive serums?", answer: "Our high-density paperboard provides an excellent light barrier. For extreme cases, we can use foil-lined interiors to block all UV light effectively." },
                                    { id: "item-4", question: "What finishes work best for a luxury masculine look?", answer: "We highly recommend a combination of soft-touch matte lamination with gold or silver foil stamping for a sophisticated, premium masculine aesthetic." },
                                    { id: "item-5", question: "Can I use recycled materials for my beard oil line?", answer: "Absolutely. We offer 100% recycled kraft cardstock and FSC-certified materials paired with eco-friendly soy-based inks for sustainable branding." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* RIGHT COLUMN: Image */}
                        <div className="relative w-full max-md:hidden max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img src={FAQimage} alt="Beard Oil Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div>
    );
};

export default CustomBeardOilBoxes;
