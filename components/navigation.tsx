"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <div className="relative w-10 h-10 rounded-full ring-2 ring-primary/20 overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="Richard"
                fill
                className="object-cover"
              />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleMenuClick}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-lg hover:bg-accent"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="border-t border-border my-4" />
                  <div className="flex items-center gap-2 px-4">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://github.com/vuduc0910"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://www.linkedin.com/in/richardvo1412/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="mailto:vuduc1711@gmail.com">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/vuduc0910"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/richardvo1412/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:vuduc1711@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
