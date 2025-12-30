import valuePropsImage from "@/assets/value-props-boxes.png";

export const ValuePropositions = () => {
  const values = [
    {
      title: "Speed & Convenience",
      description:
        "Custom Designs Boxes prioritizes speed with a faster turnaround and shipping, and convenience with safe delivery across the USA with NO charges.",
    },
    {
      title: "24/7 Expert Support",
      description:
        "Unlimited & free custom packaging design support to deliver the ideal custom box design tailored to your specific product and brand vision.",
    },
    {
      title: "Low Minimums",
      description:
        "With our low MOQs for custom designed boxes, we promise to meet our customers' needs for small quantities as well as bulk orders.",
    },
    {
      title: "Customizability With Affordability",
      description:
        "Customize your box to your content—whether you need a simple logo or complex designs inside and out—without sacrificing quality.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Area */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Swift Solutions & Personalized Services | 360° Approach For Custom
              Packaging
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Area */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={valuePropsImage}
              alt="Custom packaging boxes in various colors and designs"
              className="w-full max-w-2xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
