import Testimonials from "@/components/Testimonials";
import TrendingBooks from "@/components/TrendingBooks";
import Banner from "@/components/homepage/Banner";
import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import Marque from "@/components/homepage/Marque";


export default function Home() {
  return (
    <div>
      <Banner />
      <Marque />
      <FeaturedBooks />
      <TrendingBooks />
      <Testimonials />
    </div>
  );
}

