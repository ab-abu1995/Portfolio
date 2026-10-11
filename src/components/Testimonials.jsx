import { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { Reveal } from "../utils.jsx";
import { testimonials as list } from "../data/content.js";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = list.length;
  useEffect(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, n]);
  const t = list[i];

  return (
    <section id="reviews" className="section">
      <Reveal>
        <h2 className="center">Kind words</h2>
        <div className="slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <Quote size={40} className="quote-ic" />
          <div className="slide" key={i} aria-live="polite">
            <blockquote>{t.quote}</blockquote>
            <div className="who">
              {t.photo ? <img className="av" src={t.photo} alt={t.name} /> : <span className="av">{t.name[0]}</span>}
              <div><strong>{t.name}</strong><div className="role">{t.role}{t.company ? `, ${t.company}` : ""}</div></div>
              <div className="clogo" title={t.company}>{t.logo ? <img src={t.logo} alt={t.company || "Company logo"} /> : <Building2 size={20} />}</div>
            </div>
            <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating || 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
            </div>
          </div>
          {n > 1 && (
            <div className="ctrl">
              <button className="ibtn" onClick={() => setI((i - 1 + n) % n)} aria-label="Previous"><ChevronLeft size={18} /></button>
              {list.map((_, k) => <button key={k} className={`dot ${k === i ? "on" : ""}`} onClick={() => setI(k)} aria-label={`Go to testimonial ${k + 1}`} />)}
              <button className="ibtn" onClick={() => setI((i + 1) % n)} aria-label="Next"><ChevronRight size={18} /></button>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
