import { Icon, Reveal } from "../utils.jsx";
import { Photo } from "./Hero.jsx";
import { profile, about } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <div className="split photo-left">
          <Photo src={profile.photo2} alt={`${profile.name}, about me`} />
          <div className="stext">
            <div className="stext-in ab">
              <h2>About my story</h2>
              {about.map((b) => (
                <div className="ab-block" key={b.title}>
                  <h3><Icon name={b.icon} size={20} />{b.title}</h3>
                  {b.text && <p>{b.text}</p>}
                  {b.chips && <div className="chips">{b.chips.map((c) => <span key={c} className="chip glass">{c}</span>)}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
