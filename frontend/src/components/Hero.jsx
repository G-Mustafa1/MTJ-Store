import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      
      <div className="relative z-10 container mx-auto px-3.5 md:px-6 lg:px-8 py-20">
        <div className="max-w-2xl ">
          <p className="text-amber-200 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            Premium Beauty Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Discover Your Signature Elegance
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Explore our exclusive collection of premium perfumes, luxury makeup, 
            designer bags, and timeless fashion accessories.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white border-amber-700 backdrop-blur-md"
                data-testid="button-hero-shop"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/shop?category=Perfume">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-white/10 backdrop-blur-md"
                data-testid="button-hero-fragrances"
              >
                View Fragrances
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
