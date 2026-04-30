import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative max-w-7xl mx-auto bg-[url('/image/banner.png')] min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl my-5">
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full rounded-lg bg-black/50 flex items-center justify-center sm:justify-start lg:rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Next Read
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Explore thousands of books across Story, Tech, and Science. Seamless digital borrowing at your fingertips.
          </p>

          <div>
            
            <Link href="/all-books">
              <Button  className="text-white bg-orange-500 text-sm sm:text-base px-4 py-2 md:px-6 md:py-3 font-bold">
                Browse Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;