"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "../utils/axios";
import {
  FiUsers,
  FiTarget,
  FiAward,
  FiHeart,
  FiTrendingUp,
  FiArrowRight,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiUser,
  FiMail,
  FiPhone,
  FiFileText,
  FiLinkedin,
  FiGithub,
  FiBriefcase,
  FiClock,
} from "react-icons/fi";
import { PageSEO } from "../components/PageSEO";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  portfolio: string;
  linkedin: string;
  github: string;
  coverLetter: string;
  resume: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  position?: string;
  experience?: string;
  resume?: string;
}

const Career: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    linkedin: "",
    github: "",
    coverLetter: "",
    resume: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.experience) {
      newErrors.experience = "Please select years of experience";
    }

    if (!formData.position) {
      newErrors.position = "Please select a position";
    }

    if (!formData.experience) {
      newErrors.experience = "Please select years of experience";
    }

    if (!formData.resume) {
      newErrors.resume = "Please upload your resume (PDF or DOCX)";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors in the form");
      return false;
    }

    return true;
  };

  const simulateProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);
    return interval;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      // Validate file size (2MB)
      if (file.size > 2 * 1024 * 1024) {
        toast.error("File size must be less than 2MB");
        // Clear the file input
        e.target.value = "";
        return;
      }

      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Only PDF, DOC, or DOCX files are allowed");
        // Clear the file input
        e.target.value = "";
        return;
      }

      setFormData((prev) => ({ ...prev, resume: file }));
      // Clear the resume error
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.resume;
        return newErrors;
      });
      toast.success("Resume uploaded successfully!");
    } else {
      setFormData((prev) => ({ ...prev, resume: null }));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);
  const progressInterval = simulateProgress();

  try {
    // Create FormData
    const submitFormData = new FormData();
    
    // Prepare the JSON data exactly as Postman sends it
    const apiData = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phone,
      position: formData.position,
      yearsOfExperience: formData.experience,
      portfolioUrl: formData.portfolio || null,
      linkedInProfile: formData.linkedin || null,
      githubProfile: formData.github || null,
      coverLetter: formData.coverLetter || "",
    };
    
    // Append data as JSON string (exactly like Postman)
    submitFormData.append("data", JSON.stringify(apiData));
    
    // Append resume file (exactly like Postman)
    if (formData.resume) {
      submitFormData.append("resume", formData.resume);
      
      // For debugging - log what we're sending
      console.log("Sending FormData with:");
      console.log("data:", JSON.stringify(apiData));
      console.log("resume:", formData.resume.name);
    } else {
      toast.error("Resume file is required");
      setIsSubmitting(false);
      return;
    }

    // Make axios request
    const response = await axiosInstance.post(
      "/application",
      submitFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            setUploadProgress(percentCompleted);
          }
        },
      },
    );

    setUploadProgress(100);
    toast.success(
      response.data.message || "Application submitted successfully! 🎉",
    );

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      portfolio: "",
      linkedin: "",
      github: "",
      coverLetter: "",
      resume: null,
    });
    
    // Clear errors
    setErrors({});

    // Reset file input
    const fileInput = document.getElementById("resume") as HTMLInputElement;
    if (fileInput) fileInput.value = "";

    // Scroll to top of form
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    
  } catch (error: any) {
    console.error("Submission error details:", error);
    
    // Handle specific error cases
    if (error.response?.data?.message) {
      toast.error(error.response.data.message);
    } else if (error.response?.status === 500) {
      toast.error("Server error. Please try again later.");
    } else if (error.message) {
      toast.error(error.message);
    } else {
      toast.error("Failed to submit application. Please try again.");
    }
  } finally {
    clearInterval(progressInterval);
    setTimeout(() => {
      setIsSubmitting(false);
      setUploadProgress(0);
    }, 1000);
  }
};

  // Benefits data
  const benefits = [
    {
      icon: <FiTrendingUp size={20} />,
      title: "Growth & Learning",
      description:
        "Continuous learning opportunities, workshops, and a ₹50,000 annual learning budget.",
    },
    {
      icon: <FiHeart size={20} />,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance for you and your family, plus mental wellness support.",
    },
    {
      icon: <FiClock size={20} />,
      title: "Flexible Hours",
      description:
        "Work when you're most productive with flexible timing and remote-first culture.",
    },
    {
      icon: <FiAward size={20} />,
      title: "Performance Bonuses",
      description: "Quarterly performance bonuses and annual profit sharing.",
    },
    {
      icon: <FiUsers size={20} />,
      title: "Team Retreats",
      description: "Annual company retreats and quarterly team offsites.",
    },
    {
      icon: <FiBriefcase size={20} />,
      title: "Equipment Budget",
      description: "₹75,000 equipment budget for your ideal setup.",
    },
  ];

  // Values data
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we deliver.",
    },
    {
      title: "Ownership",
      description: "Take initiative and responsibility for outcomes.",
    },
    {
      title: "Collaboration",
      description: "Great things happen when we work together.",
    },
    {
      title: "Integrity",
      description: "Honest, transparent, and ethical in all we do.",
    },
  ];

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.twipratechnology.com";

  return (
    <>
      <PageSEO
        title="Career | Join Our Team - Twipra Technology"
        description="Build your career with Twipra Technology. We're hiring developers, designers, project managers, and more. Join a team of innovators building cutting-edge digital solutions."
        keywords={[
          "career at Twipra Technology",
          "tech jobs Bangladesh",
          "web developer job",
          "AI engineer job",
          "frontend developer hiring",
          "backend developer career",
          "UI UX designer job",
          "IT company careers",
          "software development jobs",
        ]}
        canonical={`${baseUrl}/career`}
        ogImage="/og-career.jpg"
        breadcrumbItems={[
          { name: "Home", url: `${baseUrl}/` },
          { name: "Career", url: `${baseUrl}/career` },
        ]}
      />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1e1e2e",
            color: "#fff",
            border: "1px solid #313244",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <main className="relative">
        {/* Hero Banner */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
                <FiUsers size={14} className="text-(--primary)" />
                <span className="text-sm text-(--text-muted)">
                  Join Our Team
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
                Build Your{" "}
                <span className="relative inline-block">
                  <span className="text-(--primary)">Career</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
                  />
                </span>{" "}
                With Us
              </h1>

              <p className="text-sm sm:text-base text-(--text-muted) max-w-2xl mx-auto">
                Join a team of passionate innovators building cutting-edge
                digital solutions. We're looking for talented individuals who
                want to make an impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Bar (shown during submission) */}
        {isSubmitting && (
          <div className="fixed top-0 left-0 right-0 z-50">
            <div className="h-1 bg-(--surface)">
              <motion.div
                className="h-full bg-(--primary)"
                initial={{ width: "0%" }}
                animate={{ width: `${uploadProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="bg-(--surface)/95 backdrop-blur-sm border-b border-(--border) py-2 text-center">
              <p className="text-sm text-(--text-muted)">
                Submitting application... {uploadProgress}%
              </p>
            </div>
          </div>
        )}

        {/* Why Join Us Section */}
        <section className="relative pb-12 sm:pb-16">
          <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-(--text) mb-3">
                Why Join Twipra Technology?
              </h2>
              <p className="text-(--text-muted) max-w-2xl mx-auto">
                We believe in creating an environment where you can thrive both
                personally and professionally.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-6 hover:border-(--primary)/30 transition-all"
                >
                  <div className="w-10 h-10 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center text-(--primary) mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-(--text) mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-(--text-muted) leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative pb-12 sm:pb-16">
          <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-6 sm:p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-(--text) mb-3">
                  Our Core Values
                </h2>
                <p className="text-(--text-muted) max-w-2xl mx-auto">
                  The principles that guide everything we do.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-(--primary)/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FiTarget size={20} className="text-(--primary)" />
                    </div>
                    <h3 className="text-base font-semibold text-(--text) mb-2">
                      {value.title}
                    </h3>
                    <p className="text-xs text-(--text-muted)">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hiring Form Section */}
        <section ref={formRef} className="relative pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-6 sm:p-8 lg:p-10"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--primary)/10 rounded-(--radius-lg) mb-4">
                  <FiSend size={14} className="text-(--primary)" />
                  <span className="text-sm font-medium text-(--primary)">
                    Apply Now
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-(--text) mb-3">
                  Submit Your Application
                </h2>
                <p className="text-sm text-(--text-muted) max-w-md mx-auto">
                  Fill out the form below and we'll get back to you within 3-5
                  business days.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-(--text) mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted) size-4" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className={`w-full pl-10 pr-4 py-3 bg-(--background) border ${
                        errors.fullName ? "border-red-500" : "border-(--border)"
                      } rounded-(--radius-md) text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary) transition-colors`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <FiAlertCircle size={10} /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email & Phone - 2 columns */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-(--text) mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted) size-4" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="company@example.com"
                        className={`w-full pl-10 pr-4 py-3 bg-(--background) border ${
                          errors.email ? "border-red-500" : "border-(--border)"
                        } rounded-(--radius-md) text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary) transition-colors`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <FiAlertCircle size={10} /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-(--text) mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted) size-4" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+880 98765 43210"
                        className={`w-full pl-10 pr-4 py-3 bg-(--background) border ${
                          errors.phone ? "border-red-500" : "border-(--border)"
                        } rounded-(--radius-md) text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary) transition-colors`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <FiAlertCircle size={10} /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Position & Experience */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-(--text) mb-2">
                      Position Applying For{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-3 bg-(--background) border ${
                        errors.position ? "border-red-500" : "border-(--border)"
                      } rounded-(--radius-md) text-(--text) focus:outline-none focus:border-(--primary) transition-colors appearance-none`}
                    >
                      <option value="">Select a position</option>
                      <option value="Frontend Developer">
                        Frontend Developer
                      </option>
                      <option value="Backend Developer">
                        Backend Developer
                      </option>
                      <option value="Full Stack Developer">
                        Full Stack Developer
                      </option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Quality Assurance Engineer">
                        Quality Assurance Engineer
                      </option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="Technical Writer">Technical Writer</option>
                    </select>
                    {errors.position && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <FiAlertCircle size={10} /> {errors.position}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-(--text) mb-2">
                      Years of Experience{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-3 bg-(--background) border ${
                        errors.experience
                          ? "border-red-500"
                          : "border-(--border)"
                      } rounded-(--radius-md) text-(--text) focus:outline-none focus:border-(--primary) transition-colors appearance-none`}
                    >
                      <option value="">Select experience</option>
                      <option value="Fresher (0-1 years)">
                        Fresher (0-1 years)
                      </option>
                      <option value="Junior (1-3 years)">
                        Junior (1-3 years)
                      </option>
                      <option value="Mid-Level (3-5 years)">
                        Mid-Level (3-5 years)
                      </option>
                      <option value="Senior (5-8 years)">
                        Senior (5-8 years)
                      </option>
                      <option value="Lead (8+ years)">Lead (8+ years)</option>
                    </select>
                    {errors.experience && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <FiAlertCircle size={10} /> {errors.experience}
                      </p>
                    )}
                  </div>
                </div>

                {/* Portfolio / LinkedIn / GitHub */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-(--text) mb-2">
                      Portfolio URL
                    </label>
                    <div className="relative">
                      <FiBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted) size-4" />
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        placeholder="https://yourportfolio.com"
                        className="w-full pl-10 pr-4 py-3 bg-(--background) border border-(--border) rounded-(--radius-md) text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary) transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-(--text) mb-2">
                      LinkedIn Profile
                    </label>
                    <div className="relative">
                      <FiLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted) size-4" />
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full pl-10 pr-4 py-3 bg-(--background) border border-(--border) rounded-(--radius-md) text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary) transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-(--text) mb-2">
                    GitHub Profile
                  </label>
                  <div className="relative">
                    <FiGithub className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted) size-4" />
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleInputChange}
                      placeholder="https://github.com/username"
                      className="w-full pl-10 pr-4 py-3 bg-(--background) border border-(--border) rounded-(--radius-md) text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary) transition-colors"
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-(--text) mb-2">
                    Resume/CV <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`border-2 border-dashed ${
                      errors.resume ? "border-red-500" : "border-(--border)"
                    } rounded-(--radius-lg) p-6 text-center hover:border-(--primary)/50 transition-colors`}
                  >
                    <FiFileText className="mx-auto size-8 text-(--text-muted) mb-3" />
                    <p className="text-sm text-(--text-muted) mb-2">
                      Drag & drop your resume here, or{" "}
                      <button
                        type="button"
                        onClick={() =>
                          document.getElementById("resume")?.click()
                        }
                        className="text-(--primary) hover:underline"
                      >
                        browse
                      </button>
                    </p>
                    <p className="text-xs text-(--text-muted)">
                      Supported formats: PDF, DOC, DOCX (Max 2MB)
                    </p>
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {formData.resume && (
                      <p className="mt-3 text-xs text-(--primary) flex items-center justify-center gap-1">
                        <FiCheckCircle size={12} /> {formData.resume.name}
                      </p>
                    )}
                  </div>
                  {errors.resume && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <FiAlertCircle size={10} /> {errors.resume}
                    </p>
                  )}
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-(--text) mb-2">
                    Cover Letter / Why do you want to join us?
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about yourself, your skills, and why you'd be a great fit for our team..."
                    className="w-full px-3 py-3 bg-(--background) border border-(--border) rounded-(--radius-md) text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary) transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting... {uploadProgress}%
                    </>
                  ) : (
                    <>
                      <FiSend size={14} />
                      Submit Application
                      <FiArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA - Contact Section */}
        <section className="relative pb-20 lg:pb-28">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-8 sm:p-10 text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-(--text) mb-2">
                Don't See the Right Role?
              </h2>
              <p className="text-sm text-(--text-muted) mb-6 max-w-md mx-auto">
                We're always looking for talented people. Send us your resume
                and we'll reach out when something matches.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="mailto:careers@twipra.tech"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
                >
                  <FiMail size={14} />
                  careers@twipra.tech
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--background) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all"
                >
                  <FiUsers size={14} className="text-(--primary)" />
                  Contact HR Team
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Career;
