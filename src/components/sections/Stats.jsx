import { STATS } from "../../utils/constants";

export default function Stats() {
  return (
    <section className="section">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div key={s.id} className="card p-6 text-center">
            <h2>{s.value}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
