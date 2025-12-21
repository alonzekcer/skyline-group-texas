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

  const scrollToContact = () => {
    if (currentPage === 'home') {
      document.getElementById('home-contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      setCurrentPage('home');
      // Delay to ensure the home page is rendered before scrolling
      setTimeout(() => {
        document.getElementById('home-contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const setPageAndScroll = (page: PageId) => {
    if (page === 'contact') {
      scrollToContact();
    } else {
      setCurrentPage(page);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomeView onNavigate={setPageAndScroll} />;
      case 'market': return <MarketView onNavigate={setPageAndScroll} />;
      case 'section8': return <Section8View onNavigate={setPageAndScroll} />;
      case 'course': return <CourseView onNavigate={setPageAndScroll} />;
      case 'about': return <AboutView onNavigate={setPageAndScroll} />;
      case 'contact': return <ContactView onNavigate={setPageAndScroll} />;
      default: return <HomeView onNavigate={setPageAndScroll} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-navy flex flex-col font-assistant">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setPageAndScroll}
        setIsMenuOpen={setIsMenuOpen}
      />

      <MenuModal
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        currentPage={currentPage}
        setCurrentPage={setPageAndScroll}
      />

      <main className="flex-1 pt-16 md:pt-20">
        <React.Suspense fallback={<LoadingFallback />}>
          {renderPage()}
        </React.Suspense>
      </main>

      <Footer setCurrentPage={setPageAndScroll} />
    </div>
  );
};

export default App;
