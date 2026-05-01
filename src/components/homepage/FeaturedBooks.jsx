import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBookmark } from "react-icons/fa";

const FeaturedBooks = async () => {
  const res = await fetch("https://book-borro.vercel.app/data.json");
  const info = await res.json();
  const data = info.slice(0, 4);

  return (
    <div className="my-16 md:my-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-center md:text-left">
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2 text-orange-500 font-black uppercase tracking-[0.2em] text-xs">
            <FaBookmark />
            <span>Handpicked Collection</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tighter">
            Featured Books <span className="text-orange-500">Hub</span>
          </h2>
        </div>
        <Link
          href="/all-books"
          className="group flex items-center justify-center md:justify-end gap-2 text-gray-500 font-bold hover:text-orange-500 transition-all"
        >
          View Full Catalog <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((d) => (
          <div key={d.id} className="group">
            <div className="bg-white rounded-[2.5rem] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-50 flex flex-col h-full hover:-translate-y-2">

              {/* Image Container with Zoom effect */}
              <div className="relative w-full h-64 md:h-72 rounded-[2rem] overflow-hidden mb-6">
                <Image
                  src={d.image_url}
                  alt={d.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 px-2">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2 line-clamp-1 group-hover:text-orange-500 transition-colors">
                  {d.title}
                </h3>

                {/*  */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 italic">
                  {d.description}
                </p>

                {/* Action Button */}
                <div className="mt-auto">
                  <Link href={`/all-books/${d.id}`}>
                    <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm transform transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-100 active:scale-95 flex items-center justify-center gap-2">
                      Book Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;