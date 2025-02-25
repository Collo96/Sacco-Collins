
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Careers - Coming Soon</h1>
        <p className="text-neutral-600 mb-8">
          We are working on something exciting! The Careers page will be available shortly.
        </p>
        <Link to="/" className="text-primary hover:underline">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
