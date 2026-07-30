import Image from "next/image";

type BlogImageVariant = "banner" | "feature" | "recent" | "popular";

interface BlogImageProps {
  src: string;
  alt: string;
  variant?: BlogImageVariant;
  className?: string;
}

export default function BlogImage({
  src,
  alt,
  variant = "banner",
  className,
}: BlogImageProps) {
  const sizeMap: Record<BlogImageVariant, string> = {
    banner: "100vw",
    feature: "(max-width: 768px) 100vw, 50vw",
    recent: "(max-width: 768px) 100vw, 33vw",
    popular: "(max-width: 768px) 100vw, 25vw",
  };

  return (
    <Image
      src={src}
      fill
      sizes={sizeMap[variant]}
      alt={alt}
      className={className}
    />
  );
}
