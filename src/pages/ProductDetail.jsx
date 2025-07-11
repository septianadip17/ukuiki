import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import ImageModal from "../components/ImageModal";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [open, setOpen] = useState(false);

  if (!product) return <div className="p-4">Produk tidak ditemukan</div>;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      {/* klik gambar untuk zoom */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-h-[450px] cursor-zoom-in rounded-lg object-cover shadow"
        onClick={() => setOpen(true)}
      />

      <h1 className="mt-6 text-3xl font-bold text-primary">{product.name}</h1>
      <p className="mt-2 text-gray-600">{product.desc}</p>
      <p className="mt-4 text-xl font-semibold text-primary-light">
        {product.price}
      </p>

      <a
        href={`https://wa.me/6289696135242?text=Halo%20Ukuiki%2C%20saya%20mau%20pesan%20${encodeURIComponent(
          product.name
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-white hover:bg-primary-dark"
      >
        Beli via WhatsApp
      </a>

      {/* Zoom modal */}
      <ImageModal
        isOpen={open}
        onClose={() => setOpen(false)}
        imageSrc={product.image}
        alt={product.name}
      />
    </section>
  );
}
