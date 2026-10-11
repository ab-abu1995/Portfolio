import { useEffect, useRef, useState } from "react";
import * as Lucide from "lucide-react";

// <Icon name="Github" /> — looks any lucide icon up by name
export function Icon({ name, size = 20 }) {
  const C = Lucide[name] || Lucide.Circle;
  return <C size={size} aria-hidden="true" />;
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || "dark"; } catch { return "dark"; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); o.disconnect(); }
    }, { threshold });
    o.observe(el);
    return () => o.disconnect();
  }, [threshold]);
  return [ref, seen];
}

export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, seen] = useInView();
  return (
    <div ref={ref} className={`reveal ${seen ? "show" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Counter({ value, suffix = "" }) {
  const [ref, seen] = useInView(0.5);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let f;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1400, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) f = requestAnimationFrame(tick);
    };
    f = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(f);
  }, [seen, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function useTyping(words, speed = 90, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    let t;
    if (!del && text === w) t = setTimeout(() => setDel(true), pause);
    else if (del && text === "") { setDel(false); setI(i + 1); }
    else t = setTimeout(() => setText(w.slice(0, text.length + (del ? -1 : 1))), del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}
