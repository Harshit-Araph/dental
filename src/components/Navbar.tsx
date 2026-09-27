import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800">Lumino</span>
              <span className="text-sm text-teal-600 font-medium ml-1">The Dentists</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#find-practice" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">Find a Practice</a>
            <a href="#treatments" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">Treatments</a>
            <a href="#dental-plan" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">Dental Plan</a>
            <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">About Us</a>
            <a href="#blog" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">Blog</a>
            <a href="#book" className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full font-medium transition-colors">
              Book Online
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-teal-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#find-practice" className="text-gray-600 hover:text-teal-600 px-2 py-1 font-medium">Find a Practice</a>
              <a href="#treatments" className="text-gray-600 hover:text-teal-600 px-2 py-1 font-medium">Treatments</a>
              <a href="#dental-plan" className="text-gray-600 hover:text-teal-600 px-2 py-1 font-medium">Dental Plan</a>
              <a href="#about" className="text-gray-600 hover:text-teal-600 px-2 py-1 font-medium">About Us</a>
              <a href="#blog" className="text-gray-600 hover:text-teal-600 px-2 py-1 font-medium">Blog</a>
              <a href="#book" className="bg-teal-500 text-white px-5 py-2 rounded-full font-medium text-center">
                Book Online
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
