"use client";

import { House, Search, ShoppingCart, SquareMenu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      icon: House,
      label: "Home",
    },
    {
      href: "/search",
      icon: Search,
      label: "Search",
    },
    {
      href: "/cart",
      icon: ShoppingCart,
      label: "Cart",
    },
    {
      href: "/orders",
      icon: SquareMenu,
      label: "Order",
    },
  ];

  return (
    <div className="fixed bottom-0 w-full border-t">
      <div className="md:hidden flex px-8 py-2 bg-white justify-between">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link href={href} key={href} className="mt-2">
              <div
                className={`rounded-sm border p-1.5 w-fit mx-auto ${
                  isActive ? "bg-black" : "bg-gray-300"
                }`}
              >
                <Icon size={8} color={isActive ? "white" : "black"} />
              </div>
              <p className="text-[8px] text-center">{label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
