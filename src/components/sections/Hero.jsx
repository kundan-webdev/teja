import { HERO_DATA } from "../../utils/constants";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container-custom text-center">
        <h1 className="mb-6">{HERO_DATA.title}</h1>
        <p className="mb-8">{HERO_DATA.subtitle}</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </section>
  );
}
