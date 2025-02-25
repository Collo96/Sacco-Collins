
import { Link } from "react-router-dom";
import { FileDown } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const documents = [
  {
    name: "ACCOUNT OPENING FORM",
    file: "/documents/ACCOUNT OPENING FORM.pdf",
    description: "Form for opening a new account with our SACCO"
  },
  {
    name: "KARIBU LOAN FORM",
    file: "/documents/KARIBU LOAN FORM.pdf",
    description: "Application form for our Karibu loan product"
  },
  {
    name: "NORMAL LOAN FORM",
    file: "/documents/NORMAL LOAN FORM.pdf",
    description: "Standard loan application form"
  },
  {
    name: "SALARY ADVANCE",
    file: "/documents/SALARY ADVANCE FORM.pdf",
    description: "Form for salary advance requests"
  }
];

const Downloads = () => {
  const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Document Downloads</h1>
            <p className="text-neutral-600">
              Access and download our official forms and documents
            </p>
          </div>
          
          <Link to="/" className="text-primary hover:underline block mb-8">
            Back to Home
          </Link>

          <div className="space-y-6">
            <div className="grid gap-4">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-neutral-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{doc.name}</h3>
                      <p className="text-sm text-neutral-600">{doc.description}</p>
                    </div>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => handleDownload(doc.file, doc.name + '.pdf')}
                    >
                      <FileDown className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">Need Help?</h3>
              <p className="text-sm text-blue-600">
                If you have trouble downloading or filling out any forms, please contact our support team for assistance.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Downloads;
