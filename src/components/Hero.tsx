export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium">🦷 50% off for New Patients</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Everything you need.{' '}
              <span className="text-cyan-200">Already planned.</span>
            </h1>
            <p className="text-lg md:text-xl text-teal-100 mb-8 max-w-lg">
              Life's busy. Keeping on top of your dental care shouldn't be. Join the Lumino Dental Plan for comprehensive care at less than $10 a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                className="bg-white text-teal-600 px-8 py-3.5 rounded-full font-semibold text-center hover:bg-teal-50 transition-colors shadow-lg"
              >
                Book Online Now
              </a>
              <a
                href="#dental-plan"
                className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold text-center hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex flex-col justify-center items-center shadow-2xl border border-white/20">
                {/* Tooth illustration */}
                <div className="text-8xl mb-4">🦷</div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Healthy Smiles</h3>
                  <p className="text-teal-100 text-sm">Trusted dental care for the whole family</p>
                </div>
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-400/30 rounded-full flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">💎</span>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-[200px]">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">120+ Practices</span>
                </div>
                <p className="text-xs text-gray-500">Nationwide coverage across New Zealand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
