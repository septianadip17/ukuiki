
import { Link } from "react-router-dom";

export default function AboutHighlight() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="md:w-1/2">
        <h3 className="text-xl font-bold text-primary mb-2">Tentang UKUiki</h3>
        <p className="text-gray-700 mb-4">
          UKUiki adalah rumah bagi para pecinta ukulele dari berbagai latar belakang. Kami percaya bahwa musik bisa menyatukan semua orang.
        </p>
        <Link
          to="/about"
          className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
        >
          Tentang Kami
        </Link>
      </div>
      <img
        src="/ukuiki/kakgraz-painting.jpg"
        alt="About UKUiki"
        className="md:w-1/2 w-full rounded-lg shadow"
      />
    </div>
  );
}
