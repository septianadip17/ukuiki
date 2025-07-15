import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import products from "../data/products";

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-primary">
          Shop Our Unique Ukuleles
        </h1>

        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-700 shadow-sm focus:border-primary focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <Link
              key={p.id}
              to={`/shop/${p.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full aspect-square object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="flex flex-1 flex-col p-4">
                <h2 className="text-lg font-semibold text-primary">{p.name}</h2>
                <p className="mb-2 text-sm text-gray-500 line-clamp-2">
                  {p.desc}
                </p>
                <span className="mb-4 font-bold text-primary-light">
                  {p.price}
                </span>
                <span className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-4 py-2 text-sm text-white hover:bg-primary-dark transition">
                  <FiSearch />
                  See Details
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}
