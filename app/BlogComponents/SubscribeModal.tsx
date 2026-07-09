"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would send email to your API
      console.log("Subscribed:", email);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative bg-(--surface) rounded-(--radius-xl) border border-(--border) p-6 sm:p-8 max-w-md w-full shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 text-(--text-muted) hover:text-(--text) transition-colors"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                {/* Icon */}
                <div className="w-14 h-14 bg-(--primary)/10 rounded-full flex items-center justify-center mb-5 mx-auto">
                  <svg
                    className="w-7 h-7 text-(--primary)"
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
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-(--text) text-center mb-2">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-(--text-muted) text-sm text-center mb-6">
                  Get the latest posts, insights, and updates delivered straight
                  to your inbox.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-(--background) border border-(--border) rounded-full text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary) transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-(--primary) text-white text-sm font-medium rounded-full hover:bg-(--primary-hover) transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Subscribe Now
                  </button>
                </form>

                <p className="text-(--text-muted) text-xs text-center mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-(--text) mb-2">
                  Thank You!
                </h3>
                <p className="text-(--text-muted) text-sm">
                  You've successfully subscribed to our newsletter.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 bg-(--primary) text-white text-sm font-medium rounded-full hover:bg-(--primary-hover) transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SubscribeModal;
