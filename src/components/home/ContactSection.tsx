import React from 'react';
import { MessageCircle, Users, ArrowUpRight, Lock, CheckCircle2 } from 'lucide-react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        phone: '',
        email: '',
        budget: '$100,000 - $150,000',
        marketingConsent: false
    });
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://hook.eu2.make.com/gjyft597ywkjdxarqh0xdijdosxludfb', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    source: 'Home Contact Section',
                    submittedAt: new Date().toISOString()
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ fullName: '', phone: '', email: '', budget: '$100,000 - $150,000', marketingConsent: false });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="home-contact" className="py-8 md:py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto bg-navy rounded-2xl md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                    {/* Left Side: Content */}
                    <div className="lg:w-5/12 bg-navy p-5 md:p-16 text-white relative flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent)] pointer-events-none"></div>
                        <div className="relative z-10 text-right">
                            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2 md:mb-4 block leading-none">Let's Talk</span>
                            <h2 className="text-2xl md:text-5xl font-black mb-3 md:mb-6 leading-tight tracking-tight">
                                הגיע הזמן <br />
                                <span className="text-gold">להשקיע נכון.</span>
                            </h2>
                            <p className="text-[11px] md:text-base text-blue-100/70 mb-3 md:mb-10 leading-snug md:leading-relaxed max-w-sm">
                                <span className="md:hidden">נחזור אליכם בהקדם עם ניתוח השקעות מותאם אישית.</span>
                                <span className="hidden md:inline">השאירו פרטים ונחזור אליכם בהקדם עם ניתוח עסקאות מותאם אישית לפרופיל ההשקעה שלכם.</span>
                            </p>

                            <div className="hidden md:flex flex-col space-y-5">
                                <div className="flex items-center justify-end gap-4 group">
                                    <span className="text-[13px] md:text-sm font-bold text-blue-50/90 text-right">קהילה של 1,000+ משקיעים</span>
                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold/10 transition-colors">
                                        <MessageCircle size={18} />
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-4 group">
                                    <span className="text-[13px] md:text-sm font-bold text-blue-50/90 text-right">רשת של 14,000+ דיירים</span>
                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold/10 transition-colors">
                                        <Users size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:w-7/12 p-5 md:p-16 bg-white flex flex-col justify-center">
                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-3xl font-black text-navy mb-4">תודה רבה!</h3>
                                <p className="text-slate-500 font-bold">הפרטים התקבלו בהצלחה, נחזור אליך בהקדם.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 text-gold font-black uppercase tracking-widest text-sm hover:underline"
                                >
                                    שלח טופס נוסף
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-2 md:space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
                                    <div className="space-y-1.5 text-right">
                                        <label className="hidden md:block text-[10px] font-black text-navy/40 uppercase tracking-widest mr-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                                            className="w-full px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white focus:border-gold/50 font-bold text-navy transition-all placeholder:text-slate-300 text-right text-sm md:text-base"
                                            placeholder="שם מלא"
                                        />
                                    </div>
                                    <div className="space-y-1.5 text-right">
                                        <label className="hidden md:block text-[10px] font-black text-navy/40 uppercase tracking-widest mr-1">Phone</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white focus:border-gold/50 font-bold text-navy transition-all placeholder:text-slate-300 text-right text-sm md:text-base"
                                            placeholder="מספר טלפון"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5 text-right">
                                    <label className="hidden md:block text-[10px] font-black text-navy/40 uppercase tracking-widest mr-1">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white focus:border-gold/50 font-bold text-navy transition-all placeholder:text-slate-300 text-right text-sm md:text-base"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className="space-y-1.5 text-right">
                                    <label className="hidden md:block text-[10px] font-black text-navy/40 uppercase tracking-widest mr-1">Estimated Budget</label>
                                    <div className="relative">
                                        <select
                                            value={formData.budget}
                                            onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                            className="w-full px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-2 focus:ring-gold/30 focus:bg-white focus:border-gold/50 font-bold text-navy transition-all appearance-none cursor-pointer text-right text-sm md:text-base"
                                        >
                                            <option value="50,000-100,000">$50,000 - $100,000</option>
                                            <option value="100,000-150,000">$100,000 - $150,000</option>
                                            <option value="150,000+">$150,000+</option>
                                        </select>
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-navy/30">
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 md:gap-3 py-1 md:py-2 cursor-pointer group" onClick={() => setFormData({ ...formData, marketingConsent: !formData.marketingConsent })}>
                                    <div className={`mt-0.5 h-4 w-4 md:h-5 md:w-5 rounded border-2 transition-all flex items-center justify-center shrink-0 ${formData.marketingConsent ? 'bg-gold border-gold' : 'border-slate-200 group-hover:border-gold'}`}>
                                        {formData.marketingConsent && <CheckCircle2 size={10} className="md:w-3 md:h-3 text-navy" strokeWidth={4} />}
                                    </div>
                                    <p className="text-[10px] md:text-[13px] font-bold text-slate-500 leading-tight text-right select-none">
                                        <span className="md:hidden">אישור לקבלת עדכונים שיווקיים</span>
                                        <span className="hidden md:inline">אני מאשר קבלת תוכן שיווקי, עדכונים על עסקאות חדשות ודיוור מ-Skyline Group.</span>
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-navy text-gold font-black py-3 md:py-5 rounded-xl md:rounded-2xl shadow-xl hover:shadow-gold/10 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm md:text-lg uppercase tracking-wider mt-1 md:mt-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'שולח...' : status === 'error' ? 'שגיאה - נסה שוב' : 'Get Started'} <ArrowUpRight size={16} className="md:w-5 md:h-5" />
                                </button>
                            </form>
                        )}

                        <div className="mt-4 md:mt-8 flex justify-center gap-6 text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                            <span className="flex items-center gap-1.5"><Lock size={8} /> Secure</span>
                            <span className="flex items-center gap-1.5"><CheckCircle2 size={8} /> Fast Response</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
