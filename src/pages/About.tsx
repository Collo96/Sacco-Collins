
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-[6.5rem] pb-20">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">About SETYON SACCO</h1>
          
          <div className="grid gap-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F97316]">Our Vision</h2>
              <p className="text-neutral-600 leading-relaxed">
                To be the leading and most preferred financial services provider, empowering our members through innovative solutions and sustainable growth.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F97316]">Our Mission</h2>
              <p className="text-neutral-600 leading-relaxed">
                To provide competitive and innovative financial solutions while promoting the economic and social welfare of our members through prudent investment of their resources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F97316]">Core Values</h2>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Integrity and Trust",
                  "Innovation and Excellence",
                  "Member-Centric Focus",
                  "Professionalism",
                  "Teamwork and Collaboration",
                  "Social Responsibility"
                ].map((value) => (
                  <li key={value} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-[#0EA5E9] mr-2">•</span>
                    <span className="text-neutral-600">{value}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#F97316]">Our Story</h2>
              <div className="prose max-w-none text-neutral-600 leading-relaxed">
                <p className="mb-4">
                  Founded with the vision of empowering our community through financial inclusion, SETYON SACCO has grown to become a trusted financial partner for thousands of members. Our journey began with a simple mission: to provide accessible, affordable, and reliable financial services to our members.
                </p>
                <p>
                  Today, we continue to evolve and innovate, offering a comprehensive range of financial products and services tailored to meet the diverse needs of our growing membership base. Our commitment to excellence, member satisfaction, and community development remains at the heart of everything we do.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
