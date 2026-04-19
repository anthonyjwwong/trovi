import { Product } from "@/generated/prisma/client";
import Image from "next/image";
type Props = {
  product: Product;
};

export default function ProductCard({
  product: { imageUrl, name, description, price, inventory },
}: Props) {
  return (
    <div className="border mb-6 rounded-md flex flex-col justify-between">
      <div className="relative w-full h-[140px] rounded-md ">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Picture of ${name}`}
            fill
            className="object-cover rounded-t-md"
          />
        ) : (
          <div className="h-[200px] w-[320px] bg-muted" />
        )}
      </div>

      <div className="px-2 py-2 lg:px-4">
        {inventory <= 0 ? (
          <div className="w-fit px-1 mt-2 rounded-2xl text-[10px] bg-red-200 text-red-700">
            Out of Stock
          </div>
        ) : inventory <= 5 ? (
          <div className="w-fit px-1 mt-2 rounded-2xl text-[10px] bg-amber-200 text-amber-700">
            Low stock
          </div>
        ) : (
          <div className="w-fit px-1 mt-2 rounded-2xl text-[10px] bg-green-200 text-green-700">
            In stock
          </div>
        )}

        <p className="pt-2 text-[13px] font-semibold">{name}</p>
        <p className="text-[11px]  text-muted-foreground">{description}</p>
      </div>

      <div className="px-2 py-2 flex justify-between lg:px-4 ">
        <p className="pt-1 text-[12px]">${(price / 100).toFixed(2)}</p>
        <button className="border text-[12px] px-2 py-1 cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
}
