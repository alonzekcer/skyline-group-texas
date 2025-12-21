import React from 'react';
import { MessageCircle, Users, ArrowUpRight, Lock, CheckCircle2 } from 'lucide-react';

const ContactSection: React.FC = () => {
    return (
        <section id="home-contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto bg-navy rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                    {/* Left Side: Content */}
                    <div className="lg:w-5/12 bg-navy p-10 md:p-16 text-white relative flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent)] pointer-events-none"></div>
                        <div className="relative z-10">
                            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Let's Talk</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                                הגיע הזמן <br />
                                <span className="text-gold">להשקיע נכון.</span>
                            </h2>
                            <p className="text-base text-blue-100/70 mb-10 leading-relaxed max-w-sm">
                                השאירו פרטים ונחזור אליכם בהקדם עם ניתוח עסקאות מותאם אישית לפרופיל ההשקעה שלכם.
                            </p>

                            <div className="space-y-5">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold/10 transition-colors">
                                        <MessageCircle size={18} />
                                    </div>
                                    <span className="text-sm font-bold text-blue-50/90">קהילה של 1,000+ משקיעים</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold/10 transition-colors">
                                        <Users size={18} />
                                    </div>
                                    <span className="text-sm font-bold text-blue-50/90">רשת של 14,000+ דיירים</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:w-7/12 p-10 md:p-16 bg-white flex flex-col justify-center">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-navy/40 uppercase tracking-widest mr-1">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white focus:border-gold/50 font-bold text-navy transition-all placeholder:text-slate-300"
                                        placeholder="שם מלא"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-navy/40 uppercase tracking-widest mr-1">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white focus:border-gold/50 font-bold text-navy transition-all placeholder:text-slate-300"
                                        placeholder="מספר טלפון"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-navy/40 uppercase tracking-widest mr-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white focus:border-gold/50 font-bold text-navy transition-all placeholder:text-slate-300"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-navy/40 uppercase tracking-widest mr-1">Estimated Budget</label>
                                <div className="relative">
                                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white focus:border-gold/50 font-bold text-navy transition-all appearance-none cursor-pointer">
                                        <option>$80,000 - $120,000</option>
                                        <option>$120,000 - $200,000</option>
                                        <option>Above $200,000</option>
                                    </select>
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none text-navy/30">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-navy text-gold font-black py-5 rounded-2xl shadow-xl hover:shadow-gold/10 hover:-translate-y-0.5 active:translate-y-0 transition-all text-lg uppercase tracking-wider mt-4 flex items-center justify-center gap-3">
                                Get Started <ArrowUpRight size={20} />
                            </button>
                        </form>

                        <div className="mt-8 flex justify-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                            <span className="flex items-center gap-1.5"><Lock size={10} /> Secure</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 size={10} /> Fast Response</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
