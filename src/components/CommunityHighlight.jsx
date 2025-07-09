// src/components/CommunityHighlight.jsx
import { Link } from "react-router-dom";
import ioefImg from "../assets/community/ioef-mbloc.jpg";
import museumImg from "../assets/community/museum-bi.jpg";

export default function CommunityHighlight({ id }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-6 text-3xl font-bold text-primary">
        Kegiatan Komunitas
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {[
          { img: ioefImg, title: "IOEF M Bloc" },
          { img: museumImg, title: "Workshop Museum BI" },
        ].map((event) => (
          <article
            key={event.title}
            className="rounded-2xl overflow-hidden bg-white shadow"
          >
            <img
              src={event.img}
              alt={event.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{event.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/community"
          className="inline-block rounded-full bg-primary px-6 py-3 text-white hover:bg-primary-dark"
        >
          Lihat Semua Kegiatan
        </Link>
      </div>
    </section>
  );
}
