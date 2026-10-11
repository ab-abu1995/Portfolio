// ✏️ EDIT THIS FILE to change your content. No other file needs touching.
// Icon names come from https://lucide.dev/icons (e.g. "Github", "Globe", "UtensilsCrossed").

export const profile = {
  name: "Your Name",
  initials: "YN",
  roles: ["Creator", "Builder", "Dreamer"], // typing animation
  intro: "I turn ideas into things people can use.",
  photo: "/profile.jpg", // hero photo  -> public/profile.jpg
  photo2: "/story.jpg", // My story photo -> public/story.jpg
  email: "you@email.com",
  location: "City, Country",
  formEndpoint: "", // optional: Formspree URL. Empty = opens the visitor's email app
};

export const socials = [
  { icon: "Linkedin", link: "https://linkedin.com/in/yourname" },
  { icon: "Github", link: "https://github.com/yourname" },
  { icon: "Instagram", link: "https://instagram.com/yourname" },
  { icon: "Mail", link: "mailto:you@email.com" },
];

// "My story" blocks. Use `text` for a paragraph, `chips` for a list of tags, or both.
export const about = [
  { icon: "User", title: "Introduction",
    text: "Hi, I'm [Your Name], a [your role] who loves turning ideas into clean, working products. Write 2–3 sentences about who you are." },
  { icon: "GraduationCap", title: "Academic status",
    text: "Fresh graduate in [your field] from [your university] with a GPA of [x.xx]. Add anything notable: awards, thesis, relevant courses." },
  { icon: "Code2", title: "Coding practices & projects",
    text: "I write clean, readable code, use Git daily, and build real projects end to end, from interface to database. Mention your best project here." },
  { icon: "Wrench", title: "Skills",
    chips: ["React", "HTML", "CSS", "JavaScript", "Node.js", "FastAPI", "MongoDB", "Git"] },
  { icon: "Target", title: "Motives",
    text: "I'm a self-learner and a disciplined person who solves problems fast and picks up new tools quickly.",
    chips: ["Self-learning", "Disciplined", "Fast problem solver", "Quick learner"] },
];

export const projectsIntro =
  "Here are some of the selected projects I've built with passion, clean code and great attention to detail.";

// ➕ TO ADD A PROJECT: copy one block, paste it at the end, change the values.
//  photo: put the image in public/projects/ ; tags: filter buttons ; stack: "Built with" list
//  Leave `live` or `code` out and that button simply won't show.
export const projects = [
  {
    name: "Zenbaba Delivery",
    icon: "UtensilsCrossed",
    photo: "/projects/zenbaba.jpg",
    description: "A modern food delivery platform built for a smooth ordering experience. Users can explore restaurants, browse food, add items to their cart, place orders, and track their delivery experience.",
    tags: ["React", "API"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    live: "https://zenbaba-delivery-cq9f.vercel.app/",
    code: "https://github.com/yourname/zenbaba-delivery",
  },
  {
    name: "Todo App",
    icon: "ListTodo",
    photo: "/projects/todo.jpg",
    description: "A task manager with filters that saves your list in the browser.",
    tags: ["React", "CSS"],
    stack: ["React", "CSS"],
    live: "https://your-todo.vercel.app",
    code: "https://github.com/yourname/todo-app",
  },
  {
    name: "Weather Now",
    icon: "CloudSun",
    photo: "/projects/weather.jpg",
    description: "Search any city and see the current weather and a 5-day forecast.",
    tags: ["React", "API"],
    stack: ["React", "OpenWeather API"],
    live: "https://your-weather.vercel.app",
    code: "https://github.com/yourname/weather-now",
  },
  {
    name: "This Portfolio",
    icon: "Sparkles",
    photo: "/projects/portfolio.jpg",
    description: "The site you're looking at, built with React and plain CSS.",
    tags: ["React", "CSS"],
    stack: ["React", "Vite", "CSS"],
    code: "https://github.com/yourname/portfolio",
  },
];

// Set to [] to hide the section. logo: put company logos in public/logos/ (leave "" for a placeholder).
export const testimonials = [
  { quote: "Replace this with a real quote from someone you worked with.", name: "Client Name", role: "Role", company: "Company", logo: "", rating: 5, photo: "" },
  { quote: "A second quote. Short and specific is more convincing than long.", name: "Another Person", role: "Role", company: "Company", logo: "", rating: 5, photo: "" },
];
