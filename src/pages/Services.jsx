const services = [
  {
    icon: "🌐",
    num: "01",
    title: "Translation Services",
    tagline: "Speak Every Language. Mean Every Word.",
    description:
      "Accurate AI-powered translation for documents, contracts, media, and enterprise communication across 100+ languages. Our hybrid human-AI pipeline ensures cultural nuance is never lost.",
    features: ["100+ Languages", "Document & Media", "Legal & Technical", "Real-time API"],
    cta: "Start Translating",
    accent: "var(--color-forest)",
  },
  {
    icon: "🎙️",
    num: "02",
    title: "Transcription & Recording",
    tagline: "Every Word. Captured Perfectly.",
    description:
      "High-quality speech-to-text with real-time multilingual transcription. From boardroom meetings to podcast recordings, our engine delivers industry-leading accuracy at scale.",
    features: ["Real-time Transcription", "Speaker Diarization", "Custom Vocabulary", "99.8% Accuracy"],
    cta: "Start Transcribing",
    accent: "var(--color-lime)",
  },
  {
    icon: "🎬",
    num: "03",
    title: "Dubbing & Voiceover",
    tagline: "Your Story. Any Voice. Any Language.",
    description:
      "Natural voice synthesis and lip-synced dubbing solutions for global media production. Scale your content to any market without sacrificing emotion or authenticity.",
    features: ["300+ Voice Models", "Lip-sync Dubbing", "Emotion Preservation", "Broadcast Ready"],
    cta: "Start Dubbing",
    accent: "var(--color-mint)",
  },
];

const process = [
  { step: "01", title: "Submit Your Content", desc: "Upload documents, audio, or video — any format, any size." },
  { step: "02", title: "AI + Human Review", desc: "Our pipeline runs AI processing followed by expert linguistic review." },
  { step: "03", title: "Quality Assurance", desc: "Every output passes our multi-layer accuracy and cultural QA check." },
  { step: "04", title: "Deliver & Integrate", desc: "Receive outputs via dashboard, API, or direct integration." },
];

const faqs = [
  {
    q: "How fast can you deliver translations?",
    a: "Standard documents are ready in under 24 hours. Real-time API responses average under 200ms for most language pairs.",
  },
  {
    q: "Do you support low-resource languages?",
    a: "Yes. We support 100+ languages including many low-resource languages across South Asia, Africa, and Southeast Asia.",
  },
  {
    q: "Is my content kept confidential?",
    a: "Absolutely. All content is encrypted in transit and at rest. We offer NDA-backed enterprise plans with zero data retention.",
  },
  {
    q: "Can I integrate via API?",
    a: "Yes — we offer REST and WebSocket APIs with SDKs for Python, Node.js, and more. Full docs available on sign-up.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-(--color-white)">

      {/* ── HERO ── */}
      <section className="mx-10 bg-hero-gradient relative overflow-hidden min-h-[60vh] flex items-end rounded-4xl">
        <div className="orb orb-lime w-[500px] h-72 absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2" />
        <div className="orb orb-lime w-48 h-48 absolute bottom-0 right-16 opacity-25" />

        <div className="relative z-20 p-10 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="section-tag" style={{ color: "var(--color-lime)" }}>
              What We Offer
            </span>
            <h1 className="text-[#fafafa] text-5xl md:text-7xl font-extrabold mt-3 leading-tight">
              Services Built <br />
              <span className="text-(--color-lime)">for Scale.</span>
            </h1>
            <p className="text-(--color-mint) text-lg md:text-xl max-w-xl leading-relaxed opacity-80 mt-4">
              Translation, transcription, and dubbing — end-to-end language
              infrastructure for modern businesses.
            </p>
          </div>
          <button className="btn btn-accent text-base px-8 py-3 self-end flex-none mb-10 md:mb-0">
            Get a Quote
          </button>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="bg-(--color-mint) border-y border-(--color-lime)/30 py-5 overflow-hidden mt-8">
        <div className="marquee-track gap-16">
          {[...Array(2)].flatMap(() =>
            ["Translation", "Transcription", "Dubbing", "Voiceover", "Subtitling", "Localisation"].map(
              (name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="whitespace-nowrap text-sm font-bold text-(--color-forest) flex items-center gap-2"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-(--color-lime)" />
                  {name}
                </span>
              )
            )
          )}
        </div>
      </section>

      {/* ── SERVICES DETAIL ── */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-28">
          {services.map(({ icon, num, title, tagline, description, features, cta, accent }, idx) => (
            <div
              key={num}
              className={`grid md:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Visual Card */}
              <div className="card-mint h-80 flex flex-col items-center justify-center rounded-2xl relative overflow-hidden gap-4">
                <div className="orb orb-lime w-48 h-48 absolute -bottom-10 -right-10 opacity-30" />
                <span className="text-7xl relative z-10">{icon}</span>
                <span
                  className="text-xs font-bold tracking-widest uppercase relative z-10"
                  style={{ color: accent }}
                >
                  Service {num}
                </span>
              </div>

              {/* Text */}
              <div>
                <span className="section-tag">{tagline}</span>
                <h2 className="text-3xl font-bold text-(--color-black) mb-4 leading-snug mt-2">
                  {title}
                </h2>
                <p className="text-(--color-charcoal) leading-relaxed opacity-80 mb-6">
                  {description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {features.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-bold px-3 py-1.5 rounded-full bg-(--color-mint) text-(--color-forest) uppercase tracking-wider"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <button className="btn btn-primary">{cta} →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-mint py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag">The Process</span>
            <h2 className="text-4xl font-bold text-(--color-black) mt-1">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map(({ step, title, desc }, idx) => (
              <div key={step} className="relative">
                {/* Connector line */}
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-(--color-lime)/40 z-0 -translate-x-4" />
                )}
                <div className="card bg-(--color-white) p-6 flex flex-col gap-3 relative z-10">
                  <span className="text-xs font-bold tracking-widest text-(--color-forest)/40 uppercase">
                    Step {step}
                  </span>
                  <h3 className="text-lg font-bold text-(--color-black)">{title}</h3>
                  <p className="text-(--color-charcoal) text-sm leading-relaxed opacity-80">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag">Got Questions?</span>
            <h2 className="text-4xl font-bold text-(--color-black) mt-1">
              Frequently Asked
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="card bg-(--color-white) p-8">
                <h3 className="text-lg font-bold text-(--color-black) mb-3">{q}</h3>
                <p className="text-(--color-charcoal) leading-relaxed opacity-80">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-forest py-24 relative overflow-hidden mx-10 rounded-4xl mb-16">
        <div className="orb orb-lime w-80 h-80 top-[-60px] right-[-40px] opacity-20" />
        <div className="orb orb-lime w-48 h-48 bottom-[-30px] left-10 opacity-10" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="section-tag" style={{ color: "var(--color-lime)" }}>
            Ready to Scale?
          </span>
          <h2 className="text-4xl font-bold text-white mt-1 mb-4">
            Let's Find the Right Plan for You
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            From startups to enterprises — we have a solution that fits your
            language needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-accent text-base px-8 py-3">
              Start for Free
            </button>
            <button className="btn btn-outline text-base px-8 py-3 border-white/30 text-white hover:bg-white/10">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}