import { useState } from 'react';

const testimonials = [
  {
    quote: "Everyone is very kind and respectful. As someone who gets quite nervous about medical appointments, I always find the team very respectful. Dr Taylor is very kind and always explains things in a way I can understand.",
    author: "Aych M",
    location: "Lumino City Dental Auckland",
    rating: "HIGHLY RECOMMEND!",
  },
  {
    quote: "After breaking a tooth I jumped online looking for a local affordable dentist. Whilst viewing Lumino I was also able to view appointment availability and book online immediately. The service was excellent and the friendly team put me at ease.",
    author: "Laura O",
    location: "Lumino Red Beach",
    rating: "WARM, FRIENDLY & CARING",
  },
  {
    quote: "It's such a relief to go to a dentist and know you can relax knowing everything will be explained to you in a warm, friendly and caring manner.",
    author: "Alison J",
    location: "Lumino Darfield Dental",
    rating: "PROFESSIONAL & WELCOMING",
  },
  {
    quote: "My visit to Lumino Oamaru was a very good experience. They are always professional, helpful, and friendly. Couldn't have been better.",
    author: "Philip S",
    location: "Lumino Shearer Dental Oamaru",
    rating: "EXCELLENT SERVICE",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Patient reviews
          </h2>
          <p className="text-gray-600 text-lg">
            See what our patients have to say about their experience at Lumino.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 relative">
            <div className="absolute top-6 left-8 text-6xl text-teal-200 font-serif">"</div>
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed pl-8">
                {testimonials[activeIndex].quote}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pl-8">
                <div>
                  <p className="font-semibold text-gray-800">– {testimonials[activeIndex].author}</p>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].location} Patient</p>
                </div>
                <div className="mt-3 sm:mt-0">
                  <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">
                    {testimonials[activeIndex].rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-teal-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mini testimonial cards */}
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left p-4 rounded-xl border-2 transition-all ${
                index === activeIndex
                  ? 'border-teal-500 bg-teal-50'
                  : 'border-gray-100 hover:border-teal-200'
              }`}
            >
              <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                "{testimonial.quote.substring(0, 60)}..."
              </p>
              <p className="text-xs font-semibold text-gray-700">{testimonial.author}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
