import { Link } from "react-router-dom";

export default function ContactHighlight() {
  return (
    <div className="bg-primary-light/10 p-6 rounded-lg text-center shadow">
      <h3 className="text-xl font-bold text-primary mb-2">Kontak Kami</h3>
      <p className="text-gray-700 mb-4">
        Ada pertanyaan, saran, atau ide kolaborasi? Yuk, ngobrol langsung dengan tim kami!
      </p>
      <Link
        to="/contact"
        className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
      >
        Hubungi Kami
      </Link>
    </div>
  );
}
