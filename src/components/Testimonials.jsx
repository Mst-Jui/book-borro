import React from 'react';
import { FaQuoteLeft, FaStar, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Student",
      image: "https://i.pravatar.cc/150?u=alex",
      comment: "This platform changed how I study. Borrowing tech books has never been this easy and fast!",
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/150?u=sarah",
      comment: "The collection of Science and Tech books is outstanding. Highly recommended for professionals.",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Avid Reader",
      image: "https://i.pravatar.cc/150?u=david",
      comment: "I love the UI! It's so modern and easy to navigate. The digital borrowing process is seamless.",
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div>

            {/*  */}
            <div className="flex flex-col gap-2 text-center md:text-left items-center md:items-start">

              {/* Small Label -  */}
              <div className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-1">
                {/*  */}
                <div className="w-6 h-[2px] bg-orange-500 rounded-full hidden md:block"></div>
                <span>Testimonials</span>
              </div>

              {/*  */}
              <h2 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight tracking-tighter">
                What Our <span className="text-orange-500">Readers</span> <br className="hidden md:block" /> Say About Us
              </h2>

              {/*  */}
              <div className="w-12 h-1 bg-orange-500 rounded-full mt-2 md:hidden"></div>
            </div>
            {/*  */}


          </div>




        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50 flex flex-col hover:-translate-y-3"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
              </div>

              <div className="relative mb-6">
                <FaQuoteLeft className="text-orange-100 text-5xl absolute -top-4 -left-2" />
                <p className="relative z-10 text-gray-600 leading-relaxed font-medium italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 group-hover:text-orange-500 transition-colors flex items-center gap-1">
                    {review.name} <FaCheckCircle className="text-blue-500 text-[10px]" />
                  </h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Banner - Extra Small Section inside */}
        <div className="mt-20 bg-gray-900 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-indigo-200">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
              Ready to dive into a new world?
            </h3>
            <p className="text-gray-400 font-medium">Join 12,000+ readers today and start your journey.</p>
          </div>
          <button className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white px-10 py-4 rounded-2xl font-black transition-all duration-300 active:scale-95 whitespace-nowrap">
            Join Membership
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;