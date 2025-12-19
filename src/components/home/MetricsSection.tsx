import React from 'react';
import AnimatedCounter from '../AnimatedCounter';

const MetricsSection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center md:flex-row md:justify-around gap-20 md:gap-10">
                    <div className="flex flex-col items-center text-center max-w-xs transition-transform duration-500 hover:scale-105">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="text-6xl md:text-7xl font-black text-navy tracking-tighter mb-4">
                                <AnimatedCounter target={80000} prefix="$" suffix="+" />
                            </div>
                        </div>
                        <p className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">הון נדרש לבתים איכותיים</p>
                    </div>
                    <div className="hidden md:block w-px h-32 bg-slate-100"></div>
                    <div className="flex flex-col items-center text-center max-w-xs transition-transform duration-500 hover:scale-105">
                        <div className="relative mb-6">
                            <div className="text-6xl md:text-7xl font-black text-gold tracking-tighter mb-4">
                                <AnimatedCounter target={80} suffix="%" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">מימון בנקאי</p>
                            <p className="text-navy font-black text-sm uppercase tracking-widest bg-slate-50 px-4 py-1 rounded-full">עד 75% לישראלים</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-32 bg-slate-100"></div>
                    <div className="flex flex-col items-center text-center max-w-xs transition-transform duration-500 hover:scale-105">
                        <div className="relative mb-6">
                            <div className="text-6xl md:text-7xl font-black text-navy tracking-tighter mb-4">
                                <AnimatedCounter target={2800} prefix="~$" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">שכירות חודשית ממוצעת</p>
                            <p className="text-slate-400 font-medium text-sm italic">בשכונות ובבתים שאנו פועלים בהם.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MetricsSection;
