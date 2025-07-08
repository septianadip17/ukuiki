import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <div id="top">
        {/* HERO */}
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center bg-primary text-white px-4">
          <h1 className="text-5xl font-black mb-4 drop-shadow">UKUiki</h1>
          <p className="max-w-xl text-lg text-white/90 drop-shadow">
            Komunitas ukulele kreatif Indonesia. Temukan ukulele impianmu &
            ikuti event menarik!
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              to="/shop"
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100"
            >
              Lihat Ukulele
            </Link>
            <Link
              to="/events"
              className="bg-primary-light/20 px-6 py-3 rounded-full text-white hover:bg-primary-light/30"
            >
              Lihat Event
            </Link>
          </div>
        </section>

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

        {/* QNA */}
        <Section
          id="qna"
          title="Q&A dan Pemesanan"
          cta={{ label: "Tanya atau Pesan", to: "/qna" }}
        >
          <p className="text-center text-gray-600">
            Punya pertanyaan tentang ukulele atau kelas? Tanyakan di sini!
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
