
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = {
    "Account Opening": [
      {
        question: "What documents are required to open an account?",
        answer: "To open an account with us, you will need to provide a valid identification card (ID), a proof of address (e.g., utility bill), and a passport-sized photograph."
      },
      {
        question: "How long does it take to open an account?",
        answer: "The process of opening an account is simple and can be completed within 30 minutes at any of our branches or online. After submission, your account will be activated immediately."
      },
      {
        question: "Is there a minimum deposit to open an account?",
        answer: "Yes, the minimum deposit required to open an account is KES 500. This amount may vary depending on the type of account you wish to open."
      }
    ],
    "Loans Inquiry": [
      {
        question: "What types of loans do you offer?",
        answer: "We offer various types of loans, including salary advances, Karibu loans, normal loans, product loans, and emergency loans. Each loan type comes with different terms and conditions tailored to meet your needs."
      },
      {
        question: "What are the requirements to apply for a loan?",
        answer: "To apply for a loan, you need to be a registered member of Setyon SACCO. Additional requirements may include proof of income, a credit assessment, and collateral (depending on the loan type)."
      },
      {
        question: "How long does it take to get approved for a loan?",
        answer: "Loan approval typically takes 2-3 business days, depending on the completeness of your application and the type of loan you are applying for."
      },
      {
        question: "Can I apply for a loan online?",
        answer: "Yes, you can apply for most loans online through our website. You will need to fill out the application form and upload the necessary documents."
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions (FAQs)
          </h1>
          <Link to="/" className="text-primary hover:underline block mb-8">
            Back to Home
          </Link>
          
          {Object.entries(faqs).map(([category, questions], index) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
