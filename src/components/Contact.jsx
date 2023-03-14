import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="max-width-[1140px] m-auto w-full px-4 py-16">
            <h2 className="text-center text-gray-700">Send us a message</h2>
            <p className="text-center text-gray-700 py-2">We're standing by!</p>
            <div className="grid md:grid-cols-2">
                <img src="tropical.jpg" alt="tropical" className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]" />
                <form>
                    <div className="grid grid-cols-2">
                        <input type="text" placeholder="First" className="border m-2 p-2" />
                        <input type="text" placeholder="Last" className="border m-2 p-2" />
                        <input type="email" placeholder="Email" className="border m-2 p-2" />
                        <input type="tel" placeholder="Phone" className="border m-2 p-2" />
                        <input type="text" placeholder="Address" className="border col-span-2 p-2 m-2" />
                        <textarea cols="30" rows="10" className="border col-span-2 m-2 p-2"></textarea>
                        <button className="col-span-2 m-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;