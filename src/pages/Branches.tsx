
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Phone, Mail } from "lucide-react";

const Branches = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Our Branches</h1>
          <Link to="/" className="text-primary hover:underline block mb-8">
            Back to Home
          </Link>
          <h2 className="text-2xl font-semibold mb-8">Branch Locations</h2>
          
          <div className="space-y-12">
            {[
              {
                name: "Brooke Branch",
                description: "Located in the heart of Brooke, this branch provides full-service banking and loan services to our members in the region. We are committed to providing accessible and reliable financial solutions."
              },
              {
                name: "West Valley Branch",
                description: "Our West Valley branch offers a wide range of financial products, including savings, loans, and investment opportunities. The branch is open for all members in the West Valley area looking for quality services."
              },
              {
                name: "Kapsoit Branch",
                description: "Located in Kapsoit, this branch is dedicated to providing financial assistance to members in the region. Whether you're interested in saving or applying for a loan, our team at the Kapsoit branch is ready to help."
              }
            ].map((branch) => (
              <div key={branch.name} className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">{branch.name}</h3>
                <p className="text-neutral-600 mb-4">{branch.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Contact Information:</h4>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Phone className="h-4 w-4" />
                    <span>Coming soon</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Mail className="h-4 w-4" />
                    <span>Coming soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Branches;
