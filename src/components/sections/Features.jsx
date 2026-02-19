import { FEATURES } from "../../utils/constants";

export default function Features() {
  return (
    <section className="section">
      <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((f) => (
          <div key={f.id} className="card p-6">
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
