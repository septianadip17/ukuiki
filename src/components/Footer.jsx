import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const NAV_ITEMS = [
  { title: "Beranda", path: "/" },
  { title: "Shop", path: "/shop" },
  { title: "Events", path: "/events" },
];

const ABOUT_ITEMS = [
  { title: "About", path: "/about" },
  { title: "Community", path: "/community" },
  { title: "Contact", path: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com/ukuiki",
  },
  {
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/62818749604",
  },
  {
    label: "Email",
    icon: <FaEnvelope />,
    href: "mailto:ukuikiukulele@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-2">Ukuiki</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            When art meets music, paintings and melodies through ukulele.
          </p>
        </div>

        {/* Navigasi */}
        <FooterColumn title="Navigasi" items={NAV_ITEMS} />

        {/* Tentang */}
        <FooterColumn title="Tentang" items={ABOUT_ITEMS} />

        {/* Media Sosial */}
        <div>
          <h3 className="mb-2 font-semibold">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary-light transition"
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Ukuiki. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="hover:text-primary-light transition"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
