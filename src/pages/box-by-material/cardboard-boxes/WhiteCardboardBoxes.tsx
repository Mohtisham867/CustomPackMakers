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
import { RelatedProductCardboardBoxes } from "@/components/RelatedProductCardboardBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Specific product images
import heroImage from "@/assets/cardboard-boxes/white-cardboard-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const WhiteCardboardBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "White Cardboard Boxes - Main View" },
        { src: heroImage, alt: "White Cardboard Boxes - Side Angle" },
        { src: heroImage, alt: "White Cardboard Boxes - Open Box View" },
        { src: heroImage, alt: "White Cardboard Boxes - Detail Shot" },
        { src: heroImage, alt: "White Cardboard Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom White Cardboard Boxes | Clean Minimalist Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom white cardboard boxes wholesale. Premium clean packaging with vibrant printing, fast turnaround, and free shipping." />
                <meta name="keywords" content="white cardboard boxes, custom white packaging, blank white boxes, minimalist packaging, wholesale white mailers" />
                <meta property="og:title" content="Custom White Cardboard Boxes | Clean Minimalist Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom white cardboard packaging. Bright SBS cardstock, clean aesthetics, vibrant printing & durable construction. Get a free quote." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
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
                                    <Link to="/box-by-material">Box By Material</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/cardboard-boxes">Cardboard Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>White Cardboard Boxes</BreadcrumbPage>
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
                                <span className="text-primary">White</span> Cardboard Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom white cardboard packaging engineered for crisp aesthetics, vibrant color reproduction, and clean brand presentation built to scale with your business.
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
                                    src={heroImage}
                                    alt="White Cardboard Boxes Hero"
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
                        Crisp, Clean Packaging Built for Modern Brands
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">white cardboard boxes</strong> are precision-engineered for B2B brands that demand a clean, minimalist, and highly professional aesthetic. Constructed from premium Solid Bleached Sulfate (SBS) cardstock and white-fluted corrugated materials, each box delivers structural strength while providing the brightest, cleanest canvas for your brand identity. Whether you're launching a clinical skincare line, modern tech accessories, or elegant baked goods, our <strong className="text-foreground">custom white packaging</strong> is designed to communicate purity and premium quality.
                        </p>
                        <p>
                            From sterile-looking pharma boxes and bright retail displays to sturdy white mailers, our <strong className="text-foreground">white packaging</strong> solutions accommodate every product type. The brilliant white surface serves as the optimal foundation for true-color CMYK printing, ensuring your brand colors pop with maximum vibrancy and photographic imagery looks stunning. Each box can feature precision die-cuts, glossy or matte laminations, and custom inserts. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Power of White Packaging in Brand Positioning
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
                                In the psychology of design, white is not merely the absence of color; it is a powerful statement of purity, cleanliness, and sophisticated minimalism.
                                For brands operating in health, beauty, technology, and premium food sectors, custom white cardboard boxes represent the ultimate blank canvas.
                                White packaging subconsciously communicates that the product inside is clinical, fresh, modern, and uncluttered. It allows the product—and your logo—to take center stage without any visual noise.
                            </p>
                            <p>
                                Our custom white cardboard boxes are manufactured to maximize this aesthetic advantage. We understand that not all "white" is created equal. A dull, grayish, or yellowing box ruins the minimalist illusion. That is why we utilize specialized bleached materials and bright-white coatings to ensure a brilliant, gallery-quality finish. Whether you are packaging surgical devices, high-end serums, sleek smart-home gadgets, or wedding favors, investing in crisp white packaging instantly conveys a sense of premium, untainted quality.
                            </p>

                            <h3>Premium Bright-White Materials & Structural Integrity</h3>
                            <p>
                                Achieving a truly premium white aesthetic requires high-quality substrates that resist yellowing and provide a smooth, flawless surface. We offer several options tailored to your specific durability requirements:
                            </p>
                            <ul>
                                <li><strong>SBS (Solid Bleached Sulfate) Paperboard:</strong> This is the industry gold standard for folding cartons. The fibers are bleached solid white throughout, offering the highest brightness and smoothest surface available. It folds crisply and provides a medical-grade or premium retail appearance.</li>
                                <li><strong>White E-Flute Corrugated Board:</strong> For e-commerce mailer boxes or heavier items, we offer corrugated board featuring a bright white outer mottled liner. This provides the robust crush resistance needed for shipping while maintaining a clean, premium aesthetic upon doorstep arrival.</li>
                                <li><strong>White Rigid Chipboard:</strong> For luxury setup boxes, we utilize heavy chipboard wrapped in premium white specialty papers (ranging from smooth matte to textured linen). This creates a substantial, weighty box that feels incredibly high-end.</li>
                            </ul>
                            <p>
                                Each of these materials is engineered to maintain its brilliant white hue over time and resist the typical scuffs and dings associated with standard handling.
                            </p>

                            <h3>The Ultimate Canvas for Vibrant Printing</h3>
                            <p>
                                The most significant technical advantage of white cardboard boxes is their performance as a printing substrate. Unlike brown kraft or dark boards, a bright white base does not alter or muddy the colors printed on top of it:
                            </p>
                            <ul>
                                <li><strong>True Color Reproduction:</strong> White SBS board allows for 100% accurate CMYK color reproduction. Your brand's specific Pantone colors will match perfectly, and high-resolution product photography will appear crisp and lifelike without any background color interference.</li>
                                <li><strong>High Contrast Minimalism:</strong> A simple, stark black logo printed on a brilliant white box creates a timeless, luxurious, and highly confident brand statement that never goes out of style.</li>
                                <li><strong>Metallic Foil Stamping:</strong> Adding gold, silver, or rose gold foil to a crisp white background creates a delicate, ethereal luxury perfect for bridal, jewelry, or high-end cosmetic brands.</li>
                                <li><strong>Subtle Spot UV Gloss:</strong> Applying a clear, glossy UV coating (like a water-mark pattern) over a matte white surface creates an incredibly sophisticated, tactile design that reveals itself as the box is tilted in the light.</li>
                            </ul>

                            <h3>Customization for a Pristine Unboxing Experience</h3>
                            <p>
                                A clean exterior sets the tone; the interior must maintain that pristine presentation. Our manufacturing capabilities allow for complete interior customization to complete the minimalist experience:
                            </p>
                            <ul>
                                <li><strong>Custom White Inserts:</strong> We design precision die-cut white foam, clean white cardboard dividers, or custom molded pulp to cradle your product perfectly. This ensures a flawless, sterile presentation upon opening.</li>
                                <li><strong>Window Cutouts:</strong> Strategically placed clear PET windows allow the pristine product inside to show through, creating trust and letting the item speak for itself against the white frame.</li>
                                <li><strong>Clean Closures:</strong> Enhance the minimalist experience with hidden magnetic closures or sleek, seamless tuck-flaps that don't disrupt the clean lines of the box exterior.</li>
                            </ul>

                            <h3>Wholesale Production & Quality Assurance</h3>
                            <p>
                                Manufacturing high-quality white packaging requires meticulous cleanliness in the production environment. White surfaces show dust, ink smudges, and scuffs more easily than any other color. Our facility adheres to strict quality control measures to ensure every box leaves our floor in pristine condition.
                            </p>
                            <p>
                                Whether you need a short run for a boutique launch or tens of thousands of units for clinical distribution, our flexible production lines scale to meet your demands. We offer highly competitive wholesale pricing without ever sacrificing the pristine quality your brand depends on.
                            </p>
                            <p>
                                Partnering with CustomPackMakers means working with a dedicated packaging team that understands the nuance of minimalist design. From structural engineering to selecting the perfect matte or gloss lamination to protect the white surface, we provide expert guidance. Let us help you design custom white cardboard boxes that command attention through elegant simplicity and elevate your product's perceived value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCardboardBoxes />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Modern Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine pristine materials, flawless printing, and meticulous quality control to deliver clean packaging that elevates your brand.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
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
                                        Brilliant SBS Materials
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We don't settle for dull, off-white boards. We utilize premium Solid Bleached Sulfate (SBS) cardstock, ensuring your <strong>white boxes</strong> possess the highest brightness index available for a truly medical-grade or luxury retail appearance.
                                    </p>
                                </div>
                            </div>

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
                                        True Color Reproduction
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A bright white canvas means zero color interference. Our precision offset and digital printing processes ensure your brand's Pantone colors and product photography pop with 100% accuracy and maximum vibrancy on every box.
                                    </p>
                                </div>
                            </div>

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
                                        Pristine Quality Control
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        White packaging shows smudges easily. Our manufacturing floor adheres to strict cleanliness protocols, and we offer protective laminations to ensure your <strong>minimalist packaging</strong> arrives at its destination looking perfectly sterile and unblemished.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium White Cardboard Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Premium Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering pristine packaging across North America</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">99%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Color Accuracy</p>
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
                                <img
                                    src={heroImage}
                                    alt="Differentiate Your Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Brand</span> With Minimalism
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that sometimes the boldest statement is a whisper. To ensure your brand commands respect through elegant simplicity, we utilize pristine SBS materials combined with high-fidelity printing techniques. Our team of experts works closely with you to perfect the details—from ensuring zero ink bleed to applying the perfect protective lamination. By integrating subtle features like blind embossing, delicate foil accents, and precise clean lines, we help you create a world-class, minimalist unboxing experience that speaks volumes about your product's quality.
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
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What Are The Benefits Of Using White Cardboard Boxes?",
                                        answer: "White packaging communicates cleanliness, purity, and modern minimalism. It is the absolute best substrate for printing, ensuring your brand colors and photographic artwork are reproduced with 100% accuracy and maximum vibrancy without any background interference."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Will The White Surface Get Dirty During Shipping?",
                                        answer: "While white surfaces can show marks, we highly recommend applying a matte, gloss, or soft-touch lamination to the exterior. This creates a protective barrier that resists scuffs, dirt, and moisture during transit, ensuring the box arrives pristine."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Is SBS Board Better Than Standard White Corrugated?",
                                        answer: "It depends on the application. SBS (Solid Bleached Sulfate) is a folding carton material that is incredibly smooth and bright white, perfect for retail shelves. White corrugated board provides superior crush resistance, making it ideal for heavier items or e-commerce shipping."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I Get A Metallic Foil Logo On A White Box?",
                                        answer: "Yes, absolutely! Metallic foil stamping (especially gold, rose gold, or silver) looks incredibly elegant and luxurious against a crisp white background. It's a highly popular choice for cosmetics and jewelry packaging."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What Is The Minimum Order Quantity (MOQ)?",
                                        answer: "We strive to support brands of all sizes. Our typical minimum order quantity starts at just 100 units for standard folding cartons, allowing you to scale up as your demand grows while taking advantage of wholesale volume discounts."
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
                                alt="White Cardboard Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
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

export default WhiteCardboardBoxes;
