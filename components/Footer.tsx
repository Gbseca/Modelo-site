import React from 'react';
import { InstagramIcon, MailIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1a1a1a] border-t border-gray-800 py-8">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">
                        <InstagramIcon className="h-7 w-7" />
                    </a>
                    <a href="mailto:contato@fotografa.com.br" className="hover:text-[#d4af37] transition-colors">
                        <MailIcon className="h-7 w-7" />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} VALERIA BRITO FOTOGRAFIA. Todos os direitos reservados.</p>
                <p className="text-sm mt-1">Rio de Janeiro, RJ - Brasil</p>
            </div>
        </footer>
    );
};

export default Footer;