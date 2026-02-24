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
import FAQimage from "@/assets/FAQ-image.png";
import mainNailBoxes from "@/assets/cosmetic-boxes/Nail Boxes.webp";

const NailBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainNailBoxes, alt: "Custom Nail Box - Elegant Set Display" },
        { src: mainNailBoxes, alt: "Custom Nail Box - Window View" },
        { src: mainNailBoxes, alt: "Custom Nail Box - Glossy Texture" },
        { src: mainNailBoxes, alt: "Custom Nail Box - Internal Tray" },
        { src: mainNailBoxes, alt: "Custom Nail Box - Bulk Retail Collection" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Nail Boxes | Vibrant Press-On Packaging Wholesale</title>
                <meta name="description" content="Order custom nail boxes wholesale. Vibrant press-on nail packaging with high-clarity windows, internal trays, and premium gloss finishes. Fast turnaround." />
                <meta name="keywords" content="custom nail boxes, nail packaging, wholesale press-on boxes, luxury nail set packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Nail Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Nail Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Grace your beauty brand with vibrant custom nail boxes featuring high-clarity windows and impact-resistant internal trays that perfectly protect your delicate press-on sets while delivering a premium retail presence for every customer.
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
                                    src={mainNailBoxes}
                                    alt="Custom Nail Boxes Hero"
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
                        Vibrant Presentation for Your Signature Nail Art
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom nail boxes</strong> are designed for artificial nail and press-on brands that demand both high-impact visual appeal and absolute product security. Press-on nails are delicate fashion accessories that require packaging providing a secure, scratch-free environment. We utilize premium, scuff-resistant materials and custom-engineered internal trays that ensure your nail sets remain stationary and perfectly presented throughout the logistics chain.
                        </p>
                        <p>
                            To command attention on the retail shelf, your <strong className="text-foreground">nail packaging</strong> must reflect the artistry and shine of your formulations. We offer advanced finishing options, from high-gloss aqueous coatings that mirror the finish of your lacquer to elegant window displays that allow customers to immediately appreciate your designs. Partner with us for results-oriented wholesale packaging that establishes your brand as a leader in the nail care industry.
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
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="5.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="0.5" className="h-9 bg-white" />
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
                        Elite Artistry: The Ultimate Guide to Press-On Nail Packaging
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

                            <p>In the vibrant and rapidly expanding market for high-quality press-on nails and artificial tips, the unboxing experience is the primary measure of a brand's luxury status. Professional nail sets are intricate pieces of art, promising a salon-quality manicure in a fraction of the time. Consequently, custom nail boxes are your brand's most critical marketing asset. They must do much more than just house the plastic tips; they must amplify the brilliance of your designs, communicate the professional quality of your brand, and provide a secure, protective environment that maintains the curve and finish of every nail. At CustomPackMakers, we specialize in high-concept nail packaging that ensures your sets are the standout choice in a global market.</p>
                            <p>The technical requirements for press-on nail packaging are uniquely demanding. The individual tips are featherlight and highly susceptible to scuffing or loss if not supported correctly within the box. Furthermore, different sets can vary wildly in shape—from classic oval to extreme stiletto designs. Our design philosophy focuses on "Precision Presentation," where we engineering every box to include customized internal trays or board seats that lock your nails in place. This prevents rattling, ensures the adhesive backing remains uncontaminated, and guarantees your products arrive in pristine, retail-ready condition every time, preserving your artistic vision.</p>

                            <h3>Material Selection for Vibrancy and Durability</h3>
                            <p>To differentiate your nail art line, you must start with the highest quality substrates. We offer a selection of specialized materials for custom nail boxes:</p>
                            <ul>
                                <li><strong>Solid Bleached Sulfate (SBS) Cardstock:</strong> Our premium-grade SBS provides an ultra-smooth, bright white surface that allows for perfect color reproduction and supports complex finishes like holographic foiling or soft-touch matte lamination.</li>
                                <li><strong>Crystal-Clear PET Plastic Inserts:</strong> We offer custom-molded internal trays that hold individual nails securely in place while allowing them to be viewed against a high-contrast background.</li>
                                <li><strong>Lustrous Metallic Paperboards:</strong> To mirror the finish of chrome or metallic nail designs, we can utilize foil-lined substrates that shine from every angle on the retail shelf.</li>
                                <li><strong>FSC-Certified Eco-Friendly Stocks:</strong> We provide high-strength recycled options for sustainable nail brands, allowing you to lead with environmental responsibility without compromising on professional presentation.</li>
                            </ul>

                            <h3>Strategic Design Elements for Interactive Retail</h3>
                            <p>To gain a competitive edge in high-traffic beauty retail environments, your custom nail boxes must include features that engage the consumer senses immediately:</p>
                            <ul>
                                <li><strong>Grand Display Windows:</strong> We can design large, custom-shaped windows that allow the actual nail designs to serve as the focal point of the packaging, reducing the need for promotional imagery.</li>
                                <li><strong>Magnetic Closure Mechanisms:</strong> Implementing a secure magnetic closure provides a satisfying "click" that signals premium quality and allows customers to easily reopen the box to admire the set.</li>
                                <li><strong>High-Gloss UV Point Spotting:</strong> Applying mirror-like gloss finish to specific nail patterns on the box art creates a tactile and visual depth that mirrors the shine of your actual product.</li>
                                <li><strong>Custom Foil Stamping:</strong> Using holographic, silver, or gold foil to highlight your brand logo or collection name adds a layer of sophistication that signifies artistic authority.</li>
                            </ul>

                            <h3>Professional Printing and Calibration for Artistic Accuracy</h3>
                            <p>In the nail industry, color accuracy is paramount. A customer expects the shades and patterns represented on the box or visible through the window to be exact. At CustomPackMakers, we utilize advanced color calibration and high-fidelity offset printing to ensure your brand's unique designs are perfectly represented. Whether you are launching a minimalist "nude" line or a complex, multi-patterned "maximalist" set, we guarantee aesthetic consistency across every production run, building the trust that leads to long-term customer loyalty.</p>

                            <h3>Scalability for Growing Nail Art Empires</h3>
                            <p>Whether you are a boutique artisan brand launching on social media or a global powerhouse requiring monthly wholesale shipments of tens of thousands, our production lines are built to scale with your needs. We offer low minimum order quantities (MOQs) which are perfect for testing seasonal "drops" or limited-edition designer collaborations. For established wholesale accounts, our high-volume production lines deliver massive capacity and exceptional cost efficiencies. Our standard 8-10 day turnaround ensures your supply chain remains lean and responsive to the fast-moving trends of the nail world.</p>

                            <h3>Environmental Leadership in Nail Packaging</h3>
                            <p>Today’s beauty consumers prioritize brands that demonstrate environmental responsibility. We help you meet this demand with sustainable nail packaging solutions. Our options include recycled materials, soy-based inks, and completely plastic-free constructions (including paper-based internal seats). By choosing eco-friendly custom nail boxes, you communicate a modern leadership that resonates with today’s conscious consumers, building a deeper brand connection and long-term loyalty. Let us help you select materials that are as responsible as they are beautiful.</p>
                            <p>Ultimately, a custom nail box is the defining container for your brand's artistic vision. It is the messenger of your set's quality and the protector of your delicate designs. Let us help you create packaging that is as vibrant and reliable as the results your products offer. Our experts are ready to assist with every technical detail of your design. Contact us today for a custom quote and begin your journey toward market dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Nail Box" productImage={mainNailBoxes} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainNailBoxes} alt="Differentiate Your Nail Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Press-Ons</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our high-fashion custom nail boxes are precisely engineered to differentiate your press-on sets in a competitive beauty landscape. By utilizing premium, scuff-resistant materials and secure internal locking systems, we ensure that every delicate nail remained stationary and protected from accidental breakage or environmental damage during transit. From velvety soft-touch laminates that signify luxury to vibrant high-gloss highlights that mirror your polish's shine, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that scales with your growing nail care empire.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Press-On Nail Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your vibrant nail brand.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you keep delicate press-on nails from shifting?", answer: "We use precision-cut internal trays or board seats that provide a secure friction-fit for every nail, ensuring the set remains perfectly presented and the adhesive backing stays protected." },
                                    { id: "item-2", question: "Can I customize the shape and size of the display window?", answer: "Yes, we can design custom-die-cut windows in virtually any shape, allowing you to showcase your unique nail designs directly to the consumer for maximum impact." },
                                    { id: "item-3", question: "What material is best for mimicking a professional salon finish?", answer: "We highly recommend a premium high-gloss UV coating combined with silver or gold foil accents, which provides a mirror-like shine that mirrors high-end salon lacquers." },
                                    { id: "item-4", question: "Are your boxes resistant to moisture or adhesive residue?", answer: "Our paperboards are available with oil and moisture-resistant coatings that prevent staining and maintain structural integrity even if accidental contact with adhesive occurs." },
                                    { id: "item-5", question: "Do you offer eco-friendly materials for sustainable nail brands?", answer: "Absolutely. Providing FSC-certified materials, soy-based inks, and completely plastic-free paperboard constructions is our specialty for environmentally responsible beauty brands." }
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
                            <img src={FAQimage} alt="Nail Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default NailBoxes;
