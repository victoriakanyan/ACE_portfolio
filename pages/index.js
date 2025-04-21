import Header from '../components/Header'
import Hero from '../components/Hero'
import PortfolioCard from '../components/PortfolioCard'
import Footer from '../components/Footer'

export default function Home() {
  const portfolio = [
    {
      title: 'Bakery Bliss',
      description: 'A cozy bakery website with an online ordering system.',
      image: '/bakery.jpg',
      link: 'https://bakery-bliss.example.com',
    },
    {
      title: 'Salon Shine',
      description: 'A beauty salon site with booking and gallery.',
      image: '/salon.jpg',
      link: 'https://salon-shine.example.com',
    },
  ]

  return (
    <>
      <Header />
      <Hero />
      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((item, idx) => (
            <PortfolioCard key={idx} {...item} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
