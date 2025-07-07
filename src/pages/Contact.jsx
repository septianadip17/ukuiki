export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold text-primary">Kontak Kami</h1>
      <p className="text-gray-700 mb-6">
        Ingin kerja sama, mengundang workshop, atau bertanya langsung? Hubungi
        kami di:
      </p>

      <ul className="space-y-2 text-gray-700">
        <li>
          📞 WhatsApp:{" "}
          <a
            href="https://wa.me/62818749604"
            className="text-primary underline"
          >
            +62 818-749-604
          </a>
        </li>
        <li>
          📧 Email:{" "}
          <a href="mailto:ukuikiukulele@gmail.com" className="text-primary underline">
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
    </section>
  );
}
