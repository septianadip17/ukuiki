// src/components/ContactHighlight.jsx
import { Link } from "react-router-dom";

export default function ContactHighlight({ id }) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl px-4 py-16 text-center bg-primary-light/5 rounded-xl"
    >
      <h2 className="mb-4 text-3xl font-bold text-primary">Hubungi Kami</h2>
      <p className="mb-6 max-w-xl mx-auto text-gray-700">
        Punya pertanyaan tentang produk, event, atau ingin mengajak kolaborasi?
        Kami siap membantu.
      </p>
      <Link
        to="/contact"
        className="inline-block rounded-full bg-primary px-6 py-3 text-white hover:bg-primary-dark"
      >
        Hubungi Sekarang
      </Link>
    </section>
  );
}
