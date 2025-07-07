// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ukuikiLogo from "../assets/ukuikiLogo.png";

const MenuLink = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block px-4 py-2 rounded-xl transition hover:bg-primary-light/20 ${
        isActive ? "text-primary font-semibold" : "text-gray-700"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const close  = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" onClick={close}>
          <img src={ukuikiLogo} alt="Ukuiki logo" className="h-16 w-auto" />
        </Link>

        {/* —— DESKTOP NAV —— */}
        <nav className="hidden gap-2 md:flex">
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/shop">Shop</MenuLink>
          <MenuLink to="/community">Community</MenuLink>
          <MenuLink to="/events">Events</MenuLink>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
        </nav>

        {/* —— BURGER BUTTON (mobile) —— */}
        <button
          onClick={toggle}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-2xl text-primary hover:bg-primary-light/10 md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* —— MOBILE DROPDOWN —— */}
      {open && (
        <div className="md:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col gap-1 px-4 pb-4">
            <MenuLink to="/"        onClick={close}>Home</MenuLink>
            <MenuLink to="/shop"      onClick={close}>Shop</MenuLink>
            <MenuLink to="/community"      onClick={close}>Community</MenuLink>
            <MenuLink to="/events"  onClick={close}>Events</MenuLink>
            <MenuLink to="/about"     onClick={close}>About</MenuLink>
            <MenuLink to="/contact"   onClick={close}>Contact</MenuLink>
          </nav>
        </div>
      )}
    </header>
  );
}
