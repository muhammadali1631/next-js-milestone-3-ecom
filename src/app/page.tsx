import Discounted from "@/components/Discounted";
import FeaturedProducts from "@/components/FeaturedProducts";
import LatestDrop from "@/components/LatestDrop";
import NewsLetter from "@/components/NewsLetter";
import Services from "@/components/Services";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <Slider/>
      <Services/>
      <FeaturedProducts/>
      <Discounted/>
      <LatestDrop/>
      <NewsLetter/>
    </div>
  );
}
