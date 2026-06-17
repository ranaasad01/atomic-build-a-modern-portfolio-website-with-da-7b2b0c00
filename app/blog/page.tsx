"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { Calendar, Clock, Tag, ArrowRight, Search } from 'lucide-react';

// ─── Blog Post Data ──────────────────────────────────────────────────────────

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const posts: BlogPost[] = [
  {
    slug: "building-scalable-nextjs-apps",
    title: "Building Scalable Next.js Applications in 2024",
    excerpt:
      "A deep dive into architecture patterns, caching strategies, and performance optimizations that make Next.js apps fly at scale.",
    date: "December 12, 2024",
    readTime: "8 min read",
    tags: ["Next.js", "Performance", "Architecture"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    featured: true,
  },
  {
    slug: "mastering-typescript-generics",
    title: "Mastering TypeScript Generics: A Practical Guide",
    excerpt:
      "Generics are one of TypeScript's most powerful features. Learn how to write reusable, type-safe code with real-world examples.",
    date: "November 28, 2024",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Tutorial"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    featured: false,
  },
  {
    slug: "dark-mode-design-system",
    title: "Designing a Dark-First Design System",
    excerpt:
      "How I built a cohesive dark-mode design system with CSS variables, Tailwind, and a focus on accessibility and contrast ratios.",
    date: "November 10, 2024",
    readTime: "5 min read",
    tags: ["Design", "CSS", "Accessibility"],
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80",
    featured: false,
  },
  {
    slug: "react-server-components-deep-dive",
    title: "React Server Components: A Deep Dive",
    excerpt:
      "RSC changes everything about how we think about data fetching and rendering. Here's what you need to know to use them effectively.",
    date: "October 22, 2024",
    readTime: "10 min read",
    tags: ["React", "Next.js", "Performance"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    featured: true,
  },
  {
    slug: "freelance-developer-lessons",
    title: "5 Lessons from 5 Years of Freelancing",
    excerpt:
      "From landing the first client to managing scope creep — the honest lessons I've learned building products for startups and enterprises.",
    date: "October 5, 2024",
    readTime: "7 min read",
    tags: ["Career", "Freelance", "Business"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    featured: false,
  },
  {
    slug: "animating-with-framer-motion",
    title: "Fluid UI Animations with Framer Motion",
    excerpt:
      "A practical walkthrough of Framer Motion's most powerful APIs — layout animations, shared element transitions, and gesture-driven UIs.",
    date: "September 18, 2024",
    readTime: "9 min read",
    tags: ["Animation", "React", "UX"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    featured: false,
  },
];

const ALL_TAGS = [
  "All",
  "Next.js",
  "Performance",
  "Architecture",
  "TypeScript",
  "JavaScript",
  "Tutorial",
  "Design",
  "CSS",
  "Accessibility",
  "React",
  "Animation",
  "UX",
  "Career",
  "Freelance",
  "Business",
];

// ─── Page Component ──────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts =
    activeTag === "All"
      ? posts
      : posts.filter((post) => post.tags.includes(activeTag));

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Radial gradient background accent */}
        <div
          className="pointer-events-none absolute inset-0 flex items-start justify-center"
          aria-hidden="true"
        >
          <div className="h-[500px] w-[800px] rounded-full bg-indigo-600/20 blur-[120px] -translate-y-1/2" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center space-y-6"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
                <Tag size={14} />
                {posts.length} Articles
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              The{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="max-w-xl mx-auto text-lg text-white/50 leading-relaxed"
            >
              Thoughts on engineering, design, and building products people love.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Tag Filter Bar ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                activeTag === tag
                  ? "bg-indigo-500 text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ── Section 3: Blog Grid ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pb-24">
        {filteredPosts.length === 0 ? (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center py-24 text-center space-y-4"
          >
            <Search size={40} className="text-white/20" />
            <p className="text-white/40 text-lg">No articles found for this tag.</p>
            <button
              onClick={() => setActiveTag("All")}
              className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors"
            >
              Clear filter
            </button>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.slug}
                variants={scaleIn}
                className="group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 flex flex-col"
              >
                {/* Cover Image */}
                <div className="overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3 flex flex-col flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-indigo-500/10 text-indigo-400 text-xs px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-white/50 line-clamp-3 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta Footer */}
                  <div className="flex items-center justify-between text-xs text-white/40 pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Read Article Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-indigo-400 text-sm font-medium hover:gap-2 transition-all duration-200 hover:text-indigo-300 pt-1"
                  >
                    Read Article
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
}
