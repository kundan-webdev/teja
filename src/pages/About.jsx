const stats = [
  { value: "100+", label: "Languages Supported" },
  { value: "50M+", label: "Words Translated" },
  { value: "200+", label: "Enterprise Clients" },
  { value: "99.8%", label: "Accuracy Rate" },
];

const team = [
  {
    name: "Aisha Mehta",
    role: "CEO & Co-founder",
    bio: "Former NLP lead at Google. Passionate about breaking language barriers at scale.",
    emoji: "👩🏽‍💼",
  },
  {
    name: "Rohan Desai",
    role: "CTO & Co-founder",
    bio: "10 years building real-time speech systems. Previously at DeepMind.",
    emoji: "👨🏽‍💻",
  },
  {
    name: "Lena Fischer",
    role: "Head of Linguistics",
    bio: "Computational linguist with expertise across 30+ language families.",
    emoji: "👩🏼‍🔬",
  },
  {
    name: "Kwame Asante",
    role: "Head of Partnerships",
    bio: "Built global distribution networks for media companies across 4 continents.",
    emoji: "👨🏿‍🤝",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Precision First",
    description:
      "We obsess over accuracy. Every translated word carries meaning — we treat it that way.",
  },
  {
    icon: "🌍",
    title: "Globally Minded",
    description:
      "Our systems are built for the world, not one region. Culture and context always matter.",
  },
  {
    icon: "⚡",
    title: "Speed Without Compromise",
    description:
      "Real-time performance at enterprise scale — latency and quality are not trade-offs.",
  },
  {
    icon: "🤝",
    title: "People + AI",
    description:
      "We believe the best language solutions combine cutting-edge AI with human expertise.",
  },
];

export default function About() {
  return (
    <main className="bg-(--color-white)">

      {/* ── HERO ── */}
      <section className="mx-10 bg-hero-gradient relative overflow-hidden min-h-[60vh] flex items-end rounded-4xl">
        <div className="orb orb-lime w-[500px] h-72 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2" />
        <div className="orb orb-lime w-64 h-64 absolute bottom-0 right-10 opacity-30" />

        <div className="relative z-20 p-10 w-full">
          <span className="section-tag" style={{ color: "var(--color-lime)" }}>
            About Us
          </span>
          <h1 className="text-[#fafafa] text-5xl md:text-7xl font-extrabold mt-3 leading-tight">
            We Speak <br />
            <span className="text-(--color-lime)">Every Language.</span>
          </h1>
          <p className="text-(--color-mint) text-lg md:text-xl max-w-xl leading-relaxed opacity-80 mt-4 mb-10">
            Teja is a team of linguists, engineers, and storytellers on a mission
            to make language a bridge, not a barrier.
          </p>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-(--color-mint) border-y border-(--color-lime)/30 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold text-(--color-forest)">{value}</p>
              <p className="text-sm font-semibold text-(--color-forest)/60 mt-1 uppercase tracking-widest">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-tag">Our Story</span>
            <h2 className="text-3xl font-bold text-(--color-black) mb-6 leading-snug mt-2">
              Born from a Frustration <br /> with Language Friction
            </h2>
            <p className="text-(--color-charcoal) leading-relaxed mb-4 opacity-80">
              In 2021, our founders watched a promising international partnership
              collapse over a single mistranslated contract clause. That moment
              crystallized a conviction: the world's best businesses shouldn't be
              held back by language.
            </p>
            <p className="text-(--color-charcoal) leading-relaxed opacity-80">
              We built Teja to combine the speed of AI with the nuance of human
              linguistics — creating a platform that enterprises actually trust
              for high-stakes communication.
            </p>
            <button className="btn btn-primary mt-8">See Our Work</button>
          </div>

          <div className="card-mint h-80 flex items-center justify-center rounded-2xl relative overflow-hidden">
            {/* Decorative orb inside card */}
            <div className="orb orb-lime w-48 h-48 absolute -bottom-8 -right-8 opacity-40" />
            <div className="relative z-10 text-center px-8">
              <p className="text-5xl mb-4">🌐</p>
              <p className="text-(--color-forest) font-bold text-lg">
                Founded 2021 · Remote-first · Global team of 60+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-mint py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag">What Drives Us</span>
            <h2 className="text-4xl font-bold text-(--color-black) mt-1">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map(({ icon, title, description }) => (
              <div key={title} className="card bg-(--color-white) p-8 flex gap-6 items-start">
                <span className="text-3xl flex-none">{icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-(--color-black) mb-2">{title}</h3>
                  <p className="text-(--color-charcoal) leading-relaxed opacity-80">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag">The People</span>
            <h2 className="text-4xl font-bold text-(--color-black) mt-1">
              Meet the Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map(({ name, role, bio, emoji }) => (
              <div
                key={name}
                className="card bg-(--color-white) p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-(--color-mint) flex items-center justify-center text-3xl">
                  {emoji}
                </div>
                <div>
                  <h3 className="font-bold text-(--color-black) text-lg">{name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-(--color-forest)/50 mt-0.5">
                    {role}
                  </p>
                </div>
                <p className="text-(--color-charcoal) text-sm leading-relaxed opacity-80">
                  {bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN US CTA ── */}
      <section className="bg-forest py-24 relative overflow-hidden mx-10 rounded-4xl mb-16">
        <div className="orb orb-lime w-80 h-80 top-[-60px] right-[-40px] opacity-20" />
        <div className="orb orb-lime w-48 h-48 bottom-[-30px] left-10 opacity-10" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="section-tag" style={{ color: "var(--color-lime)" }}>
            Join the Mission
          </span>
          <h2 className="text-4xl font-bold text-white mt-1 mb-4">
            Help Us Break Language Barriers
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            We're growing fast and always looking for talented people who care
            about language, technology, and global impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-accent text-base px-8 py-3">
              View Open Roles
            </button>
            <button className="btn btn-outline text-base px-8 py-3 border-white/30 text-white hover:bg-white/10">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}