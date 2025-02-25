
import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Note: Replace with your Mapbox token
const MAPBOX_TOKEN = "YOUR_MAPBOX_TOKEN";

const Contact = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState(MAPBOX_TOKEN);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = mapboxToken;
    
    // Kericho coordinates as [longitude, latitude]
    const kerichoCoordinates: [number, number] = [35.2834, -0.3689];
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: kerichoCoordinates,
      zoom: 15,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat(kerichoCoordinates)
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-neutral-600">
                We're here to help! Get in touch with us for any inquiries or support.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      content: "Kipchimatt Supermarket, Brooke, Kericho, along Kericho-Kisumu Highway, Kenya",
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      content: "+254 723 656 494",
                    },
                    {
                      icon: Mail,
                      title: "Email Us",
                      content: "info@setyon-sacco.com",
                    },
                    {
                      icon: Clock,
                      title: "Working Hours",
                      content: "Mon - Fri: 8AM to 5PM, Sat: 8AM to 1PM",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-6 bg-white rounded-lg shadow-sm"
                    >
                      <item.icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-neutral-600">{item.content}</p>
                    </div>
                  ))}
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
                {!mapboxToken.includes("YOUR_MAPBOX_TOKEN") ? (
                  <div ref={mapContainer} className="w-full h-full" />
                ) : (
                  <div className="w-full h-full bg-neutral-100 p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-neutral-600 mb-4">
                      Please enter your Mapbox public token to display the map
                    </p>
                    <Input
                      placeholder="Enter Mapbox token"
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      className="max-w-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
