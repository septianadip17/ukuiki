export default function About() {
  return (
    <section className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-white to-primary/5" />

      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero */}
        <header className="text-center mb-12">
          <h1 className="mb-4 text-4xl font-extrabold text-primary drop-shadow">
            About <span className="text-primary-light">UKUiki</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            UKUiki was founded in early 2016 to express our love for art and
            music by painting ukuleles. What began as a personal passion grew
            into something more meaningful.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Text */}
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="mb-2 text-2xl font-semibold text-primary">
                Our Story
              </h2>
              <p>
                Encouraged by positive feedback from friends, family, and
                customers, we began organizing workshops and ukulele classes to
                spread the joy of music and help others learn.
              </p>
              <p>
                To keep in touch with alumni of our classes, we founded the{" "}
                <strong>UKUiki Club</strong> — a friendly community where
                members share ukulele knowledge, jam together, and build
                friendships.
              </p>
              <p>
                Fueled by our shared love of music, the{" "}
                <strong>UKUiki Ensemble</strong> was later formed as a group
                that performs and celebrates ukulele music together.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-semibold text-primary">
                Handpainted Ukuleles
              </h2>
              <p>
                All of our ukuleles are hand-painted with customizable designs,
                making each one personal and unique. We also offer our own
                exclusive collections like the{" "}
                <em>Christmas Series, Fox Series, and Fairy Series</em>.
              </p>
              <p>
                Our products are mainly sold online via Instagram{" "}
                <a
                  href="https://instagram.com/ukuiki"
                  className="text-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ukuiki
                </a>{" "}
                and painted by{" "}
                <a
                  href="https://instagram.com/grazsuwuu"
                  className="text-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @grazsuwuu
                </a>
                .
              </p>
            </section>
          </div>

          {/* Video */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              src="/videos/workshop-highlight.mp4"
              autoPlay
              muted
              loop
              controls
              className="w-full h-full aspect-video object-cover"
            />
          </div>
        </div>

        {/* Image */}
        <div className="mt-4 flex justify-center">
          <img
            src="/ukuiki/kakgraz-painting.jpg"
            alt="UKUiki Ukulele"
            className="max-w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
