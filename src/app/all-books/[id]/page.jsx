
import React from 'react';
import Link from 'next/link';
import {
  FaUser,
  FaArrowLeft,
  FaBookOpen,
  FaUnlockAlt,
  FaFilePdf,
  FaClock,
  FaCheckCircle
} from 'react-icons/fa';
import { MdCategory, MdOutlineNumbers } from 'react-icons/md';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import BookBorrowBtn from '@/components/BookBorroBtn';

async function BookDetailsPage({ params }) {
  const { id } = await params
  const res = await fetch('https://book-borro.vercel.app/data.json', {
    cache: "no-store",
  });
  const books = await res.json();
  const book = books.find((b) => b.id === Number(id));

  // const { data: session } = authClient.useSession();
  // const user = session?.user;

  // const handleBorrow = () => {


  //   //  not logged in
  //   if (!user) {
  //     toast.error("Please login to borrow this book!");
  //     setUrl("/login");
  //     return;
  //   }

  //   //  no stock
  //   if (book.available_quantity === 0) {
  //     toast.error("No copies available!");
  //     return;
  //   }

  //   //  success
  //   toast.success("Book borrowed successfully!");
  // };

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Book Not Found!</h2>
      </div>
    );

  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-6 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Back Button - Mobile friendly padding */}
        <Link
          href="/all-books"
          className="inline-flex items-center text-sm font-semibold text-indigo-800 hover:text-orange-600 mb-6 md:mb-8 group transition-all"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Return to Library
        </Link>

        {/* Main Details Card */}
        <div className="bg-white rounded-lg md:rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">

          {/* Left Side: Book Cover Image */}
          {/* Mobile: height is fixed, Desktop: takes equal height */}
          <div className="w-full md:w-5/12 lg:w-1/2 bg-gray-100 relative h-[350px] sm:h-[450px] md:h-auto">
            <Image
              src={book.image_url}
              alt={book.title}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <span className="bg-orange-400/90 backdrop-blur-md text-white px-4 py-1 md:px-5 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg">
                {book.category}
              </span>
            </div>
          </div>

          {/* Right Side: Content Details */}
          <div className="w-full md:w-7/12 lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center">

            <div className="space-y-6 md:space-y-8">
              {/* Title and Author */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-3">
                  {book.title}
                </h1>
                <div className="flex items-center text-gray-900 font-medium text-base md:text-lg">
                  <FaUser className="mr-2" />
                  <span>Author: {book.author}</span>
                </div>
              </div>

              <div className="h-px bg-gray-100 w-full"></div>

              {/* Synopsis */}
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center">
                  <FaBookOpen className="mr-2 text-gray-800" /> Description
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg italic">
                  {book.description}
                </p>
              </div>

              {/* Book Info Grid - sm: 2 columns */}
              <div className="grid grid-cols-2 gap-4 md:gap-8 py-2">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-indigo-50 rounded-lg md:rounded-xl text-gray-800">
                    <MdCategory className="text-xl md:text-2xl" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">Category</p>
                    <p className="text-sm md:text-base text-gray-800 font-bold">{book.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-emerald-50 rounded-lg md:rounded-xl text-emerald-600">
                    <MdOutlineNumbers className="text-xl md:text-2xl" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">Stock</p>
                    <p className={`text-sm md:text-base font-black ${book.available_quantity > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                      {book.available_quantity} Copies
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <BookBorrowBtn key={book.id} book={book} />
              {/* Action Button end */}
            </div>
          </div>
        </div>

        {/* Extra Info Section - Responsive Grid */}
        {/* sm: 1 col, md: 3 cols */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white/60 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white flex items-center gap-4">
            <FaFilePdf className="text-red-500 text-2xl md:text-3xl flex-shrink-0" />
            <div>
              <p className="font-bold text-gray-800 text-sm">High Quality</p>
              <p className="text-[11px] md:text-xs text-gray-500">Crystal clear digital PDF</p>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white flex items-center gap-4">
            <FaClock className="text-orange-500 text-2xl md:text-3xl flex-shrink-0" />
            <div>
              <p className="font-bold text-gray-800 text-sm">Borrow Period</p>
              <p className="text-[11px] md:text-xs text-gray-500">Enjoy for up to 14 days</p>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white flex items-center gap-4 sm:col-span-2 md:col-span-1">
            <FaCheckCircle className="text-blue-500 text-2xl md:text-3xl flex-shrink-0" />
            <div>
              <p className="font-bold text-gray-800 text-sm">Instant Sync</p>
              <p className="text-[11px] md:text-xs text-gray-500">Read on any of your devices</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export default BookDetailsPage;