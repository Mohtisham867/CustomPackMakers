import { Star, Truck, Shield, Award } from "lucide-react";

export const BrandRating = () => {
  return (
    <div className="bg-muted/30 rounded-lg p-8 my-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          5,000+ brands big and small love us!
        </h3>
        <div className="flex justify-center items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-muted-foreground">Rated 4.9/5 based on 2,000+ reviews</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="flex flex-col items-center text-center">
          <Truck className="w-10 h-10 text-primary mb-3" />
          <h4 className="font-semibold text-foreground mb-1">Quick Turnaround</h4>
          <p className="text-sm text-muted-foreground">Fast production and delivery</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Shield className="w-10 h-10 text-primary mb-3" />
          <h4 className="font-semibold text-foreground mb-1">Quality Guaranteed</h4>
          <p className="text-sm text-muted-foreground">Premium materials & craftsmanship</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Award className="w-10 h-10 text-primary mb-3" />
          <h4 className="font-semibold text-foreground mb-1">Expert Support</h4>
          <p className="text-sm text-muted-foreground">Dedicated customer service</p>
        </div>
      </div>
    </div>
  );
};
