import { SERVICES } from "../../utils/constants";

export default function Services() {
  return (
    <section className="section">
      <div className="container-custom grid md:grid-cols-2 gap-6">
        {SERVICES.map((s) => (
          <div key={s.id} className="card p-6">
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
