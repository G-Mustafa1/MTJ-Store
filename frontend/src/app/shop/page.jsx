"use client";   
import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

// Simple categories and products objects
const categories = ["Perfume", "Makeup", "Ladies Bags", "Body Mist"];

const products = [
  { id: "1", title: "Premium Perfume", price: 2500, image: "https://images.unsplash.com/photo-1759793500110-e3cb1f0fe6ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByZW1pbnVtJTIwcGVyZnVtfGVufDB8fDB8fHww", category: "Perfume" },
  { id: "2", title: "Classic Makeup Kit", price: 3200, image: "https://images.unsplash.com/photo-1564414565517-a0170c5d66f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByZW1pbnVtJTIwbWFrZXVwfGVufDB8fDB8fHww", category: "Makeup" },
  { id: "3", title: "Luxury Body Spray", price: 1500, image: "https://images.unsplash.com/photo-1535683577427-740aaac4ec25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D", category: "Perfume" },
  { id: "4", title: "Matte Lipstick", price: 1200, image: "https://media.istockphoto.com/id/1015450734/photo/testers-of-different-lipsticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=Eap9PJmZXYYFl-IkgffbnyHyrVTEvr_6Ih5tXE6CuNE=", category: "Makeup" },
  { id: "5", title: "Designer Handbag", price: 4999, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFnfGVufDB8fDB8fHww", category: "Ladies Bags" },
  { id: "6", title: "Body Mist", price: 899, image: "https://images.unsplash.com/photo-1671642605304-2a0a812b5529?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9keSUyMG1pc3R8ZW58MHx8MHx8fDA%3D", category: "Body Mist" },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* <Navbar /> */}

      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">Shop</h1>
            <p className="text-muted-foreground text-lg">
              Browse our complete collection of premium products
            </p>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground mr-2">Filter by:</span>
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(null)}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {selectedCategory && (
            <div className="mb-6 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Showing results for:</span>
              <Badge variant="secondary" className="gap-1">
                {selectedCategory}
                <button
                  onClick={() => handleCategoryChange(null)}
                  className="ml-1 hover:text-foreground"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </div>
          )}

          {filteredProducts.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 bg-card rounded-md">
              <p className="text-muted-foreground text-lg mb-2">
                No products found{selectedCategory ? ` in "${selectedCategory}"` : ""}.
              </p>
              <Button variant="outline" onClick={() => handleCategoryChange(null)}>
                Show All Products
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
