import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../utils/constants";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-custom flex justify-between py-4">
        <h3>Teja</h3>

        <div className="flex gap-6">
          {NAV_LINKS.map((item) => (
            <Link key={item.path} to={item.path} className="nav-link">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
