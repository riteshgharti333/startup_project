"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMail, FiCheck } from "react-icons/fi";
import axiosInstance from "../utils/axios";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");

  useEffect(() => {
    const subscribed = localStorage.getItem("twipraTech-newsletter") === "true";
    setIsSubscribed(subscribed);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setSubscribeMessage("");
    }
  }, [isOpen]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubscribeMessage("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    setSubscribeMessage("");

    try {
      const response = await axiosInstance.post("/subscribe", { email });

      if (response.data.success) {
        setIsSubscribed(true);
        localStorage.setItem("twipraTech-newsletter", "true");
        setSubscribeMessage("You've been subscribed successfully! 🎉");
        if (onSuccess) onSuccess();
        setTimeout(() => {
          onClose();
          setSubscribeMessage("");
        }, 2000);
      } else {
        setSubscribeMessage(response.data.message || "Subscription failed");
      }
    } catch (error: any) {
      // Check if it's the "already subscribed" error
      if (error.message === "You're already subscribed!") {
        setIsSubscribed(true);
        localStorage.setItem("twipraTech-newsletter", "true");
        setSubscribeMessage("You're already subscribed!");
        if (onSuccess) onSuccess();
        setTimeout(() => {
          onClose();
          setSubscribeMessage("");
        }, 2000);
      } else {
        setSubscribeMessage(
          error.message || "Something went wrong. Please try again.",
        );
      }
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-(--surface) border border-(--border) rounded-2xl max-w-md w-full p-6 shadow-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-(--text)">
                    {isSubscribed
                      ? "Already Subscribed"
                      : "Subscribe to Newsletter"}
                  </h3>
                  <p className="text-sm text-(--text-muted) mt-1">
                    {isSubscribed
                      ? "You're already a subscriber! Stay tuned for updates."
                      : "Get the latest insights and updates directly in your inbox."}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 hover:bg-(--surface-hover) rounded-lg transition-colors text-(--text-muted)"
                >
                  <FiX size={20} />
                </button>
              </div>

              {subscribeMessage && (
                <div className="mb-4 p-3 rounded-lg text-sm flex items-center gap-2 bg-green-500/10 text-green-500 border border-green-500/20">
                  <FiCheck size={16} />
                  {subscribeMessage}
                </div>
              )}

              {!isSubscribed && (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-(--text) mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <FiMail
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                        size={16}
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-(--background) border border-(--border) rounded-lg text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary) transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="w-full py-2.5 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubscribing ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Subscribing...
                      </div>
                    ) : (
                      "Subscribe Now"
                    )}
                  </button>
                </form>
              )}

              {!isSubscribed && (
                <p className="text-xs text-(--text-muted) mt-4 text-center">
                  No spam, unsubscribe anytime.
                </p>
              )}

              {isSubscribed && (
                <button
                  onClick={onClose}
                  className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-all"
                >
                  Close
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SubscribeModal;
