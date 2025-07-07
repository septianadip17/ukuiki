// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-2">Ukuiki</h2>
          <p className="text-sm text-white/80">
            When art meets music, paintings and melodies through ukulele.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="mb-2 font-semibold">Navigasi</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:underline">
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Tentang */}
        <div>
          <h3 className="mb-2 font-semibold">Tentang</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:underline">
                Community
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Media Sosial */}
        <div>
          <h3 className="mb-2 font-semibold">Ikuti Kami</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="https://instagram.com/ukuiki"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                📸 Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/62XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                💬 WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:halo@ukuiki.com" className="hover:underline">
                ✉️ Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Ukuiki. All rights reserved.
      </div>
    </footer>
  );
}
