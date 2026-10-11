import { Icon, Reveal } from "../utils.jsx";
import { socials } from "../data/content.js";

export default function Links() {
  return (
    <div className="links">
      <Reveal>
        <div className="soc">
          {socials.map((s) => (
            <a key={s.icon} className="glass" href={s.link} aria-label={s.icon} title={s.icon}
               {...(s.link.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
              <Icon name={s.icon} size={26} />
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
