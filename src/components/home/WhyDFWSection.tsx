import React from 'react';
import { ArrowLeft, Users, TrendingUp, Globe, Briefcase } from 'lucide-react';
import { PageId } from '../../types';

interface WhyDFWSectionProps {
    onNavigate: (id: PageId) => void;
}

const WhyDFWSection: React.FC<WhyDFWSectionProps> = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 text-right">
                        <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">למה דווקא DFW?</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
                            מטרופולין דאלאס-פורט וורת' היא הכלכלה ה-20 בגודלה בעולם. עם הגירה חיובית מטאורית ושוק תעסוקה חזק, זהו היעד המושלם להשקעה יציבה.
                        </p>
                        <button
                            onClick={() => onNavigate('market')}
                            className="inline-flex items-center gap-2 text-navy font-black text-lg hover:text-gold transition-colors group mb-12"
                        >
                            גלו את כל הנתונים <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
                        </button>

                        <div className="relative mt-4 group">
                            <div className="absolute inset-0 bg-gold/5 rounded-[2rem] blur-2xl transform group-hover:scale-110 transition-transform duration-700"></div>
                            <div className="relative bg-slate-50 p-4 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group-hover:shadow-xl transition-all duration-500">
                                <img
                                    src="/skyline-group-texas/images/us_map.png"
                                    alt="USA Map - DFW Focus"
                                    className="w-full h-auto rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                                />
                                <div className="absolute inset-0 pointer-events-none border-2 border-gold/0 group-hover:border-gold/10 rounded-[2.5rem] transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-navy text-gold rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-3 transition-transform">
                                <Users size={32} />
                            </div>
                            <p className="text-4xl font-black text-navy mb-2">9M+</p>
                            <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">תושבים</p>
                            <p className="text-[14px] text-slate-500 font-medium">המטרו הרביעי בגודלו בארצות הברית.</p>
                        </div>

                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-navy text-gold rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-3 transition-transform">
                                <TrendingUp size={32} />
                            </div>
                            <p className="text-4xl font-black text-navy mb-2">#1</p>
                            <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">צמיחה בארה"ב</p>
                            <p className="text-[14px] text-slate-500 font-medium">הגידול המהיר ביותר באוכלוסייה בכל ארה"ב (150K בשנה).</p>
                        </div>

                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-navy text-gold rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-3 transition-transform">
                                <Globe size={32} />
                            </div>
                            <p className="text-4xl font-black text-navy mb-2">$744B</p>
                            <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">כלכלה גלובלית</p>
                            <p className="text-[14px] text-slate-500 font-medium">הכלכלה ה-20 בגודלה בעולם, יציבה וחזקה.</p>
                        </div>

                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-navy text-gold rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-3 transition-transform">
                                <Briefcase size={32} />
                            </div>
                            <p className="text-4xl font-black text-navy mb-2">3.5%</p>
                            <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">אבטלה בשפל</p>
                            <p className="text-[14px] text-slate-500 font-medium">שוק תעסוקה יציב המבטיח את איכות השוכרים.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyDFWSection;
