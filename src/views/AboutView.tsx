import React from 'react';
import { Zap, Users, Phone, ArrowLeft } from 'lucide-react';
import { FOUNDERS } from '../data/data';
import { PageId } from '../types';

interface AboutViewProps {
    onNavigate: (id: PageId) => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => (
    <div className="flex flex-col">
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <button
                    onClick={() => onNavigate('home')}
                    className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-bold mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>חזרה לדף הבית</span>
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-16">
                    <div>
                        <span className="text-gold font-black uppercase tracking-widest text-sm mb-4 block">MEET THE EXPERTS</span>
                        <h1 className="text-4xl md:text-7xl font-black text-navy mb-8 leading-[0.9] tracking-tighter uppercase">SKYLINE <br /> <span className="text-gold">TEAM.</span></h1>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed italic mb-10">
                            אנחנו היזמים, בעלי הידע והניסיון, מעבירים את הליווי בעצמנו בצורה ישירה, זמינה ואישית יד ביד לאורך כל הדרך.
                        </p>
                        <div className="space-y-6 mb-12">
                            <button
                                onClick={() => onNavigate('contact' as PageId)}
                                className="bg-gold text-navy px-10 py-4 rounded-xl font-black text-lg shadow-xl hover:scale-105 transition-all"
                            >
                                דברו איתנו עכשיו
                            </button>
                        </div>
                        <div className="space-y-8">
                            <div className="flex gap-6 p-8 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm">
                                <div className="w-16 h-16 bg-navy text-gold rounded-2xl flex items-center justify-center shrink-0 shadow-lg"><Zap size={32} /></div>
                                <div>
                                    <h5 className="text-xl font-black text-navy mb-2 uppercase">Direct Access</h5>
                                    <p className="text-[15px] text-slate-500 font-medium">אצלנו כל תהליך הליווי הוא מולנו, לא עובדים שלנו. אנחנו זמינים לכם לכל שאלה.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 p-8 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm">
                                <div className="w-16 h-16 bg-navy text-gold rounded-2xl flex items-center justify-center shrink-0 shadow-lg"><Users size={32} /></div>
                                <div>
                                    <h5 className="text-xl font-black text-navy mb-2 uppercase">Deep Community</h5>
                                    <p className="text-blue-100/60 text-[15px] text-slate-500 font-medium">מנהלים קהילת משקיעים גדולה וקבוצת דיירים של 14,000+ איש לסינון אופטימלי.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {FOUNDERS.map((f, i) => (
                            <div key={i} className="bg-navy p-10 rounded-[60px] text-white text-center shadow-3xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img src={f.image} className="w-44 h-44 rounded-full mx-auto mb-10 border-4 border-gold/30 shadow-2xl object-cover relative group-hover:scale-105 transition-transform" style={{ objectPosition: f.objectPosition }} alt="" />
                                <h3 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase uppercase leading-none">{f.name}</h3>
                                <p className="text-gold font-bold text-sm uppercase tracking-[0.3em] mb-8">{f.role}</p>
                                <p className="text-[14px] text-blue-100/60 font-medium leading-relaxed italic mb-10 opacity-70 group-hover:opacity-100 transition-opacity">"{f.bio}"</p>
                                <a href={`tel:${f.phone}`} className="inline-flex items-center gap-2 bg-white/5 hover:bg-gold hover:text-navy px-8 py-4 rounded-full font-black text-xs transition-all shadow-xl uppercase border border-white/5">
                                    <Phone size={14} /> {f.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default AboutView;
