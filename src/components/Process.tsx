import { ClipboardList, Palette, Cog, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Your Requirements",
    description: "Tell us about your vision, dimensions, quantity, and design preferences",
  },
  {
    icon: Palette,
    title: "Design & Approval",
    description: "Our design team creates custom mockups for your review and approval",
  },
  {
    icon: Cog,
    title: "Production",
    description: "We manufacture your boxes using premium materials and precise techniques",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Fast shipping directly to your doorstep with tracking information",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">A Detailed Roadmap to Our Packaging Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to delivery, we make custom packaging simple and stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary opacity-20" />

          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon Circle */}
                <div className="relative">
                  <div className="gradient-primary w-24 h-24 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
