
import { User, Users, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const plans = [
  {
    title: "Individual",
    description: "This plan is tailored for single individuals who want to save or access loans.",
    icon: User,
    requirements: [
      "Valid ID or Passport",
      "Minimum deposit: KES 500",
      "Completed application form"
    ],
    link: "/membership/individual"
  },
  {
    title: "Joint",
    description: "Designed for partners or couples looking to manage finances together.",
    icon: Users,
    requirements: [
      "Valid IDs or Passports for both",
      "Joint application form",
      "Proof of relationship"
    ],
    link: "/membership/joint"
  },
  {
    title: "Group",
    description: "Ideal for Chamas, investment groups, and community groups.",
    icon: Users,
    requirements: [
      "Group registration certificate",
      "List of members with ID copies",
      "Group account signatories"
    ],
    link: "/membership/group"
  },
  {
    title: "Corporate",
    description: "Suitable for businesses and organizations looking to join SACCO.",
    icon: Building,
    requirements: [
      "Certificate of incorporation",
      "Company PIN and registration documents",
      "Authorized signatories"
    ],
    link: "/membership/corporate"
  }
];

export const MembershipPlans = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Membership Plans</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore the different membership plans and their requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card key={plan.title} className="relative group hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{plan.title}</CardTitle>
                <p className="text-sm text-neutral-600">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="text-sm space-y-2 text-neutral-600">
                  {plan.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  className="block mt-6 text-center py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors"
                >
                  Apply Now
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
