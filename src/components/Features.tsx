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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
