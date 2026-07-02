import { useEffect, useState } from "react";
import { Mail, Phone, ArrowRight, Check, ImagePlus } from "lucide-react";

/* ------------------------------------------------------------------
   BRIAN MULAMA — PORTFOLIO
   Palette: navy + maroon + gold + cyan — the register of an official
   seal or letterhead, which suits legal/government/nonprofit admin
   work without tipping into the "paper file" cliché. Navy carries
   structure (headings, buttons), maroon marks section labels and
   outcomes, gold marks "current / active" status, cyan is the one
   spot of brightness reserved for hover states.
------------------------------------------------------------------- */

const NAV_ITEMS = [
  { id: "profile", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    role: "Legal Administrator",
    org: "H. Gichuki & Company Advocates",
    period: "Aug 2025 — Present",
    status: "ACTIVE",
    body: "Provides administrative and operational support to legal practitioners, managing client records, legal correspondence and case documentation under strict confidentiality.",
    points: [
      "Coordinates day-to-day administrative functions of the law office",
      "Maintains filing systems for efficient storage and retrieval of records",
      "Facilitates communication between advocates, clients, courts and stakeholders",
      "Tracks deadlines and administrative requirements across live matters",
    ],
    achievement:
      "Improved organisation and retrieval speed of client files and case records.",
  },
  {
    role: "Administrative & Program Support Trainee",
    org: "Navigators Kenya",
    period: "Aug 2023 — Oct 2023",
    status: "CLOSED",
    body: "Supported organisational programs and administrative operations, gaining hands-on experience in project coordination, documentation and stakeholder engagement.",
    points: [
      "Compiled reports and program documentation",
      "Maintained records and participant information databases",
      "Coordinated meetings, training sessions and community outreach events",
      "Supported monitoring and documentation of project activities",
    ],
    achievement:
      "Contributed to successful implementation of program activities and reporting.",
  },
  {
    role: "Office Administrator",
    org: "Deputy County Commissioner's Office",
    period: "Jan 2023 — Apr 2023",
    status: "CLOSED",
    body: "Supported government administrative functions — records, correspondence and coordination of public service activities.",
    points: [
      "Maintained official records and government correspondence",
      "Prepared administrative reports and official documents",
      "Provided front-office support and public assistance services",
      "Ensured proper documentation and record-retention practice",
    ],
    achievement:
      "Contributed to efficient record management and faster document turnaround.",
  },
];

const EDUCATION = [
  {
    title: "Bachelor of Business Administration",
    org: "University of the People",
    period: "In progress",
    note: "Currently pursuing — continuing professional development in business administration.",
  },
  {
    title: "Diploma in Public Administration",
    org: "Kisii University",
    period: "2021 — 2024",
    note: "Public Policy Analysis · Strategic Management · Governance & Leadership · Public Finance · Ethics & Accountability.",
  },
];

const SKILL_GROUPS = [
  {
    title: "Administrative Management",
    items: [
      "Office Administration",
      "Executive Support",
      "Workflow Coordination",
      "Document Control",
    ],
  },
  {
    title: "Communication & Stakeholders",
    items: [
      "Client Relations",
      "Correspondence Management",
      "Report Writing",
      "Public Relations",
    ],
  },
  {
    title: "Records Management",
    items: [
      "Data Entry & Verification",
      "Electronic & Physical Filing",
      "Database Maintenance",
      "Records Archiving",
    ],
  },
  {
    title: "Organisation",
    items: [
      "Calendar Management",
      "Meeting Coordination",
      "Event Planning Support",
      "Time Management",
    ],
  },
  {
    title: "Technology",
    items: [
      "Microsoft Office Suite",
      "Google Workspace",
      "Email Management",
      "Digital Documentation Systems",
    ],
  },
];

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

export default function Home() {
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className="portfolio-root min-h-screen bg-white text-gray-900"
      style={{ fontFamily: "'Inter', ui-sans-serif, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');

        .portfolio-root {
          --navy: #0B2545;
          --navy-light: #1E4270;
          --maroon: #6B1F2A;
          --maroon-dark: #4A141C;
          --gold: #B8892B;
          --gold-dark: #8A6417;
          --cyan: #2AA9D8;
        }
        .font-display { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }

        .text-navy { color: var(--navy); }
        .bg-navy { background-color: var(--navy); }
        .border-navy { border-color: var(--navy); }
        .hover\\:bg-navy-light:hover { background-color: var(--navy-light); }
        .hover\\:text-navy:hover { color: var(--navy); }
        .hover\\:border-navy:hover { border-color: var(--navy); }
        .bg-navy-tint { background-color: rgba(11, 37, 69, 0.06); }

        .text-maroon { color: var(--maroon); }
        .text-maroon-dark { color: var(--maroon-dark); }
        .bg-maroon-tint { background-color: rgba(107, 31, 42, 0.06); }
        .border-maroon-soft { border-color: rgba(107, 31, 42, 0.18); }

        .text-gold { color: var(--gold); }
        .text-gold-dark { color: var(--gold-dark); }
        .bg-gold { background-color: var(--gold); }
        .border-gold { border-color: var(--gold); }
        .bg-gold-tint { background-color: rgba(184, 137, 43, 0.12); }

        .text-cyan-brand { color: var(--cyan); }
        .hover\\:text-cyan-brand:hover { color: var(--cyan); }
        .hover\\:border-cyan-brand:hover { border-color: var(--cyan); }
      `}</style>

      {/* ============ NAV ============ */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => goTo("profile")}
            className="font-display text-lg font-semibold tracking-tight text-navy"
          >
            Brian Mulama
          </button>
          <div className="hidden sm:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`text-sm px-4 py-2 rounded-full transition-colors ${
                  active === item.id
                    ? "bg-navy text-white"
                    : "text-gray-500 hover:text-navy"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => goTo("contact")}
            className="sm:hidden text-sm font-medium text-maroon"
          >
            Contact
          </button>
        </div>
        <div
          className="h-0.5 bg-gold transition-all"
          style={{ width: `${progress}%` }}
        />
      </nav>

      {/* ============ HERO ============ */}
      <header className="max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <p className="font-mono text-xs tracking-widest text-maroon uppercase mb-5">
            Administrative Professional · Nairobi, Kenya
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05] text-navy">
            Brian Mulama
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl leading-relaxed">
            Keeps legal, government and nonprofit offices running on time —
            records in order, correspondence answered, nothing lost in the
            handoff.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => goTo("contact")}
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-navy-light transition-colors"
            >
              Get in touch <ArrowRight size={16} />
            </button>
            <button
              onClick={() => goTo("experience")}
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:border-navy hover:text-navy transition-colors"
            >
              View experience
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["3+", "Years experience"],
              ["3", "Sectors served"],
              ["2", "Languages fluent"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-2xl text-navy">{num}</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature: live status card with photo placeholder */}
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/60 p-6">
          <div className="flex items-center gap-4">
            {/* PHOTO PLACEHOLDER — replace this div's contents with:
                <img src="/your-photo.jpg" alt="Brian Mulama" className="h-24 w-24 rounded-2xl object-cover" />
            */}
            <div className="h-24 w-24 shrink-0 rounded-2xl bg-navy-tint border-2 border-dashed border-gold flex flex-col items-center justify-center gap-1 text-gold-dark">
              <ImagePlus size={22} strokeWidth={1.75} />
              <span className="font-mono text-[9px] uppercase tracking-wide">
                Photo
              </span>
            </div>
            <div>
              <p className="font-semibold text-navy">Brian Mulama</p>
              <p className="text-sm text-gray-500">Legal Administrator</p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-gold-dark">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            Currently at H. Gichuki &amp; Company Advocates
          </div>

          <dl className="mt-5 pt-5 border-t border-gray-100 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-500">Location</dt>
              <dd className="text-gray-800">Nairobi, Kenya</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Languages</dt>
              <dd className="text-gray-800">English, Kiswahili</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-500">Focus areas</dt>
              <dd className="text-gray-800">Legal · Gov · Nonprofit</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ============ PROFILE ============ */}
      <section
        id="profile"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20 border-t border-gray-100"
      >
        <div className="grid md:grid-cols-[0.32fr_0.68fr] gap-10">
          <div>
            <p className="font-mono text-xs tracking-widest text-maroon uppercase mb-3">
              Profile
            </p>
            <h2 className="font-display text-3xl font-semibold text-navy">
              A steady hand behind the scenes
            </h2>
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Results-oriented administrative professional with practical
              experience supporting legal, government and nonprofit
              organisations through efficient office administration, records
              management, document control, stakeholder engagement and
              operational coordination. Comfortable in fast-paced environments
              that demand accuracy, discretion and strong organisational
              judgement.
            </p>
            <p>
              Holds a Diploma in Public Administration from Kisii University and
              is currently pursuing a Bachelor of Business Administration at the
              University of the People — building toward a long-term career in
              organisational administration and governance.
            </p>
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20 border-t border-gray-100"
      >
        <p className="font-mono text-xs tracking-widest text-maroon uppercase mb-3">
          Experience
        </p>
        <h2 className="font-display text-3xl font-semibold text-navy mb-12">
          Where he's worked
        </h2>

        <div className="relative pl-8 border-l-2 border-gray-200 space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.role + job.org} className="relative">
              <span
                className={`absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 ${
                  job.status === "ACTIVE"
                    ? "bg-gold border-gold"
                    : "bg-white border-gray-300"
                }`}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {job.role}
                  </h3>
                  <p className="text-gray-500 text-sm mt-0.5">{job.org}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-gray-500">
                    {job.period}
                  </p>
                  {job.status === "ACTIVE" && (
                    <span className="inline-block mt-1 text-xs font-medium text-gold-dark bg-gold-tint px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-3 text-gray-600 leading-relaxed">{job.body}</p>

              <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <Check size={14} className="mt-1 shrink-0 text-navy" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-4 bg-maroon-tint border border-maroon-soft rounded-lg px-4 py-3 text-sm text-maroon-dark">
                <span className="font-medium">Outcome — </span>
                {job.achievement}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ EDUCATION ============ */}
      <section
        id="education"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20 border-t border-gray-100"
      >
        <p className="font-mono text-xs tracking-widest text-maroon uppercase mb-3">
          Education
        </p>
        <h2 className="font-display text-3xl font-semibold text-navy mb-12">
          Foundations
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {EDUCATION.map((ed) => (
            <div
              key={ed.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <p className="font-mono text-xs text-gray-500">{ed.period}</p>
              <h3 className="font-display text-lg font-semibold text-navy mt-2">
                {ed.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{ed.org}</p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                {ed.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20 border-t border-gray-100"
      >
        <p className="font-mono text-xs tracking-widest text-maroon uppercase mb-3">
          Skills
        </p>
        <h2 className="font-display text-3xl font-semibold text-navy mb-12">
          Core competencies
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-3">
                {g.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm text-gray-700 border border-gray-200 rounded-full px-3 py-1 hover:border-cyan-brand hover:text-cyan-brand transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20"
      >
        <div className="bg-navy rounded-3xl px-8 py-16 sm:px-16 text-center">
          <p className="font-mono text-xs tracking-widest text-gold uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
            Let's work together
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto leading-relaxed">
            Available for administrative, records-management and
            office-coordination roles — reach out any time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:brianmulama052@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <Mail size={16} /> brianmulama052@gmail.com
            </a>
            <a
              href="tel:+254794066425"
              className="inline-flex items-center gap-2 border border-gray-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:border-white transition-colors"
            >
              <Phone size={16} /> +254 794 066 425
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-400 pb-10 font-mono tracking-wide">
        © {new Date().getFullYear()} Brian Mulama
      </footer>
    </div>
  );
}
