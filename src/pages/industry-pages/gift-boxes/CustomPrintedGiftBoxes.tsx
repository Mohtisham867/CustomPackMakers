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
import { RelatedProductGift } from "@/components/RelatedProductGift";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import PrintedGiftBoxeshero from "@/assets/gift-boxes/Custom-Printed-Gift-Boxes/img-hero.png";
import PrintedGiftBoxesimg1 from "@/assets/gift-boxes/Custom-Printed-Gift-Boxes/img-1.png";
import PrintedGiftBoxesimg2 from "@/assets/gift-boxes/Custom-Printed-Gift-Boxes/img-2.png";
import PrintedGiftBoxesimg3 from "@/assets/gift-boxes/Custom-Printed-Gift-Boxes/img-3.png";
import PrintedGiftBoxesimg4 from "@/assets/gift-boxes/Custom-Printed-Gift-Boxes/img-4.png";
import PrintedGiftBoxesimg5 from "@/assets/gift-boxes/Custom-Printed-Gift-Boxes/img-5.png";
import PrintedGiftBoxesimg6 from "@/assets/gift-boxes/Custom-Printed-Gift-Boxes/img-whychoose.png";
import PrintedGiftBoxesimg7 from "@/assets/gift-boxes/Custom-Printed-Gift-Boxes/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";

const CustomPrintedGiftBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: PrintedGiftBoxesimg1, alt: "Custom Printed Gift Boxes - Main View" },
        { src: PrintedGiftBoxesimg2, alt: "Custom Printed Gift Boxes - Lifestyle Shot" },
        { src: PrintedGiftBoxesimg3, alt: "Custom Printed Gift Boxes - Side Angle" },
        { src: PrintedGiftBoxesimg4, alt: "Custom Printed Gift Boxes - Detail Shot" },
        { src: PrintedGiftBoxesimg5, alt: "Custom Printed Gift Boxes - Open View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Printed Gift Boxes | Premium Personalized Packaging</title>
                <meta name="description" content="Order high-quality custom printed gift boxes. Elevate your brand with wholesale branded gift packaging featuring premium finishes and full-color 3D printing." />
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
                                    <Link to="/categories/gift-boxes">Gift Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Printed Gift Boxes</BreadcrumbPage>
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
                                Custom <span className="text-primary">Printed</span> Gift Boxes
                            </h1>
                            {/* STRICTLY 30-35 WORDS */}
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Make a powerful, lasting first impression with our premium custom printed gift boxes. We utilize spectacular high-definition printing to meticulously craft fully personalized packaging solutions that instantly elevate your brand's true visual excellence.
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

                        {/* RIGHT: Large Product Image */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={PrintedGiftBoxeshero}
                                    alt="Custom Printed Gift Boxes Hero"
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
                        Unleash Your Brand's Creative Packaging Potential
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Transform your standard retail presentation into an unforgettable unboxing experience with our beautifully customized <strong className="text-foreground">printed gift boxes</strong>. High-quality custom prints dynamically elevate your brand's presence, turning ordinary items into sophisticated, premium corporate gifts that uniquely differentiate your products from the competition.
                        </p>
                        <p>
                            By expertly employing cutting-edge offset and digital printing technologies, alongside incredibly precise CMYK and PMS color matching systems, we ensure total color accuracy. Your intricate designs, vibrant patterns, and specific corporate logos are brilliantly reproduced with unparalleled visual excellence. These advanced printing methods guarantee exceptionally crisp, high-definition graphics that beautifully captivate your audience, making an immediate, lasting impression the moment they see your exquisitely crafted bespoke packaging.
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
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Revolutionizing Gift Presentation With Custom Printing
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In today's highly competitive retail landscape, standard packaging simply isn't enough. Custom Printed Gift Boxes provide a remarkable opportunity to physically showcase your brand’s unique identity and communicate premium quality before the product is even revealed. By investing in sophisticated, high-definition printed packaging, businesses can dramatically improve their product presentation, build deeper emotional connections with their target audience, and ultimately drive greater long-term brand loyalty.
                            </p>

                            <h3>The Power of Custom Graphics</h3>
                            <p>
                                Visual excellence is arguably the most critical aspect of modern product marketing. The power of compelling custom graphics cannot be overstated when it comes to influencing consumer purchasing decisions. A carefully designed gift box acts as a silent but incredibly persuasive brand ambassador, perfectly articulating your company's values, narrative, and attention to detail.
                            </p>
                            <ul>
                                <li><strong>Instant Brand Recognition:</strong> High-quality, vivid graphics immediately capture consumer attention on crowded retail shelves. By seamlessly integrating your unique corporate logos, vivid brand colors, and distinctive typography onto your custom printed gift boxes, you create an instantly recognizable and highly memorable aesthetic identity that customers trust.</li>
                                <li><strong>Emotional Connection:</strong> Purposeful packaging design has the extraordinary ability to evoke strong emotions. Whether you are aiming for a minimalist, elegant, environmentally conscious, or playfully vibrant look, Custom Printed Gift Boxes allow you to visually align your packaging with the specific emotional desires of your exact target demographic.</li>
                                <li><strong>Elevated Unboxing Experience:</strong> The unboxing process has become a critical component of the modern consumer experience. Spectacular custom prints transform a simple delivery into a thrilling event, encouraging customers to proudly share their premium unboxing moments across social media platforms, thereby generating invaluable organic marketing and amplifying brand reach.</li>
                            </ul>

                            <h3>Printing Technologies Used</h3>
                            <p>
                                Achieving true visual excellence requires state-of-the-art manufacturing capabilities. We utilize industry-leading printing technologies to guarantee that your most intricate designs are reproduced flawlessly onto your packaging, delivering vibrant colors and incredibly sharp resolutions that reflect the superior quality of the products securely nestled inside.
                            </p>
                            <ul>
                                <li><strong>State-of-the-Art Offset Printing:</strong> For large-scale wholesale orders requiring absolute perfection, our traditional offset printing provides unmatched, brilliant image quality. This highly reliable method beautifully ensures exceptional color consistency and razor-sharp clarity across extensive production runs, making it the supreme choice for prestigious corporate brands seeking uncompromised packaging consistency.</li>
                                <li><strong>Modern Digital Printing:</strong> For smaller custom runs or highly personalized projects, advanced digital printing offers incredible flexibility without sacrificing any visual quality. This method allows for rapid prototyping, incredibly swift production turnarounds, and relatively low minimum order quantities while still delivering highly dynamic, photo-realistic imagery perfectly suited to specialized promotions.</li>
                                <li><strong>Exact CMYK and PMS Color Matching:</strong> Brand consistency is paramount to long-term success. We employ strict CMYK and highly precise Pantone Matching System (PMS) color protocols to ensure your specific corporate colors are meticulously replicated. Whether you need deep saturated tones or exceptionally subtle pastel gradients, our printing experts deliver unparalleled accuracy.</li>
                            </ul>

                            <h3>Specialty Finishes like Spot UV or Foiling</h3>
                            <p>
                                To truly distinguish your Custom Printed Gift Boxes from standard packaging, incorporating premium specialty finishes is essentially critical. These sophisticated post-printing techniques add extraordinary depth, luxurious tactile sensations, and undeniable elegance to your custom artwork, significantly elevating the perceived value of the enclosed gift and differentiating your product.
                            </p>
                            <ul>
                                <li><strong>Luxurious Hot Foil Stamping:</strong> Adding brilliant metallic gold, stunning silver, or elegant rose gold foiling to your specific logos and intricate design elements creates an immediate impression of high-end luxury. The striking visual contrast between the glowing metallic foil and the matte packaging surface beautifully captivates the discerning consumer’s eye.</li>
                                <li><strong>Striking Spot UV Coating:</strong> Spot UV involves applying a clear, highly glossy coating to specific targeted areas of your Custom Printed Gift Boxes. This remarkable technique expertly highlights your typography or key graphic elements by creating a gorgeous, reflective contrast against a soft-touch background, resulting in a distinctly premium, modern aesthetic.</li>
                                <li><strong>Precision Embossing and Debossing:</strong> Adding a true three-dimensional tactile dimension to your customized packaging instantly increases its physical appeal exponentially. Expert embossing raises specific design details above the surface, while delicate debossing presses them gently downward. Both sophisticated methods provide a uniquely interactive experience that feels incredibly prestigious and completely authentic.</li>
                            </ul>

                            <h3>Wholesale Branding Benefits</h3>
                            <p>
                                Investing in Custom Printed Gift Boxes, particularly at wholesale volumes, delivers substantial, long-term strategic advantages for your brand. It represents a highly cost-effective, scalable marketing strategy that significantly enhances your overall market positioning, fortifies brand equity, and directly supports broad corporate growth initiatives in an increasingly crowded global marketplace.
                            </p>
                            <ul>
                                <li><strong>Cost-Effective Scalability:</strong> Purchasing beautifully printed packaging in large wholesale quantities drastically reduces your average cost per unit. This scalable approach allows you to continuously present your premium products in exceptional packaging without compromising your vital operational profit margins, absolutely maximizing your return on investment while seamlessly accommodating rapid growth.</li>
                                <li><strong>Consistent Market Presence:</strong> Successfully dominating competitive retail spaces requires unwavering visual consistency. When every single product effectively features beautifully matched, expertly printed Custom Gift Boxes, you strategically present a fully unified front that brilliantly communicates uncompromising stability, absolute professionalism, and exceptional product quality to your loyal customers.</li>
                                <li><strong>Enhanced Perceived Value:</strong> Products elegantly presented in flawlessly printed, highly sophisticated customized luxury boxes are naturally perceived as far more valuable than those in plain, unbranded generic packaging. This elevated perception directly enables businesses to confidently command premium retail price points and effectively solidify their exclusive position as distinguished industry leaders.</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductGift />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        {/* LEFT: Features */}
                        <div className="space-y-5">
                            {/* Feature 1 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Superior Printing Precision</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We consistently utilize incredibly advanced offset and digital printing technologies to guarantee your intricate corporate artwork is reproduced flawlessly. Our sophisticated approach ensures absolute visual excellence that instantly grabs and holds demanding consumer attention.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 2 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Cost-Effective Branding Solutions</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        By successfully capitalizing on our highly optimized scalable wholesale manufacturing capabilities, you significantly reduce overall packaging costs efficiently. We beautifully empower your brand to accurately achieve premium visual excellence while maximizing your vital profit margins.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 3 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Limitless Design Flexibility</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Empower your remarkable creative packaging visions fully without any structural limitations. We expertly accommodate highly complex bespoke custom boxes brilliantly, dynamically merging advanced structural engineering with sophisticated visual graphics to create your ideal aesthetic beautifully.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={PrintedGiftBoxesimg6} alt="Premium Printed Box" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>
                            {/* Badges */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
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
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={PrintedGiftBoxesimg7} alt="Differentiate Your Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Corporate Retail</span> Brand Now
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In today's highly competitive retail industry, absolute visual excellence is your most powerful asset to completely dominate the physical shelf space. Custom printed gift boxes instantly communicate prestigious corporate professionalism and unparalleled product value directly to consumers. By purposefully leveraging exceptionally striking graphics, stunning typography, and mesmerizing specialty premium finishes, your brand confidently captures demanding buyer attention, powerfully outshines ordinary standard competitors, and effortlessly guarantees a highly memorable unboxing experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Everything you need to know about our gift packaging services.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "What printing methods do you use for custom gift boxes?", answer: "We expertly utilize cutting-edge offset and digital printing capabilities seamlessly. Offset perfectly handles massive wholesale orders requiring flawless color consistency, while agile digital printing actively supports rapid custom prototypes, brilliantly guaranteeing exceptional stunning resolution and visual excellence." },
                                    { id: "item-2", question: "Can you match my exact Pantone corporate colors?", answer: "Absolutely. We skillfully leverage highly precise Pantone Matching System protocols directly alongside advanced CMYK printing processes. This ensures your specific signature brand colors are meticulously replicated, maintaining critical visual consistency perfectly across incredibly substantial production runs." },
                                    { id: "item-3", question: "What is the thickest material available for rigid boxes?", answer: "We exclusively offer incredibly sturdy premium recycled paperboard reaching up to 3mm in absolute thickness. This exceptionally robust construction directly ensures your valuable products are wonderfully protected while exuding a massive luxurious physical presentation." },
                                    { id: "item-4", question: "Can I print on the inside of the gift box?", answer: "Yes, absolutely. Printing inside your custom gift box creates a truly immersive and uniquely luxurious unboxing experience. We can flawlessly apply vibrant brand colors, personalized messages, or intricate patterns directly onto the interior surface beautifully." },
                                    { id: "item-5", question: "Do you offer digital proofs before full production begins?", answer: "Certainly. We always provide a highly detailed, comprehensive virtual 3D digital proof for your absolute final approval before commencing any manufacturing. This meticulous process brilliantly ensures your precise design expectations are completely met without surprises." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
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
                            <img src={FAQimage} alt="FAQ Printed packages" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div >
    );
};

export default CustomPrintedGiftBoxes;
