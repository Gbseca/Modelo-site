
import React from 'react';
import { CameraIcon, FilmIcon, UsersIcon, GiftIcon, SparklesIcon, HeartIcon } from './icons';

const servicesData = [
    {
        icon: <HeartIcon className="h-12 w-12 text-[#d4af37] mb-4" />,
        title: "Casamentos",
        description: "Cobertura completa, do making of à festa, registrando cada detalhe do seu grande dia com um olhar único e emocionante."
    },
    {
        icon: <GiftIcon className="h-12 w-12 text-[#d4af37] mb-4" />,
        title: "Festas de 15 Anos",
        description: "Transformamos a celebração dos seus 15 anos em memórias inesquecíveis, com fotos e vídeos cheios de vida e alegria."
    },
    {
        icon: <CameraIcon className="h-12 w-12 text-[#d4af37] mb-4" />,
        title: "Ensaios Fotográficos",
        description: "Ensaios externos ou em estúdio, capturando sua essência em imagens autênticas e cheias de personalidade."
    },
    {
        icon: <FilmIcon className="h-12 w-12 text-[#d4af37] mb-4" />,
        title: "Vídeos e Making Ofs",
        description: "Produção de vídeos cinematográficos que contam sua história, incluindo os bastidores e momentos espontâneos."
    },
    {
        icon: <UsersIcon className="h-12 w-12 text-[#d4af37] mb-4" />,
        title: "Eventos Sociais",
        description: "Cobertura de batizados, formaturas e eventos corporativos, com a discrição e o profissionalismo que a ocasião exige."
    },
    {
        icon: <SparklesIcon className="h-12 w-12 text-[#d4af37] mb-4" />,
        title: "Edição e Retoque",
        description: "Tratamento de imagem profissional para realçar a beleza natural, com retoques sutis e de alta qualidade."
    }
];

const Services: React.FC = () => {
    return (
        <section id="servicos" className="py-20 bg-[#222222]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos <span className="text-[#d4af37]">Serviços</span></h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">Oferecemos uma gama completa de serviços para registrar seus momentos mais preciosos.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-700/50 hover:border-[#d4af37] transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
                            {service.icon}
                            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
