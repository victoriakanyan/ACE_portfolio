function LinkedInHover({ name, href, image, title }) {
    return (
      <div className="relative inline-block group">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-all duration-300"
        >
          {name}
        </a>
  
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 hidden group-hover:flex flex-col items-center z-50">
          <div className="bg-white rounded-lg shadow-xl border w-64 p-4">
            <div className="flex items-center space-x-3">
              <img
                src={image}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm text-black">{name}</p>
                <p className="text-xs text-gray-500">{title}</p>
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm text-blue-600">
              <img src="/linkedin.png" className="w-4 h-4 mr-1" />
              View on LinkedIn
            </div>
          </div>
          <div className="w-2 h-2 bg-white rotate-45 mt-[-4px]"></div>
        </div>
      </div>
    )
  }
  
  
  export default function Footer() {
    return (
      <footer className="bg-purple text-white py-6 mt-12">
        <div className="text-center text-sm">
          © {new Date().getFullYear()} ACE. Built by{' '}
          <LinkedInHover
            name="Stylianos"
            href="https://www.linkedin.com/in/stylianos-nicolaou-4b00a3304/"
            image="/stylianos.jpg"
            title="Computer Science Student & CO-Founder of ACE"
          />{' '}
          &{' '}
          <LinkedInHover
            name="Viktorya"
            href="https://www.linkedin.com/in/victoria-voskanyan-38a67b1a2/"
            image="/viktorya.jpg"
            title="Computer Science Student & CO-Founder of ACE"
          />
          .
        </div>
      </footer>
    )
  }
  
  