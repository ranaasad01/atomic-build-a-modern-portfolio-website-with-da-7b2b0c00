"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";
import {
  APP_NAME,
  APP_TAGLINE,
  APP_EMAIL,
  APP_GITHUB,
  APP_LINKEDIN,
  APP_TWITTER,
} from "@/lib/data";
import { ArrowRight, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, ExternalLink, Code2, Palette, Zap, Shield, Star, Download, CheckCircle, Sparkles, Terminal, Layout, Activity } from 'lucide-react';

// ─── Inline Data ────────────────────────────────────────────────────────────

const skills = [
  { name: "React / Next.js", level: 95, category: "frontend", icon: Layout },
  { name: "TypeScript", level: 92, category: "frontend", icon: Code2 },
  { name: "Node.js / Express", level: 88, category: "backend", icon: Terminal },
  { name: "PostgreSQL", level: 82, category: "backend", icon: Activity },
  { name: "Tailwind CSS", level: 96, category: "frontend", icon: Palette },
  { name: "Figma / UI Design", level: 85, category: "design", icon: Palette },
  { name: "Docker / DevOps", level: 78, category: "tools", icon: Shield },
  { name: "GraphQL", level: 80, category: "backend", icon: Zap },
];

const projects = [
  {
    slug: "lumina-saas",
    title: "Lumina SaaS Platform",
    tagline: "AI-powered analytics for modern teams",
    description:
      "A full-stack SaaS dashboard with real-time analytics, team collaboration, and AI-driven insights. Built with Next.js, Prisma, and OpenAI.",
    tags: ["Next.js", "TypeScript", "Prisma", "OpenAI", "Tailwind"],
    image: "https://media.licdn.com/dms/image/v2/D563DAQFgKRk2I1dzqg/image-scale_191_1128/B56Zvs73RzHMAc-/0/1769206675008/forge_digital_marketing_cover?e=2147483647&v=beta&t=rVbG2BL24ctPgoPxS6MWLQg84C8H3Mph1G6W36f5H7A",
    liveUrl: "https://lumina.demo",
    githubUrl: "https://github.com/alexmorgan/lumina",
    featured: true,
  },
  {
    slug: "forge-ecommerce",
    title: "Forge E-Commerce",
    tagline: "Headless commerce with blazing performance",
    description:
      "A headless e-commerce storefront achieving 99 Lighthouse scores. Features cart, checkout, Stripe payments, and a custom CMS.",
    tags: ["Next.js", "Stripe", "Sanity CMS", "Framer Motion"],
    image: "https://s3-alpha.figma.com/hub/file/2243587999456758553/75e4372a-8462-487a-9eef-232cbcde11ad-cover.png",
    liveUrl: "https://forge.demo",
    githubUrl: "https://github.com/alexmorgan/forge",
    featured: true,
  },
  {
    slug: "orbit-design-system",
    title: "Orbit Design System",
    tagline: "Accessible component library for scale",
    description:
      "A comprehensive design system with 60+ components, dark/light themes, full a11y compliance, and Storybook documentation.",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Variables"],
    image: "https://cdn.prod.website-files.com/65b4054ea4b34ac59d593814/65bcc80019cba1828e9dca60_6492c36b39fcf6a7204b9428_pulse-real-time-hand.png",
    liveUrl: "https://orbit.demo",
    githubUrl: "https://github.com/alexmorgan/orbit",
    featured: true,
  },
  {
    slug: "pulse-realtime",
    title: "Pulse Real-Time App",
    tagline: "Live collaboration for distributed teams",
    description:
      "A real-time collaborative workspace with live cursors, shared documents, and instant messaging powered by WebSockets.",
    tags: ["React", "Socket.io", "Redis", "Node.js", "PostgreSQL"],
    image: "https://imageio.forbes.com/specials-images/imageserve/5c928fa04bbe6f52641ab341/0x0.jpg?format=jpg&crop=2124,2123,x980,y756,safe&height=416&width=416&fit=bounds",
    liveUrl: "https://pulse.demo",
    githubUrl: "https://github.com/alexmorgan/pulse",
    featured: false,
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at Luminary Labs",
    avatar: "https://imageio.forbes.com/specials-images/imageserve/5c928fa04bbe6f52641ab341/0x0.jpg?format=jpg&crop=2124,2123,x980,y756,safe&height=416&width=416&fit=bounds",
    quote:
      "Alex delivered a production-ready platform in record time. The code quality, attention to detail, and communication were all exceptional. Easily the best developer we've worked with.",
    stars: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Founder at Forge Studio",
    avatar: "http://tinabangel.com/wp-content/uploads/2015/04/MARCUS-RIVERA.png",
    quote:
      "Our e-commerce conversion rate jumped 34% after Alex rebuilt our storefront. The performance improvements and UX polish were beyond what we imagined possible.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "Product Lead at Orbit Systems",
    avatar: "https://media.licdn.com/dms/image/v2/D5622AQE3NpM1FP01Yg/feedshare-shrink_800/B56Zf4pvKcGUAg-/0/1752223383746?e=2147483647&v=beta&t=C11dC6M36dpAKpcbBRMtusPrnkgE-cNJfHc93ZNpFoQ",
    quote:
      "Alex built our entire design system from scratch. It's now used by 12 product teams and has cut our UI development time in half. Incredible work.",
    stars: 5,
  },
];

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end web applications built with modern stacks — Next.js, TypeScript, Node.js, and cloud-native infrastructure.",
    highlights: ["Next.js & React", "REST & GraphQL APIs", "Database design", "Cloud deployment"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Pixel-perfect interfaces that balance aesthetics with usability. From wireframes to polished Figma prototypes.",
    highlights: ["Design systems", "Figma prototyping", "Accessibility (WCAG)", "Motion design"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Auditing and refactoring existing apps to achieve top Lighthouse scores, faster load times, and better Core Web Vitals.",
    highlights: ["Core Web Vitals", "Bundle optimization", "Image & font tuning", "CDN strategy"],
  },
  {
    icon: Shield,
    title: "Technical Consulting",
    description:
      "Architecture reviews, tech stack decisions, and engineering mentorship for startups and growing product teams.",
    highlights: ["Architecture review", "Stack selection", "Code audits", "Team mentorship"],
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5 yrs", label: "Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SkillBar({ name, level, icon: Icon }: { name: string; level: number; icon: React.ElementType }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-300"
    >
      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
        <Icon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-white/80 truncate">{name}</span>
          <span className="text-xs text-indigo-400 font-semibold ml-2 shrink-0">{level}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 backdrop-blur-sm">
            <Sparkles size={11} className="text-indigo-400" />
            <span className="text-xs font-medium text-indigo-300">Featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-indigo-400 mt-0.5">{project.tagline}</p>
        </div>
        <p className="text-sm text-white/50 leading-relaxed flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {(project.tags ?? []).slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs font-medium bg-white/5 text-white/50 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-indigo-400 transition-colors duration-200"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-indigo-400 transition-colors duration-200"
            >
              <Github size={13} />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      className="flex flex-col gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300"
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-white/60 text-sm leading-relaxed italic">"{testimonial.quote}"</p>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 shrink-0">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-white/40">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Contact Form State ──────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
          <CheckCircle size={32} className="text-indigo-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
        <p className="text-white/50 text-sm max-w-xs">
          Thanks for reaching out. I'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
          className="mt-2 text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-white/50 uppercase tracking-wider">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-all duration-200"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-white/50 uppercase tracking-wider">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-all duration-200"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-white/50 uppercase tracking-wider">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-all duration-200 resize-none"
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all duration-200"
      >
        Send Message
        <ArrowRight size={16} />
      </motion.button>
    </form>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = (variants: object) =>
    shouldReduceMotion
      ? {}
      : { variants, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        {/* Background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/6 blur-[80px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8"
          >
            <Sparkles size={14} />
            Available for freelance projects
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {APP_NAME}
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/50 font-light mb-4"
          >
            {APP_TAGLINE}
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-white/35 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            I build fast, accessible, and beautifully crafted web experiences — from pixel-perfect UIs to
            scalable backend systems. Let's turn your ideas into reality.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 transition-all duration-200"
            >
              View My Work
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href={`mailto:${APP_EMAIL}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-semibold text-sm transition-all duration-200"
            >
              <Mail size={16} />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            {[
              { href: APP_GITHUB, icon: Github, label: "GitHub" },
              { href: APP_LINKEDIN, icon: Linkedin, label: "LinkedIn" },
              { href: APP_TWITTER, icon: Twitter, label: "Twitter" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-indigo-500/15 border border-white/5 hover:border-indigo-500/30 flex items-center justify-center text-white/40 hover:text-indigo-400 transition-all duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/20 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="relative py-16 border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-600/5 to-indigo-600/5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="flex flex-col items-center text-center gap-1"
              >
                <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm text-white/40">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div
              variants={slideInLeft}
              {...motionProps(slideInLeft)}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <img
                  src="https://media.licdn.com/dms/image/v2/C5603AQE-oMdEA4-lZg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516522176575?e=2147483647&v=beta&t=NNza9NbD-soKscrNPIBTk-qTQ2z583NAZI6yUgYwXZ0"
                  alt="Alex Morgan — Full-Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-transparent" />
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 lg:right-0 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a1a2e] border border-indigo-500/30 shadow-xl shadow-indigo-500/10"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-white/80">Open to opportunities</span>
              </motion.div>
            </motion.div>

            {/* Text side */}
            <motion.div
              variants={slideInRight}
              {...motionProps(slideInRight)}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                  About Me
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Crafting digital experiences with{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    purpose & precision
                  </span>
                </h2>
              </div>
              <div className="space-y-4 text-white/55 leading-relaxed">
                <p>
                  I'm a full-stack developer and designer with 5+ years of experience building
                  production-grade web applications. I specialize in React, Next.js, and Node.js —
                  but I care just as much about design, performance, and accessibility as I do about code.
                </p>
                <p>
                  I've worked with early-stage startups, scale-ups, and agencies across fintech, e-commerce,
                  and SaaS. Whether it's architecting a new product from scratch or rescuing a legacy
                  codebase, I bring the same level of craft and attention to detail.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open source, writing about web
                  performance, or exploring the intersection of design and engineering.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Figma", "AWS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-2">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 transition-all duration-200"
                >
                  Let's Work Together
                  <ArrowRight size={15} />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-semibold text-sm transition-all duration-200"
                >
                  <Download size={15} />
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            {...motionProps(fadeInUp)}
            className="text-center mb-16"
          >
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              A curated set of tools and technologies I use to build modern, scalable, and beautiful products.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
            ))}
          </motion.div>

          {/* Services */}
          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/25 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1.5">{service.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-1.5 mt-auto pt-3 border-t border-white/5">
                    {(service.highlights ?? []).map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-white/40">
                        <CheckCircle size={12} className="text-indigo-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            {...motionProps(fadeInUp)}
            className="text-center mb-16"
          >
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Selected Projects
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              A selection of products I've designed and built — from SaaS platforms to design systems and
              real-time applications.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            {...motionProps(fadeIn)}
            className="text-center mt-12"
          >
            <motion.a
              href={APP_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-sm transition-all duration-200"
            >
              <Github size={16} />
              View All on GitHub
              <ArrowRight size={14} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            {...motionProps(fadeInUp)}
            className="text-center mb-16"
          >
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              I take pride in delivering work that exceeds expectations. Here's what some of my clients
              have to say.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div
              variants={slideInLeft}
              {...motionProps(slideInLeft)}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                  Contact
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                  Let's build something{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    great together
                  </span>
                </h2>
                <p className="text-white/45 leading-relaxed">
                  Have a project in mind? Looking for a developer to join your team? Or just want to say
                  hello? I'd love to hear from you. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {[
                  { icon: Mail, label: "Email", value: APP_EMAIL, href: `mailto:${APP_EMAIL}` },
                  { icon: Github, label: "GitHub", value: "github.com/alexmorgan", href: APP_GITHUB },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/alexmorgan", href: APP_LINKEDIN },
                ].map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/25 hover:bg-white/[0.06] transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                        {value}
                      </p>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-indigo-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              variants={slideInRight}
              {...motionProps(slideInRight)}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/5"
            >
              <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scaleIn}
            {...motionProps(scaleIn)}
            className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-pink-600/10" />
            <div className="absolute inset-0 border border-indigo-500/20 rounded-3xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

            <div className="relative z-10">
              <motion.div
                animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="inline-block mb-4"
              >
                <Sparkles size={32} className="text-indigo-400 mx-auto" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to start your project?
              </h2>
              <p className="text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
                I'm currently accepting new clients for Q1 2025. Let's discuss your project and see how
                I can help you build something exceptional.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href={`mailto:${APP_EMAIL}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-2xl shadow-indigo-500/30 transition-all duration-200"
                >
                  <Mail size={18} />
                  Start a Conversation
                </motion.a>
                <motion.a
                  href={APP_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-semibold transition-all duration-200"
                >
                  <Github size={18} />
                  Explore GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}