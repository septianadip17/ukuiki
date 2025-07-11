import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";

export default function ImageModal({ isOpen, onClose, imageSrc, alt }) {
  // Fungsi untuk menangani Escape
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  // Tambah event listener ketika modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg max-w-lg w-full">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full object-contain max-h-[80vh]"
        />
        <div className="flex justify-center p-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <FiX className="text-xl" />
            Tutup Gambar
          </button>
        </div>
      </div>
    </div>
  );
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
