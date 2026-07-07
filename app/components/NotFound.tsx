"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Giant 404 Background Text */}
      <h1 className="absolute inset-0 flex items-center justify-center text-[40vw] font-black text-(--primary)/5 select-none pointer-events-none">
        404
      </h1>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-(--text) mb-3">
            Page Not Found
          </h2>
          <p className="text-sm text-(--text-muted) max-w-sm mx-auto mb-6">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-(--primary) text-white font-medium text-sm rounded-lg hover:bg-(--primary-hover) transition-colors"
            >
              Go Back Home
              <FiArrowRight size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;