
import { Check } from "lucide-react";

const benefits = [
  "Financial Security",
  "Affordable Loans",
  "Member Benefits",
  "Community Support",
  "Digital Services",
  "Capacity Building",
];

export const BenefitsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Setyon SACCO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center space-x-3 p-4 rounded-lg bg-white border border-neutral-200 hover:border-primary/20 hover:bg-primary/5 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-neutral-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
