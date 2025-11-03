import React from 'react';

const About: React.FC = () => {
    return (
        <section id="sobre" className="py-20 bg-[#222222]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-[#d4af37]">
                            <img src="https://images.pexels.com/photos/4156277/pexels-photo-4156277.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1" alt="Retrato da Fotógrafa Valeria Brito" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre <span className="text-[#d4af37]">Mim</span></h2>
                        <p className="text-lg text-gray-300 mb-6">
                            Olá! Sou Valeria Brito, uma fotógrafa apaixonada pelo Rio de Janeiro e pelas histórias que essa cidade maravilhosa inspira. Minha missão é capturar a verdadeira emoção e a beleza única de cada momento, transformando-os em arte que será apreciada por gerações.
                        </p>
                        <p className="text-lg text-gray-400 mb-6">
                            Com anos de experiência em casamentos, ensaios e eventos, desenvolvi um estilo que combina a espontaneidade do fotojornalismo com a elegância da fotografia artística. Acredito que as melhores fotos nascem de conexões verdadeiras, e por isso busco criar um ambiente leve e descontraído para que vocês se sintam à vontade em frente à câmera.
                        </p>
                        <p className="text-lg text-gray-400">
                            Vamos juntos contar a sua história?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;