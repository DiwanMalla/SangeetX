import { Search } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navbarMenu = ["Home", "Categories", "Popular", "About"];

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 bg-foreground dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[6.5rem]">
          {/* Logo & Menu */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                SangeetX
              </span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navbarMenu.map((nav) => (
                  <Link
                    key={nav}
                    href="/"
                    className="px-3 py-2 rounded-md text-sm font-medium transition duration-300 
                      text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 
                      hover:text-gray-900 dark:hover:text-white"
                  >
                    {nav}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Search & Theme Toggle */}
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 pr-10 rounded-full transition duration-300 focus:outline-none 
                focus:ring-2 focus:ring-blue-400 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 
                text-gray-500 dark:text-gray-300"
              />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
