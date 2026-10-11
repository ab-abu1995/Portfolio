import { ArrowUp } from "lucide-react";
import { Icon } from "../utils.jsx";
import { profile, socials } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo" aria-label="Back to top">{profile.initials}</a>
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <div className="foot-r">
        {socials.map((s) => (
          <a key={s.icon} className="ibtn" href={s.link} aria-label={s.icon} title={s.icon}
             {...(s.link.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
            <Icon name={s.icon} size={18} />
          </a>
        ))}
        <a className="ibtn" href="#home" aria-label="Back to top" title="Back to top"><ArrowUp size={18} /></a>
      </div>
    </footer>
  );
}
