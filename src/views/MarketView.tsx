import React from 'react';
import {
    Globe,
    Briefcase,
    Users,
    TrendingUp,
    Home,
    AlertTriangle,
    X,
    ShieldCheck,
    Check
} from 'lucide-react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as ReTooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';
import { DEFW_STATS } from '../data/data';
import AnimatedCounter from '../components/AnimatedCounter';
import { PageId } from '../types';

interface MarketViewProps {
    onNavigate: (id: PageId) => void;
}

const MarketView: React.FC<MarketViewProps> = ({ onNavigate }) => (
    <div className="flex flex-col">
        {/* HERO & GDP SECTION */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
                    <div className="lg:w-1/2">
                        <span className="text-gold font-black uppercase tracking-widest text-sm mb-4 block">MARKET ANALYTICS</span>
                        <h1 className="text-4xl md:text-7xl font-black text-navy mb-8 leading-[0.9]">DFW: מטרופולין <br /> <span className="text-gold">עם עוצמה של מדינה</span></h1>
                        <p className="text-xl text-slate-500 font-medium italic mb-10 leading-relaxed">
                            דאלאס-פורט וורת' (DFW) היא לא רק עיר, היא כוח כלכלי עולמי. המטרופולין היציב והחזק ביותר בארה"ב להשקעה.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <Globe className="text-gold mb-4" size={32} />
                                <h4 className="text-xl font-black text-navy mb-2">כלכלה גלובלית</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">ה-GDP של DFW הוא 744.5 מיליארד דולר, מה שהופך אותה לכלכלה ה-20 בגודלה בעולם.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <Briefcase className="text-gold mb-4" size={32} />
                                <h4 className="text-xl font-black text-navy mb-2">מרכז Fortune 500</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">נהירה של חברות ענק מכל ארה"ב בזכות מיסוי נמוך ואיכות חיים.</p>
                            </div>
                        </div>

                        {/* Integrated Small Map with Pulse */}
                        <div className="relative group max-w-xs md:max-w-sm mr-auto lg:mr-0">
                            <div className="absolute inset-0 bg-gold/5 rounded-full blur-[60px] opacity-20 transform group-hover:scale-110 transition-transform"></div>
                            <div className="relative z-10">
                                <img
                                    src="/skyline-group-texas/images/us_map.png"
                                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                                    alt="DFW Location Map"
                                />
                                <div className="absolute top-[63.5%] left-[49.5%] -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative flex h-4 w-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-gold shadow-[0_0_10px_rgba(245,196,81,0.8)]"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full min-h-[520px] bg-slate-900 rounded-[60px] p-10 md:p-12 shadow-3xl relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                        <h4 className="text-2xl font-black text-white mb-8 tracking-tighter">צמיחת מחירי הבתים (מאז 2000)</h4>
                        <div className="flex-1 h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={DEFW_STATS}>
                                    <defs>
                                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#f5c451" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#f5c451" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }} dy={10} />
                                    <YAxis hide />
                                    <ReTooltip
                                        contentStyle={{ borderRadius: '16px', border: 'none', background: '#0c1230', color: '#fff' }}
                                        itemStyle={{ color: '#f5c451' }}
                                        formatter={(value: number) => [`$${value.toLocaleString()}`, 'מחיר ממוצע']}
                                    />
                                    <Area type="monotone" dataKey="price" stroke="#f5c451" strokeWidth={4} fillOpacity={1} fill="url(#colorPrice)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                            <div className="text-center">
                                <p className="text-gold font-black text-2xl">+235%</p>
                                <p className="text-blue-100/60 text-[11px] uppercase font-bold leading-tight">עליית ערך ממוצעת ב-25 השנים האחרונות</p>
                            </div>
                            <div className="text-center">
                                <p className="text-gold font-black text-2xl">#1</p>
                                <p className="text-blue-100/60 text-[11px] uppercase font-bold leading-tight">המטרופולין הצומח ביותר בכל ארה״ב</p>
                            </div>
                            <div className="text-center">
                                <p className="text-gold font-black text-2xl">AAA</p>
                                <p className="text-blue-100/60 text-[11px] uppercase font-bold leading-tight">דירוג חוסן פיננסי הגבוה ביותר לעירייה</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NUMBERS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { icon: <Users />, label: "+9,000,000 תושבים", detail: "המטרו הרביעי בגודלו בארה\"ב עם הגירה חיובית של 150K איש בשנה." },
                        { icon: <TrendingUp />, label: "3.5% אבטלה בלבד", detail: "שוק תעסוקה חזק משמעותית מהממוצע הארצי, המבטיח יכולת תשלום דיירים." },
                        { icon: <Home />, label: "43% בשכירות", detail: "ביקוש קשיח למגורים לעומת 35% ממוצע ארצי. המחסור בבתים בשיא היסטורי." }
                    ].map((item, i) => (
                        <div key={i} className="p-10 bg-white border border-slate-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-14 h-14 bg-navy text-gold rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform">{item.icon}</div>
                            <h3 className="text-2xl font-black text-navy mb-3">{item.label}</h3>
                            <p className="text-slate-500 leading-relaxed text-[15px]">{item.detail}</p>
                        </div>
                    ))}
                </div>



                {/* TENANT PROFILE */}
                <div className="bg-navy rounded-[60px] p-12 md:p-20 text-white flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(245,196,81,0.03),_transparent)] pointer-events-none"></div>
                    <div className="lg:w-1/2">
                        <span className="text-gold font-black uppercase tracking-widest text-sm mb-6 block">TENANT PROFILE</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">מי השוכר הממוצע <br /> <span className="text-gold">בנכסים שלנו?</span></h2>
                        <p className="text-lg text-blue-100/60 mb-10 italic">אנחנו מתמקדים בשכונות "ירוקות" ומבוקשות ב-DFW, המושכות את האוכלוסייה החזקה ביותר.</p>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-center">
                                <div className="w-6 h-6 bg-gold text-navy rounded-full flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4} /></div>
                                <span className="font-bold text-lg">משפחות צעירות בגילאי 30-45</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="w-6 h-6 bg-gold text-navy rounded-full flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4} /></div>
                                <span className="font-bold text-lg">השכלה אקדמית ומקצועות חופשיים (הייטק, פיננסים)</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="w-6 h-6 bg-gold text-navy rounded-full flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4} /></div>
                                <span className="font-bold text-lg">יכולת החזר גבוהה ומוסר תשלומים מצוין</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="w-6 h-6 bg-gold text-navy rounded-full flex items-center justify-center shrink-0"><Check size={14} strokeWidth={4} /></div>
                                <span className="font-bold text-lg">שכר שנתי חציוני של $74,000 למשק בית</span>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="p-10 bg-white/5 rounded-[50px] border border-white/10 text-center">
                            <h4 className="text-2xl font-black text-gold mb-4 uppercase tracking-tighter">למה לחכות זה יקר?</h4>
                            <p className="text-lg text-blue-100 mb-8 leading-relaxed font-light italic">"משקיעים שהמתינו ב-2023 הפסידו עליית ערך של כ-$35,000 בממוצע לנכס. שנת 2026 צפויה להמשיך את המגמה."</p>
                            <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                <p className="text-[13px] font-black text-white/40 uppercase tracking-widest mb-1">מלאי נכסים זמין (Inventory)</p>
                                <p className="text-3xl font-black text-white">שפל היסטורי</p>
                                <p className="mt-4 text-[12px] text-gold/60 uppercase font-bold tracking-widest">יחס היצע וביקוש של 1:4</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* STRATEGY COMPARISON: SKYLINE VS MID-WEST */}
                <div className="py-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-navy mb-6">למה רק נכסים איכותיים?</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">ההבדל הדק בין "מספרים יפים באקסל" לבין מציאות של צמיחה ושקט נפשי.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Mid-West Illusion */}
                        <div className="p-12 bg-slate-50 rounded-[60px] border border-slate-200 opacity-60">
                            <div className="flex items-center gap-4 mb-8">
                                <AlertTriangle className="text-red-500" size={32} />
                                <h3 className="text-3xl font-black text-navy uppercase tracking-tighter">אשליית ה-Mid-West</h3>
                            </div>
                            <ul className="space-y-8">
                                <li className="flex gap-4">
                                    <X className="text-red-500 shrink-0" size={24} />
                                    <div>
                                        <p className="font-black text-navy text-lg leading-none mb-2 uppercase">נכסים ישנים (70-120 שנה)</p>
                                        <p className="text-sm text-slate-500">בלאי אינסופי והוצאות תחזוקה ש"אוכלות" את כל הרווח.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <X className="text-red-500 shrink-0" size={24} />
                                    <div>
                                        <p className="font-black text-navy text-lg leading-none mb-2 uppercase">סביבה מסוכנת (Red Zones)</p>
                                        <p className="text-sm text-slate-500">אזורי פשיעה, הגירה שלילית ואוכלוסייה ללא ביטחון תעסוקתי.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <X className="text-red-500 shrink-0" size={24} />
                                    <div>
                                        <p className="font-black text-navy text-lg leading-none mb-2 uppercase">ניהול סיוטי (Evictions)</p>
                                        <p className="text-sm text-slate-500">דיירים שלא משלמים, פינויים תכופים ונזקים קשים לנכס.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-12 p-6 bg-red-50 rounded-3xl border border-red-100 text-red-800 font-bold text-center">
                                תוצאה: אובדן קרן בטווח הארוך
                            </div>
                        </div>

                        {/* Skyline Standard */}
                        <div className="p-12 bg-navy rounded-[60px] shadow-3xl text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-gold/5 pointer-events-none"></div>
                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <ShieldCheck className="text-gold" size={32} />
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">הסטנדרט של Skyline</h3>
                            </div>
                            <ul className="space-y-8 relative z-10">
                                <li className="flex gap-4">
                                    <Check className="text-gold shrink-0" size={24} strokeWidth={4} />
                                    <div>
                                        <p className="font-black text-white text-lg leading-none mb-2 uppercase">בנייה חדישה (2000+)</p>
                                        <p className="text-sm text-blue-100/50">תשתיות מודרניות, מינימום בלאי ומקסימום יעילות אנרגטית.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Check className="text-gold shrink-0" size={24} strokeWidth={4} />
                                    <div>
                                        <p className="font-black text-white text-lg leading-none mb-2 uppercase">הון אנושי איכותי</p>
                                        <p className="text-sm text-blue-100/50">אזורי ביקוש עם הגירה חיובית של משפחות ומנהלים.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Check className="text-gold shrink-0" size={24} strokeWidth={4} />
                                    <div>
                                        <p className="font-black text-white text-lg leading-none mb-2 uppercase">צמיחת הון (הון עצמי)</p>
                                        <p className="text-sm text-blue-100/50">טופ 3 בארה"ב בעליות ערך. הנכס עובד בשבילך גם בלי שכירות.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-12 p-6 bg-gold rounded-3xl text-navy font-black text-center text-lg uppercase tracking-tighter">
                                נכס איכותי בדאלאס-פורט וורת' בשילוב סקשן 8 = תשואה דו-ספרתית
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center pb-24">
                    <button
                        onClick={() => onNavigate('contact' as PageId)}
                        className="bg-gold text-navy px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all uppercase tracking-tighter"
                    >
                        בואו ננתח את העסקה הבאה שלכם
                    </button>
                </div>
            </div>
        </section>
    </div>
);

export default MarketView;
