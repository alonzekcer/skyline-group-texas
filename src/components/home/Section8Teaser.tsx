import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PageId } from '../../types';

interface Section8TeaserProps {
    onNavigate: (id: PageId) => void;
}

const Section8Teaser: React.FC<Section8TeaserProps> = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-navy text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="text-center">
                        <h2 className="text-4xl font-black mb-6">Section 8 - ביטחון ממשלתי</h2>
                        <p className="text-xl text-blue-100/60 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                            הפוך את ממשלת ארה"ב לדייר שלך. תזרים מזומנים מובטח ב-1 לכל חודש, דיירים לטווח ארוך ותשואה יציבה המוגנת מפני תנודות השוק.
                        </p>
                        <button
                            onClick={() => onNavigate('section8')}
                            className="inline-flex items-center gap-2 text-gold font-black text-lg hover:text-white transition-colors group"
                        >
                            איך זה עובד? <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section8Teaser;
