import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeroSectionProps {
    onScrollToContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToContact }) => {
    return (
        <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-navy">
            <video
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
                autoPlay muted loop playsInline
                src="https://cdn.coverr.co/videos/coverr-dallas-aerial-view-1565961844/1080p.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
            <div className="container mx-auto px-6 relative text-center text-white">
                <div className="flex flex-col items-center mb-10 fade-in-up" style={{ animationDelay: '0.05s' }}>
                    <img src="/skyline-group-texas/images/hero_logo.png" alt="Skyline Group" className="h-32 md:h-48 w-auto object-contain drop-shadow-2xl" />
                </div>

                <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter fade-in-up">
                    חברת השקעות ויזמות נדל״ן <br />
                    <span className="text-gold text-3xl md:text-5xl">טקסס ארה״ב</span>
                </h1>
                <p className="text-lg md:text-2xl font-medium mb-12 max-w-5xl mx-auto opacity-95 leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                    בונים יחד פורטפוליו נדל״ן באיזור דאלאס-פורט וורת׳ - <br className="hidden md:block" />
                    בתים חדשים או חדישים, באיזורים חזקים, איכותיים ונקיים מפשיעה, <br className="hidden md:block" />
                    עם ביקוש קשיח לשכירות ועליות ערך מוכחות לאורך שנים.
                </p>
                <p className="text-xl md:text-3xl font-black text-gold mb-12 max-w-4xl mx-auto leading-relaxed fade-in-up uppercase tracking-tight" style={{ animationDelay: '0.3s' }}>
                    השקעה בדולרים, נכס מוחשי בבעלותכם <br className="hidden md:block" />
                    וצוות מקומי שמכיר כל רחוב
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <button
                        onClick={onScrollToContact}
                        className="bg-gold text-navy px-12 py-5 rounded-2xl font-black text-xl shadow-2xl animate-glow flex items-center justify-center gap-3 hover:scale-105 transition-all"
                    >
                        קבעו שיחת היכרות <ArrowLeft size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
