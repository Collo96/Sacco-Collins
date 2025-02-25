
import { useState } from "react";
import { Link } from "react-router-dom";
import { FileDown } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const IndividualMembership = () => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Link
              to="/"
              className="text-primary hover:underline inline-flex items-center"
            >
              ← Back
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-8">Individual Membership Application</h1>

          <div className="mb-12 space-y-6">
            <h2 className="text-xl font-semibold">Membership Registration Documents Required</h2>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Completed membership application form.</li>
              <li>Copy of National Identity Card/Passport.</li>
              <li>Recent Photo.</li>
              <li>Copy of KRA PIN Certificate.</li>
            </ul>
            <Button variant="outline" className="inline-flex items-center gap-2">
              <FileDown className="w-4 h-4" />
              Download Individual Form
            </Button>
          </div>

          <div className="space-y-8">
            <h2 className="text-xl font-semibold">Interested in Joining? Fill in the Form Below</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="membershipType">Membership Type</Label>
                  <Input id="membershipType" value="Individual" disabled />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div>
                  <Label htmlFor="residence">Area of Residence</Label>
                  <Input id="residence" placeholder="Enter your area of residence" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I confirm I have read and accepted the terms and conditions and privacy policy.
                </label>
              </div>

              <Button type="submit" className="w-full" disabled={!agreed}>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndividualMembership;
