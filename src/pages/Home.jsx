import ContactForm from "../components/sections/ContactForm";

const Home = () => {
  return (
    <main className="bg-(--color-white) ">
      {/* ── HERO SECTION ── */}
      <section className=" mx-10 bg-hero-gradient relative overflow-hidden min-h-screen flex items-end rounded-4xl">
        {/* Ambient orbs */}
       <div className="orb orb-lime w-[650px] h-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <img src="./handTeja.svg" className="absolute top-6  z-10 w-full" alt="Teja hands" />
        <div className="relative z-20 p-10 w-full flex justify-between">

          <div>
            <h1 className= "text-[#fafafa] text-5xl md:text-7xl font-extrabold">
              Language Solutions <br />
             for Global Growth
            </h1>

            <p className="text-(--color-mint) text-lg md:text-xl max-w-xl leading-relaxed opacity-80">
              Comprehensive translation, transcription, and dubbing services
              tailored to your business.
            </p>
          </div>

          <button className="btn btn-accent mt-4 text-base px-8 py-3 self-end flex-none">
            Start Transcribing
          </button>
        </div>
      </section>

      {/* ── MARQUEE / CLIENTS STRIP ── */}
      <section className="bg-(--color-mint) border-y border-(--color-lime)/30 py-5 overflow-hidden mt-8">
        <div className="marquee-track gap-16">
          {[...Array(2)].flatMap(() =>
            ["bayantech", "Pocket FM", "STORY TV", "Sarvam AI", "Kuku FM"].map(
              (name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="whitespace-nowrap text-sm font-bold text-(--color-forest) flex items-center gap-2"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-(--color-lime)" />
                  {name}
                </span>
              ),
            ),
          )}
        </div>
      </section>

      {/* ── INTRO HEADLINE ── */}
      <section className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="section-tag">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-(--color-black) mb-6 tracking-tight leading-tight">
            Building Seamless <br />
            <span className="text-(--color-forest)">
              AI Translation Solutions
            </span>
          </h2>
          <p className="text-lg text-(--color-charcoal) max-w-2xl mx-auto leading-relaxed opacity-80">
            We empower businesses with intelligent translation, transcription,
            and multilingual communication systems.
          </p>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="card-mint h-80 flex items-center justify-center text-(--color-forest)/40 text-sm font-medium ">
            <img src="./teamImg.svg" alt="" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Text */}
          <div>
            <span className="section-tag">Our Mission</span>
            <h2 className="text-3xl font-bold text-(--color-black) mb-6 leading-snug">
              What We Are Building
            </h2>
            <p className="text-(--color-charcoal) leading-relaxed mb-4 opacity-80">
              Our mission is to simplify multilingual communication. We combine
              AI-powered translation, transcription, and voice technology to
              build scalable language systems.
            </p>
            <p className="text-(--color-charcoal) leading-relaxed opacity-80">
              From enterprise workflows to global media production, we create
              intelligent tools that remove language barriers.
            </p>
            <button className="btn btn-primary mt-8">Learn More</button>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="bg-mint py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag">Services</span>
            <h2 className="text-4xl font-bold text-(--color-black) mt-1">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="🌐"
              num="01"
              title="Translation Services"
              description="Accurate AI-powered translation for documents, media, and enterprise communication across 100+ languages."
              cta="Start Translating"
            />
            <ServiceCard
              icon="🎙️"
              num="02"
              title="Transcription & Recording"
              description="High-quality speech-to-text systems with real-time multilingual transcription and industry-leading accuracy."
              cta="Start Transcribing"
            />
            <ServiceCard
              icon="🎬"
              num="03"
              title="Dubbing & Voiceover"
              description="Natural voice synthesis and dubbing solutions for global media production at any scale."
              cta="Start Dubbing"
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA SECTION ── */}
      <section className="bg-forest py-24 relative overflow-hidden">
        <div className="orb orb-lime w-80 h-80 top-[-60px] right-[-40px] opacity-20" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="section-tag" style={{ color: "var(--color-lime)" }}>
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-white mt-1 mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/60 mb-12 text-lg">
            Tell us about your project and we'll help you scale globally.
          </p>

          <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

const ServiceCard = ({ icon, num, title, description, cta }) => (
  <div className="card bg-(--color-white) p-8 flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <span className="text-3xl">{icon}</span>
      <span className="text-xs font-bold tracking-widest text-(--color-forest)/40 uppercase">
        {num}
      </span>
    </div>
    <h3 className="text-xl font-bold text-(--color-black)">{title}</h3>
    <p className="text-(--color-charcoal) leading-relaxed opacity-80 flex-1">
      {description}
    </p>
    <button className="btn btn-outline self-start text-sm px-5 py-2 mt-2">
      {cta} →
    </button>
  </div>
);

export default Home;
