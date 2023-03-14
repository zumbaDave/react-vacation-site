import React from   'react';

const Gallery = () => {
    return (
        <div id="gallery" className="max-width-[1140px] m-auto w-full px-4 py-16">
            <h2 className="text-center text-gray-700 p-4">Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img src="island.jpg" alt="island" className="w-full h-full object-cover" />
                </div>
                <div>
                    <img src="portland.jpg" alt="portland" className="w-full h-full object-cover" />
                </div>
                <div>
                    <img src="italy.jpg" alt="italy" className="w-full h-full object-cover" />
                </div>
                <div>
                    <img src="maldives.jpg" alt="Maldives" className="w-full h-full object-cover" />
                </div>
                <div>
                    <img src="bf-home.jpg" alt="Beach Home" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );     
}

export default Gallery;