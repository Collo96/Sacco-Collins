
import { FileText, Download, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    {
      category: "Forms & Documents",
      items: [
        {
          title: "Account Opening Form",
          type: "PDF",
          size: "234 KB",
        },
        {
          title: "Loan Application Form",
          type: "PDF",
          size: "156 KB",
        },
        {
          title: "KYC Form",
          type: "PDF",
          size: "189 KB",
        },
      ],
    },
    {
      category: "Publications",
      items: [
        {
          title: "Annual Report 2023",
          type: "PDF",
          size: "2.3 MB",
        },
        {
          title: "Newsletter Q4 2023",
          type: "PDF",
          size: "567 KB",
        },
        {
          title: "Investment Guide",
          type: "PDF",
          size: "890 KB",
        },
      ],
    },
    {
      category: "Financial Education",
      items: [
        {
          title: "Budgeting Basics",
          type: "Video",
          duration: "15 mins",
        },
        {
          title: "Investment Strategies",
          type: "Video",
          duration: "20 mins",
        },
        {
          title: "Savings Tips",
          type: "Article",
          readTime: "5 mins",
        },
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
              <h1 className="text-4xl font-bold mb-6">Resources</h1>
              <p className="text-lg text-neutral-600">
                Access important documents, publications, and educational materials to help you make informed financial decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="space-y-12">
              {resources.map((category) => (
                <div key={category.category}>
                  <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item) => (
                      <div
                        key={item.title}
                        className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <h3 className="font-semibold">{item.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                              <FileText className="w-4 h-4" />
                              <span>{item.type}</span>
                              {item.size && <span>• {item.size}</span>}
                              {item.duration && <span>• {item.duration}</span>}
                              {item.readTime && <span>• {item.readTime}</span>}
                            </div>
                          </div>
                          {item.type === "PDF" ? (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-primary"
                            >
                              <Download className="w-5 h-5" />
                            </Button>
                          ) : (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-primary"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
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

export default Resources;
