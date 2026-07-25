"use client";

import { FiLinkedin, FiGlobe } from "react-icons/fi";

interface LeaderLink {
  label: string;
  url: string;
  icon: string;
}

interface Leader {
  img: string;
  title: string;
  subtitle: string;
  desc1: string;
  desc2: string;
  links: LeaderLink[];
}

interface LeaderCardProps {
  leader: Leader;
  index: number;
  isInView: boolean;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader, index, isInView }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        return <FiLinkedin size={15} />;
      case "globe":
        return <FiGlobe size={15} />;
      default:
        return <FiGlobe size={15} />;
    }
  };

  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      } items-center gap-8 sm:gap-12 mb-16 sm:mb-24 max-w-5xl m-auto`}
    >
      {/* Image Section - 30% */}
      <div className="w-full sm:w-[40%]">
        <div className="relative overflow-hidden rounded-(--radius-lg) aspect-[4/5] group">
          <img
            src={leader.img}
            alt={leader.title}
            className=" w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Decorative shape */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-(--primary)/10 rounded-full blur-2xl" />
        </div>
      </div>

      {/* Content Section - 70% */}
      <div className="w-full sm:w-[60%] space-y-4">
        {/* Name and Role */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-(--text) mb-1">
            {leader.title}
          </h3>
          <p className="text-(--primary) font-medium text-sm lg:text-base">
            {leader.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-(--text-muted) text-sm lg:text-base leading-relaxed">
          {leader.desc1}
        </p>
        <p className="text-(--text-muted) text-sm lg:text-base leading-relaxed pl-4 border-l-2 border-(--primary)/30">
          {leader.desc2}
        </p>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {leader.links.map((link, linkIndex) => (
            <a
              key={linkIndex}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-(--radius-md) bg-(--surface) border border-(--border) text-(--text-muted) hover:text-(--primary) hover:border-(--primary)/30 transition-all duration-200 text-sm"
            >
              {getIcon(link.icon)}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
