import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="p-6 max-w-6xl mx-auto lg:py-16">
        <p className="text-[11px] text-muted-foreground mb-2 lg:text-base">
          NEW ARRIVALS | SPRING 2025
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-10 ">
          <div className="relative w-full md:w-[45%] h-[180px] md:h-[280px] lg:h-[400px] lg:w-[50%]  rounded-md overflow-hidden md:order-last">
            <Image
              src="https://picsum.photos/seed/hero/800/400"
              alt="Hero"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div>
            <div className="mb-4 ">
              <div className="pb-2">
                <p className="text-lg leading-none lg:text-3xl">
                  Everyday Essentials.
                </p>
                <p className="text-lg lg:text-3xl">thoughtfully made.</p>
              </div>

              <p className="text-[12px] text-foreground md:w-[80%] lg:text-lg lg:w-full">
                Curated lifestyle goods and accessories for the way you actually
                live.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-1 md:w-1/2 lg:w-[90%] ">
              <button className="border py-1 rounded-sm cursor-pointer">
                Shop Now
              </button>
              <button className="border py-1 rounded-sm cursor-pointer">
                Collections
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
