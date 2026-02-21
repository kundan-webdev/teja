import ContactForm from "../components/sections/ContactForm";

const Home = () => {
  return (
    <main className="bg-[#F7F6F3]">

      {/* HERO SECTION */}
      <section className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-semibold text-[#1F1F1F] mb-6 tracking-tight">
            Building Seamless AI Translation Solutions
          </h1>

          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            We empower businesses with intelligent translation,
            transcription, and multilingual communication systems.
          </p>

        </div>
      </section>

      {/* IMAGE + WHAT WE BUILD */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Image Placeholder */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E5E5E5] h-80 flex items-center justify-center text-gray-400">
            Image Placeholder
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-[#1F1F1F] mb-6">
              What We Are Building
            </h2>

            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              Our mission is to simplify multilingual communication.
              We combine AI-powered translation, transcription, and
              voice technology to build scalable language systems.
            </p>

            <p className="text-[#6B6B6B] leading-relaxed">
              From enterprise workflows to global media production,
              we create intelligent tools that remove language barriers.
            </p>
          </div>

        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="bg-white py-20 border-y border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-xl font-semibold text-[#1F1F1F] mb-10">
            Trusted by Forward-Thinking Companies
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <div className="h-12 bg-gray-100 rounded-lg"></div>
            <div className="h-12 bg-gray-100 rounded-lg"></div>
            <div className="h-12 bg-gray-100 rounded-lg"></div>
            <div className="h-12 bg-gray-100 rounded-lg"></div>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-[#1F1F1F] text-center mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <ServiceCard
              title="Translation Services"
              description="Accurate AI-powered translation for documents, media, and enterprise communication."
            />

            <ServiceCard
              title="Transcription & Recording"
              description="High-quality speech-to-text systems with real-time multilingual transcription."
            />

            <ServiceCard
              title="Dubbing & Voiceover"
              description="Natural voice synthesis and dubbing solutions for global media production."
            />

          </div>

        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="bg-white py-24 border-t border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-semibold text-[#1F1F1F] mb-6">
            Let’s Work Together
          </h2>

          <p className="text-[#6B6B6B] mb-12">
            Tell us about your project and we’ll help you scale globally.
          </p>

          <div className="bg-[#F7F6F3] p-10 rounded-2xl shadow-sm border border-[#E5E5E5]">
            <ContactForm />
          </div>

        </div>
      </section>

    </main>
  );
};

const ServiceCard = ({ title, description }) => (
  <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300">
    <h3 className="text-xl font-semibold text-[#1F1F1F] mb-4">
      {title}
    </h3>
    <p className="text-[#6B6B6B] leading-relaxed">
      {description}
    </p>
  </div>
);

export default Home;