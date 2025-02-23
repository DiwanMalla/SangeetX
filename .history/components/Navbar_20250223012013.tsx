import Link from "next/link";

const navbarMenu = ["Home","Categories","Popular","About"]
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
                    {navbarMenu.map((nav)=><div><Link></Link></Link></div>)}
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
