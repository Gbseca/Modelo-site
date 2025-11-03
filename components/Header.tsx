import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#inicio', text: 'Início' },
        { href: '#servicos', text: 'Serviços' },
        { href: '#portfolio', text: 'Portfólio' },
        { href: '#sobre', text: 'Sobre Mim' },
        { href: '#contato', text: 'Contato' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const NavLinksComponent = () => (
        <>
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 relative group text-lg"
                >
                    {link.text}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                </a>
            ))}
        </>
    );

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="text-3xl font-bold text-white tracking-wider">
                    VALERIA BRITO <span className="text-[#d4af37]">FOTOGRAFIA</span>
                </a>
                <nav className="hidden md:flex space-x-8 items-center">
                    <NavLinksComponent />
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
                        {mobileMenuOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden transition-max-height duration-500 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="flex flex-col items-center space-y-6 py-8 bg-[#1a1a1a]/95 backdrop-blur-sm">
                    <NavLinksComponent />
                </nav>
            </div>
        </header>
    );
};

export default Header;