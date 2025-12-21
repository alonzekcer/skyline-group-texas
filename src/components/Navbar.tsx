import React from 'react';
import { Menu } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
    currentPage: PageId;
    setCurrentPage: (page: PageId) => void;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, setIsMenuOpen }) => {
    const navItems = [
        { id: 'home', label: 'דף הבית' },
        { id: 'market', label: 'למה דווקא DFW?' },
        { id: 'section8', label: 'Section 8' },
        { id: 'course', label: 'קורס (בקרוב...)' },
        { id: 'about', label: 'אודותינו' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm h-16 md:h-20 flex items-center">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button onClick={() => setIsMenuOpen(true)} className="p-2 text-navy hover:bg-slate-50 rounded-lg transition-colors">
                        <Menu size={28} />
                    </button>
                    <button
                        onClick={() => {
                            if (currentPage === 'home') {
                                document.getElementById('home-contact')?.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                setCurrentPage('contact' as PageId);
                            }
                        }}
                        className="bg-gold text-navy px-6 py-2.5 rounded-full font-black text-sm shadow-md hover:scale-105 transition-all"
                    >
                        השאירו פרטים
                    </button>
                </div>

                <div className="hidden lg:flex items-center gap-6">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setCurrentPage(item.id as PageId)}
                            className={`text-[15px] font-bold transition-all hover:text-gold ${currentPage === item.id ? 'text-gold' : 'text-navy'}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="cursor-pointer flex items-center gap-3" onClick={() => setCurrentPage('home' as PageId)}>
                    <img src="/skyline-group-texas/images/navbar_logo.png" alt="Skyline Group Texas" className="h-10 md:h-12 w-auto object-contain" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
