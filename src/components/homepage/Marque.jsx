import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
  const marque = [
    { "id": 1, "title": "The Lost Island" },
    { "id": 2, "title": "JavaScript Mastery" },
    { "id": 3, "title": "The Science of Space" },
    { "id": 4, "title": "Hidden Truths" },
    { "id": 5, "title": "React in Action" },
    { "id": 6, "title": "Biology Basics" },
    { "id": 7, "title": "Dream Catcher" },
    { "id": 8, "title": "Node.js Essentials" },
    { "id": 9, "title": "Physics Fundamentals" },
    { "id": 10, "title": "The Silent Forest" },
    { "id": 11, "title": "AI Revolution" },
    { "id": 12, "title": "Chemistry in Daily Life" }
  ]

  return (
    <div className='mt-10 md:mt-15 lg:mt-20'>
      < h2 className="container mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-start text-gray-900 my-6 tracking-wide"> Discover New Arrivals & Exclusive Offers</h2 >
      <div className="bg-gray-800 py-3 shadow-md">

        <Marquee pauseOnHover={true} speed={50} gradient={false}>
          <div className="flex gap-10 px-6">
            {
              marque.map(m => {
                return <span
                  key={m.id}
                  className="text-white text-sm md:text-base font-medium bg-gray-700 px-4 py-2 rounded-full hover:bg-orange-500 transition whitespace-nowrap"
                >
                  {m.title}
                </span>
              })
            }
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;