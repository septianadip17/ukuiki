import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import products from "../data/products";
import ImageModal from "../components/ImageModal";
import ProductPreview from "../components/ProductPreview";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const currentIndex = products.findIndex((p) => p.id === Number(productId));
  const product = products[currentIndex];
  const prevProduct =
    products[(currentIndex - 1 + products.length) % products.length];
  const nextProduct = products[(currentIndex + 1) % products.length];

  if (!product) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-primary">
          Produk tidak ditemukan
        </h1>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 inline-block rounded-full bg-primary px-6 py-2 text-white"
        >
          <FiShoppingBag className="inline mr-2" />
          Back to Shop
        </button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Gambar dengan efek hover */}
        <div
          className="flex-1 relative group cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-lg w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Detail Produk */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-primary mb-2">
            {product.name}
          </h1>
          <p className="text-gray-700 mb-4">{product.desc}</p>
          <p className="text-xl font-semibold text-primary-light mb-4">
            {product.price}
          </p>

          <a
            href={`https://wa.me/6289696135242?text=Halo%20Ukuiki,%20saya%20tertarik%20dengan%20${encodeURIComponent(
              product.name
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition"
          >
            Beli via WhatsApp
          </a>
        </div>
      </div>

      {/* Tombol navigasi */}
      <div className="flex flex-col sm:flex-row justify-between mt-10 gap-4">
        <button
          onClick={() => navigate(`/shop/${prevProduct.id}`)}
          className="text-sm text-primary hover:underline"
        >
          ← {prevProduct.name}
        </button>
        <button
          onClick={() => navigate("/shop")}
          className="text-sm text-primary hover:underline flex items-center gap-1"
        >
          <FiShoppingBag /> Kembali ke Shop
        </button>
        <button
          onClick={() => navigate(`/shop/${nextProduct.id}`)}
          className="text-sm text-primary hover:underline"
        >
          {nextProduct.name} →
        </button>
      </div>

      {/* Produk lainnya */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-4">Produk Lainnya</h2>
        <ProductPreview excludeId={product.id} />
      </div>

      {/* Modal Gambar */}
      <ImageModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        imageSrc={product.image}
        alt={product.name}
      />
    </section>
  );
}
