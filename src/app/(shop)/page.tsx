import { getProducts } from "@/action/product-actions";
import ProductCard from "@/components/product/product-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/shop/hero";
import SigninPanel from "@/components/shop/signin-banner";
import { Separator } from "@/components/ui/separator";
export default async function Home() {
  const allProduct = await getProducts();

  return (
    <div>
      <Hero />
      <Separator />
      <div className="py-6 px-4 md:py-10 md:px-6 max-w-6xl mx-auto">
        <div className="px-4 flex justify-between">
          <p className="text-sm font-semibold">Featured Products</p>
          <Link href="/product" className="flex text-sm">
            View All <ArrowRight size={18} />
          </Link>
        </div>
        <div className="px-2.5 flex justify-between mt-4 md:justify-start md:gap-2 py-1">
          {/* Will create filter component later maybe */}
          <div className="border text-[12px] md:text-[14px] px-3 rounded-lg cursor-pointer">
            <p>All</p>
          </div>
          <div className="border text-[12px] md:text-[14px] px-3 rounded-lg cursor-pointer">
            <p>Accessories</p>
          </div>
          <div className="border text-[12px] md:text-[14px] px-3 rounded-lg cursor-pointer">
            <p>Lifestyle</p>
          </div>
          <div className="border text-[12px] md:text-[14px] px-3 rounded-lg cursor-pointer">
            <p>New</p>
          </div>
          <div className="border text-[12px] md:text-[14px] px-3 rounded-lg cursor-pointer">
            <p>Sale</p>
          </div>
        </div>

        <div className=" grid grid-cols-2 pt-6 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {allProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <SigninPanel />
    </div>
  );
}
