
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building,
  CircleDollarSign,
  Banknote,
  HandCoins,
  FileImage,
  Users,
  LockKeyhole,
  Rocket,
  BookOpen,
  Menu,
  X,
  Bitcoin,
  ChevronDown,
  BookType,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Reorganized nav items with improved grouping
const navItems = [
  { name: "Home", path: "/", icon: <Banknote className="w-5 h-5" /> },
  
  // Financial Services Group
  {
    name: "Financeiro",
    icon: <Building className="w-5 h-5" />,
    subItems: [
      { name: "Bank", path: "/bank", icon: <Building className="w-5 h-5" /> },
      { name: "Stock", path: "/stock", icon: <HandCoins className="w-5 h-5" /> },
    ]
  },
  
  // Trading group
  {
    name: "Trading",
    icon: <CircleDollarSign className="w-5 h-5" />,
    subItems: [
      { name: "Exchange", path: "/exchange", icon: <CircleDollarSign className="w-5 h-5" /> },
      { name: "Criptomoedas", path: "/crypto-info", icon: <Bitcoin className="w-5 h-5" /> },
    ]
  },
  
  // Digital Assets Group
  {
    name: "Ativos Digitais",
    icon: <FileImage className="w-5 h-5" />,
    subItems: [
      { name: "Tokenizer", path: "/tokenizer", icon: <FileImage className="w-5 h-5" /> },
      { name: "Escrow", path: "/escrow", icon: <LockKeyhole className="w-5 h-5" /> },
    ]
  },
  
  // Community and Learning Group
  {
    name: "Comunidade",
    icon: <Users className="w-5 h-5" />,
    subItems: [
      { name: "Community", path: "/community", icon: <Users className="w-5 h-5" /> },
      { name: "Crowdfunding", path: "/crowdfunding", icon: <Rocket className="w-5 h-5" /> },
    ]
  },
  
  { name: "Concepts", path: "/concepts", icon: <BookOpen className="w-5 h-5" /> },
];

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground font-bold rounded-md p-1.5">
                  GLOBOO
                </span>
                <span className="font-bold text-lg hidden sm:block text-gray-800 dark:text-gray-200">
                  Digital Hub
                </span>
              </Link>
            </div>
            <nav className="hidden md:ml-6 md:flex md:space-x-3">
              {navItems.map((item) => {
                // If the item has subitems, render a dropdown
                if (item.subItems) {
                  return (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger asChild>
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors duration-150 ease-in-out">
                          {item.icon}
                          <span className="ml-2">{item.name}</span>
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="bg-background border shadow-md rounded-md">
                        {item.subItems.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link
                              to={subItem.path}
                              className={`flex items-center px-4 py-2 text-sm rounded-sm ${
                                location.pathname === subItem.path
                                  ? "text-primary bg-primary/10"
                                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                              }`}
                            >
                              {subItem.icon}
                              <span className="ml-2">{subItem.name}</span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                
                // Regular menu item
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/10"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                    } transition-colors duration-150 ease-in-out`}
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="sm"
              className="ml-4 hidden md:block"
            >
              Modo Estudo
            </Button>
            <div className="flex md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6">
            {navItems.map((item) => {
              // Dropdown for mobile
              if (item.subItems) {
                return (
                  <div key={item.name} className="space-y-1 mb-2">
                    <div className="flex items-center py-2 px-3 text-base font-medium rounded-md text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800">
                      {item.icon}
                      <span className="ml-3">{item.name}</span>
                    </div>
                    <div className="pl-4 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 ml-3">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`flex items-center py-2 px-3 text-sm font-medium rounded-md ${
                            location.pathname === subItem.path
                              ? "bg-primary/10 text-primary"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.icon}
                          <span className="ml-3">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              // Regular mobile item
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center py-2 px-3 text-base font-medium rounded-md ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
