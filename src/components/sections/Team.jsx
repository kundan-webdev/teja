import { TEAM_MEMBERS } from "../../utils/constants";

export default function Team() {
  return (
    <section className="section">
      <div className="container-custom grid md:grid-cols-3 gap-6">
        {TEAM_MEMBERS.map((m) => (
          <div key={m.id} className="card p-6 text-center">
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
