import { useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { profile } from "../data/content.js";
import { useTyping } from "../utils.jsx";

export function Photo({ src, alt, className = "" }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`photo ${className}`}>
      {ok ? <img src={src} alt={alt} onError={() => setOk(false)} /> : <div className="ph">{profile.initials}</div>}
    </div>
  );
}

export default function Hero() {
  const typed = useTyping(profile.roles);
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--px", `${((e.clientX - r.left) / r.width - 0.5) * -12}px`);
    e.currentTarget.style.setProperty("--py", `${((e.clientY - r.top) / r.height - 0.5) * -12}px`);
  };
  return (
    <section id="home" className="hero" onMouseMove={move}>
      <div className="split">
        <div className="stext">
          <div className="stext-in">
            <div className="fit">
              <p className="hello">Hello, I'm</p>
              <h1>{profile.name}</h1>
              <p className="typing">{typed}<span className="caret" /></p>
              <p className="intro">{profile.intro}</p>
              <div className="btns">
                <a href="#about" className="btn solid"><ArrowDown size={16} /> My story</a>
                <a href="#contact" className="btn"><Mail size={16} /> Get in touch</a>
              </div>
            </div>
          </div>
        </div>
        <Photo src={profile.photo} alt={profile.name} className="hero-photo" />
      </div>
    </section>
  );
}
