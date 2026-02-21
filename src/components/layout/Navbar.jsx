import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F7F6F3]/90 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold text-[#1F1F1F] tracking-tight"
        >
          Teja
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-8 text-sm font-medium text-[#6B6B6B]">

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>

        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="hover:text-[#1F1F1F] transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Navbar;