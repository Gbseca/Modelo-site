
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-[#1a1a1a] overflow-x-hidden">
            <Header />
            <main>
                <Hero />
                <Services />
                <Portfolio />
                <About />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
