
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const partners = [
  { id: 1, name: "Partner 1", logo: "/images/partner-1.jpg" },
  { id: 2, name: "Partner 2", logo: "/images/partner-2.jpg" },
  { id: 3, name: "Partner 3", logo: "/images/partner-3.jpg" },
  { id: 4, name: "Partner 4", logo: "/images/partner-4.jpg" },
  { id: 5, name: "Partner 5", logo: "/images/partner-5.jpg" },
  { id: 6, name: "Partner 6", logo: "/images/partner-6.jpg" },
  { id: 7, name: "Partner 7", logo: "/images/partner-7.jpg" },
  { id: 8, name: "Partner 8", logo: "/images/partner-8.jpg" },
];

export const PartnersSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Our Partners</h2>
        <p className="text-center text-neutral-600 mb-12 max-w-3xl mx-auto">
          Serving over 20 companies under Kipchimchim Group of Companies among many other partners.
        </p>
        <div className="relative max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner) => (
                <CarouselItem key={partner.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="aspect-square bg-white rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
