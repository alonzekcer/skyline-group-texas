import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="bg-navy border border-white/10 p-6 rounded-[2rem] shadow-3xl backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,196,81,0.05),transparent)] pointer-events-none" />

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 left-4 text-white/40 hover:text-white transition-colors"
                >
                    <X size={18} />
                </button>

                <div className="relative z-10 text-right">
                    <h4 className="text-gold font-black uppercase tracking-widest text-xs mb-3">Cookie Policy</h4>
                    <p className="text-blue-50/80 text-sm leading-relaxed mb-6 font-medium">
                        אנחנו משתמשים בקובצי עוגיות כדי להעניק לכם גלישה טובה יותר, לאסוף נתונים אנליטיים ולהציג תוכן מותאם אישית – משתמשים בקובצי Cookies. בחר\י אם להסכים או קרא\י מידע נוסף במדיניות הפרטיות שלנו.
                    </p>

                    <div className="flex gap-4 items-center justify-end">
                        <button
                            onClick={handleAccept}
                            className="bg-gold text-navy px-8 py-2.5 rounded-full font-black text-sm hover:scale-105 transition-all shadow-xl shadow-gold/10"
                        >
                            אני מסכימ/ה
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
