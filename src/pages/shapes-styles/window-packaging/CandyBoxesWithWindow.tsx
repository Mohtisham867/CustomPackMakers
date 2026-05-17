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
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductWindowPackaging } from "@/components/RelatedProductWindowPackaging";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import productImg from "@/assets/shape-style/window-packaging/candy-boxes-with-window.webp";
import customHeroImage from "@/assets/shape-style/window-packaging/window-packaging-hero.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const CandyBoxesWithWindow = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: productImg, alt: "Candy Boxes With Window - Main View" },
        { src: productImg, alt: "Candy Boxes With Window - High Angle" },
        { src: productImg, alt: "Candy Boxes With Window - Packaging Detail" },
        { src: productImg, alt: "Candy Boxes With Window - Presentation" },
        { src: customHeroImage, alt: "Candy Boxes With Window - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Candy Boxes With Window | Window Packaging | CustomPackMakers</title>
                <meta name="description" content="Wholesale custom candy boxes with clear windows. Trigger impulse sales with food-grade transparent sheets securely displaying your vibrant confectionary. Free quotes." />
                <meta name="keywords" content="candy boxes with window, transparent candy packaging, custom sweet boxes, window confectionary boxes, wholesale candy packaging" />
                <meta property="og:title" content="Custom Candy Boxes With Window | Impulse Sale Packaging" />
                <meta property="og:description" content="Spark cravings immediately. Highly transparent, food-grade window packaging engineered perfectly for candies, chocolates, and sweets." />
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
                                    <Link to="/industries">All Industries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/categories/window-packaging">Window Packaging</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Candy Boxes With Window</BreadcrumbPage>
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
                                <span className="text-primary">Candy Boxes</span> With Window
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Instantly trigger sweet cravings. Showcase bright wrappers, colorful gummies, and artisan chocolates through crystal-clear, food-safe window panes maximizing your point-of-sale impulse buys.
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
                                    src={customHeroImage}
                                    alt="Candy Window Boxes Hero"
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
                        Visually Stunning Showcases for Sweets
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In the confectionary sector, visual appeal is arguably the singular most powerful conversion metric available. When selling intensely colored candies, foil-wrapped chocolates, or complex layered treats, abandoning transparency directly harms your sales volume. <strong className="text-foreground">Custom candy boxes with window</strong> cutouts ensure that your consumer sees exactly how mouthwatering your product genuinely is before committing to the purchase.
                        </p>
                        <p>
                            We engineer these specialized boxes intertwining heavily structural SBS (Solid Bleached Sulfate) cardboard with ultra-clear PET plastic panes spanning the majority of the front visual profile. Understanding that sugar-heavy foods create specific storage challenges, these boxes are equipped with anti-oxidation films and food-safe adhesives maintaining perfect cleanliness and hygiene without dulling the viewing window.
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
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
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
                                            <Input id="quantity" type="number" placeholder="2000" className="h-9 bg-white" />
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
                        Trigger Immediate Impulse Sales with Custom Candy Boxes With Window
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
                                The psychological trigger mechanisms governing sugar and confectionary sales are incredibly rapid. Consumers do not typically read prolonged paragraphs of text before deciding to purchase a chocolate truffle or a handful of gourmet jellybeans; they react to profound visual stimulation. If your product is colorful, uniquely shaped, or dusted in appetizing sugar coatings, burying it inside a completely solid, opaque carton severely dulls its retail power. By transitioning your line to <strong>custom candy boxes with window</strong> displays, you harness the inherent visual appeal of your hard labor, projecting the actual sweet directly onto bypassing shoppers. 
                            </p>
                            <p>
                                CustomPackMakers designs windowed candy constructs acknowledging two rigid parameters: maximum transparency and absolute hygenic safeguarding. Food exposure comes with serious risk if the window materials utilized aren't rated specifically for ingestion proximity. Our production arrays deploy exclusively food-safe PET and PVC films secured firmly across the cardboard window gaps. These films ensure no rogue oxygen rapidly degrades the candy sugar levels and blocks ambient retail dust entirely, maintaining the crisp brightness of your product day after day on the shelf.
                            </p>

                            <h3>Why Invest in Transparent Candy Display Parameters?</h3>
                            <p>
                                Standard tuck-end boxes and solid lid arrays function merely as transit vessels. Die-cut window panes elevate them into multi-functioning sales agents.
                            </p>
                            <ul>
                                <li><strong>Validating Flavor Expectations:</strong> A vivid red gummy looks cherry flavored. Seeing the exact hue builds anticipation without needing heavy text descriptions.</li>
                                <li><strong>Pre-Wrapped Point-of-Sale Strength:</strong> Perfect for boutique holidays such as Valentine's Day or Easter. The viewing pan acts as the immediate focal point of a "gift-ready" package eliminating secondary wrappings.</li>
                                <li><strong>Structural Silhouette Enhancements:</strong> Utilizing customized window paths—like a heart-shape for chocolates or a long narrow sliver for premium licorice sticks—differentiates your box physically from dozens of surrounding generic squares.</li>
                            </ul>

                            <h3>Fortified Board Strengths for Weight Carrying</h3>
                            <p>
                                Candy, especially dense milk chocolate, fudge, or stacked truffles, produces incredibly concentrated weight fields pressing violently against the box walls during transit logistics. When die-cutting a massive window through the primary side panel, inexperienced engineers inadvertently weaken the load-bearing strength of the packaging resulting in crushed corners and collapsed inventory. 
                            </p>
                            <p>
                                To counterbalance this physics dilemma, we mandate strict usage of highly tensile SBS white board—typically mapped between 18pt to 22pt thickness—or durable E-flute corrugated materials if delivering heavy assorted chocolate crates. The internal window film adds surface tension diagonally across the void, stabilizing the framework. Your heavy candies remain entirely safe while enjoying a brilliantly lit transparent stage.
                            </p>

                            <h3>Tackling Food Safe Limitations Elegantly</h3>
                            <p>
                                Sugar, caramel, and chocolate are temperamental compounds. Exposing them near sub-par printing inks risks chemical odor transference ruining the product's taste instantly.
                            </p>
                            <p>
                                We eradicate this threat dynamically. We construct the interior architecture of the candy boxes deploying specialized lipid-repellant aqueous coatings mapping every internal inch. Beyond protecting the product's flavor profile, these barriers prevent chocolate oils or caramel grease from weeping outwards, ensuring your pristine matte box graphics never develop dark, unsightly grease-blotches. You acquire a perfectly pristine outer showcase housing completely uncorrupted sweets.
                            </p>

                            <h3>Elevating the Presentation with Custom Finishing</h3>
                            <p>
                                The window acts as a lens; therefore, the frame surrounding it must be flawless to capture high-ticket retail transactions. We utilize rapid CMYK ink arrays delivering saturated, candy-color matched typography directly aligned opposite the viewing pane. 
                            </p>
                            <p>
                                Enhance the border mapping of your window cut utilizing precise hot foil stamping in lustrous gold or bright silver drawing consumers' eyes directly into the transparent focal point. To command greater tactile authority, we recommend our soft-touch laminations yielding a smooth, plush surface feel that brilliantly contrasts the hard, glassy finish of the PET window pane. 
                            </p>

                            <h3>Scale Your Wholesale Confectionary Instantly</h3>
                            <p>
                                Timing is heavily dictated by holiday seasons in the confectionary vertical. Experiencing delays in your customized holiday window runs destroys potential market share rapidly. At CustomPackMakers, we establish an uncompromising 8 to 10 day standard production timeline ensuring your transparent inventory arrives aggressively prior to peak commercial sales loops. Stop fighting for attention with graphics alone. Display the heart of your brand forcefully. Reach out today for your optimized custom box quote.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductWindowPackaging />

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
                            Combining rigorous food-safe engineering with uncompromising visual transparency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
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
                                        Food-Safe Clarity Films
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Candy frequently directly interacts with internal structures. We exclusively employ non-toxic PET and PVC transparent overlays paired with eco-adhesive bonds, meaning the sweets remain flawlessly safe for immediate consumption.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

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
                                        Precision Complex Die-Cutting
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A generic square window lacks romance. Our multi-blade matrix allows us to slice intricate hearts, dynamic starbursts, or contoured brand shapes through thick boards without tearing the edges ragged.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

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
                                        Heavy Density Base Layers
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Fudge and assorted chocolates are severely heavy. We offset large window die-cuts utilizing massive 22pt high-density SBS substrates guaranteeing corners don't crush leaving your valuable treats totally shielded.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={productImg}
                                    alt="Premium Sweet Window Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>

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

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={productImg}
                                    alt="Differentiate Sweet Displays"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Spark Sugar Cravings With <span className="text-primary">Instant Visibility</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Success within the highly impulse-driven confectionary arena dictates that your product itself acts as the primary marketing channel. Opaque white boxes require intensive graphical work to merely hint at the quality held within; custom die-cut viewing windows outright prove it. Whether carving a massive rectangular panorama to display colorful artisan macaroons, or deploying a series of small circular 'peek-a-boo' paths indicating mixed luxury chocolates, integrating structural transparency guarantees immediate shopper curiosity. Supported by CustomPackMakers' intense structural rigidity protocols and deep vivid offset coloring, your candy achieves apex placement dominating checkout aisles relentlessly.
                            </p>
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
                                    Inquiries on maintaining food safety alongside pristine box shapes.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Does the clear film alter the taste of the candy?",
                                        answer: "Never. We mandate the exclusive use of strict food-grade PET plastics secured by FDA-compliant non-toxic adhesives ensuring absolutely zero chemical off-gassing occurs within the closed space."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Will chocolate oil stain the cardboard around the window?",
                                        answer: "Typically yes, but we deploy invisible protective aqueous linings or thin laminations mapping the interior surface repelling aggressive lipids securely keeping your external artwork flawless."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I do full-color printing on the inside of the box?",
                                        answer: "Absolutely. A popular tactic is printing vibrant neon or contrasting pastel bases interiorly. This brilliant colored background becomes visible directly through the window acting as a frame for the candy."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Does a large window make the box weaker?",
                                        answer: "Normally it would. We offset this physical limitation engineering thick 18pt+ high-density papers alongside geometric folds transferring stacking pressures seamlessly away from the modified cut paneling."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can I receive wholesale tiered pricing?",
                                        answer: "Certainly. Beyond our minimum order quantities, scaling up your unit volume rapidly introduces steep discounted threshold breaks granting maximum budget ROI across expanding holiday demands."
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
                                alt="Candy Window Packages FAQ"
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

export default CandyBoxesWithWindow;
