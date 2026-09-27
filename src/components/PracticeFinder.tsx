import { useState } from 'react';

export default function PracticeFinder() {
  const [searchQuery, setSearchQuery] = useState('');

  const practices = [
    { name: 'Lumino Auckland Central', address: '123 Queen Street, Auckland', distance: '0.5 km' },
    { name: 'Lumino Red Beach', address: '45 Red Beach Road, Auckland', distance: '2.1 km' },
    { name: 'Lumino Takapuna', address: '78 Lake Road, Takapuna', distance: '3.4 km' },
    { name: 'Lumino Glenfield', address: '12 Glenfield Road, Auckland', distance: '5.2 km' },
    { name: 'Lumino Darfield', address: '31 Main Road, Darfield', distance: '8.7 km' },
  ];

  const filteredPractices = practices.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="find-practice" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find your nearest practice
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            With over 120 practices throughout New Zealand, there's a Lumino near you.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Enter your suburb, city, or postcode..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-32 py-4 rounded-full border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-lg shadow-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
              Search
            </button>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="text-teal-600 hover:text-teal-700 font-medium flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Use your current location</span>
            </button>
          </div>
        </div>

        {/* Practice Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPractices.map((practice, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-800">{practice.name}</h3>
                <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium">
                  {practice.distance}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">{practice.address}</p>
              <div className="flex items-center space-x-3">
                <a href="#book" className="text-sm bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full font-medium transition-colors">
                  Book Now
                </a>
                <a href="#" className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
