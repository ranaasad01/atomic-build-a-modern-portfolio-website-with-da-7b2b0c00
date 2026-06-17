"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, Download, CheckCircle } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const workExperience = [
  {
    id: 1,
    role: "Senior Full-Stack Engineer",
    company: "Lumina Technologies",
    period: "2022 – Present",
    location: "Remote",
    description:
      "Led development of a real-time SaaS analytics platform serving 50k+ users. Architected microservices with Node.js, built React dashboards, and reduced load times by 60%.",
    tags: ["Next.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "Forge Digital",
    period: "2020 – 2022",
    location: "San Francisco, CA",
    description:
      "Built headless e-commerce storefronts for enterprise clients. Delivered pixel-perfect UIs, integrated Stripe payments, and improved Core Web Vitals scores to 98+.",
    tags: ["React", "Tailwind CSS", "Stripe", "Sanity CMS"],
  },
  {
    id: 3,
    role: "UI/UX Developer",
    company: "Orbit Studio",
    period: "2018 – 2020",
    location: "New York, NY",
    description:
      "Designed and developed accessible component libraries and design systems used across 12 product teams. Championed a11y standards and Storybook documentation.",
    tags: ["React", "Figma", "Storybook", "CSS Variables"],
  },
];

const education = [
  {
    id: 1,
    degree: "B.S. Computer Science",
    school: "University of California, Berkeley",
    period: "2014 – 2018",
    detail:
      "Graduated with honors. Focus on distributed systems and human-computer interaction.",
  },
  {
    id: 2,
    degree: "UX Design Certificate",
    school: "Google / Coursera",
    period: "2019",
    detail:
      "Completed the Google UX Design Professional Certificate with distinction.",
  },
];

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    id: 2,
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    year: "2022",
  },
  {
    id: 3,
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    year: "2023",
  },
  {
    id: 4,
    name: "Meta Frontend Developer",
    issuer: "Meta",
    year: "2021",
  },
  {
    id: 5,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB",
    year: "2022",
  },
  {
    id: 6,
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    year: "2023",
  },
];

// ─── Section Heading ─────────────────────────────────────────────────────────

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Radial gradient background */}
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
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-bold tracking-tight mb-4"
            >
              Resume{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                &amp; CV
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white/60 text-lg sm:text-xl max-w-xl mx-auto mb-8"
            >
              A snapshot of my experience, education, and certifications.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 shadow-lg shadow-indigo-500/25"
              >
                <Download size={18} />
                Download PDF
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Work Experience ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Work Experience" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6"
          >
            {workExperience.map((job) => (
              <motion.div
                key={job.id}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 border-l-2 border-l-indigo-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-indigo-400 font-medium mt-0.5">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 shrink-0">
                    <span className="flex items-center gap-1.5 text-white/50 text-sm">
                      <Calendar size={13} />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/40 text-sm">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Education" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
                  <GraduationCap size={20} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {edu.degree}
                  </h3>
                  <p className="text-white/60 text-sm mt-0.5">{edu.school}</p>
                  <p className="text-white/40 text-xs mt-1 flex items-center gap-1">
                    <Calendar size={11} />
                    {edu.period}
                  </p>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {edu.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Certifications" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={scaleIn}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-3 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Award size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm leading-snug">
                    {cert.name}
                  </p>
                  <p className="text-white/50 text-xs mt-1">{cert.issuer}</p>
                  <p className="text-white/30 text-xs mt-0.5">{cert.year}</p>
                </div>
                <div className="mt-auto pt-1">
                  <span className="inline-flex items-center gap-1 text-indigo-400/70 text-xs">
                    <CheckCircle size={11} />
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
