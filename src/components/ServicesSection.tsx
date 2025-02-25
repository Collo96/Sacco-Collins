
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Become a Member",
    description: "Join our community today and enjoy a wide range of financial services designed to meet your needs.",
    image: "/images/services-1.jpg",
    link: "/membership/individual"
  },
  {
    title: "Access to Credits",
    description: "Get access to quick and easy loans for various purposes.",
    image: "/images/services-2.jpg",
    link: "/products"
  },
  {
    title: "Mobile Services",
    description: "Access all our services conveniently via your mobile phone—anytime, anywhere.",
    image: "/images/services-3.jpg",
    link: "/services"
  },
  {
    title: "Help Centre",
    description: "Need assistance? Visit our Help Centre for FAQs and contact information.",
    image: "/images/services-4.jpg",
    link: "/faqs"
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Access Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
