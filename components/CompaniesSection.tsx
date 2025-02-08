import Link from 'next/link'
import Image from 'next/image'

const companies = [
  {
    name: 'Sereen',
    description: 'Peer-to-Peer Support Network for Musicians',
    url: 'https://sereenminds.com',
    image: '/sereen.png'
  },
  {
    name: 'The Denko Agency',
    description: 'Premier Talent Management and Representation',
    url: 'https://thedenkoagency.com',
    image: '/tda.jpg'
  },
  {
    name: 'Noctuse',
    description: 'Alt-House Canadian Duo',
    url: 'https://linktr.ee/noctuse',
    image: '/noctuse.png'
  }
]

export default function CompaniesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Companies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {companies.map((company) => (
            <Link 
              key={company.name}
              href={company.url}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={company.image}
                alt={company.name}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">{company.name}</h3>
                <p className="text-lg">{company.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 