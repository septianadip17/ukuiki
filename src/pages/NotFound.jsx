import { Link } from "react-router-dom";
import { FiHome, FiMusic } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] w-full flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <div className="relative mb-6">
        <h1 className="select-none text-9xl font-black text-gray-200 md:text-[12rem]">
          404
        </h1>

        <div className="absolute inset-0 flex items-center justify-center">
          <FiMusic className="animate-bounce text-6xl text-primary md:text-8xl" />
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-extrabold text-primary md:text-4xl">
        Oops! We Hit a Wrong Note 🎼
      </h2>

      <p className="mx-auto mb-8 max-w-lg text-gray-600 md:text-lg">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-xl"
      >
        <FiHome className="text-xl group-hover:animate-pulse" />
        Back to Home
      </Link>
    </main>
  );
}
