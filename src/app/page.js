import BooksMonth from "@/components/BooksMonth";
import Banner from "@/components/homepage/Banner";
import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import Marque from "@/components/homepage/Marque";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Marque />
      <BooksMonth />
      <FeaturedBooks />
    </div>
  );
}
