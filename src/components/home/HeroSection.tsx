import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeroSectionProps {
    onScrollToContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToContact }) => {
    return (
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-navy">
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

                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1] tracking-tighter fade-in-up">
                    אימפריית נדל״ן ב-DFW: <br />
                    <span className="sketch-highlight text-gold">בשיטה ייחודית</span>
                </h1>
                <p className="text-xl md:text-3xl font-light mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                    ארכיטקטורה של עושר: בונים עבורכם פורטפוליו נכסי פרימיום ב-DFW עם ליווי שטח מקצועי,
                    דיוק יזמי וביטחון פיננסי מקסימלי שמתרגם הון להכנסה פסיבית קבועה.
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
