import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const testimonialsData = [
    {
        quote: "O trabalho da Valeria é simplesmente impecável! As fotos do nosso casamento ficaram mágicas, capturaram cada emoção. Profissionalismo e sensibilidade definem.",
        author: "Juliana & Marcos",
        event: "Casamento"
    },
    {
        quote: "Amei o meu ensaio de 15 anos! A Valeria me deixou super à vontade e as fotos ficaram mais lindas do que eu imaginava. Super recomendo!",
        author: "Beatriz S.",
        event: "Festa de 15 Anos"
    },
    {
        quote: "Contratamos para um evento corporativo e ficamos impressionados com a qualidade e a agilidade. As fotos transmitiram exatamente a energia que queríamos.",
        author: "Empresa InovaTech",
        event: "Evento Corporativo"
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, []);

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };
    
    useEffect(() => {
        const timer = setInterval(nextTestimonial, 7000);
        return () => clearInterval(timer);
    }, [nextTestimonial]);

    const { quote, author, event } = testimonialsData[currentIndex];

    return (
        <section id="depoimentos" className="py-20 bg-[#1a1a1a]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">O que os <span className="text-[#d4af37]">Clientes</span> Dizem</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">A satisfação de quem confia em nosso trabalho é nossa maior recompensa.</p>

                <div className="relative max-w-3xl mx-auto bg-[#222222] rounded-lg p-8 md:p-12 shadow-lg border border-gray-700/50">
                    <div className="overflow-hidden h-48 flex items-center">
                        <div key={currentIndex} className="animate-subtle-slide-in w-full">
                            <p className="text-xl md:text-2xl italic text-gray-200 mb-6">"{quote}"</p>
                            <p className="font-bold text-lg text-white">{author}</p>
                            <p className="text-[#d4af37]">{event}</p>
                        </div>
                    </div>
                    <button onClick={prevTestimonial} aria-label="Depoimento anterior" className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-[#d4af37] text-white hover:text-gray-900 rounded-full p-2 transition-all duration-300">
                        <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <button onClick={nextTestimonial} aria-label="Próximo depoimento" className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-[#d4af37] text-white hover:text-gray-900 rounded-full p-2 transition-all duration-300">
                        <ChevronRightIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;