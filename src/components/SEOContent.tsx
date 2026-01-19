import { ReactNode } from "react";

interface SEOContentProps {
    children: ReactNode;
}

export const SEOContent = ({ children }: SEOContentProps) => {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-[50px] max-w-7xl">
                <div className="prose prose-slate max-w-none text-slate-600">
                    <div className="[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-black [&>h2]:mb-8 [&>h2]:mt-12
                        [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-black [&>h3]:mb-6 [&>h3]:mt-10
                        [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-700 [&>p]:mb-8
                        [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul]:space-y-3
                        [&>li]:text-[15px] [&>li]:text-slate-700">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};
