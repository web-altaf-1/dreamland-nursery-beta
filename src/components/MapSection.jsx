import React from 'react';

const MapSection = () => {
    return (
        <section className="py-14 bg-gray-100">
            <div className="relative w-full h-96 overflow-hidden">
                {/* Google Maps Iframe */}
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://maps.google.com/maps?q=Kolkata,%20India&amp;t=m&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    allowFullScreen
                ></iframe>

                {/* Optional Overlay (For future color filtering or enhancements) */}
                <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default MapSection;
