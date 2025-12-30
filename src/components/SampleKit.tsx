import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export const SampleKit = () => {
  return (
    <section id="sample" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Image */}
              <div className="bg-gradient-to-br from-primary to-primary-hover p-12 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8">
                    <div className="bg-card w-32 h-32 rounded-lg mx-auto shadow-xl" />
                  </div>
                  <div className="text-primary-foreground">
                    <h3 className="text-2xl font-bold">Sample Kit</h3>
                    <p className="text-primary-foreground/80">See & feel the quality</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-12 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-bold">Order a Sample Kit</h2>
                  <p className="text-muted-foreground text-lg">
                    Experience our quality firsthand with a curated selection of packaging samples
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    "5 Different box styles and materials",
                    "Various printing and finishing samples",
                    "Material quality comparison guide",
                    "Free shipping included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold gradient-text">$29</span>
                    <span className="text-muted-foreground line-through">$59</span>
                    <span className="text-sm text-primary font-semibold">Limited Offer</span>
                  </div>

                  <Button size="lg" className="gradient-primary w-full group text-lg">
                    Order Sample Kit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    100% refundable with your first order of 500+ boxes
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
