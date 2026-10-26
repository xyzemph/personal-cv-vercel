import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  tone?: "light" | "tint";
}

export default function Section({ id, title, subtitle, children, tone = "light" }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2 id={`${id}-title`}>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
