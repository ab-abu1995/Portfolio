import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Icon, Reveal } from "../utils.jsx";
import { profile, socials } from "../data/content.js";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState({});
  const [status, setStatus] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = "Enter a valid email address.";
    if (f.message.trim().length < 10) er.message = "Write at least 10 characters.";
    setErr(er);
    if (Object.keys(er).length) return;

    if (profile.formEndpoint) {
      setStatus("sending");
      try {
        const r = await fetch(profile.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(f) });
        if (!r.ok) throw new Error();
        setStatus("sent");
        setF({ name: "", email: "", message: "" });
      } catch { setStatus("error"); }
    } else {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Message from " + f.name)}&body=${encodeURIComponent(f.message + "\n\n" + f.email)}`;
      setStatus("sent");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="contact">
        <Reveal>
          <h2>Let's talk</h2>
          <p className="story">Have a project or an opportunity in mind? Send a message and I'll reply soon.</p>
          <ul className="info">
            <li><Mail size={18} /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><MapPin size={18} />{profile.location}</li>
          </ul>
          <div className="soc left">
            {socials.map((s) => (
              <a key={s.icon} className="ibtn" href={s.link} aria-label={s.icon} title={s.icon}
                 {...(s.link.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <form className="glass" onSubmit={submit} noValidate>
            {[["name", "Name", "text"], ["email", "Email", "email"]].map(([k, label, type]) => (
              <div className="field" key={k}>
                <label htmlFor={k}>{label}</label>
                <input id={k} type={type} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} />
                {err[k] && <span className="err">{err[k]}</span>}
              </div>
            ))}
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" value={f.message} onChange={set("message")} aria-invalid={!!err.message} />
              {err.message && <span className="err">{err.message}</span>}
            </div>
            <button className="btn solid" type="submit" disabled={status === "sending"}>
              <Send size={18} /> {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "sent" && <p className="okmsg">Message ready. Thank you!</p>}
            {status === "error" && <p className="err">Couldn't send. Email me directly instead.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
