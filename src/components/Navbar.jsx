// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";

const MenuLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-4 py-2 rounded-xl transition hover:bg-primary-light/20 ${
        isActive ? "text-primary font-semibold" : "text-gray-700"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link to="/" className="text-2xl font-black text-primary">
          Ukuiki
        </Link>
        <nav className="hidden gap-2 md:flex">
          <MenuLink to="/shop">Shop</MenuLink>
          <MenuLink to="/news">News</MenuLink>
          <MenuLink to="/workshop">Workshop</MenuLink>
          <MenuLink to="/qna">Q&A</MenuLink>
        </nav>
      </div>
    </header>
  );
}
