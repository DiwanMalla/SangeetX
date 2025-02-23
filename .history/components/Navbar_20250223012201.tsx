import Link from "next/link";

const navbarMenu = ["Home", "Categories", "Popular", "About"];
const Navbar = () => {
  return (
    <nav>
      <div>
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
              <Searc
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
