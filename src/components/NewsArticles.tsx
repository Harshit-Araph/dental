import { useState } from 'react';

const articles = [
  {
    title: 'What Are Veneers?',
    category: 'Oral Health Resources',
    date: '24 March, 2025',
    description: "Wondering what veneers are? Learn how they work, the different types, their benefits, and whether they're right for you.",
    image: '🦷',
    color: 'from-blue-100 to-teal-100',
  },
  {
    title: "Can You Eat With Invisalign? Do's and Dont's",
    category: 'Oral Health Resources',
    date: '10 March, 2025',
    description: 'Discover the essential dos and donts, foods to avoid, and expert tips to keep your aligners clean.',
    image: '😁',
    color: 'from-purple-100 to-pink-100',
  },
  {
    title: 'Invisalign vs Braces: Which Is Better?',
    category: 'Oral Health Resources',
    date: '07 March, 2025',
    description: 'Compare results, speed, comfort and cost. Book a consultation with Lumino today for personalised advice.',
    image: '✨',
    color: 'from-amber-100 to-orange-100',
  },
  {
    title: 'Can Invisalign Correct an Overbite?',
    category: 'Oral Health Resources',
    date: '04 February, 2025',
    description: 'Learn how Invisalign works for overbite correction, the treatment duration, and why it\'s important.',
    image: '🔬',
    color: 'from-green-100 to-emerald-100',
  },
  {
    title: 'How to Clean and Care for Invisalign',
    category: 'Oral Health Resources',
    date: '21 January, 2025',
    description: 'Learn how to clean and disinfect Invisalign and safely get deep cleaning during treatment.',
    image: '💎',
    color: 'from-cyan-100 to-blue-100',
  },
  {
    title: 'Does Invisalign Hurt?',
    category: 'Oral Health Resources',
    date: '23 December, 2024',
    description: 'Discover common causes of discomfort, how long it lasts, and top tips for pain relief.',
    image: '💡',
    color: 'from-rose-100 to-pink-100',
  },
];

const categories = ['All', 'Oral Health Resources', 'Celebrating Smiles', 'Community'];

export default function NewsArticles() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            News & Articles
          </h2>
          <p className="text-gray-600 text-lg">
            Stay informed with the latest dental health tips and news from Lumino.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-teal-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className={`h-48 bg-gradient-to-br ${article.color} flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-110 transition-transform">
                  {article.image}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.description}
                </p>
                <a
                  href="#"
                  className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center space-x-1"
                >
                  <span>Read more...</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center space-x-2 border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            <span>View All Articles</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
