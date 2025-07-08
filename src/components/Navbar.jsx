import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ukuikiLogo from "../assets/ukuikiLogo.png";

/* ---------- Konfigurasi satu pintu ---------- */
const MENU = [
  { label: "Home",      hash: "#top",        page: "/" },
  { label: "Shop",      hash: "#shop",       page: "/shop" },
  { label: "Community", hash: "#community",  page: "/community" },
  { label: "Events",    hash: "#events",     page: "/events" },
  { label: "About",     hash: "#about",      page: "/about" },
  { label: "Contact",   hash: "#contact",    page: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  /* Tutup dropdown mobile tiap kali rute (atau hash) berubah */
  useEffect(() => setOpen(false), [pathname, hash]);

  /* ----- Komponen item menu ----- */
  const MenuItem = ({ item, mobile = false }) => {
    // aktif bila:  ➜ posisi di landing + hash sama,   atau  ➜ di page penuh
    const isActive =
      (pathname === "/" && hash === item.hash) || pathname === item.page;

    return (
      <NavHashLink
        smooth
        to={`/${item.hash}`}      /* selalu menuju landing+hash */
        className={`block rounded-xl px-4 py-2 transition hover:bg-primary-light/20 ${
          isActive ? "text-primary font-semibold" : "text-gray-700"
        } ${mobile ? "" : "text-sm"}`}
      >
        {item.label}
      </NavHashLink>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* ----- Logo ----- */}
        <NavHashLink smooth to="/#top" className="flex items-center">
          <img src={ukuikiLogo} alt="Ukuiki logo" className="h-14 w-auto" />
        </NavHashLink>

        {/* ----- Desktop nav ----- */}
        <nav className="hidden gap-2 md:flex">
          {MENU.map((item) => (
            <MenuItem key={item.hash} item={item} />
          ))}
        </nav>

        {/* ----- Burger button (mobile) ----- */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-2xl text-primary hover:bg-primary-light/10 md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ----- Mobile dropdown ----- */}
      {open && (
        <nav className="md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pb-4 ">
            {MENU.map((item) => (
              <MenuItem key={item.hash} item={item} mobile />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
