import { ProductCardType } from "@/components/ProductCard";
import ProductPage from "@/components/ProductPage";
import Review from "@/components/Review";
import { reviews } from "@/data/reviews"
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = await (
    await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    })
  ).json();
  const slug = (await params).slug;
    const product = data.find((product: ProductCardType) => product.slug === slug);
  return (
    <div className="min-h-screen">
        <ProductPage data={product}/>
        <h3 className="text-center my-4 text-3xl font-bold underline">Reviews</h3>
        <div className="flex flex-wrap justify-evenly gap-5 ">
        {reviews.map((review, index) => (
            <Review review={review} key={index}/>
        ))}
        </div>
        
    </div>
  );
}
