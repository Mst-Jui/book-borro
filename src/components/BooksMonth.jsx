import Image from 'next/image';
import React from 'react';

const BooksMonth = () => {
  return (
    <div className='my-10 md:my-15 lg:my-20 max-w-7xl mx-auto'>
      <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-start text-gray-900 my-6 tracking-wide'>
        Books of the Month
      </h2>
      

        <div className="card bg-base-100 shadow-md overflow-hidden flex flex-col md:flex-row">

          {/* Image */}

          <figure className="w-full md:w-1/2">
            <div className="relative w-full h-56 sm:h-64 md:h-full">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFVuPxLPeGf9N_SifRf7vyBBLH32-82RmWA&s"
                alt="book cover"
                fill
                className="object-contain"
              />
            </div>
          </figure>

          {/* Content */}
          <div className="card-body w-full md:w-1/2 justify-center">
            <h2 className="card-title text-xl md:text-2xl">
              Paradoxical Sajid
            </h2>

            <p className="text-gray-500">
            It is a science-based fiction book focused on a curious and intelligent boy named Sajid, who often thinks in unusual and “paradoxical” ways.
            </p>

            <div className="card-actions mt-4">
              <button className="btn btn-outline text-orange-500 border-orange-100 hover:bg-orange-500 hover:text-white transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      

    </div>
  );
};

export default BooksMonth;