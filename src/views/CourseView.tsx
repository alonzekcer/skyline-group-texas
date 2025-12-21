import React from 'react';
import { GraduationCap, ArrowLeft } from 'lucide-react';
import { PageId } from '../types';

interface CourseViewProps {
    onNavigate: (id: PageId) => void;
}

const CourseView: React.FC<CourseViewProps> = ({ onNavigate }) => (
    <section className="min-h-[85vh] bg-slate-900 flex items-center justify-center text-white p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,196,81,0.05),_transparent)] pointer-events-none" />
        <div className="max-w-5xl w-full text-center relative">
            <div className="w-32 h-32 bg-gold/10 text-gold rounded-[40px] flex items-center justify-center mx-auto mb-12 animate-pulse shadow-[0_0_50px_rgba(245,196,81,0.2)]">
                < GraduationCap size={64} />
            </div>
            <span className="text-gold font-black uppercase tracking-[0.5em] text-sm block mb-6 animate-pulse italic">COMING SOON 2025</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-tight tracking-tighter uppercase">THE USA <br /> <span className="text-gold">MASTERCLASS</span></h1>
            <p className="text-xl md:text-2xl text-blue-100/50 max-w-2xl mx-auto mb-16 font-light italic leading-relaxed">
                אנו הופכים את הידע שצברנו בשטח לקורס דיגיטלי מקיף. <br />
                איך לאתר, לנתח, לרכוש ולנהל נכסים בארה״ב באופן עצמאי ומניב.
            </p>
            <button onClick={() => onNavigate('contact')} className="bg-gold text-navy px-16 py-6 rounded-3xl font-black text-2xl shadow-2xl hover:scale-105 transition-all flex items-center gap-4 mx-auto">
                הצטרפו לרשימת ההמתנה <ArrowLeft className="rotate-180" size={28} />
            </button>
        </div>
    </section>
);

export default CourseView;
