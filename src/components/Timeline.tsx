import type { TimelineEntry } from "../data/content";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";

export default function Timeline({ entries, label }: { entries: TimelineEntry[]; label: string }) {
  return (
    <ol className="timeline" aria-label={label}>
      {entries.map((entry, i) => (
        <li key={`${entry.title}-${entry.date}`} className="timeline-item">
          <Reveal delay={i * 60}>
            <div className="timeline-card">
              <time className="timeline-date">{entry.date}</time>
              <h3>{entry.title}</h3>
              {entry.organization && <p className="timeline-org">{entry.organization}</p>}
              {entry.note && <p className="timeline-note">{entry.note}</p>}
              {entry.image && <ImageSlot image={entry.image} className="timeline-image" />}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
