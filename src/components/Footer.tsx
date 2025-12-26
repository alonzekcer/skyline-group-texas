import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
    setCurrentPage: (page: PageId) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
    const navItems = [
        { id: 'home', label: 'דף הבית' },
        { id: 'market', label: 'למה דווקא DFW?' },
        { id: 'section8', label: 'Section 8' },
        { id: 'course', label: 'קורס (בקרוב...)' },
        { id: 'about', label: 'אודותינו' }
    ];

    return (
        <footer className="bg-navy py-12 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="text-2xl font-black tracking-widest uppercase text-white">SKYLINE</div>
                        <div className="text-[12px] font-bold text-gold tracking-[0.5em] border-t border-white/10 pt-1 w-full text-center md:text-right uppercase">GROUP</div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold text-blue-100/60">
                        {navItems.map(item => (
                            <button key={item.id} onClick={() => setCurrentPage(item.id as PageId)} className="hover:text-white transition-colors">{item.label}</button>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/boazpinhas/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                            <Instagram />
                        </a>
                        <a href="https://chat.whatsapp.com/HfJZ2oe98xSIDg7FTSzhUB?mode=ems_copy_t" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                            <MessageCircle />
                        </a>
                    </div>
                </div>
                <div className="text-center text-[12px] text-white/40 italic max-w-4xl mx-auto border-t border-white/5 pt-8">
                    <p className="mb-2">Skyline Group ©️ כל הזכויות שמורות.</p>
                    <p>הדוגמאות והנתונים בדף זה מוצגים למטרות המחשה בלבד ואינם מהווים הבטחה לתשואה, המלצה לביצוע עסקה או ייעוץ השקעות, פיננסי, משפטי או מס. השקעות נדל"ן טומנות בחובן סיכונים ומומלץ להיוועץ באנשי מקצוע מוסמכים לפני כל השקעה.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
