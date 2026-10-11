import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Icon, Reveal } from "../utils.jsx";
import { projects, projectsIntro } from "../data/content.js";

function Cover({ p }) {
  const [ok, setOk] = useState(!!p.photo);
  return ok
    ? <img src={p.photo} alt={p.name} loading="lazy" onError={() => setOk(false)} />
    : <div className="pfb"><Icon name={p.icon || "Folder"} size={42} /></div>;
}

export default function Projects() {
  const [tag, setTag] = useState("All");
  const tags = ["All", ...new Set(projects.flatMap((p) => p.tags || []))];
  const shown = tag === "All" ? projects : projects.filter((p) => (p.tags || []).includes(tag));

  return (
    <section id="projects" className="section">
      <div className="pj">
        <Reveal className="pj-intro">
          <h2>Projects</h2>
          <p>{projectsIntro}</p>
        </Reveal>
        <div className="pj-main">
          {tags.length > 2 && (
            <div className="filters" role="group" aria-label="Filter projects">
              {tags.map((t) => (
                <button key={t} className={`fbtn ${tag === t ? "on" : ""}`} onClick={() => setTag(t)}>{t}</button>
              ))}
            </div>
          )}
          <div className="pj-scroll">
            <div className="grid">
              {shown.map((p, i) => (
                <article key={p.name + tag} className="pcard glass" style={{ animationDelay: `${i * 60}ms` }}>
                  <div className="pimg">
                    <Cover p={p} />
                    <div className="pover">
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live demo</a>}
                      {p.code && <a href={p.code} target="_blank" rel="noreferrer"><Github size={14} /> Code</a>}
                    </div>
                  </div>
                  <div className="pbody">
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    {p.stack && <div className="stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>}
                    {p.live && <a className="vlink" href={p.live} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16} /></a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
