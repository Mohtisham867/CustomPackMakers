interface WhyBrandsChooseCosmeticProps {
    productName: string;
    productImage: string;
}

export function WhyBrandsChooseCosmetic({ productName, productImage }: WhyBrandsChooseCosmeticProps) {
    return (
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
                        We combine craftsmanship, speed, and reliability to deliver packaging that makes your {productName} brand unforgettable.
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
                                    Every <strong>{productName}</strong> we produce is built from premium SBS cardstock and specialty textured stocks, materials selected for structural integrity and tactile luxury. Our rigorous QC process ensures each unit meets the durability standards your brand and retail partners demand.
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
                                    Tailored Perfection
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    No two beauty lines are identical, and neither are our solutions. We engineer <strong>custom cosmetic packaging</strong> to your exact SKU dimensions, with precision-cut inserts and structural forms that eliminate movement and protect finish. Your brand's packaging spec, executed flawlessly.
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
                                    Today's beauty buyers expect sustainability without sacrificing premium aesthetics. Our FSC-certified, recyclable <strong>cosmetic boxes</strong> deliver the same luxury look and structural performance, while reducing your brand's environmental footprint and meeting consumer expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center py-8">
                        <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                            <img
                                src={productImage}
                                alt={`Premium ${productName} packaging`}
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
    );
}
