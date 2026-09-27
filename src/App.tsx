import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeFinder from './components/PracticeFinder';
import DentalPlan from './components/DentalPlan';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import NewsArticles from './components/NewsArticles';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PracticeFinder />
      <DentalPlan />
      <WhyChooseUs />
      <Testimonials />
      <NewsArticles />
      <Footer />
    </div>
  );
}
