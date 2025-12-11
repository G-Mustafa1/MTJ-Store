// "use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, Package, Truck, Shield } from "lucide-react";
import Link from "next/link";

const products = [
  { id: "1", title: "Premium Perfume", price: 2500, image: "https://images.unsplash.com/photo-1759793500110-e3cb1f0fe6ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByZW1pbnVtJTIwcGVyZnVtfGVufDB8fDB8fHww", category: "Perfume" },
  { id: "2", title: "Classic Makeup Kit", price: 3200, image: "https://images.unsplash.com/photo-1564414565517-a0170c5d66f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByZW1pbnVtJTIwbWFrZXVwfGVufDB8fDB8fHww", category: "Makeup" },
  { id: "3", title: "Luxury Body Spray", price: 1500, image: "https://images.unsplash.com/photo-1535683577427-740aaac4ec25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D", category: "Perfume" },
  { id: "4", title: "Matte Lipstick", price: 1200, image: "https://media.istockphoto.com/id/1015450734/photo/testers-of-different-lipsticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=Eap9PJmZXYYFl-IkgffbnyHyrVTEvr_6Ih5tXE6CuNE=", category: "Makeup" },
  { id: "5", title: "Designer Handbag", price: 4999, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFnfGVufDB8fDB8fHww", category: "Ladies Bags" },
  { id: "6", title: "Body Mist", price: 899, image: "https://images.unsplash.com/photo-1671642605304-2a0a812b5529?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9keSUyMG1pc3R8ZW58MHx8MHx8fDA%3D", category: "Body Mist" },
];
export default async function Product({ params }) {
    // arr.find
    const pram = await params
    const product = products.find((product) => product.id === pram.id);

    console.log(product);
    

      const handleAddToCart = () => {
        if (product) {
        //   addToCart(product);
        alert("Product added to cart!");
        }
      };


      if (!product) {
        return (
          <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
                <p className="text-muted-foreground mb-6">
                  The product you're looking for doesn't exist.
                </p>
                <Link href="/shop">
                  <Button>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
                  </Button>
                </Link>
              </div>
            </main>
            <Footer />
          </div>
        );
      }

    return (
        <div className="min-h-screen flex flex-col bg-background">
          <main className="flex-1 py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <Link href="/shop">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
                </Button>
              </Link>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="relative aspect-square overflow-hidden rounded-md bg-card">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col">
                  <Badge variant="secondary" className="w-fit mb-4">{product.category}</Badge>
                  <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">{product.title}</h1>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">${product.price}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

                  <Button size="lg" className="mb-8">
                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                  </Button>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-card rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <Package className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Quality</p>
                        <p className="text-xs text-muted-foreground">100% Original</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <Truck className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Delivery</p>
                        <p className="text-xs text-muted-foreground">Fast Shipping</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <Shield className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Secure</p>
                        <p className="text-xs text-muted-foreground">Safe Payment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
    );
}
