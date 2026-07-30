"use client";
import React from "react";

interface SubscribeButtonProps {
  isSubscribed: boolean;
  isScrolled?: boolean;
  onClick: () => void;
  variant?: "navbar" | "mobile" | "footer";
  className?: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({
  isSubscribed,
  isScrolled = false,
  onClick,
  variant = "navbar",
  className = "",
}) => {
  const baseStyles =
    "font-medium rounded-full transition-all duration-200 hover:shadow-lg";

  const variantStyles = {
    navbar: {
      default:
        "bg-(--primary) hover:bg-(--primary-hover) text-white shadow-blue-500/25",
      subscribed:
        "bg-green-600 hover:bg-green-700 text-white shadow-green-500/25",
      size: isScrolled
        ? "px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs"
        : "px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-sm",
    },
    mobile: {
      default: "bg-(--primary) hover:bg-(--primary-hover)",
      subscribed: "bg-green-600 hover:bg-green-700",
      size: "w-full py-3 text-sm rounded-xl",
    },
    footer: {
      default: "bg-(--primary) hover:bg-(--primary-hover) text-white w-full",
      subscribed: "bg-green-600 hover:bg-green-700 text-white w-full",
      size: "px-4 py-2.5 text-sm rounded-xl",
    },
  };

  const variantConfig = variantStyles[variant];
  const statusClass = isSubscribed
    ? variantConfig.subscribed
    : variantConfig.default;

  let label = "Subscribe";
  if (variant === "mobile") {
    label = isSubscribed ? "Subscribed" : "Subscribe to Newsletter";
  } else if (variant === "footer") {
    label = isSubscribed ? "Subscribed" : "Subscribe Now";
  } else {
    label = isSubscribed ? "Subscribed" : "Subscribe";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${statusClass} ${variantConfig.size} ${className}`}
    >
      {label}
    </button>
  );
};

export default SubscribeButton;