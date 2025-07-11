// src/pages/About.jsx
export default function About() {
  return (
    <section className="relative">
      {/* ── Background Gradient ─ */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-white to-primary/5" />

      <div className="mx-auto max-w-5xl px-4 py-16">
        {/* ── Hero Section ─ */}
        <header className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-primary drop-shadow">
            Tentang <span className="text-primary-light">UKUiki</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-700">
            UKUiki adalah komunitas kreatif pecinta ukulele. Kami berbagi
            inspirasi, karya, dan pengetahuan melalui pertemuan offline,
            workshop, serta media sosial.
          </p>
        </header>

        {/* ── 2-Column Layout ─ */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* ── Text Column ─ */}
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="mb-2 text-2xl font-semibold text-primary">
                Misi Kami
              </h2>
              <p>
                Menyebarkan kebahagiaan musik sederhana lewat ukulele—alat musik
                kecil bersenar empat yang gampang dipelajari siapa saja.
                Komunitas ini terbuka untuk semua umur dan latar belakang.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-semibold text-primary">
                Kenapa Ukulele?
              </h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>Mudah dimainkan & terjangkau.</li>
                <li>Portabel—bisa dibawa ke mana saja.</li>
                <li>Cocok untuk kolaborasi dan jam session.</li>
              </ul>
            </section>

            {/* ── Instagram CTA ─ */}
            <a
              href="https://instagram.com/ukuiki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-primary px-6 py-3 font-medium text-white shadow hover:bg-primary-dark"
            >
              Ikuti Instagram Kami
            </a>
          </div>

          {/* ── Instagram Embed ─ */}
          <div className="flex justify-center">
            <div className="w-full overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.instagram.com/ukuiki/embed"
                loading="lazy"
                title="Instagram Ukuiki"
                className="aspect-[4/5] w-full"
                frameBorder="0"
                scrolling="no"
                style={{ backgroundColor: "transparent" }} // ✅ fix warning
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
