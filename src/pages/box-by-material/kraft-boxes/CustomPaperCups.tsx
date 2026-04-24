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
import heroImg from "@/assets/kraft-boxes/custom-paper-cups-v2.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const CustomPaperCups = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Custom Paper Cups - Main View" },
        { src: heroImg, alt: "Custom Paper Cups - Stack View" },
        { src: heroImg, alt: "Custom Paper Cups - Detail Print" },
        { src: heroImg, alt: "Custom Paper Cups - Recyclable Logo" },
        { src: heroImg, alt: "Custom Paper Cups - For Cold Content" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Paper Cups | Personalized Drinking Cups | CustomPackMakers</title>
                <meta name="description" content="Order custom paper cups and personalized drinking cups for your coffee shop or event. High-quality eco-friendly kraft paper, heat resistant, and fully brandable." />
                <meta name="keywords" content="custom paper cups, personalized coffee cups, eco-friendly drinking cups, branded kraft cups, wholesale paper cups" />
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
                                <BreadcrumbPage>Custom Paper Cups</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Paper Cups
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Premium quality, eco-conscious paper cups that showcase your brand with every sip. Heat-resistant and fully customizable for your boutique shop.
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
                                    alt="Custom Paper Cups Hero"
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
                        The Perfect Canvas for Your Brand's Beverage Experience
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom paper cups</strong> are engineered for excellence in the demanding food and beverage industry. Utilizing high-grade kraft and white paperboards, these cups provide exceptional thermal insulation, keeping beverages hot while remaining comfortable to hold. Whether you're a bustling metropolitan coffee house or a corporate event planner, our branded cups offer a visible and portable marketing opportunity that enhances customer engagement.
                        </p>
                        <p>
                            We prioritize sustainability in our <strong className="text-foreground">wholesale personalized drinking cups</strong>. Each cup features high-quality food-grade linings to prevent leaks and maintain structural integrity. With precision printing techniques, we can replicate your brand's specific color palette and logo with stunning clarity. From standard 8oz sizes to large 16oz options, our paper cups are designed to fit seamlessly into your workflow while projecting a professional and eco-friendly image.
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
                                        <div className="space-y-1.5">
                                            <Label htmlFor="size" className="text-xs font-semibold text-muted-foreground">Size (oz)</Label>
                                            <Input id="size" type="text" placeholder="8oz, 12oz, 16oz" className="h-9 bg-white" />
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

            <TechnicalSpecsSection />

            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Ultimate Guide to Custom Paper Cups & Sustainable Branding
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
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2
                            [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In the fast-paced world of coffee shops, cafes, and specialized beverage bars, the humble paper cup has become a powerful marketing vehicle. Custom paper cups are no longer just utilitarian objects; they are a critical component of a brand's visual identity. Every time a customer carries one of your cups down the street, they are providing free advertising and demonstrating their preference for your brand.
                            </p>

                            <h3>Why Invest in Branded Paper Cups?</h3>
                            <p>
                                Differentiation is key in the competitive food and beverage landscape. Branded cups offer a professional touch that sets your business apart from generic competitors. They communicate to the customer that you pay attention to the details of their experience. 
                            </p>
                            <ul>
                                <li><strong>Portability:</strong> Your brand logo travels wherever your customer goes, reaching potential new customers in the local area.</li>
                                <li><strong>Social Media Potential:</strong> In the age of Instagram, aesthetically pleasing cups are frequently photographed and shared, providing organic digital marketing.</li>
                                <li><strong>Customer Perception:</strong> High-quality, well-designed packaging elevates the perceived value of the product inside, justifying premium pricing.</li>
                            </ul>

                            <h3>Material Expertise: Safety and Durability</h3>
                            <p>
                                At CustomPackMakers, we utilize only food-grade materials for our paper cups. Our cups are constructed from high-quality primary fiber paperboard, which provides a clean and neutral surface for printing while ensuring structural strength. 
                            </p>
                            <p>
                                To ensure the cups are leak-proof and can withstand high temperatures, they are lined with a thin, water-resistant barrier. We offer various lining options, including PLA (polylactic acid), which is derived from renewable resources like corn starch, making the cups fully compostable in industrial facilities. This commitment to materials ensures that your brand provides a safe and high-performance product to its customers.
                            </p>

                            <h3>Insulation and Heat Retention</h3>
                            <p>
                                For hot beverages like lattes, espressos, and artisanal teas, thermal performance is paramount. Our paper cups are designed with heat retention in mind. We offer single-wall and double-wall constructions. Double-wall cups feature an extra layer of paper that creates an air pocket, providing superior insulation and eliminating the need for separate cardboard sleeves. This not only keeps the drink hot for longer but also ensures the exterior of the cup remains comfortable to touch.
                            </p>

                            <h3>Customization & Printing Capabilities</h3>
                            <p>
                                We utilize advanced printing technologies to ensure your brand stands out. Whether you need a simple two-color logo or a complex full-wrap design, our processes deliver vibrant, color-accurate results.
                            </p>
                            <ul>
                                <li><strong>Offset Printing:</strong> Ideal for high-volume orders, providing consistent and sharp graphical fidelity.</li>
                                <li><strong>Digital Printing:</strong> Perfect for shorter runs and seasonal designs, allowing for quick turnaround and high customization.</li>
                                <li><strong>Soft-Touch Finishes:</strong> Add a luxurious tactile feel to your cups with specialty coatings that make them more premium to hold.</li>
                                <li><strong>Eco-Friendly Inks:</strong> We use food-safe, water-based inks that support your brand's sustainability initiatives.</li>
                            </ul>

                            <h3>Sustainability: Closing the Loop</h3>
                            <p>
                                The environmental impact of single-use items is a significant concern for modern consumers. We are dedicated to providing sustainable solutions. Our kraft paper cups, in particular, highlight their recycled content and natural look. By choosing compostable linings and FSC-certified paper, you can demonstrate to your customers that your brand is actively working to reduce waste. This transparency builds trust and loyalty among the growing demographic of eco-conscious buyers.
                            </p>

                            <h3>Order Wholesale for Your Boutique Coffee Shop</h3>
                            <p>
                                We specialize in supporting small and medium-sized coffee businesses by offering wholesale quantities with accessible minimums. Our streamlined production ensures that you receive your branded inventory quickly, allowing you to focus on brewing the perfect cup while we handle the packaging. Partnering with a dedicated manufacturer like CustomPackMakers means you get the best pricing, consistent quality, and expert design support for your branding journey.
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
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Excellence in Every Sip</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Cafes Trust <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We provide high-performance, branded paperware that elevates the drinking experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Thermal Performance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our double-wall insulation keeps drinks hotter for longer while ensuring customer safety and comfort.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Vibrant Branding</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Food-safe ink and precision printing guarantee that your brand's colors look consistent on every single cup.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Focused Linings</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We offer corn-starch based PLA linings that make your paper cups industrially compostable and plastic-free.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImg}
                                    alt="Personalized Paper Cups Branding"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Scale Your Coffee Brand</p>
                                    <p className="text-white/75 text-sm">Professional packaging for independent shops</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">PLA</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Lining Options</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">Fast</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Re-order Service</p>
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
                                    Everything you need to know about our custom paper cups.
                                </p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What is the minimum order quantity for custom cups?",
                                        answer: "For fully customized branded paper cups, our minimum order quantities typically start at 1,000 units, making it accessible for boutique coffee shops and event planners."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do you supply matching lids with the cups?",
                                        answer: "Yes, we provide a variety of matching lids, including spill-proof coffee lids in both black and white. We also offer eco-friendly fiber lids for brands seeking a completely plastic-free solution."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I use these cups for cold drinks too?",
                                        answer: "Certainly. While designed for hot beverages, our high-quality linings allow these cups to be used for cold content as well, providing great versatility for your product range."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Are your paper cups recyclable?",
                                        answer: "Standard paper cups with PE linings are recyclable in specialized facilities. For the most eco-friendly choice, we recommend our PLA-lined cups, which are industrially compostable."
                                    },
                                    {
                                        id: "item-5",
                                        question: "How do I submit my artwork for the cups?",
                                        answer: "Once you place an inquiry, our design team will provide you with exact die-line templates. You can then submit your logo or design, and we will provide a digital proof for your approval before production."
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
                                alt="Custom Paper Cups FAQ"
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

export default CustomPaperCups;
