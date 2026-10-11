import "./App.css";
import { useTheme } from "./utils.jsx";
import { testimonials } from "./data/content.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Links from "./components/Links.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// [section id, label, icon name]
const items = [
  ["home", "Home", "Home"],
  ["about", "About", "User"],
  ["projects", "Projects", "Briefcase"],
  ...(testimonials.length ? [["reviews", "Reviews", "Quote"]] : []),
  ["contact", "Contact", "Mail"],
];

export default function App() {
  const [theme, toggle] = useTheme();
  return (
    <>
      <Header theme={theme} toggle={toggle} items={items} />
      <main>
        <Hero />
        <About />
        <Projects />
        {testimonials.length > 0 && <Testimonials />}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
