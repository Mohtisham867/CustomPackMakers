import { Package, Zap, Shield, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Package,
    title: "Custom Designs",
    description: "Tailored packaging solutions that perfectly represent your brand identity and values",
    color: "text-feature-1",
    bgColor: "bg-blue-50",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick production and delivery times without compromising on quality or design",
    color: "text-feature-2",
    bgColor: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Durable materials and superior craftsmanship ensure your products stay protected",
    color: "text-feature-3",
    bgColor: "bg-purple-50",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "100% recyclable materials and sustainable practices for a better tomorrow",
    color: "text-feature-4",
    bgColor: "bg-amber-50",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl animate-fade-in-up group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className={`${feature.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon className={`h-10 w-10 ${feature.color}`} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
