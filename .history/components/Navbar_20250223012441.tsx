import { Moon, Search } from "lucide-react";
import Link from "next/link";

const navbarMenu = ["Home", "Categories", "Popular", "About"];
const Navbar = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto">
        <div>
          <div>
            <Link href={"/"}>
              <span>SangeetX</span>
            </Link>
            <div>
              <div>
                {navbarMenu.map((nav) => (
                  <div key={nav}>
                    <Link href={"/"}>{nav}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div>
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
