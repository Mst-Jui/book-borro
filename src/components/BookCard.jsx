import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const BookCard = ({ book }) => {
  return (
    <div className="group h-full">
      <div className="bg-white rounded-[2.5rem] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-50 flex flex-col h-full hover:-translate-y-2">

        {/* Image Container */}
        <div className="relative w-full h-64 rounded-[2rem] overflow-hidden mb-6">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 px-2">
          {/* Category/Genre  */}
          <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1 block">
            {book.category || "General"}
          </span>

          <h3 className="text-xl font-extrabold text-gray-900 mb-4 line-clamp-1 group-hover:text-orange-500 transition-colors">
            {book.title}
          </h3>

          {/*  */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 italic">
            {book.description}
          </p>

          {/* Action Button */}
          <div className="mt-auto">
            <Link href={`/all-books/${book.id}`}>
              <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm transform transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-100 active:scale-95 flex items-center justify-center gap-2">
                View Details <FaArrowRight className="text-xs" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;