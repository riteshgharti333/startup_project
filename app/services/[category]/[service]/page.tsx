
"use client";

import { useParams } from "next/navigation";
import DigitalMarketingPage from "./DigitalMarketingPage";
import OneService from "./OneService";

export default function ServicePage() {
  const params = useParams();
  const serviceSlug = params.service as string;

  // List of all digital marketing package slugs
  const digitalMarketingSlugs = [
    "launch-package",
    "growth-package", 
    "scale-package",
    "enterprise-package"
  ];

  const isDigitalMarketing = digitalMarketingSlugs.includes(serviceSlug);

  if (isDigitalMarketing) {
    return <DigitalMarketingPage />;
  }

  return <OneService />;
}
