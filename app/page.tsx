export default function Home() {
  const projects = [
    {
      title: "Production & Quality Management System",
      description:
        "Led migration from on-prem to AWS serverless, improving scalability and 24/7 availability for global factories.",
      year: "2024-2025",
      tags: ["Java", "AWS", "Serverless"],
    },
    {
      title: "CI/CD Automation Platform",
      description:
        "Implemented automated pipelines with GitHub Actions and AWS deployments to standardize releases and reduce downtime.",
      year: "2024",
      tags: ["GitHub Actions", "AWS", "DevOps"],
    },
    {
      title: "B2B E-commerce Backend ",
      description:
        "Optimized high-traffic services, built inventory and product modules, and delivered reliable REST APIs.",
      year: "2021-2023",
      tags: ["PHP", "Laravel", "REST"],
    },
  ];

  const highlights = [
    "6+ years building AWS-based backend systems",
    "Expertise in Java (Spring Boot) and cloud services",
    "Proven migrations from monoliths to serverless",
    "CI/CD automation with GitHub Actions and AWS",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0b10] text-[#f7f4ee]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-10 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_top,_#ff9f1a_0%,_transparent_70%)] opacity-40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,_#2f8cff_0%,_transparent_65%)] opacity-25 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.03)_0%,_rgba(255,255,255,0)_35%,_rgba(255,255,255,0.04)_70%,_rgba(255,255,255,0)_100%)]" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 lg:py-20">
        <nav className="flex flex-wrap items-center justify-between gap-6 text-sm uppercase tracking-[0.2em] text-[#c9c3ba]">
          <span className="font-display text-lg text-[#f7f4ee]">Tarkan Batar</span>
          <div className="flex flex-wrap gap-5">
            <a className="hover:text-[#ff9f1a]" href="#about">
              About
            </a>
            <a className="hover:text-[#ff9f1a]" href="#projects">
              Projects
            </a>
            <a className="hover:text-[#ff9f1a]" href="#resume">
              Resume
            </a>
            <a className="hover:text-[#ff9f1a]" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <div className="h-40 w-40 overflow-hidden rounded-full border border-[#2a2a3a] bg-[#0f0f19] sm:h-48 sm:w-48">
              <img
                src="/Tarkan%20Batar.jpg"
                alt="Tarkan Batar"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#ff9f1a]">
              Portfolio 2026
            </p>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Backend Engineer focused on reliable cloud systems.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#c9c3ba]">
              Software Engineer with 6+ years designing, developing, and
              maintaining AWS-based web applications. Specialized in Java
              (Spring Boot) with production experience in Node.js and PHP
              (Laravel).
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <a
                className="rounded-full bg-[#ff9f1a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b1200] transition hover:translate-y-[-1px]"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="rounded-full border border-[#2a2a3a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f7f4ee] transition hover:border-[#ff9f1a]"
                href="#contact"
              >
                Start a Project
              </a> */}
            </div>
          </div>

          <div className="rounded-3xl border border-[#2a2a3a] bg-[#141421]/80 p-6 backdrop-blur">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c9c3ba]">
                Now
              </p>
              <h2 className="font-display text-2xl">Senior Software Engineer</h2>
              <p className="text-sm leading-relaxed text-[#c9c3ba]">
                @ FacIT FixIT, Remote (Saarland, Germany) Based in Izmir, Turkey. 
                
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-[#2a2a3a] bg-[#0f0f19] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c9c3ba]">
                    Experience
                  </p>
                  <p className="font-display text-2xl">6+ yrs</p>
                </div>
                <div className="rounded-2xl border border-[#2a2a3a] bg-[#0f0f19] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c9c3ba]">
                    Focus
                  </p>
                  <p className="font-display text-2xl">AWS + Java</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-[#2a2a3a] bg-[#141421]/70 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9c3ba]">
              About
            </p>
            <h2 className="font-display mt-4 text-3xl">
              Building resilient backend platforms at scale.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#c9c3ba]">
              I lead backend projects from architecture to production, with a
              track record of stabilizing mission-critical systems and improving
              reliability. I thrive in cross-functional teams and take full
              ownership of delivery and outcomes.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#2a2a3a] bg-[#0f0f19] p-6"
              >
                <p className="text-sm leading-relaxed text-[#f7f4ee]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#c9c3ba]">
                Projects
              </p>
              <h2 className="font-display mt-3 text-3xl">
                Selected backend work
              </h2>
            </div>
            <span className="text-sm text-[#c9c3ba]">
              Highlights aligned with real production systems.
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-[#2a2a3a] bg-[#141421]/70 p-6 transition hover:border-[#ff9f1a]"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#c9c3ba]">
                  <span>{project.year}</span>
                  <span className="text-[#ff9f1a]">Featured</span>
                </div>
                <h3 className="font-display mt-4 text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c9c3ba]">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#2a2a3a] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#c9c3ba]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-[#2a2a3a] bg-[#141421]/70 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9c3ba]">
              Skills
            </p>
            <h2 className="font-display mt-3 text-3xl">
              Tech stack focus
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#c9c3ba]">
              Backend-first toolkit covering cloud infrastructure, messaging,
              databases, and API design.
            </p>
          </div>
          <div className="rounded-3xl border border-[#2a2a3a] bg-[#0f0f19] p-8">
            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "Node.js",
                "JavaScript",
                "PHP",
                "Laravel",
                "AWS",
                "Lambda",
                "API Gateway",
                "ECS",
                "ECR",
                "S3",
                "RDS",
                "CloudWatch",
                "Kafka",
                "RabbitMQ",
                "Redis",
                "Postgres",
                "MySQL",
                "MongoDB",
                "GraphQL",
                "REST",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "GitHub Actions",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#2a2a3a] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#c9c3ba]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[#2a2a3a] bg-[#141421]/70 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9c3ba]">
              Resume
            </p>
            <h2 className="font-display mt-3 text-3xl">
              Experience highlights
            </h2>
            <ul className="mt-6 space-y-5 text-sm text-[#c9c3ba]">
              <li>
                2026-Current — Senior Software Engineer, FacIT FixIT.
              </li>
              <li>
                2024-2025 — Senior Software Engineer, TPI Composites (Global IT).
              </li>
              <li>
                2023-2024 — Software Engineer, TPI Composites
              </li>
              <li>
                2021-2023 — Software Engineer, incehesap.com
              </li>
              <li>2021 — Software Engineer, DMB Software Solutions</li>
              <li>2020 — Jr. Software Developer, AlienBroker</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#2a2a3a] bg-[#0f0f19] p-8">
            <h3 className="font-display text-2xl">Education & skills</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#c9c3ba]">
              B.Sc. Computer Science & Engineering, Marmara University
              (2014-2022).
            </p>
            <div className="mt-4 text-sm text-[#c9c3ba]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c9c3ba]">
                Languages
              </p>
              <p className="mt-2">English (Advanced), Turkish (Native)</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "AWS",
                "Microservices",
                "Kafka",
                "RabbitMQ",
                "Postgres",
                "Docker",
                "Kubernetes",
                "CI/CD",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#2a2a3a] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#c9c3ba]"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              className="mt-6 block w-full rounded-full border border-[#ff9f1a] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#ff9f1a] transition hover:bg-[#ff9f1a] hover:text-[#1b1200]"
              href="/TarkanBatar_CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume PDF
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-[#2a2a3a] bg-[#141421]/70 p-8"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#c9c3ba]">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-3xl">
                Let&apos;s talk about backend engineering roles.
              </h2>
              <p className="mt-2 text-sm text-[#c9c3ba]">
                Email or connect on LinkedIn and GitHub.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-full border border-[#ff9f1a] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff9f1a]"
                href="mailto:tarkanbatar4@gmail.com"
              >
                tarkanbatar4@gmail.com
              </a>
              <a
                className="rounded-full border border-[#2a2a3a] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9c3ba]"
                href="https://linkedin.com/in/tarkanbatar"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-full border border-[#2a2a3a] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9c3ba]"
                href="https://github.com/tarkanbatar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
