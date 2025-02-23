import { Moon, Search } from "lucide-react";
import Link from "next/link";

const navbarMenu = ["Home", "Categories", "Popular", "About"];
const Navbar = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[6.5rem]">
          <div className="flex items-center">
            <Link href={"/"} className="flex-shrink-0">
              <span className="text-xl font-bold">SangeetX</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navbarMenu.map((nav) => (
                  <div key={nav}>
                    <Link
                      href={"/"}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {nav}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 text-white px-4 py-2 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button>
              <Moon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
