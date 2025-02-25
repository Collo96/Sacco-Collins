
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const events = [
  {
    title: "LOAN PRODUCTS",
    subtitle: "Access loan products",
    date: "15th Jan, 2025",
    image: "/images/updates-1.jpg"
  },
  {
    title: "AGM Event – BROOKE HQ BRANCH",
    subtitle: "Get services",
    date: "10th Jan, 2025",
    image: "/images/updates-2.jpg"
  },
  {
    title: "Community Outreach – WEST VALLEY",
    subtitle: "West Valley Branch",
    date: "5th Jan, 2025",
    image: "/images/updates-3.jpg"
  }
];

export const UpdatesSection = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Updates & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Posted on: {event.date}</span>
                </div>
                <CardTitle className="mb-2">{event.title}</CardTitle>
                <p className="text-neutral-600">{event.subtitle}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <button className="inline-flex items-center text-primary hover:text-primary-hover transition-colors">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
