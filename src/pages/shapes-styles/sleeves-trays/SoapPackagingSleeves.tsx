import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductSleevesTrays } from "@/components/RelatedProductSleevesTrays";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImage from "@/assets/industry/apparel-boxes/custom-shoe-boxes.webp";
import img1 from "@/assets/industry/apparel-boxes/shoe-boxes/shoe 1.webp";
import img2 from "@/assets/industry/apparel-boxes/shoe-boxes/shoe 2.webp";
import img3 from "@/assets/industry/apparel-boxes/shoe-boxes/shoe 3.webp";
import img4 from "@/assets/industry/apparel-boxes/shoe-boxes/shoe-4.webp";
import img5 from "@/assets/industry/apparel-boxes/shoe-boxes/deferent.webp";
import imgHero from "@/assets/industry/apparel-boxes/shoe-boxes/shoe 5.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const SoapPackagingSleeves = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: img1, alt: "Soap Packaging Sleeves - Main View" },
        { src: img2, alt: "Soap Packaging Sleeves - Side Angle" },
        { src: img3, alt: "Soap Packaging Sleeves - Open Box View" },
        { src: img4, alt: "Soap Packaging Sleeves - Detail Shot" },
        { src: imgHero, alt: "Soap Packaging Sleeves - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Soap Packaging Sleeves | Premium Custom Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale Soap Packaging Sleeves with premium custom printing. Get durable, eco-friendly packaging built to scale with your retail business perfectly." />
            </Helmet>
            <Header />

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
                                    <Link to="/categories/sleeves-trays">Sleeves & Trays</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Soap Packaging Sleeves</BreadcrumbPage>
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
                                <span className="text-primary">Soap</span> Packaging Sleeves
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Elevate your brand with premium Soap Packaging Sleeves. Engineered for maximum protection and stunning visual appeal, our custom packaging solutions provide wholesale excellence. Get perfectly crafted, branded boxes that impress customers instantly.
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
                                    src={imgHero}
                                    alt="Soap Packaging Sleeves Hero"
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
                        Premium Soap Packaging Sleeves Built for Brands That Mean Business
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our premium Soap Packaging Sleeves are expertly manufactured to exceed the highest standards of the modern retail industry. We use only top-tier, durable materials like rigid chipboard, sustainable kraft, and premium SBS cardstock to ensure your packaging protects the contents perfectly during transit and display. Every single box is meticulously crafted to showcase your unique brand identity, providing an unforgettable unboxing experience that customers will love.</p>
                        <p>These high-quality Soap Packaging Sleeves offer incredible structural strength, vibrant full-color custom printing options, and luxurious finishing touches. Whether you operate a boutique store or a large wholesale enterprise, our specialized packaging solutions guarantee striking visual impact, outstanding reliability, and complete customer satisfaction for your growing business every time.</p>
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
                                        className={'relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ' + (selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm')}
                                    >
                                        <img
                                            src={image.src}
                                            alt={'Thumbnail ' + (index + 1)}
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
                        The Importance of Premium Packaging for Your Brand
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
                            
                            <p>In today's remarkably competitive retail environment, establishing a powerful and instantly recognizable brand identity is absolutely crucial for long-term business success. Your product packaging serves as the definitive physical manifestation of your unique brand values, profoundly influencing the critical customer purchasing decision the exact moment they first encounter your beautiful merchandise. By strategically choosing to thoughtfully invest in our expertly manufactured Soap Packaging Sleeves, you forcefully guarantee that your exceptional products are spectacularly presented in highly superior, stunningly gorgeous packaging that reliably communicates uncompromising quality, exceptional dedication to detail, and a resolute commitment to ultimate consumer satisfaction.</p>
                            
                            <h3>Unmatched Material Quality</h3>
                            <p>Superior physical protection effortlessly remains the absolute core fundamental function of any exceptionally reliable packaging solution. Our profoundly durable Soap Packaging Sleeves are highly engineered precisely using state-of-the-art technology to continuously deliver unmatched structural integrity during demanding transit and extended retail storage. We meticulously utilize incredibly strong, remarkably resilient materials that brilliantly resist crushing, tearing, and unwanted moisture damage completely. This unbelievably precise focus on exceptional structural strength dramatically ensures that your incredibly valuable merchandise reliably arrives in completely pristine condition, wonderfully delighting your valuable loyal customers while significantly reducing highly expensive product returns or potentially damaging negative reviews effectively.</p>
                            
                            <h3>Advanced Printing & Finishing Techniques</h3>
                            <p>Moreover, our breathtakingly vibrant custom printing solutions remarkably transform your standard packaging into a uniquely compelling, undeniably powerful marketing tool. With beautifully bold full-color CMYK printing and remarkably exact Pantone color matching, absolute visual perfection is easily attained. We perfectly replicate your gorgeous custom artwork, brilliantly striking logos, and exceptionally intricate designs with astonishing clarity. Your spectacularly designed Soap Packaging Sleeves will undeniably capture incredibly focused customer attention on extremely crowded store shelves, rapidly establishing fantastic brand recognition and confidently inspiring extremely enthusiastic repeat purchases from countless wildly satisfied consumers globally.</p>
                            
                            <h3>Sustainable Packaging Solutions</h3>
                            <p>Sustainability is another immensely important factor driving incredibly positive consumer behavior in the current eco-conscious modern marketplace. Countless highly informed modern consumers actively choose thoughtfully responsible brands that genuinely prioritize environmental sustainability and carefully reduce unwanted ecological footprint proactively. Therefore, our thoughtfully crafted Soap Packaging Sleeves incorporate 100% recyclable, fully biodegradable materials perfectly sourced from wonderfully responsible suppliers. By proudly showcasing your undeniable environmental commitment through our remarkably green packaging options, you effortlessly build incredibly profound customer trust, significantly elevating your fantastic brand reputation and wonderfully increasing overall consumer loyalty effortlessly.</p>
                            
                            <h3>Wholesale Pricing & Scalable Production</h3>
                            <p>Finally, we proudly offer remarkably flexible, incredibly highly scalable production capabilities to perfectly support thriving businesses of absolutely any imaginable size securely. Whether you require a completely modest initial test run or an incredibly massive wholesale inventory restock, we reliably deliver spectacular Soap Packaging Sleeves incredibly fast. Our remarkably streamlined manufacturing process guarantees exceptionally rapid production turnarounds, beautifully ensuring you always consistently meet your extremely demanding product launch deadlines effortlessly. Partner with our remarkably dedicated packaging experts today to brilliantly revolutionize your overall product presentation and rapidly accelerate your fantastic brand's spectacular growth incredibly.</p>

                        </div>
                    </div>
                </div>
            </section>


            <RelatedProductSleevesTrays />

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
                                        Uncompromising Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every single Soap Packaging Sleeves we produce is built using premium, highly durable materials selected specifically for exceptional structural integrity. Our incredibly rigorous quality control guarantees perfection, safeguarding your products brilliantly.
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
                                        Tailored Perfection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We meticulously engineer your Soap Packaging Sleeves to match your exact product dimensions flawlessly. Our bespoke structural designs completely eliminate internal movement, perfectly protecting the finish while maintaining an exceptionally luxurious, premium presentation.
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
                                        Eco-Friendly Elegance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Modern buyers expect sustainability without sacrificing premium aesthetics. Our exceptionally crafted Soap Packaging Sleeves utilize fully recyclable, eco-friendly materials that reduce environmental impact while effortlessly meeting the highest luxury retail packaging standards perfectly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Custom Packaging"
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
                                    src={img5}
                                    alt="Differentiate Your Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                To ensure your brand immediately stands out, we utilize state-of-the-art manufacturing combined with advanced premium printing techniques for your Soap Packaging Sleeves. Our dedicated team closely collaborates with you to determine the absolute perfect custom dimensions, guaranteeing a perfectly snug fit. By seamlessly integrating distinctive textures, high-end finishing touches, and exceptionally sustainable materials, we dramatically elevate your packaging, creating a truly unforgettable, world-class unboxing experience that rapidly builds massive brand loyalty today.
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
                                {[
                                    { id: "item-1", question: "What Are The Outcomes Of Using These Boxes?", answer: "Using our highly visible Soap Packaging Sleeves powerfully enhances your brand image and unboxing experience. They offer exceptional robust physical protection, significantly reduce costly shipping damage, and rapidly drive incredible customer retention and loyalty." },
                                    { id: "item-2", question: "What Time Does It Take To Manufacture My Order?", answer: "Our incredibly fast standard manufacturing turnaround for Soap Packaging Sleeves requires merely eight to ten business days after design approval. We also generously offer extremely rapid expedited shipping options for highly time-sensitive luxury product launches." },
                                    { id: "item-3", question: "What Paper Material Is Perfect For Shipping And Storage?", answer: "For totally secure shipping and storage of Soap Packaging Sleeves, we highly recommend extremely durable corrugated cardboard or rigid chipboard. These premium materials provide exceptionally superior crush resistance and brilliantly maintain structural integrity perfectly." },
                                    { id: "item-4", question: "What Modern Color Schemes Do You Have For Us?", answer: "We expertly utilize vibrant full-color CMYK printing and exact Pantone matching for your Soap Packaging Sleeves. From dramatically bold modern gradients to beautifully subtle monochromatic matte luxury finishes, we faithfully replicate your gorgeous brand colors." },
                                    { id: "item-5", question: "What Are The Shipping Charges For Calgary?", answer: "We consistently strive to offer highly transparent, completely straightforward pricing for Soap Packaging Sleeves. We provide absolutely free expedited shipping to major cities like Calgary on all standard orders to brilliantly maximize your exceptional value." }
                                ].map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary transition-all duration-300"
                                    >
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white">
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

export default SoapPackagingSleeves;