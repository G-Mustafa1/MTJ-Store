import Link from "next/link";

const categories = [
  {
    name: "Perfume",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
    description: "Signature fragrances",
  },
  {
    name: "Makeup",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
    description: "Premium cosmetics",
  },
  {
    name: "Ladies Bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    description: "Designer handbags",
  },
  {
    name: "Body Mist",
    image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=600&q=80",
    description: "Refreshing scents",
  },
];

export function CatageroyCard () {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-3">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our curated collections
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={'/'}
            //   href={`/shop?category=${encodeURIComponent(category.name)}`}
            >
              <div
                className="group relative aspect-square overflow-hidden rounded-md cursor-pointer"
                // data-testid={`card-category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-serif text-lg md:text-xl font-semibold mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
