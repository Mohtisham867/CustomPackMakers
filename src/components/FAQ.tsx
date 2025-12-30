import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order quantity is 100 boxes. However, we can discuss smaller quantities for sample orders or prototypes. Contact us for custom requirements.",
  },
  {
    question: "How long does production take?",
    answer: "Standard production time is 10-15 business days after design approval. Rush orders are available with 5-7 day turnaround for an additional fee.",
  },
  {
    question: "Can I see a physical sample before placing a large order?",
    answer: "Absolutely! We offer sample kits and can create a physical prototype of your custom box design. This ensures you're 100% satisfied before committing to a full production run.",
  },
  {
    question: "What materials do you use for packaging boxes?",
    answer: "We use premium materials including cardboard, corrugated board, rigid board, and kraft paper. All materials are 100% recyclable and eco-friendly. We can also source specialty materials based on your requirements.",
  },
  {
    question: "Do you offer design services?",
    answer: "Yes! Our in-house design team can create custom artwork and structural designs. We provide unlimited revisions until you're completely satisfied with the design.",
  },
  {
    question: "What printing options are available?",
    answer: "We offer digital printing, offset printing, flexography, and screen printing. Finishing options include matte/glossy lamination, spot UV, foiling, embossing, and debossing.",
  },
  {
    question: "Can you ship internationally?",
    answer: "Yes, we ship worldwide! Shipping costs and delivery times vary by location. Contact us for a detailed shipping quote for your region.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, PayPal, bank transfers, and purchase orders from established businesses. A 50% deposit is required to begin production, with the balance due before shipping.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our custom packaging services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
