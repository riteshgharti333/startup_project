"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiPhone,
  FiStar,
  FiClock,
  FiUsers,
  FiBookOpen,
  FiGlobe,
  FiCpu,
  FiSmartphone,
  FiCloud,
  FiCode,
  FiMonitor,
  FiTrendingUp,
  FiAward,
  FiPlay,
} from "react-icons/fi";

interface Course {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  modules: number;
  comingSoon?: boolean;
  color: string;
  bg: string;
}

const Courses: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const courses: Course[] = [
    {
      icon: FiGlobe,
      title: "Full-Stack Web Development",
      category: "Web Development",
      description:
        "Master modern web development with React, Next.js, Node.js, and databases. Build real-world projects from scratch.",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      modules: 12,
      color: "text-(--primary)",
      bg: "bg-(--primary)/10",
      comingSoon: true,
    },
    {
      icon: FiCpu,
      title: "AI & Machine Learning",
      category: "Artificial Intelligence",
      description:
        "Learn AI fundamentals, neural networks, NLP, and build intelligent applications with Python and TensorFlow.",
      duration: "10 Weeks",
      level: "Intermediate",
      modules: 10,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      comingSoon: true,
    },
    {
      icon: FiSmartphone,
      title: "Mobile App Development",
      category: "App Development",
      description:
        "Build cross-platform mobile apps with React Native and Flutter. Deploy to both iOS and Android.",
      duration: "8 Weeks",
      level: "Intermediate",
      comingSoon: true,
      modules: 8,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      icon: FiCloud,
      title: "Cloud & DevOps Engineering",
      category: "Cloud Computing",
      description:
        "Master AWS, Docker, Kubernetes, CI/CD pipelines, and infrastructure as code for modern deployments.",
      duration: "10 Weeks",
      level: "Advanced",
      modules: 10,
      comingSoon: true,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: FiCode,
      title: "Python & Data Science",
      category: "Data Science",
      description:
        "Learn Python programming, data analysis, visualization, and machine learning for data-driven decisions.",
      duration: "8 Weeks",
      level: "Beginner to Intermediate",
      modules: 8,
      comingSoon: true,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      icon: FiMonitor,
      title: "UI/UX Design Mastery",
      category: "Design",
      description:
        "Master user interface and experience design with Figma, design systems, prototyping, and user research.",
      duration: "6 Weeks",
      level: "Beginner to Advanced",
      modules: 6,
      comingSoon: true,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
    {
      icon: FiTrendingUp,
      title: "Digital Marketing & SEO",
      category: "Marketing",
      description:
        "Learn SEO, Google Ads, social media marketing, content strategy, and analytics to grow businesses online.",
      duration: "6 Weeks",
      level: "Beginner",
      modules: 6,
      comingSoon: true,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      icon: FiAward,
      title: "Cybersecurity Fundamentals",
      category: "Security",
      description:
        "Learn network security, ethical hacking, penetration testing, and how to protect systems from threats.",
      duration: "8 Weeks",
      level: "Intermediate",
      modules: 8,
      comingSoon: true,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
  ];

  return (
    <main className="relative">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 ">
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
              <FiBookOpen size={14} className="text-(--primary)" />
              <span className="text-sm text-(--text-muted)">Courses</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text) mb-4">
              Learn &{" "}
              <span className="relative inline-block">
                <span className="text-(--primary)">Grow</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
                />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-(--text-muted) max-w-2xl mx-auto mb-8">
              Master in-demand tech skills with our comprehensive courses
              designed for all skill levels. Learn from industry experts and
              build real-world projects.
            </p>

            {/* <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#courses-list"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
              >
                Explore Courses
                <FiArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--surface) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all"
              >
                <FiPhone size={14} className="text-(--primary)" />
                Enroll Now
              </a>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="relative pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: FiAward,
                title: "Expert Instructors",
                desc: "Industry professionals",
              },
              {
                icon: FiPlay,
                title: "Hands-on Projects",
                desc: "Real-world practice",
              },
              {
                icon: FiClock,
                title: "Flexible Schedule",
                desc: "Learn at your pace",
              },
              {
                icon: FiUsers,
                title: "Community Support",
                desc: "Learn together",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-4 sm:p-5 text-center hover:border-(--primary)/20 transition-all"
                >
                  <div className="w-10 h-10 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-(--primary)" />
                  </div>
                  <h3 className="text-sm font-semibold text-(--text) mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-(--text-muted)">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section
        id="courses-list"
        ref={sectionRef}
        className="relative pb-20 lg:pb-28"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-(--border)" />
            <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
              Available Courses
            </span>
            <div className="h-px flex-1 bg-(--border)" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="group relative bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 sm:p-5 hover:border-(--primary)/30 transition-all duration-300 flex flex-col"
                >
                  

                  {/* Icon + Category */}
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-10 h-10 ${course.bg} rounded-(--radius-md) flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={20} className={course.color} />
                    </div>
                    <span className="text-[10px] text-(--text-muted) bg-(--background) px-2 py-1 rounded-(--radius-sm) border border-(--border)">
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-semibold text-(--text) group-hover:text-(--primary) transition-colors mb-2">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-(--text-muted) leading-relaxed mb-4 flex-1">
                    {course.description}
                  </p>

                  {/* Course Meta */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-(--text-muted)">
                      <FiClock size={12} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-(--text-muted)">
                      <FiBookOpen size={12} />
                      <span>{course.modules} Modules</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-(--text-muted) col-span-2">
                      <FiStar size={12} />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-3 border-t border-(--border)">
                    {course.comingSoon ? (
                      <button
                        disabled
                        className="w-full px-3 py-2 bg-(--background) border border-(--border) text-(--text-muted) text-xs font-medium rounded-(--radius-md) cursor-not-allowed opacity-60"
                      >
                        Coming Soon
                      </button>
                    ) : (
                      <a
                        href="#contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-(--primary) hover:bg-(--primary-hover) text-white text-xs font-medium rounded-(--radius-md) transition-all group/link"
                      >
                        <span>Enroll Now</span>
                        <FiArrowRight
                          size={12}
                          className="group-hover/link:translate-x-0.5 transition-transform"
                        />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Courses;
