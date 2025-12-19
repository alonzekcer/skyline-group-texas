import React from 'react';
import { X } from 'lucide-react';
import { PageId } from '../types';

interface MenuModalProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    currentPage: PageId;
    setCurrentPage: (page: PageId) => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isMenuOpen, setIsMenuOpen, currentPage, setCurrentPage }) => {
    const navItems = [
        { id: 'home', label: 'דף הבית' },
        { id: 'market', label: 'למה דווקא DFW?' },
        { id: 'section8', label: 'Section 8' },
        { id: 'course', label: 'קורס (בקרוב...)' },
        { id: 'about', label: 'אודותינו' }
    ];

    return (
        <div className={`fixed inset-0 bg-navy z-[150] transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 flex justify-between items-center border-b border-white/5">
                <div className="text-xl font-black text-white">SKYLINE</div>
                <button onClick={() => setIsMenuOpen(false)} className="text-white p-2"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 p-12 text-center">
                {navItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => { setCurrentPage(item.id as PageId); setIsMenuOpen(false); }}
                        className={`text-2xl font-black ${currentPage === item.id ? 'text-gold' : 'text-white'}`}
                    >
                        {item.label}
                    </button>
                ))}
                <button
                    onClick={() => {
                        setIsMenuOpen(false);
                        if (currentPage === 'home') {
                            document.getElementById('home-contact')?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            setCurrentPage('contact' as PageId);
                        }
                    }}
                    className="mt-8 bg-gold text-navy px-12 py-4 rounded-full font-black text-xl"
                >
                    צור קשר
                </button>
            </div>
        </div>
    );
};

export default MenuModal;
