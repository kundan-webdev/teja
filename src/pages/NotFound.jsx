import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="bg-(--color-white) min-h-screen flex flex-col">

      {/* ── MAIN 404 SECTION ── */}
      <section className="mx-10 my-10 bg-hero-gradient relative overflow-hidden flex-1 flex items-center justify-center rounded-4xl min-h-[90vh]">

        {/* Ambient orbs */}
        <div className="orb orb-lime w-[600px] h-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="orb orb-lime w-56 h-56 absolute top-10 right-10 opacity-20" />
        <div className="orb orb-lime w-36 h-36 absolute bottom-16 left-16 opacity-15" />

        <div className="relative z-20 flex flex-col items-center text-center px-6">

          {/* Big 404 */}
          <div className="relative mb-6">
            <span
              className="text-[160px] md:text-[220px] font-extrabold leading-none select-none"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px rgba(163, 230, 53, 0.3)",
              }}
            >
              404
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-7xl">
              🌐
            </span>
          </div>

          {/* Copy */}
          <span className="section-tag mb-3" style={{ color: "var(--color-lime)" }}>
            Page Not Found
          </span>
          <h1 className="text-[#fafafa] text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Looks Like This Page <br />
            <span className="text-(--color-lime)">Got Lost in Translation.</span>
          </h1>
          <p className="text-(--color-mint) text-lg max-w-md leading-relaxed opacity-70 mb-10">
            The page you're looking for doesn't exist — but we speak 100+
            languages, so we definitely understand your frustration.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/")}
              className="btn btn-accent text-base px-8 py-3"
            >
              Go Back Home
            </button>
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline text-base px-8 py-3 border-white/30 text-white hover:bg-white/10"
            >
              ← Go Back
            </button>
          </div>

          {/* Quick nav links */}
          <div className="mt-14 flex flex-wrap gap-3 justify-center">
            {[
              { label: "Services", path: "/services" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="text-xs font-bold uppercase tracking-widest text-(--color-mint) opacity-60 hover:opacity-100 transition-opacity px-4 py-2 border border-white/10 rounded-full hover:border-white/30"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}