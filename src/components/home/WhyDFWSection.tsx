import React from 'react';
import { ArrowLeft, Globe } from 'lucide-react';
import { PageId } from '../../types';

interface WhyDFWSectionProps {
    onNavigate: (id: PageId) => void;
}

const WhyDFWSection: React.FC<WhyDFWSectionProps> = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 text-center md:text-right">
                        <h2 className="text-4xl font-black text-navy mb-6">למה דווקא DFW?</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
                            מטרופולין דאלאס-פורט וורת' הוא הכלכלה ה-20 בגודלה בעולם. עם הגירה חיובית מטאורית ושוק תעסוקה חזק, זהו היעד המושלם להשקעה יציבה.
                        </p>
                        <button
                            onClick={() => onNavigate('market')}
                            className="inline-flex items-center gap-2 text-navy font-black text-lg hover:text-gold transition-colors group"
                        >
                            גלו את הנתונים <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
                        </button>
                    </div>
                    <div className="w-full md:w-1/3 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center">
                        <Globe className="text-gold mb-4" size={48} />
                        <p className="text-3xl font-black text-navy">$744B</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Market Power</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyDFWSection;
