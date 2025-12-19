import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import MenuModal from './components/MenuModal';
import Footer from './components/Footer';

// Lazy load views for optimization
const HomeView = React.lazy(() => import('./views/HomeView'));
const MarketView = React.lazy(() => import('./views/MarketView'));
const Section8View = React.lazy(() => import('./views/Section8View'));
const AboutView = React.lazy(() => import('./views/AboutView'));
const CourseView = React.lazy(() => import('./views/CourseView'));
const ContactView = React.lazy(() => import('./views/ContactView'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomeView onNavigate={setCurrentPage} />;
      case 'market': return <MarketView />;
      case 'section8': return <Section8View />;
      case 'course': return <CourseView onNavigate={setCurrentPage} />;
      case 'about': return <AboutView />;
      case 'contact': return <ContactView />;
      default: return <HomeView onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-navy flex flex-col font-assistant">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setIsMenuOpen={setIsMenuOpen}
      />

      <MenuModal
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="flex-1 pt-16 md:pt-20">
        <React.Suspense fallback={<LoadingFallback />}>
          {renderPage()}
        </React.Suspense>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
