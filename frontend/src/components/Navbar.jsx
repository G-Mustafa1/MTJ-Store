  "use client";

  import { useState } from "react";
  import Link from "next/link";
  import { Button } from "@/components/ui/button";
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
  import { Menu, ShoppingBag, Moon, Sun, X, WheatIcon } from "lucide-react";
  import { SiWhatsapp } from "react-icons/si";
  // import { SiWhatsapp } from "react-icons/si";

  // Example: Replace these hooks with your actual context if available
  // const useCart = () => ({ totalItems: 2 });
  // const useTheme = () => {
  //   const [theme, setTheme] = useState("light");
  //   return { theme, setTheme };
  // };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/shop?category=Perfume", label: "Perfume" },
    { href: "/shop?category=Makeup", label: "Makeup" },
    { href: "/shop?category=Ladies%20Bags", label: "Bags" },
  ];

  export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  //   const { totalItems } = useCart();
  //   const { theme, setTheme } = useTheme();

  //   const isActive = (href) => {
  //     if (href === "/") return currentPath === "/";
  //     return currentPath.startsWith(href.split("?")[0]);
  //   };

    return (
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <span className="font-serif text-xl font-semibold">
                      Elegance
                    </span>
                    {/* <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button> */}
                  </div>
                  <nav className="flex flex-col gap-1 p-4">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                        <span
                          className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors hover-elevate `}
                          // ${
                          //   isActive(link.href)
                          //     ? "bg-accent text-accent-foreground"
                          //     : "text-muted-foreground"
                          // }
                        >
                          {link.label}
                        </span>
                      </Link>
                    ))}
                    <a
                      href="https://wa.me/923001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground hover-elevate rounded-md"
                    >
                      <SiWhatsapp className="h-4 w-4 text-green-600" />
                      WhatsApp
                    </a>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/">
              <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight cursor-pointer">
                Elegance Beauty
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover-elevate `}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex"
              >
                <Button variant="ghost" size="icon">
                  <SiWhatsapp className="h-5 w-5 text-green-600" />
                </Button>
              </a>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                  {<Moon />}
                {/* {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />} */}
              </Button>

              {/* Cart */}
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  {/* {totalItems > 0 && ( */}
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                      {/* {totalItems} */} 0
                    </span>
                  {/* )} */}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
