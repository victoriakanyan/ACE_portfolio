export default function PortfolioCard({ title, description, image, link }) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block transform hover:scale-105 transition duration-300 shadow-lg rounded-xl overflow-hidden bg-white"
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </a>
    )
  }
  