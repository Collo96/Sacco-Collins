
import { CreditCard, Smartphone, Building, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PaymentOptions = () => {
  const paymentMethods = [
    {
      title: "Mobile Money",
      description: "Send money directly from your mobile phone",
      icon: Smartphone,
      steps: [
        "Dial *234# on your phone",
        "Select 'Pay Bill'",
        "Enter our Business Number: 123456",
        "Enter your Account Number",
        "Enter Amount and confirm",
      ],
    },
    {
      title: "Bank Transfer",
      description: "Transfer funds from your bank account",
      icon: Building,
      steps: [
        "Log in to your bank's online banking",
        "Select 'Transfer to Other Bank'",
        "Enter our Bank Details",
        "Enter Amount and Reference",
        "Confirm transaction",
      ],
    },
    {
      title: "Card Payment",
      description: "Pay using your debit or credit card",
      icon: CreditCard,
      steps: [
        "Visit our office or online portal",
        "Select 'Card Payment'",
        "Enter your card details",
        "Verify with OTP if required",
        "Complete transaction",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Payment Options</h1>
              <p className="text-lg text-neutral-600">
                Choose from our secure and convenient payment methods to manage your SACCO transactions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paymentMethods.map((method) => (
                <div
                  key={method.title}
                  className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <method.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">{method.title}</h3>
                  <p className="text-neutral-600 mb-6">{method.description}</p>
                  <div className="space-y-4">
                    <h4 className="font-semibold">How to Pay:</h4>
                    <ol className="space-y-2">
                      {method.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentOptions;
