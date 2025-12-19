import React from 'react';
import { MessageCircle, Users, ArrowUpRight, Lock, CheckCircle2 } from 'lucide-react';

const ContactSection: React.FC = () => {
    return (
        <section id="home-contact" className="py-32 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto bg-navy rounded-[4rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
                    <div className="lg:w-2/5 bg-navy p-12 md:p-20 text-white relative flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-gold/5 pointer-events-none"></div>
                        <div className="relative z-10">
                            <span className="text-gold font-black uppercase tracking-widest text-sm mb-6 block">CONTACT US</span>
                            <h2 className="text-5xl font-black mb-8 leading-none tracking-tighter">הגיע הזמן <br /> <span className="text-gold">לפעול.</span></h2>
                            <p className="text-lg text-blue-100/60 mb-12 font-medium italic leading-relaxed">
                                השאירו פרטים ונחזור אליכם עם ניתוח עסקאות המותאם אישית לתקציב ולפרופיל ההשקעה שלכם.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-blue-100/80">
                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold border border-white/10"><MessageCircle size={20} /></div>
                                    <span className="font-bold">קהילה של 1,000+ משקיעים</span>
                                </div>
                                <div className="flex items-center gap-4 text-blue-100/80">
                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold border border-white/10"><Users size={20} /></div>
                                    <span className="font-bold">רשת של 14,000+ דיירים</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 p-12 md:p-20 flex flex-col justify-center">
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-sm font-black text-navy/30 uppercase tracking-[0.2em] mr-2">Full Name</label>
                                <input type="text" className="w-full px-8 py-6 rounded-3xl bg-slate-50 border border-slate-200 outline-none focus:ring-4 focus:ring-gold/20 font-black text-navy transition-all" placeholder="ישראל ישראלי" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-navy/30 uppercase tracking-[0.2em] mr-2">Phone</label>
                                    <input type="tel" className="w-full px-8 py-6 rounded-3xl bg-slate-50 border border-slate-200 outline-none focus:ring-4 focus:ring-gold/20 font-black text-navy transition-all" placeholder="050-0000000" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-navy/30 uppercase tracking-[0.2em] mr-2">Email</label>
                                    <input type="email" className="w-full px-8 py-6 rounded-3xl bg-slate-50 border border-slate-200 outline-none focus:ring-4 focus:ring-gold/20 font-black text-navy transition-all" placeholder="name@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black text-navy/30 uppercase tracking-[0.2em] mr-2">Estimated Budget</label>
                                <select className="w-full px-8 py-6 rounded-3xl bg-slate-50 border border-slate-200 outline-none focus:ring-4 focus:ring-gold/20 font-black text-navy transition-all appearance-none cursor-pointer">
                                    <option>$80,000 - $120,000</option>
                                    <option>$120,000 - $200,000</option>
                                    <option>Above $200,000</option>
                                </select>
                            </div>
                            <button className="w-full bg-navy text-gold font-black py-8 rounded-3xl shadow-2xl hover:bg-slate-800 transition-all text-2xl uppercase tracking-tighter mt-8 flex items-center justify-center gap-4">
                                Get Insights <ArrowUpRight size={28} />
                            </button>
                        </form>
                        <div className="mt-12 flex justify-center gap-8 text-[12px] font-black text-slate-300 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Lock size={12} /> Privacy Guaranteed</span>
                            <span className="flex items-center gap-2"><CheckCircle2 size={12} /> Response in 24h</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
