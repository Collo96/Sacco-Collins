
import { Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Access Money Anytime, Anywhere!
              </h2>
              <p className="text-neutral-600">
                With our mobile banking platform, you can securely access your
                SACCO account, check your balance, transfer funds, and make
                payments directly from your phone. Convenience at your fingertips!
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Access via:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">USSD Code: *346#</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span className="text-neutral-700">
                    Android App: Setyon SACCO Mobile App
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <form className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Us</h3>
                <p className="text-neutral-600">
                  Have questions? We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
