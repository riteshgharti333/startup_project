import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

import {
  FiMail,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";

export const socialData = {
  facebook: "https://www.facebook.com/profile.php?id=61590817079535",
  insta: "https://www.instagram.com/twiprat_tech",
  x: "https://x.com/TwipraTechth",
  email: "twipratechnologies@gmail.com",
  contact1: "+880 1851072019",
  contact2: "+01 310889153",
  address: "Dhaka, Bangladesh",
};

export const socialLinks = [
  {
    icon: FaFacebook,
    label: "Facebook",
    href: socialData.facebook,
    color: "hover:bg-[#1877F2] hover:text-white",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: socialData.insta,
    color:
      "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E4405F] hover:to-[#F56040] hover:text-white",
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
    href: socialData.x,
    color: "hover:bg-[#000] hover:text-white",
  },
];

export const contactInfo = [
  {
    icon: FiPhoneCall,
    label: "Call Us",
    value: socialData.contact1,
    href: `tel:${socialData.contact1}`,
  },
  {
    icon: FiPhoneCall,
    label: "Call Us",
    value: socialData.contact2,
    href: `tel:${socialData.contact2}`,
  },
  {
    icon: FiMail,
    label: "Email Us",
    value: socialData.email,
    href: `mai;to:${socialData.email}`,
  },
  {
    icon: FiMapPin,
    label: "Visit Us",
    value: socialData.address,
    href: "#",
  },
];

export const services = [
  "Web Development",
  "AI Solutions",
  "Mobile App Development",
  "Cloud & Infrastructure",
  "Digital Marketing",
  "Consulting & Training",
];

export const budgets = [
  "Under ৳10,000",
  "৳10,000 - ৳25,000",
  "৳25,000 - ৳50,000",
  "৳50,000 - ৳1,00,000",
  "৳1,00,000+",
  "Not Sure Yet",
];
