import Header from "../components/Navbar";
import Footer from "../components/Footer";

export default function Packages() {
  return (
    <>
      <Header />
      <section className="py-24 px-6 bg-gradient-to-b from-soft to-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            Website Development Packages
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Modern, affordable websites tailored to your business needs.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse shadow-lg rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-white text-left">
                  <th className="p-4 font-bold">Feature</th>
                  <th className="p-4 font-bold text-center">
                    Base
                    <br />
                    €200
                  </th>
                  <th className="p-4 font-bold text-center">
                    Medium
                    <br />
                    €250–€350
                  </th>
                  <th className="p-4 font-bold text-center">
                    Full Scale
                    <br />
                    €500–€1500+
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pages Included", "1–3 static", "1–5", "Unlimited"],
                  [
                    "Backend",
                    "None / Minimal",
                    "Forms / light CMS",
                    "Admin panel, DBs, e-commerce",
                  ],
                  [
                    "Design",
                    "Clean & simple",
                    "Custom or themed",
                    "Fully custom with animations",
                  ],
                  ["Mobile Responsive", "✅", "✅", "✅"],
                  ["SEO", "Basic setup", "Basic setup", "Basic on-page SEO"],
                  ["Social Media Integration", "✅", "✅", "✅"],
                  [
                    "Maintenance (1st year)",
                    "Included",
                    "Included",
                    "Included",
                  ],
                  [
                    "Ongoing Maintenance",
                    "€50/year",
                    "€70/year",
                    "20% of project cost",
                  ],
                ].map(([feature, base, medium, full], idx) => (
                  <tr
                    key={feature}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="p-4 font-medium">{feature}</td>
                    <td className="p-4 text-center">{base}</td>
                    <td className="p-4 text-center">{medium}</td>
                    <td className="p-4 text-center">{full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add-ons */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-center text-primary mb-6">
              Add-On Services
            </h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span>SEO Optimization</span>
                <span>
                  €300{" "}
                  <span className="text-gray-500">(€200 for Full Scale)</span>
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Extra Page</span>
                <span>€30 – €100</span>
              </div>
              <div className="border-b pb-2">
                <div className="flex justify-between">
                  <span>Multilingual Support (3 pages)</span>
                  <span>€100/language</span>
                </div>
                <div className="flex justify-between mt-1 text-gray-500 text-xs pl-4">
                  <span>Extra page</span>
                  <span>€20 – €50</span>
                </div>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Custom Animations & Effects</span>
                <span>€50</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
