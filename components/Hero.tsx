
import React from 'react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
    const eventDate = "2026-02-02T19:00:00-06:00"; // New Orleans is CST (UTC-6)

    return (
        <header 
            className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
        >
            <div className="absolute inset-0 bg-dw-dark z-0">
                <img 
                    src="https://images.unsplash.com/photo-1620994399450-c2a859545479?q=80&w=2940&auto=format&fit=crop" 
                    alt="Drone light show over a city skyline at night" 
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dw-dark via-dw-dark/50 to-transparent"></div>
            </div>

            <div className="relative z-10 p-6 animate-fade-in-up">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black font-orbitron tracking-tighter uppercase animate-slow-pulse">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dw-purple to-dw-green">Drone Wars</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dw-green to-dw-gold">2026</span>
                </h1>
                <p className="mt-4 text-lg md:text-2xl font-bold text-gray-300">
                    The Sky Will Bleed Purple, Green, and Gold
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-dw-gold font-semibold">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span>February 2, 2026</span>
                    </div>
                    <span className="hidden sm:inline">|</span>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span>New Orleans, LA</span>
                    </div>
                </div>

                <div className="mt-12 max-w-2xl mx-auto">
                    <CountdownTimer targetDate={eventDate} />
                </div>

                 <div className="mt-12">
                     <a href="#about" className="inline-block bg-gradient-to-r from-dw-purple to-dw-green hover:from-dw-green hover:to-dw-gold text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-lg">
                        Discover More
                    </a>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-8 h-8 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </header>
    );
};

export default Hero;
