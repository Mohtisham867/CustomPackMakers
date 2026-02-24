import React from 'react';

export const ApparelSEOContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="py-8 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-[5vw]">
                <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                    <div className="[&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mb-8 [&>h2]:leading-tight [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600 text-left">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};
