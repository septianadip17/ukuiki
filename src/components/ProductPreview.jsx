// src/components/ProductPreview.jsx
import { Link } from "react-router-dom";
import products from "../data/products";

export default function ProductPreview() {
  return (
    <div className="grid gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
      {products.slice(0, 3).map((p) => (
        <div
          key={p.id}
          className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition"
        >
          <img
            src={p.image}
            alt={p.name}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{p.price}</p>

            {/* Link detail (sementara arahkan ke /shop) */}
            <Link to="/shop" className="text-sm text-primary hover:underline">
              Lihat Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
