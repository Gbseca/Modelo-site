
import React, { useState } from 'react';
import { MailIcon, PhoneIcon, InstagramIcon } from './icons';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        console.log('Form data submitted:', formData);
        setStatus('Obrigado pelo seu contato! Retornarei em breve.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contato" className="py-20 bg-[#222222]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em <span className="text-[#d4af37]">Contato</span></h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Vamos conversar sobre seu projeto? Me envie uma mensagem ou me encontre nas redes sociais.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Nome</label>
                                <input type="text" name="name" id="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required className="w-full bg-[#1a1a1a] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required className="w-full bg-[#1a1a1a] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all" />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Mensagem</label>
                                <textarea name="message" id="message" placeholder="Sua Mensagem" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-[#1a1a1a] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#d4af37] text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                                Enviar Mensagem
                            </button>
                            {status && <p className="text-center text-green-400 mt-4">{status}</p>}
                        </form>
                    </div>

                    <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <MailIcon className="h-8 w-8 text-[#d4af37]" />
                                <div>
                                    <h3 className="text-xl font-semibold">Email</h3>
                                    <a href="mailto:contato@fotografa.com.br" className="text-gray-300 hover:text-[#d4af37] transition-colors">contato@fotografa.com.br</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <PhoneIcon className="h-8 w-8 text-[#d4af37]" />
                                <div>
                                    <h3 className="text-xl font-semibold">Telefone / WhatsApp</h3>
                                    <a href="tel:+5521999998888" className="text-gray-300 hover:text-[#d4af37] transition-colors">+55 (21) 99999-8888</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <InstagramIcon className="h-8 w-8 text-[#d4af37]" />
                                <div>
                                    <h3 className="text-xl font-semibold">Instagram</h3>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#d4af37] transition-colors">@SeuInstagram</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
