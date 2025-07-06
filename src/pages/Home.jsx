import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-primary/[0.05] px-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-black tracking-tight text-primary">
          Selamat Datang di Ukuiki
        </h1>
        <p className="mx-auto mb-6 max-w-md text-gray-600">
          Komunitas ukulele Indonesia — jual ukulele, sharing berita, dan
          workshop belajar bareng!
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
  );
}
