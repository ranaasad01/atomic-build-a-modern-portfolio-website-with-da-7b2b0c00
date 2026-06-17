export const APP_NAME = "Toby Carlson";
export const APP_TAGLINE = "Full-Stack Developer & Designer";
export const APP_EMAIL = "hello@tobycarlson.dev";
export const APP_GITHUB = "https://github.com/tobycarlson";
export const APP_LINKEDIN = "https://linkedin.com/in/tobycarlson";
export const APP_TWITTER = "https://twitter.com/tobycarlson";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

export const navCTA = {
  label: "Hire Me",
  href: "#contact",
};

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
}
