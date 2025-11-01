import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "בית", href: "#home" },
  { label: "אודות לוגיקת הלב", href: "#about-logic" },
  { label: "אודות", href: "#about" },
  { label: "קורסים", href: "#courses" },
  { label: "המלצות", href: "#testimonials" },
  { label: "מאמרים", href: "#articles" },
  { label: "הרשמה", href: "#contact" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-background/40 backdrop-blur-md border-b border-border/30",
        "shadow-lg shadow-black/5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <Image
              src="/heart.png"
              alt="לוגיקת הלב"
              width={32}
              height={32}
              className="w-6 h-6 md:w-8 md:h-8"
            />
            לוגיקת הלב
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              const isCTA = item.href === "#contact";
              return (
                <Button
                  key={item.href}
                  variant={isCTA ? "default" : "ghost"}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "text-sm font-bold transition-colors",
                    !isCTA && (isActive
                      ? "text-white bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent")
                  )}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;
                  const isCTA = item.href === "#contact";
                  
                  if (isCTA) {
                    return (
                      <Button
                        key={item.href}
                        variant="default"
                        onClick={() => {
                          scrollToSection(item.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-base font-bold w-full"
                      >
                        {item.label}
                      </Button>
                    );
                  }
                  
                  return (
                    <button
                      key={item.href}
                      onClick={() => {
                        scrollToSection(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "text-right py-3 px-4 rounded-lg text-base font-bold transition-colors",
                        isActive
                          ? "text-white bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

