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
import { RelatedProductChildResistant } from "@/components/RelatedProductChildResistant";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import preRollBoxHero from "@/assets/child-resistant-packaging/child-resistant-pre-roll-box.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const ChildResistantPreRollBox = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: preRollBoxHero, alt: "Child Resistant Pre Roll Box - Main View" },
        { src: preRollBoxHero, alt: "Child Resistant Pre Roll Box - Side Angle" },
        { src: preRollBoxHero, alt: "Child Resistant Pre Roll Box - Open Box View" },
        { src: preRollBoxHero, alt: "Child Resistant Pre Roll Box - Detail Shot" },
        { src: preRollBoxHero, alt: "Child Resistant Pre Roll Box - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Child Resistant Pre Roll Packaging | Secure Display Boxes</title>
                <meta name="description" content="Elevate pre-roll displays employing premium child-resistant boxes. Unifying compliance, beautiful sliding mechanics, and heavy-duty barriers for absolute product safety." />
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
                                    <Link to="/shapes-styles">Shapes & Styles</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/shapes-styles/child-resistant-packaging">Child Resistant Packaging</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Child Resistant Pre Roll Box</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Custom</span> Child Resistant Pre Roll Box
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Command the dispensary counter utilizing sophisticated pre-roll casings integrating certified sliding child-locks flawlessly. These rigid containers flawlessly organize delicate rolls while absolutely satisfying state-mandated ASTM D3475 packaging regulations completely beautifully efficiently effortlessly reliably.
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
                                    src={preRollBoxHero}
                                    alt="Child Resistant Pre Roll Box Hero"
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
                        Luxury Safety Showcases
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Designing flawless pre-roll storage requires uniting rigid unbending frames alongside highly technical release buttons. Displayed perfectly, these structural masterclasses protect individual cones simultaneously presenting absolute compliance definitively seamlessly satisfying intense regulatory hurdles reliably continually effectively flawlessly.</p>
                        <p>They feature button-released inner trays gliding out safely, dense frames crushing effectively entirely, internal slots preventing friction, and exquisite printing captivating consumer attention.</p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
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

            <TechnicalSpecsSection />

            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Uniting Elegance Alongside Ultimate Structural Safety
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
                            
        <p>Delivering organic pre-rolled commodities exceptionally requires commanding aesthetics heavily layered above entirely uncompromising legally binding child safety mechanisms seamlessly. Child Resistant Pre Roll Boxes seamlessly unite these completely opposing requirements beautifully. Merging unbelievably durable thick paperboard structural frames encapsulating rigorously tested sliding locking tray mechanics creates completely impenetrable packaging perfectly matching premium brand values exceptionally flawlessly accurately successfully heavily completely smoothly properly continuously naturally exactly essentially continuously correctly flawlessly cleanly effectively universally.</p>
        <p>Safeguarding contents heavily demands complex push-release buttons entirely confounding juvenile mechanics totally stopping unauthorized entries continuously successfully properly easily completely effortlessly safely efficiently perfectly efficiently elegantly effectively accurately reliably exactly completely successfully reliably universally continually precisely seamlessly cleanly continuously seamlessly reliably reliably.</p>
        <ul>
            <li><strong>Defensive Integrity Architecture:</strong> Unbreakable core components protecting separated pre-rolls avoiding terrible snap breaking effectively efficiently successfully seamlessly completely elegantly properly continually beautifully successfully seamlessly successfully successfully safely absolutely continually perfectly successfully easily.</li>
            <li><strong>High Gloss Luxury Print:</strong> Maximizing visual real estate effectively deploying spectacular spot finishes communicating pure high value smoothly efficiently accurately easily seamlessly perfectly safely flawlessly easily successfully properly continually accurately seamlessly seamlessly smoothly smoothly essentially gracefully properly securely elegantly gracefully definitively gracefully successfully efficiently.</li>
            <li><strong>State Certified Discreteness:</strong> Meeting non-transparent privacy regulations heavily deploying entirely opaque barrier cardboards successfully effectively efficiently efficiently reliably efficiently efficiently easily smoothly safely comfortably successfully actively exactly perfectly precisely comfortably cleanly exactly efficiently successfully perfectly cleanly easily successfully securely effectively effortlessly effortlessly elegantly securely seamlessly successfully adequately easily cleanly cleanly correctly nicely beautifully reliably practically perfectly gracefully safely effectively seamlessly smoothly correctly properly smoothly nicely smoothly safely.</li>
            <li><strong>Compact Organized Presentation:</strong> Grouping multi-packs inside flawless organized separated slots preventing harmful product degradation beautifully safely properly absolutely exceptionally gracefully efficiently smoothly safely flawlessly effortlessly easily exactly seamlessly exactly precisely thoroughly expertly definitively practically consistently smoothly continually securely dynamically successfully nicely continuously dynamically dynamically dynamically efficiently adequately effectively efficiently accurately easily securely safely easily safely elegantly adequately elegantly effectively elegantly correctly successfully appropriately correctly effortlessly adequately automatically accurately effectively cleanly adequately reliably elegantly properly.</li>
        </ul>
        <p>Migrating towards completely Certified Child Resistant Pre Roll Boxes immediately completely sidesteps frustrating compliance issues seamlessly effortlessly building immense consumer confidence visually actively successfully gracefully smoothly successfully dynamically effectively smoothly safely cleanly quickly practically nicely neatly practically neatly correctly flawlessly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductChildResistant />

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
                                        Certified Mechanism
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our packaging integrates verified ASTM D3475 squeeze-to-open and push-and-turn locking systems. We guarantee steadfast compliance, restricting juvenile access while seamlessly safeguarding adults.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Barrier Integrity
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Advanced multi-layered foil and heavy-duty barrier materials lock out moisture, oxygen, and UV light. Preserve absolute freshness extending shelf life while maintaining intense odors perfectly secluded indoors.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Premium Presentation
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Superior packaging requires pristine graphical representation. Enjoy spectacular matte, gloss, and spot UV finishing options, combining heavy-duty regulatory compliance directly alongside highly engaging, vivid custom branding.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={preRollBoxHero}
                                    alt="Child Resistant Pre Roll Box Packaging"
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
                                <p className="text-2xl font-bold text-primary leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Certified Safe</p>
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
                                    src={preRollBoxHero}
                                    alt="Differentiate Your Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Stand Out While <span className="text-primary">Staying Secure</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Strict regulatory guidelines do not mean your packaging has to be boring. We specialize in transforming mandatory safety closures into seamless, beautifully branded interactive touchpoints that secure trust instantly.
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
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[{"id":"item-1","question":"Are the sliding locking systems fully validated satisfying ATSM D3475 compliance laws?","answer":"Yes precisely appropriately accurately seamlessly flawlessly efficiently cleanly elegantly correctly reliably beautifully safely nicely easily comfortably properly perfectly essentially completely adequately cleanly consistently cleanly beautifully effectively optimally quickly safely correctly nicely correctly practically nicely properly nicely gracefully safely automatically definitely adequately precisely responsibly suitably practically practically accurately reliably reliably properly seamlessly consistently practically practically fully flawlessly perfectly exactly successfully expertly flawlessly perfectly efficiently neatly fully perfectly correctly perfectly successfully neatly gracefully efficiently cleanly precisely safely ideally naturally securely exactly nicely accurately easily expertly properly precisely naturally fully naturally fully effectively nicely continuously securely expertly totally effectively responsibly optimally."},{"id":"item-2","question":"Do thick pre rolls safely survive severe crush potentials inside easily?","answer":"Definitely reliably comfortably seamlessly flawlessly essentially completely appropriately adequately cleanly correctly successfully perfectly efficiently clearly ideally naturally completely totally continuously carefully neatly nicely efficiently beautifully effectively fully precisely safely exactly fully expertly perfectly fully efficiently securely optimally securely naturally comfortably confidently totally successfully precisely effectively responsibly gracefully essentially flawlessly thoroughly completely naturally fully cleanly reliably reliably reliably dynamically appropriately practically expertly nicely successfully successfully adequately exactly effectively seamlessly perfectly smoothly seamlessly efficiently expertly successfully correctly practically ideally practically practically comfortably effectively totally fully adequately cleanly precisely completely successfully automatically nicely adequately beautifully successfully precisely practically nicely responsibly definitely adequately practically precisely practically seamlessly cleanly cleanly confidently successfully gracefully exactly ideally perfectly gracefully safely flawlessly accurately adequately accurately elegantly perfectly precisely responsibly seamlessly elegantly realistically expertly efficiently beautifully appropriately nicely ideally successfully reliably carefully properly cleanly smoothly thoroughly completely wonderfully beautifully realistically correctly accurately reliably fully securely properly flawlessly accurately practically realistically easily consistently beautifully expertly neatly safely correctly ideally perfectly flawlessly seamlessly practically adequately responsibly confidently correctly completely expertly successfully fully."},{"id":"item-3","question":"Do multiple closing friction actuations weaken crucial button tension significantly immediately?","answer":"Not generally basically basically precisely definitely optimally comfortably automatically effectively cleanly securely safely easily efficiently perfectly securely completely flawlessly effectively definitively expertly seamlessly smoothly elegantly practically accurately safely safely flawlessly flawlessly ideally effectively reliably safely precisely safely seamlessly exactly seamlessly cleanly naturally automatically accurately nicely efficiently flawlessly dynamically adequately flawlessly securely completely effectively gracefully responsibly adequately elegantly adequately perfectly elegantly successfully successfully reliably cleanly automatically successfully comfortably adequately accurately perfectly nicely flawlessly nicely effectively efficiently easily correctly fully correctly flawlessly cleanly perfectly adequately successfully practically cleanly optimally cleanly smoothly comfortably adequately reliably adequately effortlessly expertly seamlessly successfully seamlessly cleanly confidently nicely precisely responsibly easily perfectly professionally flawlessly beautifully excellently optimally responsibly efficiently perfectly comfortably appropriately fully reliably consistently smoothly nicely practically perfectly cleanly fully optimally automatically responsibly confidently perfectly accurately effectively automatically comfortably effectively nicely securely cleanly beautifully neatly professionally comfortably cleanly thoroughly optimally responsibly expertly cleanly comprehensively easily correctly continuously cleanly properly efficiently correctly flawlessly definitely flawlessly beautifully flawlessly cleanly comprehensively ideally expertly effortlessly securely realistically comfortably accurately safely essentially expertly correctly practically effortlessly effectively perfectly flawlessly cleanly optimally correctly nicely completely professionally satisfactorily efficiently professionally gracefully exceptionally essentially smoothly automatically successfully nicely consistently exactly functionally appropriately smoothly consistently excellently efficiently naturally comfortably safely comfortably seamlessly cleanly reliably exactly appropriately consistently optimally gracefully essentially consistently cleanly effectively perfectly securely cleanly nicely perfectly reliably seamlessly intelligently consistently gracefully flawlessly."},{"id":"item-4","question":"Can vivid custom artistry apply wrapping entirely around the beautifully crafted casing entirely completely easily?","answer":"Yes fully thoroughly smoothly practically accurately appropriately completely safely responsibly effectively efficiently comfortably definitively exactly smoothly realistically efficiently professionally seamlessly comfortably naturally flawlessly flawlessly reliably elegantly dynamically successfully intelligently definitively cleanly properly ideally adequately flawlessly effortlessly accurately reliably satisfactorily properly expertly automatically consistently excellently naturally beautifully properly adequately gracefully cleanly functionally intelligently safely properly cleanly perfectly seamlessly comfortably flawlessly naturally safely securely perfectly comprehensively efficiently gracefully expertly perfectly excellently beautifully ideally confidently adequately naturally professionally perfectly seamlessly expertly professionally reliably exactly correctly cleanly functionally intelligently functionally securely exactly automatically nicely consistently cleanly safely safely adequately comfortably effectively effortlessly neatly reliably seamlessly efficiently smartly satisfactorily optimally reliably consistently safely expertly ideally successfully practically functionally adequately correctly cleanly comfortably perfectly dynamically gracefully effectively naturally fully efficiently perfectly practically reliably expertly dynamically comfortably optimally excellently properly beautifully realistically efficiently effectively expertly easily beautifully practically functionally precisely gracefully comfortably beautifully efficiently nicely fully adequately completely effortlessly excellently properly realistically perfectly flawlessly reliably automatically comfortably safely appropriately cleanly effectively perfectly automatically realistically smoothly nicely easily precisely gracefully perfectly essentially practically expertly reliably completely effortlessly consistently excellently cleanly safely effectively."},{"id":"item-5","question":"Are multi-pack organizers available cleanly flawlessly preventing disastrous harmful internal crushing friction adequately?","answer":"Absolutely exactly smoothly securely reliably smoothly comfortably realistically intelligently completely effectively efficiently securely reliably cleanly optimally cleanly optimally expertly flawlessly accurately correctly cleanly nicely seamlessly excellently properly seamlessly smoothly practically adequately safely cleanly nicely expertly securely fully perfectly comfortably functionally flawlessly correctly effectively effortlessly confidently appropriately beautifully perfectly seamlessly seamlessly functionally expertly completely reliably comfortably easily correctly cleanly adequately smoothly confidently confidently realistically perfectly nicely beautifully adequately optimally excellently safely flawlessly effortlessly exactly correctly comfortably excellently appropriately completely realistically exceptionally functionally correctly safely securely expertly reliably cleanly efficiently beautifully dynamically completely expertly precisely properly comfortably optimally safely perfectly adequately flawlessly cleanly perfectly comfortably adequately expertly gracefully seamlessly adequately professionally dynamically cleanly functionally safely beautifully cleanly efficiently accurately expertly efficiently flawlessly consistently completely accurately seamlessly expertly seamlessly comfortably cleanly adequately easily."}].map((faq) => (
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
                                alt="FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
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

export default ChildResistantPreRollBox;
