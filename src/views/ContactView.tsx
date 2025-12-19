import React from 'react';
import { MessageCircle, Facebook, ArrowUpRight, Lock, CheckCircle2 } from 'lucide-react';

const ContactView: React.FC = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto bg-navy rounded-[60px] overflow-hidden flex flex-col lg:flex-row shadow-3xl">
                <div className="lg:w-1/2 p-12 md:p-24 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_rgba(245,196,81,0.05),_transparent)] pointer-events-none" />
                    <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">LET'S <br /> <span className="text-gold text-4xl md:text-6xl tracking-tighter">TALK.</span></h2>
                    <p className="text-xl text-blue-100/60 mb-16 font-light italic">הזדמנויות ב-DFW לא נשארות פתוחות לנצח. השוק רותח והמחירים עולים - הצטרפו למערכת משומנת עוד היום.</p>
                    <div className="space-y-12">
                        <div className="flex items-center gap-8 group cursor-pointer">
                            <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-gold border border-white/5 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-xl"><MessageCircle size={32} /></div>
                            <div>
                                <h5 className="font-black text-2xl text-white leading-none mb-2 uppercase tracking-tighter">WhatsApp Community</h5>
                                <p className="text-blue-100/40 text-[13px] font-bold uppercase tracking-widest">מעל 1,000 משקיעים פעילים</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 group cursor-pointer">
                            <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-xl"><Facebook size={32} /></div>
                            <div>
                                <h5 className="font-black text-2xl text-white leading-none mb-2 uppercase tracking-tighter">Tenant Network</h5>
                                <p className="text-blue-100/40 text-[13px] font-bold uppercase tracking-widest">קבוצה של 14,000+ דיירים פוטנציאליים</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 bg-white p-12 md:p-24">
                    <h3 className="text-4xl font-black text-navy mb-6 tracking-tighter uppercase leading-none">Investment Intro</h3>
                    <p className="text-slate-500 mb-12 font-medium italic">השאירו פרטים ונחזור אליכם עם ניתוח עסקאות המותאם לתקציב שלכם.</p>
                    <form className="space-y-8" onSubmit={e => e.preventDefault()}>
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
                </div>
            </div>
        </div>
    </section>
);

export default ContactView;
