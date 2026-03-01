import ContactForm from "../components/sections/ContactForm";

const contactOptions = [
  {
    icon: "💬",
    title: "Sales Enquiry",
    desc: "Want a custom plan or enterprise pricing? Talk to our sales team.",
    action: "sales@teja.ai",
  },
  {
    icon: "🛠️",
    title: "Technical Support",
    desc: "API issues, integration help, or bug reports — we've got you.",
    action: "support@teja.ai",
  },
  {
    icon: "🤝",
    title: "Partnerships",
    desc: "Interested in building with us or becoming a reseller?",
    action: "partners@teja.ai",
  },
];

const officeLocations = [
  { city: "Mumbai", flag: "🇮🇳", timezone: "IST · UTC+5:30" },
  { city: "Berlin", flag: "🇩🇪", timezone: "CET · UTC+1" },
  { city: "San Francisco", flag: "🇺🇸", timezone: "PST · UTC−8" },
];

export default function Contact() {
  return (
    <main className="bg-(--color-white)">

      {/* ── HERO ── */}
      <section className="mx-10 bg-hero-gradient relative overflow-hidden min-h-[50vh] flex items-end rounded-4xl">
        <div className="orb orb-lime w-[480px] h-72 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="orb orb-lime w-48 h-48 absolute top-6 right-12 opacity-20" />

        <div className="relative z-20 p-10 w-full">
          <span className="section-tag" style={{ color: "var(--color-lime)" }}>
            Contact Us
          </span>
          <h1 className="text-[#fafafa] text-5xl md:text-7xl font-extrabold mt-3 leading-tight">
            Let's Start a <br />
            <span className="text-(--color-lime)">Conversation.</span>
          </h1>
          <p className="text-(--color-mint) text-lg md:text-xl max-w-xl leading-relaxed opacity-80 mt-4 mb-10">
            Whether you have a question, a project, or just want to explore —
            we're always happy to talk.
          </p>
        </div>
      </section>

      {/* ── CONTACT OPTIONS ── */}
      <section className="pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-tag">How Can We Help?</span>
            <h2 className="text-4xl font-bold text-(--color-black) mt-1">
              Pick Your Channel
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map(({ icon, title, desc, action }) => (
              <div key={title} className="card bg-(--color-white) p-8 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{icon}</span>
                </div>
                <h3 className="text-xl font-bold text-(--color-black)">{title}</h3>
                <p className="text-(--color-charcoal) leading-relaxed opacity-80 flex-1">
                  {desc}
                </p>
                <a
                  href={`mailto:${action}`}
                  className="btn btn-outline self-start text-sm px-5 py-2 mt-2"
                >
                  {action} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN FORM SECTION ── */}
      <section className="bg-forest py-24 relative overflow-hidden mx-10 rounded-4xl my-16">
        <div className="orb orb-lime w-96 h-96 top-[-80px] right-[-60px] opacity-20" />
        <div className="orb orb-lime w-64 h-64 bottom-[-40px] left-0 opacity-10" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <div className="text-white">
            <span className="section-tag" style={{ color: "var(--color-lime)" }}>
              Get In Touch
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-4 leading-snug">
              Tell Us About <br /> Your Project
            </h2>
            <p className="text-white/60 leading-relaxed mb-10 text-lg">
              Fill in the form and one of our language specialists will get back
              to you within 24 hours.
            </p>

            {/* Office locations */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                Our Offices
              </p>
              {officeLocations.map(({ city, flag, timezone }) => (
                <div key={city} className="flex items-center gap-3">
                  <span className="text-2xl">{flag}</span>
                  <div>
                    <p className="font-bold text-white text-sm">{city}</p>
                    <p className="text-white/40 text-xs">{timezone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FAQ STRIP ── */}
      <section className="bg-(--color-mint) border-y border-(--color-lime)/30 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-tag">Quick Answers</span>
          <h2 className="text-3xl font-bold text-(--color-black) mt-1 mb-10">
            Before You Reach Out
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                q: "What's your typical response time?",
                a: "We respond to all enquiries within 24 hours on business days. Enterprise clients get a dedicated Slack channel.",
              },
              {
                q: "Do you offer free trials?",
                a: "Yes — sign up and get 10,000 words of translation and 60 minutes of transcription free. No card required.",
              },
              {
                q: "Can I book a live demo?",
                a: "Absolutely. Use the contact form above and select 'Sales Enquiry' — we'll schedule a call within 48 hours.",
              },
              {
                q: "Do you sign NDAs?",
                a: "Yes. Enterprise plans include NDA-backed agreements and zero data retention options for sensitive content.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="card bg-(--color-white) p-6">
                <h3 className="font-bold text-(--color-black) mb-2">{q}</h3>
                <p className="text-(--color-charcoal) text-sm leading-relaxed opacity-80">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}