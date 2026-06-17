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
      "Toby delivered our SaaS platform ahead of schedule and exceeded every technical requirement. Their ability to translate complex business logic into elegant, performant code is truly exceptional. One of the best engineers I have worked with.",
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
      "Working with Toby was a game-changer for our e-commerce project. They brought not just technical expertise but genuine product thinking. Our conversion rates improved by 34% after the redesign.",
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
      "Toby has a rare combination of engineering precision and design sensibility. The component library they built for us is still the gold standard across all our product teams two years later.",
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
      "I hired Toby to build our MVP and they delivered a production-ready product in 6 weeks. Their communication was clear, their code was clean, and they genuinely cared about our success.",
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
      "Toby joined our team as a contractor and immediately became an invaluable contributor. They mentored junior developers, improved our CI/CD pipeline, and shipped features that delighted users.",
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
      "The attention to detail in Toby's work is remarkable. Every animation, every micro-interaction, every edge case was handled thoughtfully. Our users constantly compliment the polish of the product.",
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
      "Toby rebuilt our patient portal from scratch and the results were transformative. Page load times dropped by 70%, accessibility scores hit 100, and our support tickets related to UI issues dropped to near zero.",
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
      "As a fellow engineer, I can say Toby's code quality is outstanding. Well-structured, well-tested, and well-documented. A true professional who elevates everyone around them.",
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
      "Toby built our marketing site and the results speak for themselves — 3x increase in time-on-page and a 28% lift in demo sign-ups. They understood our goals and built something that truly converts.",
    rating: 5,
    featured: false,
  },
];

function StarRating({ count, size = "w-4 h-4" }: { count: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${size} fill-amber-400 text-amber-400`} />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: (typeof testimonials)[0];
  featured?: boolean;
}) {
  return (
    <motion.div
      variants={scaleIn}
      className={`relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300 ${
        featured ? "ring-1 ring-indigo-500/20" : ""
      }`}
    >
      {featured && (
        <span className="absolute top-4 right-4 text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-2.5 py-0.5">
          Featured
        </span>
      )}
      <StarRating count={testimonial.rating} />
      <blockquote className="text-white/70 text-sm leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
        />
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-white/40 text-xs">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsPage() {
  const featured = testimonials.filter((t) => t.featured);
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5">
                <Star size={14} className="fill-indigo-400" />
                Client Testimonials
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-bold tracking-tight mb-6"
            >
              What{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Clients Say
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
            >
              Don&apos;t take my word for it — here&apos;s what the people I&apos;ve worked with have to say about our collaboration.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 text-center"
          >
            {[
              { value: "50+", label: "Happy Clients" },
              { value: "5.0", label: "Average Rating" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Featured Testimonials ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold text-white mb-10"
            >
              Featured Reviews
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {featured.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} featured />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── All Testimonials ── */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold text-white mb-10"
            >
              More Reviews
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {rest.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Ready to work together?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/50 mb-8 leading-relaxed"
            >
              Let&apos;s build something you&apos;ll be proud to show off.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors duration-200 shadow-lg shadow-indigo-500/25"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
