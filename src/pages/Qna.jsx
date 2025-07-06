export default function Qna() {
  return (
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
  );
}
