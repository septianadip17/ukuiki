import { Link } from "react-router-dom";
import ukuikiLogo from "../assets/ukuikiLogo.png";

const pages = [
  { title: "Shop",     path: "/shop",     icon: "🎸" },
  { title: "Community",     path: "/community",     icon: "📰" },
  { title: "Events", path: "/events", icon: "🎶" },
  { title: "Q&A",      path: "/qna",      icon: "❓" },
  { title: "About",    path: "/about",    icon: "ℹ️" },
  { title: "Contact",  path: "/contact",  icon: "☎️" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="flex min-h-[60vh] items-center justify-center bg-primary/[0.05] px-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-black tracking-tight text-primary">
            Selamat Datang di <img src={ukuikiLogo} alt="ukuiki logo" className="inline h-32 w-auto" />
          </h1>
          <p className="mx-auto mb-6 max-w-md text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam rem eum omnis maxime earum modi, atque necessitatibus sapiente a voluptates perferendis sed dolore tempore temporibus quis vero commodi numquam.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/shop"
              className="rounded-full bg-primary px-6 py-3 text-white shadow hover:bg-primary-dark"
            >
              Lihat Ukulele
            </Link>
            <Link
              to="/workshop"
              className="rounded-full bg-primary-light/10 px-6 py-3 text-primary hover:bg-primary-light/20"
            >
              Jadwal Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* MENU PAGES */}
      <section className="mx-auto mt-12 max-w-6xl px-4 pb-12">
        <h2 className="mb-6 text-2xl font-bold text-primary">Jelajahi Halaman</h2>

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
