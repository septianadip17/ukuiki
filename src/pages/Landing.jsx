import Hero from "../components/Hero";
import Section from "../components/Section";

export default function Landing() {
  return (
    <div id="top">
      <Hero />

      <Section
        id="shop"
        title="Ukulele Ready Stock"
        cta={{ label: "Lihat Semua Produk", to: "/shop" }}
      >
        <p className="text-center text-gray-600">
          Cek koleksi ukulele pilihan kami 🎸
        </p>
        {/* TODO: Tambahkan 3 produk populer di sini */}
      </Section>

      <Section
        id="community"
        title="Community Highlights"
        cta={{ label: "Baca Selengkapnya", to: "/community" }}
      >
        <p className="text-center text-gray-600">
          Lihat aktivitas komunitas dan dokumentasi seru kami 📰
        </p>
      </Section>

      <Section
        id="events"
        title="Event Terdekat"
        cta={{ label: "Lihat Semua Event", to: "/events" }}
      >
        <p className="text-center text-gray-600">
          Ikuti jadwal workshop, konser ukulele, dan lebih banyak keseruan 🎶
        </p>
      </Section>

      <Section
        id="about"
        title="Tentang UKUiki"
        cta={{ label: "Lihat Detail", to: "/about" }}
      >
        <p className="text-center text-gray-600">
          Kenalan lebih dekat dengan komunitas UKUiki 💜
        </p>
      </Section>

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
  );
}
