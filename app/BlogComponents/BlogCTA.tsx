"use client";
import Link from "next/link";
const BlogCTA: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative bg-(--surface) rounded-2xl sm:rounded-(--radius-xl) border border-(--border) overflow-hidden p-5 sm:p-8 lg:p-12">
          {/* Background Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-(--primary)/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Content */}
          <div className="relative text-center">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-(--primary)/10 rounded-full mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-(--primary) rounded-full animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium text-(--primary) uppercase tracking-wider">
                Let's Work Together
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-(--text) mb-3 sm:mb-4 leading-tight">
              Need a Custom{" "}
              <span className="text-(--primary)">Digital Solution</span>?
            </h2>

            {/* Description */}
            <p className="text-(--text-muted) text-xs sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              From web applications and digital marketing to SEO and AI
              solutions, we help businesses build and grow online.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <Link
                href="/consultation"
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-(--primary) text-white text-xs sm:text-sm font-medium rounded-full hover:bg-(--primary-hover) transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-1.5 sm:gap-2 group"
              >
                Get a Free Consultation
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-(--border) text-(--text) text-xs sm:text-sm font-medium rounded-full hover:border-(--primary) hover:text-(--primary) hover:bg-(--surface-hover) transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2"
              >
                Contact Us
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-(--border)">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[10px] sm:text-xs text-(--text-muted)">
                  Free Consultation
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[10px] sm:text-xs text-(--text-muted)">
                  No Obligation
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[10px] sm:text-xs text-(--text-muted)">
                  Custom Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
