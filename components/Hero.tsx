import React from 'react';

const Hero: React.FC = () => {
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)` }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 p-6 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
                    Eternizando Seus <span className="text-[#d4af37]">Melhores</span> Momentos
                </h1>
                <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 font-light text-gray-200">
                    Fotografia e videografia profissional no Rio de Janeiro, capturando a essência de cada emoção com arte e sensibilidade.
                </p>
                <a 
                  href="#contato"
                  onClick={scrollToContact}
                  className="bg-[#d4af37] text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20"
                >
                    Solicite um Orçamento
                </a>
            </div>
        </section>
    );
};

export default Hero;