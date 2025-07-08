import React from "react";
import unicornUkulele from "../assets/ukulele/unicorn-ukulele.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      {" "}
      {/* HERO */}
      <section
        className="relative flex min-h-[70vh] items-center bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${unicornUkulele})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-28 "></div>

        {/* Konten kiri */}
        <div className="relative z-10 mx-auto max-w-6xl w-full">
          <div className="w-full max-w-lg text-white">
            <h1 className="mb-4 text-5xl font-black drop-shadow">UKUiki</h1>
            <p className="mb-6 text-lg text-white/90 drop-shadow">
              When art meets music, <br /> paintings and melodies <br /> through
              ukulele.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-full bg-primary-dark px-6 py-3 text-white font-semibold shadow hover:bg-primary-dark/10 transition duration-300 "
              >
                Buy Ukulele
              </Link>
              <Link
                to="/events"
                className="rounded-full bg-primary-light px-6 py-3 text-white hover:bg-primary-light/10 transition duration-300 font-semibold shadow"
              >
                Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
