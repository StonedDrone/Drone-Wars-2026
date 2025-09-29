
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 bg-opacity-50 border-t border-gray-800 py-12">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <h3 className="text-3xl font-bold font-orbitron mb-4 text-transparent bg-clip-text bg-gradient-to-r from-dw-purple via-dw-green to-dw-gold">
                    “2026 Drones. One Champion.”
                </h3>
                <p className="mt-4">
                    The battle for the sky has a date and a home. The world will be watching.
                </p>
                <div className="mt-8">
                     <p>&copy; {new Date().getFullYear()} Drone Wars 2026. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
