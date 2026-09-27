export default function DentalPlan() {
  return (
    <section id="dental-plan" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block bg-teal-50 text-teal-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              DENTAL PLAN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Everything you need.{' '}
              <span className="text-teal-600">Already planned.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Life's busy. Keeping on top of your dental care shouldn't be. The Lumino Dental Plan includes your regular exam and x-rays, two hygiene appointments plus 10% off most additional treatments - all for less than $10 a week.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Regular exams & x-rays included</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Two hygiene appointments per year</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">10% off most additional treatments</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Less than $10 per week</span>
              </div>
            </div>

            <a
              href="#book"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-lg"
            >
              Join the Dental Plan
            </a>
          </div>

          {/* Right - Pricing Card */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl p-8 text-white max-w-sm w-full shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Lumino Dental Plan</h3>
                <p className="text-teal-100">Complete dental care membership</p>
              </div>
              <div className="text-center mb-8">
                <div className="flex items-end justify-center">
                  <span className="text-5xl font-bold">$9</span>
                  <span className="text-xl ml-1 mb-1">.90/week</span>
                </div>
                <p className="text-teal-200 text-sm mt-1">Billed monthly</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-cyan-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">2 x Dental exams per year</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-cyan-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">2 x X-rays per year</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-cyan-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">2 x Hygiene appointments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-cyan-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">10% off additional treatments</span>
                </div>
              </div>
              <button className="w-full bg-white text-teal-600 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
