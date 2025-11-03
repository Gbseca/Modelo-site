import React, { useState } from 'react';
import { XIcon } from './icons';

const portfolioData = {
    casamentos: [
        { id: 1, src: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Alianças de casamento' },
        { id: 2, src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Noivos se beijando' },
        { id: 3, src: 'https://images.pexels.com/photos/1408372/pexels-photo-1408372.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Detalhes da noiva' },
        { id: 4, src: 'https://images.pexels.com/photos/1779471/pexels-photo-1779471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Casal na praia' },
        { id: 5, src: 'https://images.pexels.com/photos/1355479/pexels-photo-1355479.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Decoração da recepção' },
        { id: 6, src: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Festa de casamento' },
    ],
    '15 anos': [
        { id: 7, src: 'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Debutante com vestido rosa' },
        { id: 8, src: 'https://images.pexels.com/photos/3779836/pexels-photo-3779836.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Pista de dança' },
        { id: 9, src: 'https://images.pexels.com/photos/5638267/pexels-photo-5638267.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Decoração da festa' },
        { id: 10, src: 'https://images.pexels.com/photos/3297353/pexels-photo-3297353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Amigas na festa' },
        { id: 11, src: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Bolo de 15 anos' },
        { id: 12, src: 'https://images.pexels.com/photos/1115320/pexels-photo-1115320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Debutante sorrindo' },
    ],
    ensaios: [
        { id: 13, src: 'https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Ensaio urbano feminino' },
        { id: 14, src: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Ensaio de casal' },
        { id: 15, src: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Retrato na natureza' },
        { id: 16, src: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Casal ao pôr do sol' },
        { id: 17, src: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Ensaio criativo' },
        { id: 18, src: 'https://images.pexels.com/photos/3220463/pexels-photo-3220463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', alt: 'Retrato masculino urbano' },
    ],
};

type Category = keyof typeof portfolioData;

const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Category>('casamentos');
    const [modalImage, setModalImage] = useState<string | null>(null);

    const tabs: { key: Category; name: string }[] = [
        { key: 'casamentos', name: 'Casamentos' },
        { key: '15 anos', name: '15 Anos' },
        { key: 'ensaios', name: 'Ensaios' },
    ];

    return (
        <section id="portfolio" className="py-20 bg-[#1a1a1a]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Meu <span className="text-[#d4af37]">Portfólio</span></h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">Uma seleção de trabalhos que capturam momentos e contam histórias.</p>

                <div className="flex justify-center space-x-4 md:space-x-8 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-4 py-2 md:px-6 md:py-3 text-lg font-semibold rounded-full transition-all duration-300 ${activeTab === tab.key ? 'bg-[#d4af37] text-gray-900' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData[activeTab].map((image) => (
                        <div key={image.id} className="relative overflow-hidden rounded-lg group cursor-pointer" onClick={() => setModalImage(image.src)}>
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                                <p className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-center">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fade-in" onClick={() => setModalImage(null)}>
                    <div className="relative max-w-4xl max-h-[90vh] w-full p-4">
                        <img src={modalImage} alt="Visualização ampliada" className="w-full h-full object-contain rounded-lg" />
                        <button onClick={() => setModalImage(null)} className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors">
                            <XIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;