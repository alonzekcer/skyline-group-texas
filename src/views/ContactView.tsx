import React from 'react';
import { MessageCircle, Facebook, ArrowUpRight, Lock, CheckCircle2, ArrowLeft } from 'lucide-react';
import { PageId } from '../types';

interface ContactViewProps {
    onNavigate: (id: PageId) => void;
}

const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        phone: '',
        email: '',
        budget: '100,000-150,000',
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
                    source: 'Page Contact View',
                    submittedAt: new Date().toISOString()
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ fullName: '', phone: '', email: '', budget: '100,000-150,000', marketingConsent: false });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <button
                    onClick={() => onNavigate('home')}
                    className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-bold mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>חזרה לדף הבית</span>
                </button>
                <div className="max-w-6xl mx-auto bg-navy rounded-3xl md:rounded-[60px] overflow-hidden flex flex-col lg:flex-row shadow-3xl">
                    <div className="lg:w-1/2 p-8 md:p-24 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_rgba(245,196,81,0.05),_transparent)] pointer-events-none" />
                        <h2 className="text-3xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">LET'S <br /> <span className="text-gold text-2xl md:text-6xl tracking-tighter">TALK.</span></h2>
                        <p className="text-base md:text-xl text-blue-100/60 mb-16 font-light italic">הזדמנויות ב-DFW לא נשארות פתוחות לנצח. השוק רותח והמחירים עולים - הצטרפו למערכת משומנת עוד היום.</p>
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

                    <div className="lg:w-1/2 bg-white p-8 md:p-24 flex flex-col justify-center">
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
                            <>
                                <h3 className="text-2xl md:text-4xl font-black text-navy mb-6 tracking-tighter uppercase leading-none">Investment Intro</h3>
                                <p className="text-slate-500 mb-12 font-medium italic">השאירו פרטים ונחזור אליכם עם ניתוח עסקאות המותאם לתקציב שלכם.</p>
                                <form className="space-y-8" onSubmit={handleSubmit}>
                                    <div className="space-y-2 text-right">
                                        <label className="text-sm font-black text-navy/30 uppercase tracking-[0.2em] mr-2">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                                            className="w-full px-6 py-4 md:px-8 md:py-6 rounded-3xl bg-slate-50 border border-slate-200 outline-none focus:ring-4 focus:ring-gold/20 font-black text-navy transition-all text-right"
                                            placeholder="ישראל ישראלי"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2 text-right">
                                            <label className="text-sm font-black text-navy/30 uppercase tracking-[0.2em] mr-2">Phone</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-6 py-4 md:px-8 md:py-6 rounded-3xl bg-slate-50 border border-slate-200 outline-none focus:ring-4 focus:ring-gold/20 font-black text-navy transition-all text-right"
                                                placeholder="050-0000000"
                                            />
                                        </div>
                                        <div className="space-y-2 text-right">
                                            <label className="text-sm font-black text-navy/30 uppercase tracking-[0.2em] mr-2">Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-6 py-4 md:px-8 md:py-6 rounded-3xl bg-slate-50 border border-slate-200 outline-none focus:ring-4 focus:ring-gold/20 font-black text-navy transition-all text-right"
                                                placeholder="name@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-right">
                                        <label className="text-sm font-black text-navy/30 uppercase tracking-[0.2em] mr-2">Estimated Budget</label>
                                        <select
                                            value={formData.budget}
                                            onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                            className="w-full px-6 py-4 md:px-8 md:py-6 rounded-3xl bg-slate-50 border border-slate-200 outline-none focus:ring-4 focus:ring-gold/20 font-black text-navy transition-all appearance-none cursor-pointer text-right"
                                        >
                                            <option value="50,000-100,000">$50,000 - $100,000</option>
                                            <option value="100,000-150,000">$100,000 - $150,000</option>
                                            <option value="150,000+">$150,000+</option>
                                        </select>
                                    </div>

                                    <div className="flex items-start gap-3 py-2 cursor-pointer group" onClick={() => setFormData({ ...formData, marketingConsent: !formData.marketingConsent })}>
                                        <div className={`mt-1 h-5 w-5 rounded border-2 transition-all flex items-center justify-center shrink-0 ${formData.marketingConsent ? 'bg-gold border-gold' : 'border-slate-200 group-hover:border-gold'}`}>
                                            {formData.marketingConsent && <CheckCircle2 size={12} className="text-navy" strokeWidth={4} />}
                                        </div>
                                        <p className="text-[13px] font-bold text-slate-500 leading-tight text-right select-none">
                                            אני מאשר קבלת תוכן שיווקי, עדכונים על עסקאות חדשות ודיוור מ-Skyline Group.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-navy text-gold font-black py-5 md:py-8 rounded-3xl shadow-2xl hover:bg-slate-800 transition-all text-xl md:text-2xl uppercase tracking-tighter mt-8 flex items-center justify-center gap-4 disabled:opacity-50"
                                    >
                                        {status === 'loading' ? 'שולח...' : status === 'error' ? 'שגיאה - נסה שוב' : 'Get Insights'} <ArrowUpRight size={28} />
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactView;
