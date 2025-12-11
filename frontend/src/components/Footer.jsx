"use client";

import { Facebook, Instagram, WheatIcon } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=Perfume", label: "Perfumes" },
  { href: "/shop?category=Makeup", label: "Makeup" },
  { href: "/shop?category=Ladies%20Bags", label: "Bags" },
];

const categories = [
  { href: "/shop?category=Perfume", label: "Perfume" },
  { href: "/shop?category=Makeup", label: "Makeup" },
  { href: "/shop?category=Ladies%20Bags", label: "Ladies Bags" },
  { href: "/shop?category=Body%20Mist", label: "Body Mist" },
  { href: "/shop?category=Ladies%20Accessories", label: "Accessories" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand & Socials */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Elegance Beauty</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your destination for premium perfumes, luxury makeup, designer bags, 
              and timeless fashion accessories. Experience elegance in every purchase.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover-elevate transition-colors"
              >
                <WheatIcon className="h-5 w-5 text-green-600" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover-elevate transition-colors"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover-elevate transition-colors"
              >
                <Instagram className="h-5 w-5 text-pink-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <nav className="flex flex-col gap-2">
              {categories.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Elegance Beauty. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/admin">
              <span className="hover:text-foreground transition-colors cursor-pointer">Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
