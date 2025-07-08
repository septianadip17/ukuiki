import { Link } from "react-router-dom";
import Header from "../components/Header";

const pages = [
  { title: "Shop", path: "/shop", icon: "🎸" },
  { title: "Community", path: "/community", icon: "📰" },
  { title: "Events", path: "/events", icon: "🎶" },
  { title: "Q&A", path: "/contact", icon: "❓" },
  { title: "About", path: "/about", icon: "ℹ️" },
  { title: "Contact", path: "/contact", icon: "☎️" },
];

export default function Home() {
  return (
    <>
      <Header />

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
