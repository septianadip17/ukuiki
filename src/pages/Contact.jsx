export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold text-primary">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Punya pertanyaan, butuh bantuan, atau mau pesan ukulele? Hubungi kami
        melalui WhatsApp, email, atau Instagram. Kami siap membantu!
      </p>

      <ul className="space-y-2 text-gray-700">
        <li>
          📞 WhatsApp:{" "}
          <a
            href="https://wa.me/62818749604"
            target="_blank"
            className="text-primary underline"
          >
            +62 818-749-604
          </a>
        </li>
        <li>
          📧 Email:{" "}
          <a
            href="mailto:ukuikiukulele@gmail.com"
            target="_blank"
            className="text-primary underline"
          >
            ukuikiukulele@gmail.com
          </a>
        </li>
        <li>
          📸 Instagram:{" "}
          <a
            href="https://instagram.com/ukuiki"
            target="_blank"
            className="text-primary underline"
          >
            @ukuiki
          </a>
        </li>
      </ul>
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-primary">
          Tanya Jawab & Pemesanan
        </h1>
        <p className="mb-4 text-gray-700">
          Punya pertanyaan soal ukulele, les, atau workshop? Kirim lewat form di
          bawah ini ya!
        </p>

        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Form QnA Ukuiki"
          >
            Memuat…
          </iframe>
        </div>
      </section>
    </section>
  );
}
