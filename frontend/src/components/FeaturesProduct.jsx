"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "./ProductCard";

export function FeaturesProduct({
  products = [],
  isLoading = false,
  title = "Featured Products",
  subtitle = "Discover our most popular items",
  showViewAll = true,
  limit = 8,
}) {
  const displayProducts = products.slice(0, limit);

  return (
    <section className="py-12 md:py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-2">{title}</h2>
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          </div>
          {showViewAll && (
            <Link href="/shop">
              <Button variant="outline" data-testid="button-view-all">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
