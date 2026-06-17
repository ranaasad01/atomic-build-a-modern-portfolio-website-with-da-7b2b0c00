"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "Lumina Technologies",
    avatar: "https://i.pravatar.cc/80?img=47",
    quote:
      "Alex delivered our SaaS platform ahead of schedule and exceeded every technical requirement. Their ability to translate complex business logic into elegant, performant code is truly exceptional. One of the best engineers I have worked with.",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Williams",
    role: "Product Manager",
    company: "Forge Digital",
    avatar: "https://i.pravatar.cc/80?img=12",
    quote:
      "Working with Alex was a game-changer for our e-commerce project. They brought not just technical expertise but genuine product thinking. Our conversion rates improved by 34% after the redesign.",
    rating: 5,
    featured: true,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Lead Designer",
    company: "Orbit Studio",
    avatar: "https://i.pravatar.cc/80?img=45",
    quote:
      "Alex has a rare combination of engineering precision and design sensibility. The component library they built for us is still the gold standard across all our product teams two years later.",
    rating: 5,
    featured: false,
  },
  {
    id: 4,
    name: "James O'Brien",
    role: "Founder & CEO",
    company: "StartupLab",
    avatar: "https://i.pravatar.cc/80?img=33",
    quote:
      "I hired Alex to build our MVP and they delivered a production-ready product in 6 weeks. Their communication was clear, their code was clean, and they genuinely cared about our success.",
    rating: 5,
    featured: false,
  },
  {
    id: 5,
    name: "Elena Vasquez",
    role: "Engineering Manager",
    company: "TechCorp",
    avatar: "https://i.pravatar.cc/80?img=9",
    quote:
      "Alex joined our team as a contractor and immediately became an invaluable contributor. They mentored junior developers, improved our CI/CD pipeline, and shipped features that delighted users.",
    rating: 5,
    featured: true,
  },
  {
    id: 6,
    name: "David Kim",
    role: "Co-Founder",
    company: "NovaSpark",
    avatar: "https://i.pravatar.cc/80?img=68",
    quote:
      "The attention to detail in Alex's work is remarkable. Every animation, every micro-interaction, every edge case was handled thoughtfully. Our users constantly compliment the polish of the product.",
    rating: 5,
    featured: false,
  },
  {
    id: 7,
    name: "Rachel Torres",
    role: "Head of Product",
    company: "Bloom Health",
    avatar: "https://i.pravatar.cc/80?img=5",
    quote:
      "Alex rebuilt our patient portal from scratch and the results were transformative. Page load times dropped by 70%, accessibility scores hit 100, and our support tickets related to UI issues dropped to near zero.",
    rating: 5,
    featured: false,
  },
  {
    id: 8,
    name: "Tom Nakamura",
    role: "Senior Engineer",
    company: "Pixel Labs",
    avatar: "https://i.pravatar.cc/80?img=60",
    quote:
      "As a fellow engineer, I can say Alex's code quality is outstanding. Well-structured, well-tested, and well-documented. A true professional who elevates everyone around them.",
    rating: 5,
    featured: false,
  },
  {
    id: 9,
    name: "Amara Osei",
    role: "Marketing Director",
    company: "GrowthHQ",
    avatar: "https://i.pravatar.cc/80?img=25",
    quote:
      "Alex built our marketing site and the results speak for themselves — 3x increase in time-on-page and a 28% lift in demo sign-ups. They understood our goals and built something that truly converts.",
    rating: 5,
    featured: false,
  },
];

function StarRating({ count, size = "w-4 h-4" }: { count: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${size} text-yellow-400 fill-yellow-400`} />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const featured = testimonials.filter((t) => t.featured);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Radial gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                Testimonials
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              What{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                People Say
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Kind words from clients, colleagues, and collaborators I have had
              the pleasure of working with.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-3 pt-4"
            >
              {[
                "50+ Projects Delivered",
                "100% Client Satisfaction",
                "5★ Average Rating",
              ].map((stat) => (
                <span
                  key={stat}
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white/70"
                >
                  {stat}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Featured Testimonials ────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Featured</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2 mb-10" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featured.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeInUp}
              className="bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20 rounded-2xl p-8 flex flex-col"
            >
              {/* Opening quote mark */}
              <div className="text-6xl text-indigo-500/30 font-serif leading-none mb-2 select-none">
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-white/80 text-base leading-relaxed italic mb-6 flex-1">
                {t.quote}
              </p>

              {/* Star rating */}
              <div className="mb-4">
                <StarRating count={t.rating} size="w-4 h-4" />
              </div>

              {/* Avatar + info */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-2 border-indigo-500/30 object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=6366f1&color=fff`;
                  }}
                />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Section 3: All Testimonials Masonry Grid ─────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">All Testimonials</h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2 mb-10" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={scaleIn}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 break-inside-avoid mb-6 hover:border-indigo-500/30 transition-colors"
            >
              {/* Star rating */}
              <div className="mb-3">
                <StarRating count={t.rating} size="w-3.5 h-3.5" />
              </div>

              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Avatar + info */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border border-white/10 object-cover flex-shrink-0"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=6366f1&color=fff`;
                  }}
                />
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/40 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Section 4: CTA Banner ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-10 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to work together?
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Let&apos;s build something remarkable. I am currently available for
            new projects.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
