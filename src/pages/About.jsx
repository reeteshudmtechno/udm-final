import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import team from "../assets/aboutTeam.jpeg";
import team1 from "../assets/about2.png";

const STATS = [
  { metric: "150+", label: "Happy Clients" },
  { metric: "8+", label: "Years of Expertise" },
  { metric: "2.4M+", label: "Leads Generated" },
  { metric: "98%", label: "Client Retention" },
];

const VALUES = [
  {
    icon: "solar:target-linear",
    title: "Our Mission",
    text: "Make digital growth accessible and profitable for every ambitious business in India.",
  },
  {
    icon: "solar:medal-ribbons-star-linear",
    title: "Our Values",
    text: "Transparency, obsession with results, creative excellence and zero fluff.",
  },
  {
    icon: "solar:rocket-linear",
    title: "Our Promise",
    text: "Enterprise-grade marketing for local businesses at SMB-friendly budgets.",
  },
];

const MILESTONES = [
  { year: "2018", title: "Founded in Indore", text: "Started with a team of 3 and a mission to bring enterprise marketing to local businesses." },
  { year: "2020", title: "Scaled to 10+ industries", text: "Expanded into healthcare, D2C, real estate, education and professional services." },
  { year: "2022", title: "₹15Cr+ ad spend managed", text: "Managed profitable performance campaigns across Meta and Google for 80+ brands." },
  { year: "2026", title: "Full-stack agency", text: "SEO, paid media, websites, content and influencer under one roof serving India." },
];

export default function About() {
  return (
    <PageShell>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="inline-block bg-brand text-brand-foreground font-black px-3 py-1 border-2 border-black rounded-lg text-sm -rotate-2 mb-5">
              About UDM Techno
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6">
              We help businesses rank in <span className="text-brand">Top 10 on Google</span> & generate consistent leads.
            </h1>

            <p className="text-base md:text-lg text-zinc-700 max-w-2xl">
              UDM Techno Solutions is a full-stack digital marketing agency based in Indore, India.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white border-2 border-black rounded-2xl p-5 brutalist-shadow">
                  <div className="text-3xl font-black">{s.metric}</div>
                  <div className="text-zinc-600 font-bold text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-7">
            <img src={team} alt="team" className="rounded-3xl border-4 border-brand" />
          </div>

          <div className="lg:col-span-5 text-white">
            <h2 className="text-3xl font-black mb-5">A crew obsessed with results.</h2>
            <p className="text-zinc-300">
              Strategists, marketers, designers and engineers — all under one roof.
            </p>
          </div>

        </div>
      </section>

      {/* ❌ LEADERSHIP SECTION REMOVED */}

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid md:grid-cols-3 gap-5">
        {VALUES.map((v) => (
          <div key={v.title} className="bg-white border-2 border-black rounded-3xl p-6 brutalist-shadow">
            <iconify-icon icon={v.icon} className="text-4xl text-brand mb-3" />
            <h3 className="text-2xl font-black">{v.title}</h3>
            <p className="text-zinc-700">{v.text}</p>
          </div>
        ))}
      </section>

      {/* WHY US */}
      <section className="bg-zinc-100 py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10">

          <img src={team1} alt="work" className="rounded-3xl border-2 border-black" />

          <div>
            <h2 className="text-3xl font-black mb-5">Why brands pick us</h2>

            <ul className="space-y-3">
              {[
                "Full-stack team",
                "Data-driven decisions",
                "Clear reporting",
                "Proven results",
              ].map((p) => (
                <li key={p} className="flex gap-2 font-semibold">
                  <iconify-icon icon="solar:check-circle-bold" className="text-brand" />
                  {p}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-xl">
              Get Growth Plan
            </Link>
          </div>

        </div>
      </section>

      {/* MILESTONES */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <h2 className="text-3xl font-black mb-6">Milestones</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {MILESTONES.map((m) => (
            <div key={m.year} className="bg-white border-2 border-black rounded-2xl p-5">
              <div className="text-brand font-black">{m.year}</div>
              <h3 className="font-black">{m.title}</h3>
              <p className="text-sm">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

    </PageShell>
  );
}