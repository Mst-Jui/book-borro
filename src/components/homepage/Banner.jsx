"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiCheckCircle, FiSearch } from "react-icons/fi";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto my-5">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg shadow-2xl"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative bg-[url('/image/banner.png')] min-h-[95vh] md:min-h-[95vh] lg:min-h-[95vh] bg-cover bg-center flex items-center rounded-lg">
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="px-6 md:px-10 text-white max-w-2xl space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold animate-fadeIn">
                  Find Your Next Read
                </h1>
                <p className="text-gray-200">
                  Explore thousands of books across Story, Tech, and Science.
                </p>
                <Link href="/all-books">
                  <Button className="bg-orange-500 text-white font-bold px-6 py-3 hover:bg-orange-600 transition-all rounded-md">
                    Browse Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <section className="relative bg-white overflow-hidden py-10 sm:py-16 lg:py-24">
            {/* Background Blur - Desktop-e thakbe, Mobile-e subtle thakbe */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 blur-3xl opacity-20 pointer-events-none">
              <div className="aspect-[1200/600] w-[30rem] sm:w-[50rem] bg-gradient-to-tr from-orange-400 to-yellow-200"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                {/* Left Content: Text & Search */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6">
                    <FiBookOpen />
                    <span>Digital Library Excellence</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                    Unlock a World of <span className="text-orange-500">Knowledge</span>
                  </h1>

                  <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Borrow your favorite books from our vast digital collection.
                    Read, learn, and grow without limits.
                  </p>

                  {/* Search Bar - Responsive Width */}
                  <div className="mt-8 relative max-w-md sm:max-w-lg mx-auto lg:mx-0 group">


                  </div>

                  {/* CTA Buttons - Stack on small, Row on larger */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <Link href={"/all-books"}>
                      <button className="bg-orange-500 text-white font-bold px-6 py-3 hover:bg-orange-600 transition-all rounded-md">
                        Explore Library
                      </button>
                    </Link>
                    <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-gray-700 border-2 border-gray-100 hover:bg-gray-50 transition-all">
                      How it Works
                    </button>
                  </div>
                </div>

                {/* Right Content: Image & Stats */}
                <div className="relative order-1 lg:order-2 flex justify-center lg:block">
                  {/* Image Container: Hidden on very small, visible from md */}
                  <div className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-full aspect-square sm:aspect-video lg:aspect-square bg-orange-100 rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl lg:rotate-3 hover:rotate-0 transition-transform duration-700 border-4 sm:border-8 border-white">
                    <Image
                      width={200}
                      height={100}
                      src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000"
                      alt="Library"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Stats Card - Hidden on mobile, visible from sm */}
                  <div className="hidden sm:flex absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-12 z-20 bg-white p-4 lg:p-6 rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-50 items-center gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <FiCheckCircle size={20} className="lg:hidden" />
                      <FiCheckCircle size={24} className="hidden lg:block" />
                    </div>
                    <div>
                      <p className="text-[10px] lg:text-xs text-gray-400 font-bold uppercase tracking-wider">Active Users</p>
                      <p className="text-lg lg:text-xl font-black text-gray-800">12,500+</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative bg-white overflow-hidden">
            {/* Decorative Blur Background */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-10 pointer-events-none">
              <div className="aspect-square w-[40rem] rounded-full bg-orange-500"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 sm:py-20 lg:py-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-6">
                    <FiBookOpen />
                    <span>Your Library, Your Way</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                    Share the Joy of <br />
                    <span className="text-orange-500 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                      Reading
                    </span>
                  </h1>

                  <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Explore our collection, borrow your favorite titles, and join a community of book lovers. Simple, fast, and free.
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <Link href={"/all-books"}>
                      <button className="bg-orange-500 text-white font-bold px-6 py-3 hover:bg-orange-600 transition-all rounded-md">
                        Get Started
                      </button>
                    </Link>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all">
                      Browse Books <FiArrowRight />
                    </button>
                  </div>
                </div>

                {/* Visual Image Section */}
                <div className="order-1 lg:order-2 flex justify-center">
                  <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                    {/* Main Image with Rounded Corners */}
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-gray-100">
                      <Image
                        width={100}
                        height={50}
                        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800"
                        alt="Reading Books"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating Badge (Mobile-e hidden thakbe jate clean thake) */}
                    <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-50">
                      <p className="text-3xl font-black text-orange-500">5k+</p>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Books Available</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;