import React from 'react';
import { PageId } from '../types';
import HeroSection from '../components/home/HeroSection';
import MetricsSection from '../components/home/MetricsSection';
import DealsSection from '../components/home/DealsSection';
import WhyDFWSection from '../components/home/WhyDFWSection';
import Section8Teaser from '../components/home/Section8Teaser';
import RoadmapSection from '../components/home/RoadmapSection';
import ContactSection from '../components/home/ContactSection';

interface HomeViewProps {
    onNavigate: (id: PageId) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {

    const scrollToContact = () => {
        document.getElementById('home-contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col">
            <HeroSection onScrollToContact={scrollToContact} />
            <MetricsSection />
            <DealsSection onScrollToContact={scrollToContact} />
            <WhyDFWSection onNavigate={onNavigate} />
            <Section8Teaser onNavigate={onNavigate} />
            <RoadmapSection onScrollToContact={scrollToContact} />
            <ContactSection />
        </div>
    );
};

export default HomeView;
