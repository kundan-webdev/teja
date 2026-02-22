import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Stats from "../components/sections/Stats";
import Services from "../components/sections/Services";
import Team from "../components/sections/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Services />
      <Team />

      {/* New Section Added */}
      <section style={{ padding: "50px", textAlign: "center", backgroundColor: "#f5f5f5" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          New Feature Section
        </h2>
        <p style={{ fontSize: "16px", color: "#555" }}>
          This section was developed by Thanu as part of the assigned task.
        </p>
      </section>
    </>
  );
}


