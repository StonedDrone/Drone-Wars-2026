
import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';

// FIX: Changed icon type from `JSX.Element` to `React.ReactNode` to resolve "Cannot find namespace 'JSX'" error.
const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 transform hover:scale-105 hover:border-dw-purple transition-all duration-300">
        <div className="flex items-center mb-4">
            <div className="text-dw-purple mr-4">{icon}</div>
            <h3 className="text-2xl font-bold font-orbitron text-white">{title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{children}</p>
    </div>
);

const App: React.FC = () => {

    const LocationIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
    const VisionIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    );

    const SafetyIcon = () => (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )

    return (
        <div className="min-h-screen bg-dw-dark text-white font-sans overflow-x-hidden">
            <Hero />
            <main className="container mx-auto px-6 py-24 space-y-20">
                <section id="about" className="text-center max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
                        A Revolution in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-dw-purple via-dw-green to-dw-gold">Sky</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        On February 2, 2026, six elite teams will unleash fleets of 2,026 drones each, transforming the skies above the Mississippi River into a canvas for epic, narrative-driven art. This is not just a light show; it's the world’s first competitive aerial storytelling battle. Produced by the trailblazing team at Stoned Drone, Drone Wars 2026 is set to "Elevate Your Vision" of what a live event can be.
                    </p>
                </section>

                <section id="details" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                   <div style={{ animationDelay: '0.4s' }} className="animate-fade-in-up">
                    <InfoCard title="The Ultimate Backdrop" icon={<LocationIcon />}>
                            New Orleans is a city that lives and breathes narrative. The event serves as a high-tech kickoff to the Mardi Gras season, tapping into the city's unparalleled festive energy and providing a backdrop of jazz, mythology, and resilience.
                        </InfoCard>
                    </div>
                     <div style={{ animationDelay: '0.6s' }} className="animate-fade-in-up">
                        <InfoCard title="A New Chapter" icon={<VisionIcon />}>
                            In partnership with Stoned Drone, we're creating the "Olympics of the Sky." We're focused on the drama, rivalry, and groundbreaking innovation of a competition where storytelling triumphs over mere stunts.
                        </InfoCard>
                    </div>
                    <div style={{ animationDelay: '0.8s' }} className="animate-fade-in-up md:col-span-2 lg:col-span-1">
                        <InfoCard title="Safety & Logistics" icon={<SafetyIcon />}>
                           With rigorous planning and coordination with the FAA and local authorities, we will ensure the highest standards of safety and regulatory compliance for a spectacular experience for the live and global stream audience.
                        </InfoCard>
                    </div>
                </section>
                
                <section id="quote" style={{ animationDelay: '1s' }} className="animate-fade-in-up">
                    <div className="max-w-4xl mx-auto text-center bg-gray-900 px-8 py-12 rounded-xl border-l-4 border-dw-gold">
                        <blockquote className="text-xl md:text-2xl italic text-gray-200">
                            "New Orleans is the perfect stage for our rivals to prove that technology can not only dazzle but also tell a powerful story. We are not just lighting up the sky; we are weaving the spirit of New Orleans into every synchronized movement."
                        </blockquote>
                        <cite className="block mt-6 text-md font-bold text-dw-green not-italic">
                            — The Master Orchestrator of Drone Wars 2026
                        </cite>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default App;