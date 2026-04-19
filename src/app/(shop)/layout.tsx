import type { ReactNode } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import BottomNav from "@/components/layout/bottom-nav";
import { Search, ShoppingCart } from "lucide-react";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <div className="flex p-3 justify-between max-w-6xl mx-auto">
          <div>
            <h1 className="font-semibold pt-1 text-xl">Trovi</h1>
          </div>
          <div className="hidden md:flex pt-2 gap-3 pl-10">
            <Link href="/">Shop</Link>
            <Link href="/order">Collection</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/search" className="text-sm pt-1.5">
              <div className="border p-2 rounded-sm">
                <Search size={12} />
              </div>
            </Link>
            <Link href="/cart" className="text-sm pt-1.5">
              <div className="border p-2 rounded-sm">
                <ShoppingCart size={12} />
              </div>
            </Link>
            <div className="w-7 h-7 mt-1.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-medium flex items-center justify-center">
              JS
            </div>
          </div>
        </div>
      </header>

      <Separator />
      <main>{children}</main>

      <BottomNav />
    </div>
  );
}
