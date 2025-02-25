
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Promotion = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Promotion - Coming Soon</h1>
        <p className="text-neutral-600 mb-8">
          We are working on something exciting! The Promotion page will be available shortly.
        </p>
        <Link to="/" className="text-primary hover:underline">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Promotion;
