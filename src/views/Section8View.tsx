import React from 'react';
import {
    ArrowLeft,
    Lock,
    Clock,
    TrendingUp
} from 'lucide-react';
import { PageId } from '../types';

interface Section8ViewProps {
    onNavigate: (id: PageId) => void;
}

const Section8View: React.FC<Section8ViewProps> = ({ onNavigate }) => (
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
                        <span className="bg-gold text-navy px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest mb-6 inline-block">GOVERNMENT BACKED SECURITY</span>
                        <h1 className="text-4xl md:text-6xl font-black text-navy mb-8 leading-[0.9]">ממשלת ארצות הברית - <br /> <span className="text-gold">הדייר הבטוח והטוב בעולם.</span></h1>
                        <p className="text-3xl md:text-4xl text-navy font-black leading-relaxed italic mb-10 border-r-8 border-gold pr-6 py-4 bg-slate-50 rounded-l-3xl">
                            הפוך את ממשלת ארה"ב לשותפה העסקית שלך. מודל המשלב תשואה גבוהה עם ביטחון ממשלתי מלא.
                        </p>
                        <div className="space-y-6 mb-12">
                            <button
                                onClick={() => onNavigate('contact' as PageId)}
                                className="bg-navy text-gold px-10 py-4 rounded-xl font-black text-lg shadow-xl hover:scale-105 transition-all"
                            >
                                דברו איתנו על Section 8
                            </button>
                        </div>
                        <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                            המודל של Skyline Group משלב השכרה באזורי ביקוש (Rating A/B) עם וואוצ'ר ממשלתי המבטיח תשואה יציבה וגבוהה גם כשהשוק משתנה.
                        </p>
                        <div className="space-y-8">
                            <div className="flex gap-6 items-start p-8 bg-slate-50 rounded-[40px] border border-slate-100">
                                <div className="w-12 h-12 bg-navy text-gold rounded-2xl flex items-center justify-center shrink-0 shadow-xl"><Lock size={24} /></div>
                                <div>
                                    <h5 className="text-xl font-black text-navy uppercase mb-2 leading-none">תשלום מובטח ומוגן</h5>
                                    <p className="text-[15px] text-slate-500 font-medium">70%-95% משכר הדירה (ממוצע 85%) משולם ישירות ע"י הממשל הפדרלי בהעברה בנקאית ב-1 לכל חודש. אין עיכובים, אין "צ'קים חוזרים".</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start p-8 bg-slate-50 rounded-[40px] border border-slate-100">
                                <div className="w-12 h-12 bg-navy text-gold rounded-2xl flex items-center justify-center shrink-0 shadow-xl"><Clock size={24} /></div>
                                <div>
                                    <h5 className="text-xl font-black text-navy uppercase mb-2 leading-none">יציבות שאין שני לה</h5>
                                    <p className="text-[15px] text-slate-500 font-medium">דיירי Section 8 נשארים בממוצע כ-7 שנים בנכס. יציבות זו חוסכת עלויות אחזקת בית ריק, תיווך ורענון הנכס לצורך תחלופת דיירים.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start p-8 bg-slate-50 rounded-[40px] border border-slate-100">
                                <div className="w-12 h-12 bg-navy text-gold rounded-2xl flex items-center justify-center shrink-0 shadow-xl"><TrendingUp size={24} /></div>
                                <div>
                                    <h5 className="text-xl font-black text-navy uppercase mb-2 leading-none">תשואה עודפת (Excess Yield)</h5>
                                    <p className="text-[15px] text-slate-500 font-medium">באיזורים שאנו עובדים, שכר הדירה המאושר ע״י התכנית גבוה משמעותית ממחירי השוק החופשי, מה שמגדיל את התזרים הנקי (Cash Flow).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-900 p-12 md:p-16 rounded-[60px] text-white shadow-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                        <div className="text-center mb-12">
                            <span className="text-gold font-black uppercase tracking-[0.3em] text-[12px] mb-4 block">SAFETY STRUCTURE</span>
                            <h4 className="text-3xl font-black text-white uppercase tracking-tighter">ביטחון ממשלתי מלא</h4>
                        </div>

                        <div className="space-y-16 mb-16">
                            <div className="relative">
                                <div className="flex justify-between mb-4 items-end">
                                    <div className="flex flex-col">
                                        <span className="font-black text-gold text-lg leading-none mb-1">ממשלת ארה"ב</span>
                                        <span className="text-[12px] font-bold text-blue-100/40 uppercase tracking-widest">מובטח ב-1 לחודש</span>
                                    </div>
                                    <span className="text-5xl font-black text-gold">~85%</span>
                                </div>
                                <div className="h-6 bg-white/5 rounded-full overflow-hidden p-1 border border-white/10">
                                    <div className="h-full bg-gold rounded-full w-[85%] shadow-[0_0_30px_rgba(245,196,81,0.4)]" />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="flex justify-between mb-4 items-end">
                                    <span className="font-black text-blue-100/40 text-[13px] uppercase tracking-widest">השתתפות דייר</span>
                                    <span className="text-5xl font-black text-white/30">~15%</span>
                                </div>
                                <div className="h-6 bg-white/5 rounded-full overflow-hidden p-1 border border-white/10">
                                    <div className="h-full bg-white/20 rounded-full w-[15%]" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 text-center">
                                <p className="text-[13px] font-black text-white/40 uppercase tracking-widest mb-1">סטטוס אכלוס</p>
                                <p className="text-xl font-black text-white uppercase">100% הצלחה</p>
                                <p className="text-[12px] text-gold font-bold uppercase mt-1 tracking-tighter">בשנה האחרונה</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 text-center">
                                <p className="text-[13px] font-black text-white/40 uppercase tracking-widest mb-1">זמן אכלוס</p>
                                <p className="text-xl font-black text-white uppercase">30 יום</p>
                                <p className="text-[12px] text-gold font-bold uppercase mt-1 tracking-tighter">ממוצע בשטח</p>
                            </div>
                        </div>

                        <div className="mt-12 text-center text-blue-100/40 text-[13px] font-bold leading-relaxed uppercase tracking-widest">
                            *תקציב התכנית בשנת 2026- כ-32 מיליארד דולר
                        </div>
                    </div>
                </div>

                {/* SECTION 8 DEEP DIVE */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "סינון קפדני", detail: "תהליך אישור הדייר כולל בדיקת רקע פדרלית, היסטוריית שכירות ובדיקת נכס שנתית של העירייה." },
                        { title: "אזורי A/B בלבד", detail: "אנו משקיעים רק באזורים איכותיים עם בתי ספר טובים, ולא ב-Red Zones, כדי להבטיח את איכות האוכלוסייה." },
                        { title: "אפקט הקהילה", detail: "מנהלים רשת של מעל 14,000 דיירים פוטנציאליים, מה שמאפשר לנו לבחור את הדייר הטוב ביותר." },
                        { title: "ניהול שקוף", detail: "מערכות טכנולוגיות המאפשרות למשקיע מעקב מלא אחר גביית הכספים מהממשלה והדייר." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 transition-all hover:bg-navy hover:text-white group">
                            <h4 className="text-xl font-black text-navy group-hover:text-gold mb-4 uppercase tracking-tighter transition-colors">{item.title}</h4>
                            <p className="text-[15px] text-slate-500 group-hover:text-blue-100/60 leading-relaxed font-medium transition-colors">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default Section8View;
