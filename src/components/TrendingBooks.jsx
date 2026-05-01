import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFire, FaStar, FaArrowRight } from 'react-icons/fa';
import { MdOutlineLibraryBooks } from 'react-icons/md';

const TrendingBooks = ({ books }) => {
  const trendingBooks = books?.slice(0, 4) || [];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">
            <FaFire />
            <span>Top Picks</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Trending This <span className="text-orange-500">Week</span>
          </h2>
        </div>
        <Link
          href="/all-books"
          className="group flex items-center gap-2 text-gray-600 font-bold hover:text-orange-500 transition-all"
        >
          View Full Library <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trendingBooks.map((book) => (
          <div
            key={book.id}
            className="group relative bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
          >
            <div className="relative h-[300px] w-full rounded-[1.5rem] overflow-hidden mb-6">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <FaStar className="text-yellow-400 text-xs" />
                <span className="text-[10px] font-bold text-gray-800">4.9</span>
              </div>
            </div>

            <div className="flex-grow space-y-2 px-2">
              <div className="flex items-center gap-2 text-indigo-500 text-[10px] font-black uppercase">
                <MdOutlineLibraryBooks />
                {book.category}
              </div>
              <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-orange-500 transition-colors">
                {book.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium italic">by {book.author}</p>

              <div className="pt-4 flex items-center justify-between border-t border-gray-50 mt-4">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  {book.available_quantity} Copies Left
                </span>
              </div>
            </div>

            <div className="mt-6 px-2 pb-2">
              <Link href={`/all-books/${book.id}`}>
                <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-sm transform transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-200 active:scale-95 flex items-center justify-center gap-2">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* --- Updated Stats Section --- */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 py-10 border-y border-gray-100">

        {/* Stat 1 */}
        <div className="text-center group cursor-default px-4">
          <h4 className="text-3xl md:text-4xl font-black text-gray-900 transition-colors duration-300 group-hover:text-orange-500">
            12k+
          </h4>
          <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase mt-1 tracking-widest">
            Happy Readers
          </p>
        </div>

        {/* Stat 2 */}
        <div className="text-center group cursor-default px-4 border-l border-gray-100">
          <h4 className="text-3xl md:text-4xl font-black text-gray-900 transition-colors duration-300 group-hover:text-orange-500">
            500+
          </h4>
          <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase mt-1 tracking-widest">
            Total Titles
          </p>
        </div>

        {/* Stat 3 */}
        <div className="text-center group cursor-default px-4 border-l border-gray-100">
          <h4 className="text-3xl md:text-4xl font-black text-gray-900 transition-colors duration-300 group-hover:text-orange-500">
            50+
          </h4>
          <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase mt-1 tracking-widest">
            Famous Authors
          </p>
        </div>

        {/* Stat 4 */}
        <div className="text-center group cursor-default px-4 border-l border-gray-100">
          <h4 className="text-3xl md:text-4xl font-black text-gray-900 transition-colors duration-300 group-hover:text-orange-500">
            24/7
          </h4>
          <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase mt-1 tracking-widest">
            Digital Access
          </p>
        </div>

      </div>
    </section>
  );
};

export default TrendingBooks;