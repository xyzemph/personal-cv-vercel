import { intro, objective, profile } from "../data/content";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Personal CV &amp; Portfolio</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-location">{profile.location}</p>
          <p className="hero-intro">{intro}</p>
          <div className="hero-objective">
            <h2>Career objective</h2>
            <p>{objective}</p>
          </div>
          <div className="hero-actions">
            <a className="btn btn--primary" href="#projects">
              See my projects
            </a>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <ImageSlot image={profile.photo} className="photo" />
        </div>
      </div>
    </section>
  );
}
