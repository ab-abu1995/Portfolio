import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Icon } from "../utils.jsx";
import { profile } from "../data/content.js";

export default function Header({ theme, toggle, items }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 40);
      const y = window.scrollY + 140;
      let cur = "home";
      items.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      });
      setActive(cur);
      const h = document.documentElement;
      setPct((window.scrollY / (h.scrollHeight - window.innerHeight)) * 100 || 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [items]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="bar">
        <a href="#home" className="logo" aria-label="Back to top">{profile.initials}</a>
        <nav className="nav" aria-label="Main">
          {items.map(([id, label, icon]) => (
            <a key={id} href={`#${id}`} className={active === id ? "on" : ""} aria-label={label} title={label}>
              <Icon name={icon} size={20} /><span className="lbl">{label}</span>
            </a>
          ))}
        </nav>
        <button className="ibtn" onClick={toggle} aria-label="Switch theme" title="Switch theme">
          <span key={theme} className="spin">{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</span>
        </button>
      </div>
      <div className="progress" style={{ width: `${pct}%` }} />
    </header>
  );
}
