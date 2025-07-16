import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import whiteLogo from "../assets/whiteLogo.png"; 

const NAV_ITEMS = [
  { title: "Home", path: "/" },
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
    <footer className="bg-primary text-white pt-3 mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-2 gap-10 sm:grid-cols-4 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center mb-4">
            <img src={whiteLogo} alt="ukuiki logo" className="w-32" />
          </Link>
          <p className="text-sm text-white/80 leading-relaxed">
            When art meets music, paintings and melodies through ukulele.
          </p>
        </div>

        <FooterColumn title="Navigation" items={NAV_ITEMS} />
        <FooterColumn title="About Us" items={ABOUT_ITEMS} />

        <div>
          <h3 className="mb-2 font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary-light transition group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} UKUiki. All rights reserved.
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
