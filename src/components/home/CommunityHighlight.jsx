
import { Link } from "react-router-dom";

export default function CommunityHighlight() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-6">
      <div className="md:w-1/2">
        <h3 className="text-xl font-bold text-primary mb-2">Kegiatan Komunitas</h3>
        <p className="text-gray-700 mb-4">
          Dari konser di MBloc hingga gathering santai, UKUiki selalu punya cerita seru!
        </p>
        <Link
          to="/community"
          className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
        >
          Lihat Dokumentasi
        </Link>
      </div>
      <img
        src="/community/concert-at-gripa.jpeg"
        alt="Community event"
        className="md:w-1/2 w-full rounded-lg shadow"
      />
    </div>
  );
}
