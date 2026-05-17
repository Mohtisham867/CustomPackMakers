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
import mainNailPolish from "@/assets/industry/cosmetic-boxes/Nail Polish Boxes.webp";

const NailPolishBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainNailPolish, alt: "Custom Nail Polish Box - Vibrant Display" },
        { src: mainNailPolish, alt: "Custom Nail Polish Box - Window View" },
        { src: mainNailPolish, alt: "Custom Nail Polish Box - High Gloss" },
        { src: mainNailPolish, alt: "Custom Nail Polish Box - Secure Cradle" },
        { src: mainNailPolish, alt: "Custom Nail Polish Box - Retail Set" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Nail Polish Boxes | Vibrant Lacquer Packaging Wholesale</title>
                <meta name="description" content="Order custom nail polish boxes wholesale. High-fashion lacquer packaging with window displays, impact-resistant cradles, and premium gloss finishes. Fast turnaround." />
                <meta name="keywords" content="custom nail polish boxes, nail polish packaging, wholesale lacquer boxes, luxury nail polish containers, professional beauty boxes" />
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
                                <BreadcrumbPage>Nail Polish Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Nail Polish Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Grace your lacquer brand with vibrant custom nail polish boxes featuring high-clarity windows and impact-resistant internal cradles that perfectly showcase your brilliant pigments while ensuring maximum protection and a premium retail presence.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get vibrant quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainNailPolish}
                                    alt="Custom Nail Polish Boxes Hero"
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
                        Vibrant Brilliance for Your Premium Lacquer Line
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom nail polish boxes</strong> are designed for lacquer brands that demand both high-impact visual appeal and absolute product security. Nail polish bottles are fragile and often uniquely shaped, requiring packaging that provides a bespoke fit. We utilize impact-resistant, high-density paperboards that cradle your bottles, preventing accidental breakage and ensuring your brilliant pigments arrive in perfect condition.
                        </p>
                        <p>
                            To command attention on the retail shelf, your <strong className="text-foreground">nail polish packaging</strong> must reflect the shine and vibrancy of your formula. We offer advanced finishing options, from high-gloss aqueous coatings that mirror the finish of your lacquer to elegant window displays that allow customers to immediately appreciate your shades. Partner with us for wholesale packaging that establishes your brand as a leader in the nail care industry.
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
                                                <Input id="length" type="number" placeholder="1.25" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="1.25" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2.75" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" />
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
                        Shine and Shield: The Ultimate Guide to Nail Polish Packaging
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

                            <p>In the vibrant and fast-moving world of nail care, the visual impulse is the primary driver of success. When a customer browses a retail shelf or an online marketplace, they are searching for that perfect shade that speaks to their personal style and current mood. Consequently, custom nail polish boxes are your brand's most critical marketing asset. They must do much more than just house the glass container; they must amplify the brilliance of your pigments, communicate the quality of your brand, and provide a secure, protective environment for your fragile formulations. At CustomPackMakers, we specialize in high-concept nail care packaging that ensures your lacquers are the standout choice in a global market.</p>
                            <p>The technical requirements for nail polish packaging are uniquely demanding. The glass bottles are prone to breakage if not supported correctly, and the formulations are sensitive to light and temperature fluctuations. Furthermore, nail polish bottles come in an incredible variety of shapes—from classic cylinders to sophisticated geometric designs. Our design philosophy focuses on "Bespoke Stability," where we engineering every box to provide a perfect internal seat for your specific bottle shape. This prevents rattling, reduces the risk of accidental cap looseing, and ensures your products arrive in pristine, retail-ready condition every time.</p>

                            <h3>Material Selection for Impact and Elegance</h3>
                            <p>To differentiate your lacquer line, you must start with the highest quality substrates. We offer a selection of specialized materials for custom nail polish boxes:</p>
                            <ul>
                                <li><strong>Solid Bleached Sulfate (SBS) Cardstock:</strong> Our premium-grade SBS provides an ultra-smooth, bright white surface that allows for perfect color reproduction and supports complex finishes like high-gloss UV and holographic foiling.</li>
                                <li><strong>Impact-Resistant Corrugated Options:</strong> For subscription boxes or e-commerce delivery, we offer slim-profile corrugated boards that provide exceptional crush resistance while maintaining a professional aesthetic.</li>
                                <li><strong>Lustrous Metallic Stocks:</strong> To mirror the finish of metallic or holographic polishes, we can utilize foil-lined paperboards that shine from every angle on the retail shelf.</li>
                                <li><strong>Sustainable Recycled Kraft:</strong> We provide high-strength recycled options for eco-conscious nail care brands, allowing you to lead with sustainability without compromising on durability.</li>
                            </ul>

                            <h3>Strategic Design Elements for Impulse Purchases</h3>
                            <p>To gain a competitive edge in high-traffic beauty retail environments, your custom nail polish boxes must include features that engage the consumer's senses immediately:</p>
                            <ul>
                                <li><strong>High-Clarity PET Windows:</strong> We can create custom-die-cut windows that allow the actual lacquer shade to serve as the focal point of the packaging, reducing the need for external swatching.</li>
                                <li><strong>Internal Locking Cradles:</strong> Our boxes can include integrated board inserts that lock the bottle in place, ensuring that even uniquely shaped bottles stay stationary and upright.</li>
                                <li><strong>High-Gloss UV Coatings:</strong> Applying a mirror-like gloss finish communicates the high-shine quality of your nail polish formula and makes your packaging pop under retail lighting.</li>
                                <li><strong>Custom Foil Stamping:</strong> Using holographic, gold, or silver foil to highlight your brand logo or collection name adds a layer of sophistication that signifies premium quality.</li>
                            </ul>

                            <h3>Professional Printing and Color Calibration</h3>
                            <p>In the nail industry, color accuracy is paramount. A customer expects the shade represented on the box or visible through the window to be the exact hue they apply to their nails. At CustomPackMakers, we utilize advanced color calibration and high-fidelity offset printing to ensure your brand's pigments are perfectly represented. Whether you are launching a flagship cream finish or a complex glitters, we guarantee shade consistency across every production run, building the trust that leads to long-term customer loyalty.</p>

                            <h3>Scalability for Growing Nail Empires</h3>
                            <p>Whether you are a boutique artisan brand launch or a global powerhouse requiring monthly wholesale shipments of thousands, our production lines are built to scale with your needs. We offer low minimum order quantities (MOQs) which are perfect for testing seasonal "collections" or limited editions. For established wholesale accounts, our high-volume production lines deliver massive capacity and exceptional cost efficiencies. Our standard 8-10 day turnaround ensures your supply chain remains lean and responsive to the fast-moving trends of the nail world.</p>

                            <h3>Environmental Leadership in Nail Packaging</h3>
                            <p>Today’s beauty consumers prioritize brands that demonstrate environmental responsibility. We help you meet this demand with sustainable nail care packaging solutions. Our options include FSC-certified materials, soy-based inks, and completely plastic-free constructions. By choosing eco-friendly custom nail polish boxes, you communicate a modern leadership that resonates with conscious consumers, building a deeper brand connection and long-term loyalty. Let us help you select materials that are as responsible as they are beautiful.</p>
                            <p>Ultimately, a custom nail polish box is an investment in your brand's artistic vision. It is the messenger of your lacquer's quality and the protector of your brilliant pigments. Let us help you create packaging that is as vibrant and reliable as the results your products offer. Our experts are ready to assist with every technical detail of your design. Contact us today for a custom quote and begin your journey toward market dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Nail Polish Box" productImage={mainNailPolish} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainNailPolish} alt="Differentiate Your Nail Polish Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Lacquer</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our high-fashion custom nail polish boxes are precisely engineered to differentiate your brilliant lacquers in a competitive beauty landscape. By utilizing premium, scuff-resistant materials and secure secondary internal locking systems, we ensure that every bottle remains stationary and protected from accidental breakage or environmental damage. From velvety soft-touch laminates that signify luxury to vibrant high-gloss highlights that mirror your polish's shine, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that scales with your growing beauty empire.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nail Polish Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your vibrant lacquer line.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you protect fragile nail polish bottles during shipping?", answer: "We use precision-fit internal locking cradles and high-density paperboards that create a secure seat for your specific bottle shape, preventing movement and impact breakage." },
                                    { id: "item-2", question: "Can you create window displays to show the actual lacquer color?", answer: "Yes, we can design custom-die-cut windows with high-clarity PET film, allowing your brilliant pigments to serve as a focal point of the overall design." },
                                    { id: "item-3", question: "Are your boxes resistant to lacquer spills or leaks?", answer: "Our paperboards are available with specialized scuff-resistant aqueous coatings that repel moisture and incidental formula contact, maintaining the box's pristine appearance." },
                                    { id: "item-4", question: "What finish is best for mimicking the shine of a high-gloss polish?", answer: "We highly recommend a premium high-gloss UV coating, which provides a mirror-like finish that perfectly reflects the high-shine quality of your lacquer formulations." },
                                    { id: "item-5", question: "Do you offer eco-friendly materials for nail brands?", answer: "Absolutely. We provide FSC-certified materials, soy-based inks, and completely recyclable cardstock options that align with the values of modern eco-conscious beauty consumers." }
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
                            <img src={FAQimage} alt="Nail Polish Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default NailPolishBoxes;
