// src/components/AboutHighlight.jsx
import { Link } from "react-router-dom";
import ukuikiLogo from "../assets/ukuikiLogo.png";

export default function AboutHighlight({ id }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 text-center">
      <img src={ukuikiLogo} alt="Ukuiki Logo" className="mx-auto mb-4 h-20" />
      <h2 className="mb-4 text-3xl font-bold text-primary">Tentang Ukuiki</h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-6">
        Ukuiki adalah komunitas ukulele yang aktif berbagi karya, event, dan
        energi positif. Bergabunglah untuk berkreasi bersama melalui musik!
      </p>

      <Link
        to="/about"
        className="inline-block rounded-full bg-primary px-6 py-3 text-white hover:bg-primary-dark"
      >
        Pelajari Selengkapnya
      </Link>
    </section>
  );
}
