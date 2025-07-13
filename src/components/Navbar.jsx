import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { FiMenu, FiX } from "react-icons/fi";
import ukuikiLogo from "../assets/ukuikiLogo.png";

/* ---------- Data menu utama ---------- */
const MENU = [
  { label: "Home", hash: "#top", page: "/" },
  { label: "Shop", hash: "#shop", page: "/shop" },
  { label: "Community", hash: "#community", page: "/community" },
  { label: "Events", hash: "#events", page: "/events" },
  { label: "About", hash: "#about", page: "/about" },
  { label: "Contact", hash: "#contact", page: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const isLanding = pathname === "/";

  useEffect(() => setOpen(false), [pathname, hash]);

  const MenuItem = ({ item, mobile }) => {
    const dest = isLanding ? `/${item.hash}` : item.page;
    const isActive = isLanding ? hash === item.hash : pathname === item.page;
    const Component = dest.includes("#") ? NavHashLink : NavLink;

    return (
      <Component
        to={dest}
        smooth={dest.includes("#") ? true : undefined}
        aria-current={isActive ? "page" : undefined}
        className={`block rounded-xl px-4 py-2 transition hover:bg-primary-light/20  ${
          isActive
            ? "text-primary font-bold bg-primary-light/10"
            : "text-gray-700 font-extrabold"
        } ${mobile ? "" : "text-sm"}`}
      >
        {item.label}
      </Component>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <NavHashLink smooth to="/#top" className="flex items-center">
          <img src={ukuikiLogo} alt="Ukuiki logo" className="h-14 w-auto" />
        </NavHashLink>

        <nav className="hidden gap-2 md:flex">
          {MENU.map((item) => (
            <MenuItem key={item.label} item={item} />
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-2xl text-primary hover:bg-primary-light/10 md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pb-4">
            {MENU.map((item) => (
              <MenuItem key={item.label} item={item} mobile />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
