import Image from "next/image";


const BookCard = ({book}) => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col p-3">

        {/* Image */}
        <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 rounded-xl overflow-hidden">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="pt-4 flex flex-col flex-1">
          <h2 className="text-lg md:text-xl font-semibold mb-2 line-clamp-1">
            {book.title}
          </h2>

          <div className="mt-auto">
            <button className="w-full rounded-full btn btn-outline text-orange-500 border-orange-100 hover:bg-orange-500 hover:text-white transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;