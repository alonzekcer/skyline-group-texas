import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { DEALS } from '../../data/data';

interface DealsSectionProps {
    onScrollToContact: () => void;
}

const DealsSection: React.FC<DealsSectionProps> = ({ onScrollToContact }) => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-100">
            <div className="container mx-auto px-6 mb-16">
                <div className="text-center">
                    <span className="text-gold font-black uppercase tracking-widest text-sm mb-4 block">REAL RESULTS</span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">עסקאות שביצענו לאחרונה</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">מנתונים בשטח ועד למפתחות ביד - ככה נראות ההצלחות של המשקיעים שלנו.</p>
                </div>
            </div>

            <div className="marquee-container w-full" dir="ltr">
                <div className="marquee-content scroll-left" style={{ animationDuration: '240s' }}>
                    {Array(6).fill(DEALS).flat().map((deal, index) => (
                        <div key={`${deal.id}-${index}`} className="w-[280px] md:w-[420px] shrink-0 bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col group transition-all duration-500 hover:-translate-y-1 mr-8">
                            <div className="h-44 md:h-60 relative overflow-hidden">
                                <img src={deal.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={deal.address} />
                                <div className="absolute top-4 right-4 bg-navy/80 backdrop-blur-md text-gold px-3 py-1 rounded-xl font-black text-[9px] md:text-[10px] uppercase shadow-xl tracking-widest">{deal.badge}</div>
                            </div>
                            <div className="p-5 md:p-8 flex flex-col justify-between flex-1" dir="rtl">
                                <div>
                                    <h3 className="text-md md:text-lg font-black text-navy mb-4 border-r-4 border-gold pr-3 truncate text-right">{deal.address}</h3>
                                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-4">
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase text-right">מחיר רכישה</p>
                                            <p className="text-lg font-black text-navy text-right">{deal.price}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase text-right">תזרים נקי</p>
                                            <p className="text-lg font-black text-gold text-right">{deal.cashFlow}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase text-right">ROI</p>
                                            <p className="text-md font-bold text-navy text-right">{deal.roi}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase text-right">שכירות</p>
                                            <p className="text-md font-bold text-slate-600 text-right">{deal.rent}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                    <span className="text-green-600 font-black text-[9px] md:text-[10px] uppercase">
                                        Equity: {deal.equity}
                                    </span>
                                    <ArrowLeft size={14} className="text-slate-300 group-hover:text-gold transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center">
                <button
                    onClick={onScrollToContact}
                    className="bg-gold text-navy px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto"
                >
                    שלח לי דוגמאות נוספות <MessageCircle size={20} />
                </button>
            </div>
        </section >
    );
};

export default DealsSection;
