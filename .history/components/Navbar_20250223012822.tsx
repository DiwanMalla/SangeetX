import { Moon, Search } from "lucide-react";
import Link from "next/link";

const navbarMenu = ["Home", "Categories", "Popular", "About"];
const Navbar = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
              <input />
              <Search />
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
