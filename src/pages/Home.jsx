import { Link } from "react-router-dom";
import unicornUkulele from "../assets/ukulele/unicorn-ukulele.jpg";

const pages = [
  { title: "Shop", path: "/shop", icon: "🎸" },
  { title: "Community", path: "/community", icon: "📰" },
  { title: "Events", path: "/events", icon: "🎶" },
  { title: "Q&A", path: "/qna", icon: "❓" },
  { title: "About", path: "/about", icon: "ℹ️" },
  { title: "Contact", path: "/contact", icon: "☎️" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative flex min-h-[70vh] items-center bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${unicornUkulele})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Konten kiri */}
        <div className="relative z-10 mx-auto max-w-6xl w-full">
          <div className="w-full max-w-lg text-white">
            <h1 className="mb-4 text-5xl font-black drop-shadow">UKUiki</h1>
            <p className="mb-6 text-lg text-white/90 drop-shadow">
              Komunitas ukulele Indonesia yang seru dan kreatif. Temukan ukulele
              impianmu & ikuti kegiatan seru bersama kami!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-full bg-white px-6 py-3 text-primary font-semibold shadow hover:bg-gray-100"
              >
                Lihat Ukulele
              </Link>
              <Link
                to="/events"
                className="rounded-full bg-primary-light/20 px-6 py-3 text-white hover:bg-primary-light/30"
              >
                Jadwal Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MENU PAGES */}
      <section className="mx-auto mt-12 max-w-6xl px-4 pb-12">
        <h2 className="mb-6 text-2xl font-bold text-primary">
          Jelajahi Halaman
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className="group flex items-center gap-4 rounded-2xl bg-white p-6 shadow transition hover:bg-primary-light/10 hover:shadow-lg"
            >
              <span className="text-3xl">{p.icon}</span>
              <span className="text-lg font-medium group-hover:text-primary">
                {p.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
