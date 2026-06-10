"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface ServiceCardProps {
  name: string;
  description: string;
  startingPrice: string;
  slug: string; // Add slug prop
  categorySlug: string; // Add categorySlug prop
  featured?: boolean;
  index?: number;
  onGetStarted?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  startingPrice,
  slug,
  categorySlug,
  featured = false,
  index = 0,
  onGetStarted,
}) => {
  const serviceUrl = `/services/${categorySlug}/${slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="group relative bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 sm:p-5 hover:border-(--primary)/30 transition-all duration-300 flex flex-col"
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 px-2.5 py-0.5 bg-(--primary) text-white text-[10px] font-medium rounded-full z-10">
          Popular
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        <Link href={serviceUrl} className="block">
          <h3 className="text-sm sm:text-base font-semibold text-(--text) group-hover:text-(--primary) transition-colors mb-2 pr-6 cursor-pointer">
            {name}
          </h3>
        </Link>
        <p className="text-xs sm:text-sm text-(--text-muted) leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Bottom */}
      {/* Bottom */}
      <div className="pt-3 border-t border-(--border) flex items-center justify-between">
        <div>
          <motion.div
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="text-sm sm:text-base font-bold bg-gradient-to-r from-(--primary) to-purple-500 bg-clip-text text-transparent"
          >
            {startingPrice}/<span className="text-xs">Only</span>
          </motion.div>
        </div>

        <div className="flex gap-2">
          <Link
            href={serviceUrl}
            className="inline-flex items-center gap-1 text-xs font-medium text-(--primary) hover:text-(--primary-hover) transition-colors group/link"
          >
            <span>Get Started</span>
            <FiArrowRight
              size={12}
              className="group-hover/link:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
