import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeroSectionProps {
    onScrollToContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToContact }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.5;
        }
    }, []);

    return (
        <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100dvh-5rem)] flex items-center justify-center overflow-hidden bg-navy py-4">
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                autoPlay muted loop playsInline
                src="images/hero-video-compressed.mp4"
            />
            <div className="absolute inset-0 bg-navy/50" />
            <div className="container mx-auto px-6 relative text-center text-white h-full flex flex-col justify-center max-h-full">
                <div className="flex flex-col items-center mb-4 md:mb-6 fade-in-up" style={{ animationDelay: '0.05s' }}>
                    <img src="images/hero_logo.png" alt="Skyline Group" className="h-20 md:h-32 lg:h-40 w-auto object-contain drop-shadow-2xl" />
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-[1.1] tracking-tighter fade-in-up">
                    חברת השקעות ויזמות נדל״ן <br />
                    <span className="text-gold text-2xl md:text-4xl lg:text-5xl">טקסס ארה״ב</span>
                </h1>

                <p className="text-base md:text-xl lg:text-2xl font-medium mb-4 md:mb-6 max-w-5xl mx-auto opacity-95 leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                    בונים יחד פורטפוליו נדל״ן באיזור דאלאס-פורט וורת׳ - <br className="hidden md:block" />
                    בתים חדשים או חדישים, באיזורים חזקים, איכותיים ונקיים מפשיעה, <br className="hidden md:block" />
                    עם ביקוש קשיח לשכירות ועליות ערך מוכחות לאורך שנים.
                </p>

                <p className="text-lg md:text-2xl lg:text-3xl font-black text-gold mb-6 md:mb-10 max-w-4xl mx-auto leading-relaxed fade-in-up uppercase tracking-tight" style={{ animationDelay: '0.3s' }}>
                    השקעה בדולרים, <span className="relative inline-block">נכס מוחשי בבעלותכם<div className="absolute -bottom-1 left-0 w-full h-1 bg-gold/40 rounded-full"></div></span> <br className="hidden md:block" />
                    וצוות מקומי שמכיר כל רחוב
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <button
                        onClick={onScrollToContact}
                        className="bg-gold text-navy px-10 md:px-12 py-3 md:py-5 rounded-2xl font-black text-lg md:text-xl shadow-2xl animate-glow flex items-center justify-center gap-3 hover:scale-105 transition-all shrink-0"
                    >
                        אני רוצה לשמוע עוד! <ArrowLeft size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
