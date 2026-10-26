import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Reveal from "./components/Reveal";
import Timeline from "./components/Timeline";
import ImageSlot from "./components/ImageSlot";
import {
  about,
  achievements,
  basicInfo,
  education,
  experience,
  githubRepoUrl,
  interests,
  profile,
  projects,
  siteTech,
  skillGroups,
  socialLinks,
} from "./data/content";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />

        <Section id="about" title="About Me" subtitle="Personal profile and basic information" tone="tint">
          <div className="about-grid">
            <Reveal>
              <div className="prose">
                {about.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
            <div className="about-side">
              <Reveal delay={80}>
                <div className="card">
                  <h3>Basic information</h3>
                  <dl className="info-list">
                    {basicInfo.map((row) => (
                      <div key={row.label}>
                        <dt>{row.label}</dt>
                        <dd>{"href" in row && row.href ? <a href={row.href}>{row.value}</a> : row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="card">
                  <h3>Career interests</h3>
                  <p className="card-note">Emerging interests I'm exploring, not areas of expertise.</p>
                  <ul className="chip-list">
                    {interests.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="card-grid card-grid--2">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 80}>
                <article className="card card--hover">
                  <h3>{e.degree}</h3>
                  <p className="card-strong">{e.school}</p>
                  <p className="card-note">{e.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          title="Skills"
          subtitle="Only things I have actually done, described honestly"
          tone="tint"
        >
          <div className="card-grid card-grid--3">
            {skillGroups.map((g, i) => (
              <Reveal key={g.category} delay={i * 60}>
                <article className="card card--hover">
                  <h3>{g.category}</h3>
                  {g.note && <p className="card-note">{g.note}</p>}
                  <ul className="plain-list">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="card tech-card">
              <h3>{siteTech.heading}</h3>
              <ul className="chip-list">
                {siteTech.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Section>

        <Section id="projects" title="Projects" subtitle="Things I have worked on so far">
          <div className="card-grid card-grid--3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="card card--hover project-card">
                  <ImageSlot image={p.image} className="project-image" />
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <ul className="tag-list" aria-label="Tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {p.link && (
                    <a className="text-link" href={p.link.href} target="_blank" rel="noopener noreferrer">
                      {p.link.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="achievements"
          title="Achievements & Certifications"
          subtitle="Earliest to latest"
          tone="tint"
        >
          <Timeline entries={achievements} label="Achievements and certifications timeline" />
        </Section>

        <Section id="experience" title="Experience & Participation" subtitle="Earliest to latest">
          <Timeline entries={experience} label="Experience timeline" />
        </Section>

        <Section id="contact" title="Contact & Links" subtitle="The easiest way to reach me is by email" tone="tint">
          <Reveal>
            <div className="contact-grid">
              <div className="card">
                <h3>Email</h3>
                <p>
                  <a className="text-link" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </p>
                <p className="card-note">{profile.location}</p>
              </div>
              <div className="card">
                <h3>Find me online</h3>
                <ul className="link-list">
                  {socialLinks.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${l.description} (opens in a new tab)`}>
                        {l.label} <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
              Source on GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
