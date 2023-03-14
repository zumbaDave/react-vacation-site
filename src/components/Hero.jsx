import React from 'react';

const Hero = () => {
    return (
        <div className="w-full h-[90vh]">
            <img 
                src="vacation.jpg" 
                alt="ocean shoreline"
                className="w-full h-full object-cover"
            />
            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
                    <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
                    <h2 className="text-4xl py-4 italic">With Weekaway</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima assumenda nulla officia, sit nostrum dolorum deserunt debitis recusandae, sint odio quidem! Aperiam fugit, officiis libero ducimus tenetur laborum expedita.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;