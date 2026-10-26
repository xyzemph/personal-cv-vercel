import { useEffect, useState } from "react";
import { navItems, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const ids = navItems.map((n) => n.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label={`${profile.name}, back to top`}>
          <span className="brand-mark" aria-hidden="true">XM</span>
          <span className="brand-name">{profile.firstName}</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={`burger ${open ? "burger--open" : ""}`} aria-hidden="true" />
        </button>

        <nav id="primary-nav" className={`nav ${open ? "nav--open" : ""}`} aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? "is-active" : ""}
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
