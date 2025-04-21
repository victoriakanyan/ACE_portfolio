import Header from '../components/Header'
import Footer from '../components/Footer'

const packages = [
  {
    name: 'Starter',
    price: '€300',
    features: ['One-page website', 'Responsive design', '1-week delivery'],
  },
  {
    name: 'Standard',
    price: '€500',
    features: ['Multi-page site', 'Basic animations', 'SEO friendly'],
  },
  {
    name: 'Premium',
    price: '€800+',
    features: ['Custom design', 'CMS integration', 'Advanced animations'],
  },
]

function PackagesCard({ name, price, features }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center transform hover:scale-105 transition">
      <h3 className="text-2xl font-bold text-primary">{name}</h3>
      <p className="text-xl font-semibold mt-2">{price}</p>
      <ul className="mt-4 space-y-2 text-gray-600">
        {features.map((feat, idx) => (
          <li key={idx}>• {feat}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Packages() {
  return (
    <>
      <Header />
      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, idx) => (
            <PackagesCard key={idx} {...pkg} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
