import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <div>
            <Link href={"/"}>
              <span>SangeetX</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
