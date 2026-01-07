import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Membership", path: "/membership" },
    { name: "Reviews", path: "/reviews" },
  ];

  const toolsLinks = [
    { name: "Healthy Tips", path: "/healthy-tips", icon: "💡" },
    { name: "Cost Estimator", path: "/cost-estimator", icon: "💰" },
    { name: "Symptom Checker", path: "/symptom-checker", icon: "🔍" },
    { name: "Smile Test", path: "/smile-test", icon: "😊" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-2"
        : "bg-background/50 border-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-xl font-serif font-bold text-primary">D</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground">DentalCare</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive(link.path)
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-4 py-2 rounded-full text-sm font-medium transition-all text-muted-foreground hover:text-primary hover:bg-muted/50 flex items-center gap-1">
                  Tools
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl border-border/50 shadow-lg bg-card/95 backdrop-blur-sm">
                {toolsLinks.map((tool) => (
                  <DropdownMenuItem key={tool.path} asChild className="rounded-lg focus:bg-muted cursor-pointer">
                    <Link to={tool.path} className="flex items-center gap-2 py-2">
                      <span className="text-base">{tool.icon}</span>
                      <span className="font-medium">{tool.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary rounded-full">
              <Phone className="h-4 w-4" />
              <span className="font-medium">Call Us</span>
            </Button>
            <Link to="/booking">
              <Button size="sm" className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all">
                Book Visit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu (Sheet) */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 rounded-full hover:bg-muted/50 text-foreground transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l-border/50 bg-background/95 backdrop-blur-xl p-6">
              <SheetHeader className="mb-8 text-left">
                <SheetTitle className="text-2xl font-serif font-bold text-foreground">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors ${isActive(link.path)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="h-px bg-border/50" />

                <div className="grid grid-cols-2 gap-2">
                  {toolsLinks.map((tool) => (
                    <Link
                      key={tool.path}
                      to={tool.path}
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors gap-2"
                    >
                      <span className="text-xl">{tool.icon}</span>
                      <span className="text-xs font-medium text-center">{tool.name}</span>
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <Link to="/booking" className="w-full">
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90 h-12 text-base shadow-sm">
                      Book Appointment
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full rounded-full border-primary/20 hover:bg-primary/5 h-12 text-base gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
