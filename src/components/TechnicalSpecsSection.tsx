import { useState } from "react";

// Technical Specifications Images
import offsetPress from "@/assets/Technical-Specifications-images/OffsetPress.jpg";
import digitalPrinting from "@/assets/Technical-Specifications-images/digital-printing.webp";
import screenPrinting from "@/assets/Technical-Specifications-images/Screen-Printing.webp";

// Technical Specifications Images - Inks
import metallicInks from "@/assets/Technical-Specifications-images/Metallic-Inks.webp";
import fluorescentInks from "@/assets/Technical-Specifications-images/Fluorescent-Color-Inks.webp";
import soyBasedInks from "@/assets/Technical-Specifications-images/Soy-based-inks.avif";
import oilBasedInks from "@/assets/Technical-Specifications-images/Oil-based-inks.jpg";
import waterBasedInks from "@/assets/Technical-Specifications-images/Water-based-inks.jpg";
import uvInks from "@/assets/Technical-Specifications-images/UV-inks.jpg";
import foodSafeInks from "@/assets/Technical-Specifications-images/Food-safe-inks.webp";
import pmsColors from "@/assets/Technical-Specifications-images/PMS-color-Matching.webp";

// Technical Specifications Images - Finishing
import glossLamination from "@/assets/Technical-Specifications-images/gloss-lamination-page.jpg";
import matteLamination from "@/assets/Technical-Specifications-images/Matte-Lamination.jpg";
import spotUV from "@/assets/Technical-Specifications-images/Spot-UV-Coating.jpg";
import foilStamping from "@/assets/Technical-Specifications-images/Foil-Stamping.webp";
import aqueousCoating from "@/assets/Technical-Specifications-images/Aqueous-Coating.png";
import embossing from "@/assets/Technical-Specifications-images/Embossing.jpg";
import debossing from "@/assets/Technical-Specifications-images/Debossing.jpg";
import antiScratchLamination from "@/assets/Technical-Specifications-images/Anti-Scratch-Lamination.webp";


// Technical Specifications Images - Add-Ons
import customInserts from "@/assets/Technical-Specifications-images/Custom-Inserts.webp";
import ribbons from "@/assets/Technical-Specifications-images/Ribbons.webp";
import stickersLabels from "@/assets/Technical-Specifications-images/Stickers-and-labels.webp";
import perforation from "@/assets/Technical-Specifications-images/Perforation.webp";
import windowCutOuts from "@/assets/Technical-Specifications-images/Window-Cut-Outs.webp";
import tamperSeals from "@/assets/Technical-Specifications-images/Tamper-Evident-Seals.webp";
import customHandles from "@/assets/Technical-Specifications-images/Custom-Handles.webp";
import wrapsSleeves from "@/assets/Technical-Specifications-images/Wraps-or-Sleeves.webp";

interface TechnicalSpecsProps {
    title?: string;
    specsTableTitle?: string;
    specsTableHeader1?: string;
    specsTableHeader2?: string;
    specsRows?: { label: string; value: string }[];
    materialTitle?: string;
    materialList?: string[];
}

const defaultSpecsRows = [
    { label: "Size", value: "Fully Customizable (L x W x H)" },
    { label: "Paper Thickness", value: "12pt to 24pt (60lb to 400lb)" },
    { label: "Proof", value: "Flat View, 3D Mock-up, Physical Sampling (On request)" },
    { label: "Turnaround Time", value: "10-12 Business Days (Standard), 6-8 Days (Rush)" },
    { label: "Quantities", value: "200 - 500,000+" },
];

const defaultMaterialList = [
    "10pt to 28pt Eco-Friendly Kraft",
    "E-flute Corrugated",
    "Bux Board",
    "Cardstock",
];

export function TechnicalSpecsSection({
    title = "Technical Specifications",
    specsTableTitle = "Product Specifications",
    specsTableHeader1 = "Dimensions",
    specsTableHeader2 = "All Custom Sizes & Shapes",
    specsRows = defaultSpecsRows,
    materialTitle = "Available Materials",
    materialList = defaultMaterialList,
}: TechnicalSpecsProps) {
    const [activeTab, setActiveTab] = useState("Specification");

    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-[5vw]">
                <h2 className="text-3xl font-bold text-foreground mb-8">{title}</h2>

                <div className="w-full">
                    {/* Tab Navigation */}
                    <div className="flex flex-nowrap overflow-x-auto border-b border-slate-200 mb-2 pb-1 scrollbar-hide">
                        {["Specification", "Material / Paper Stock", "Printing Methods", "Inks", "Finishing", "Add-Ons"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap px-6 py-3 font-semibold text-sm transition-colors border-b-2 ${activeTab === tab
                                    ? "border-primary text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-slate-300"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 animate-in fade-in duration-300">
                        {activeTab === "Specification" && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground mb-4">{specsTableTitle}</h3>
                                <div className="overflow-hidden rounded-lg border border-slate-200">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-primary text-white">
                                            <tr>
                                                <th className="py-3 px-4 font-semibold w-1/3 border-b border-primary/20">{specsTableHeader1}</th>
                                                <th className="py-3 px-4 font-semibold border-b border-primary/20">{specsTableHeader2}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {specsRows.map((row, index) => (
                                                <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                                    <td className="py-3 px-4 font-bold text-slate-900 border-r border-slate-100">{row.label}</td>
                                                    <td className="py-3 px-4 text-slate-600">{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === "Material / Paper Stock" && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground mb-4">{materialTitle}</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {materialList.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === "Printing Methods" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Printing Options</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow w-[300px] mx-auto flex flex-col">
                                        <div className="w-full h-[200px] bg-slate-100 relative group">
                                            <img src={offsetPress} alt="Offset Printing" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="p-4 flex-grow">
                                            <h4 className="font-semibold text-primary mb-2 text-sm">Offset Printing</h4>
                                            <p className="text-xs text-slate-600">High-quality, cost-effective for large runs. Best for detailed imagery and exact color matching.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow w-[300px] mx-auto flex flex-col">
                                        <div className="w-full h-[200px] bg-slate-100 relative group">
                                            <img src={digitalPrinting} alt="Digital Printing" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="p-4 flex-grow">
                                            <h4 className="font-semibold text-primary mb-2 text-sm">Digital Printing</h4>
                                            <p className="text-xs text-slate-600">Perfect for short runs and fast turnaround. Great for variable data and prototypes.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow w-[300px] mx-auto flex flex-col">
                                        <div className="w-full h-[200px] bg-slate-100 relative group">
                                            <img src={screenPrinting} alt="Screen Printing" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="p-4 flex-grow">
                                            <h4 className="font-semibold text-primary mb-2 text-sm">Screen Printing</h4>
                                            <p className="text-xs text-slate-600">Ideal for bold, solid colors on kraft or textured materials. Durable and vibrant.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "Inks" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Ink Selections</h3>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { title: "Metallic Inks", image: metallicInks },
                                        { title: "Fluorescent Color Inks", image: fluorescentInks },
                                        { title: "Soy-based inks", image: soyBasedInks },
                                        { title: "Oil-based inks", image: oilBasedInks },
                                        { title: "Water-based inks", image: waterBasedInks },
                                        { title: "UV inks", image: uvInks },
                                        { title: "Food-safe inks", image: foodSafeInks },
                                        { title: "PMS color Matching", image: pmsColors },
                                    ].map((item) => (
                                        <div key={item.title} className="group cursor-default max-w-[80%] mx-auto">
                                            <div className="w-full aspect-square bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mb-2">
                                                <div className="w-full h-full bg-slate-50 relative">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                                    />
                                                </div>
                                            </div>
                                            <h4 className="text-center font-semibold text-slate-800 text-xs group-hover:text-primary transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === "Finishing" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Premium Finishes</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { title: "Gloss Lamination", image: glossLamination },
                                        { title: "Matte Lamination", image: matteLamination },
                                        { title: "Spot UV Coating", image: spotUV },
                                        { title: "Foil Stamping", image: foilStamping },
                                        { title: "Aqueous Coating", image: aqueousCoating },
                                        { title: "Embossing", image: embossing },
                                        { title: "Debossing", image: debossing },
                                        { title: "Anti Scratch Lamination", image: antiScratchLamination },
                                    ].map((finish) => (
                                        <div key={finish.title} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col max-w-[80%] mx-auto">
                                            <div className="w-full aspect-square bg-slate-100 relative">
                                                <img
                                                    src={finish.image}
                                                    alt={finish.title}
                                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                                />
                                            </div>
                                            <div className="py-2 px-2 text-center bg-white border-t border-slate-100 flex-grow flex items-center justify-center">
                                                <span className="block text-xs font-medium text-slate-800 leading-tight">{finish.title}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === "Add-Ons" && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Packaging Add-Ons</h3>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        { title: "Custom Inserts", image: customInserts },
                                        { title: "Ribbons", image: ribbons },
                                        { title: "Stickers and labels", image: stickersLabels },
                                        { title: "Perforation", image: perforation },
                                        { title: "Window Cut Outs", image: windowCutOuts },
                                        { title: "Tamper Evident Seals", image: tamperSeals },
                                        { title: "Custom Handles", image: customHandles },
                                        { title: "Wraps or Sleeves", image: wrapsSleeves },
                                    ].map((addon) => (
                                        <div key={addon.title} className="group cursor-default max-w-[80%] mx-auto">
                                            <div className="w-full aspect-square bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mb-2">
                                                <div className="w-full h-full bg-slate-50 relative">
                                                    <img
                                                        src={addon.image}
                                                        alt={addon.title}
                                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                                    />
                                                </div>
                                            </div>
                                            <h4 className="text-center font-semibold text-slate-800 text-xs group-hover:text-primary transition-colors duration-300">
                                                {addon.title}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
