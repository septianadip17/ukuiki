import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Landing() {
  return (
    <>
      <div id="top">
        {/* HERO */}
        <Header />

        {/* SHOP */}
        <Section
          id="shop"
          title="Ukulele Ready Stock"
          cta={{ label: "Lihat Semua Produk", to: "/shop" }}
        >
          <p className="text-center text-gray-600">
            Cek koleksi ukulele pilihan kami 🎸
          </p>
          {/* placeholder: kamu bisa masukkan 3 produk favorit */}
        </Section>

        {/* COMMUNITY */}
        <Section
          id="community"
          title="Community Highlights"
          cta={{ label: "Baca Selengkapnya", to: "/community" }}
        >
          <p className="text-center text-gray-600">
            Lihat aktivitas komunitas dan dokumentasi seru kami 📰
          </p>
        </Section>

        {/* EVENTS */}
        <Section
          id="events"
          title="Event Terdekat"
          cta={{ label: "Lihat Semua Event", to: "/events" }}
        >
          <p className="text-center text-gray-600">
            Ikuti jadwal workshop, konser ukulele, dan lebih banyak keseruan 🎶
          </p>
        </Section>

        {/* ABOUT */}
        <Section
          id="about"
          title="Tentang UKUiki"
          cta={{ label: "Lihat Detail", to: "/about" }}
        >
          <p className="text-center text-gray-600">
            Kenalan lebih dekat dengan komunitas UKUiki 💜
          </p>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          title="Kontak Kami"
          cta={{ label: "Hubungi Kami", to: "/contact" }}
        >
          <p className="text-center text-gray-600">
            Punya pertanyaan atau kerja sama? Kami siap bantu!
          </p>
        </Section>
      </div>
    </>
  );
}

function Section({ id, title, cta, children }) {
  return (
    <section id={id} className="px-4 py-16 mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
      {children}
      <div className="mt-6 text-center">
        <Link
          to={cta.to}
          className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark"
        >
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
