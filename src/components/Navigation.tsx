
import { useState } from "react";
import { Menu, X, ChevronDown, User, Info, Package, CreditCard, Phone, Database, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const primaryNavItems = [
  { name: "Home", href: "/" },
  { name: "Promotion", href: "/promotion" },
  { name: "Careers", href: "/careers" },
  { name: "Publication", href: "/publication" },
  { name: "Downloads", href: "/downloads" },
  { name: "Branches", href: "/branches" },
  { name: "Tender", href: "/tender" },
  { name: "FAQs", href: "/faqs" },
  { name: "Calculator", href: "/calculator" },
];

const membershipItems = [
  { name: "Individual Membership", href: "/membership/individual", icon: User },
  { name: "Joint Membership", href: "/membership/joint", icon: Users },
  { name: "Group Membership", href: "/membership/group", icon: Users },
  { name: "Corporate Membership", href: "/membership/corporate", icon: Users },
];

const secondaryNavItems = [
  { name: "About Us", href: "/about", icon: Info },
  { name: "Our Products", href: "/products", icon: Package },
  { name: "Payment Options", href: "/payments", icon: CreditCard },
  { name: "Contacts", href: "/contacts", icon: Phone },
  { name: "Resources", href: "/resources", icon: Database },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="border-b border-neutral-200 bg-[#F97316]">
        <nav className="container flex items-center justify-end h-10 text-sm">
          {secondaryNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-1 text-white hover:text-white/80 transition-colors"
            >
              <item.icon className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <nav className="container flex items-center justify-between h-16">
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
          <img src="/images/logo.png" alt="SETYON SACCO" className="h-12 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center space-x-1">
          {primaryNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-neutral-700 hover:text-[#F97316] transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-4 py-2 text-neutral-700 hover:text-[#F97316] transition-colors">
              Membership
              <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {membershipItems.map((item) => (
                <DropdownMenuItem key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center gap-2"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-neutral-700" />
          ) : (
            <Menu className="w-6 h-6 text-neutral-700" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden absolute top-[100px] left-0 w-full bg-white border-t border-neutral-200 shadow-lg">
          <div className="container py-4">
            {primaryNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-neutral-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-neutral-200 mt-2 pt-2">
              {membershipItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-neutral-700 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
