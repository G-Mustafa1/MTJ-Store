"use client";

import { CatageroyCard } from "@/components/CatageroyCard";
import { FeaturesProduct } from "@/components/FeaturesProduct";
import { HeroBanner } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/footer";
// import { WhatsAppButton } from "@/components/whatsapp-button";

// Dummy products
const products = [
  { id: "1", title: "Premium Perfume", price: 2500, image: "https://images.unsplash.com/photo-1759793500110-e3cb1f0fe6ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByZW1pbnVtJTIwcGVyZnVtfGVufDB8fDB8fHww", category: "Perfume" },
  { id: "2", title: "Classic Makeup Kit", price: 3200, image: "https://images.unsplash.com/photo-1564414565517-a0170c5d66f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByZW1pbnVtJTIwbWFrZXVwfGVufDB8fDB8fHww", category: "Makeup" },
  { id: "3", title: "Luxury Body Spray", price: 1500, image: "https://images.unsplash.com/photo-1535683577427-740aaac4ec25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D", category: "Perfume" },
  { id: "4", title: "Matte Lipstick", price: 1200, image: "https://media.istockphoto.com/id/1015450734/photo/testers-of-different-lipsticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=Eap9PJmZXYYFl-IkgffbnyHyrVTEvr_6Ih5tXE6CuNE=", category: "Makeup" },
  { id: "5", title: "Designer Handbag", price: 4999, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFnfGVufDB8fDB8fHww", category: "Ladies Bags" },
  { id: "6", title: "Body Mist", price: 899, image: "https://images.unsplash.com/photo-1671642605304-2a0a812b5529?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9keSUyMG1pc3R8ZW58MHx8MHx8fDA%3D", category: "Body Mist" },
];

export default function Home() {
  const perfumeProducts = products.filter((p) => p.category === "Perfume");
  const makeupProducts = products.filter((p) => p.category === "Makeup");

  return (
    <div className="min-h-screen flex flex-col bg-background">

      <main className="flex-1">
        <HeroBanner />

        <CatageroyCard />

        <FeaturesProduct
          products={products}
          isLoading={false}
          title="New Arrivals"
          subtitle="Unmatched design—superior quality in every product"
          limit={8}
        />

        {perfumeProducts.length > 0 && (
          <FeaturesProduct
            products={perfumeProducts}
            isLoading={false}
            title="Fragrances"
            subtitle="Our exclusive fragrance collection, your signature allure"
            showViewAll={true}
            limit={4}
          />
        )}

        {makeupProducts.length > 0 && (
          <FeaturesProduct
            products={makeupProducts}
            isLoading={false}
            title="Makeup Collection"
            subtitle="Premium cosmetics for the modern woman"
            showViewAll={true}
            limit={4}
          />
        )}

        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-3">
                Shop All Products
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our complete collection
              </p>
            </div>

            <FeaturesProduct
              products={products}
              isLoading={false}
              title=""
              subtitle=""
              showViewAll={false}
              limit={12}
            />
          </div>
        </section>
      </main>

    </div>
  );
}
