import Image from "next/image";


const FeaturedBooks = async () => {
  const res = await fetch("http://localhost:3000/feature.json");
  const info = await res.json();
  const data = info.slice(0, 4);
  return (
    <div className="my-10 md:my-15 lg:my-20 max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-start text-gray-900 my-6 tracking-wide">
        Best-Selling Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          // map 
          data.map(d => {
            return <div key={d.id}>

              {/* card design  */}


              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col p-3">

                {/* Image */}
                <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 rounded-xl overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="pt-4 flex flex-col flex-1">
                  <h2 className="text-lg md:text-xl font-semibold mb-2 line-clamp-1">
                    {d.title}
                  </h2>

                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                    {d.description}
                  </p>

                  <div className="mt-auto">
                    <button className="w-full rounded-full btn btn-outline text-orange-500 border-orange-100 hover:bg-orange-500 hover:text-white transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* card design end  */}
            </div>
          })
        }
      </div>
    </div>
  );
};

export default FeaturedBooks;




