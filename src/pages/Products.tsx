
import { Wallet, PiggyBank, Car, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      category: "Loans",
      items: [
        {
          title: "Personal Loan",
          description: "Quick access to funds for your personal needs",
          rate: "14% p.a.",
          duration: "Up to 48 months",
        },
        {
          title: "Business Loan",
          description: "Grow your business with our flexible financing",
          rate: "16% p.a.",
          duration: "Up to 60 months",
        },
        {
          title: "Emergency Loan",
          description: "Instant financial relief for unexpected expenses",
          rate: "12% p.a.",
          duration: "Up to 12 months",
        },
      ],
      icon: Wallet,
    },
    {
      category: "Savings",
      items: [
        {
          title: "Regular Savings",
          description: "Earn competitive interest on your deposits",
          rate: "6% p.a.",
          minimum: "KES 1,000",
        },
        {
          title: "Fixed Deposit",
          description: "Higher returns on long-term savings",
          rate: "8-12% p.a.",
          minimum: "KES 50,000",
        },
        {
          title: "Holiday Savings",
          description: "Save for your dream vacation",
          rate: "7% p.a.",
          minimum: "KES 5,000",
        },
      ],
      icon: PiggyBank,
    },
    {
      category: "Asset Finance",
      items: [
        {
          title: "Vehicle Finance",
          description: "Affordable financing for your dream car",
          rate: "15% p.a.",
          duration: "Up to 60 months",
        },
        {
          title: "Equipment Finance",
          description: "Fund your business equipment needs",
          rate: "16% p.a.",
          duration: "Up to 48 months",
        },
      ],
      icon: Car,
    },
    {
      category: "Insurance",
      items: [
        {
          title: "Life Insurance",
          description: "Protect your loved ones' future",
          coverage: "Up to KES 5M",
        },
        {
          title: "Health Insurance",
          description: "Comprehensive medical coverage",
          coverage: "Up to KES 2M",
        },
        {
          title: "Property Insurance",
          description: "Secure your assets",
          coverage: "Value-based",
        },
      ],
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Our Products & Services</h1>
              <p className="text-lg text-neutral-600">
                Discover our range of financial solutions designed to meet your needs and help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="space-y-20">
              {products.map((product) => (
                <div key={product.category} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <product.icon className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-bold">{product.category}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {product.items.map((item) => (
                      <div
                        key={item.title}
                        className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-neutral-600 mb-4">{item.description}</p>
                        <div className="space-y-2 text-sm text-neutral-600">
                          {item.rate && <p>Interest Rate: {item.rate}</p>}
                          {item.duration && <p>Duration: {item.duration}</p>}
                          {item.minimum && <p>Minimum: {item.minimum}</p>}
                          {item.coverage && <p>Coverage: {item.coverage}</p>}
                        </div>
                        <Button className="mt-6 w-full">Learn More</Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
