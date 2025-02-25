import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Welcome to SETYON SACCO",
    subtitle: "Unity for Financial Security.",
    cta: "Become a Member",
    image: "/images/slideshow-1.jpg",
    link: "/membership/individual"
  },
  {
    title: "Empowering Financial Freedom",
    subtitle: "Loan Products Available!",
    cta: "Explore Loan Products",
    image: "/images/slideshow-2.jpg",
    link: "/products"
  },
  {
    title: "Secure Your Future",
    subtitle: "Karibu Loan Now Available.",
    cta: "Apply for Karibu Loan",
    image: "/images/slideshow-3.jpg",
    link: "/products"
  },
];

export const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[calc(100vh-6.5rem)] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
                <p className="text-xl md:text-2xl">{slide.subtitle}</p>
              </div>
              <Link to="/membership/individual">
                <Button
                  size="lg"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white"
                >
                  {slide.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-primary" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
