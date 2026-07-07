"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiLinkedin,
  FiGithub,
  FiFileText,
  FiCheckCircle,
  FiAlertCircle,
  FiSend,
  FiArrowRight,
} from "react-icons/fi";
import axiosInstance from "../utils/axios";
import { uploadResume } from "../lib/cloudinary";

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

interface CareerFormProps {
  onSuccess?: () => void;
}

const CareerForm: React.FC<CareerFormProps> = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

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
        e.target.value = "";
        return;
      }

      setFormData((prev) => ({ ...prev, resume: file }));
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
    if (!validateForm()) return;

    setIsSubmitting(true);
    setUploadProgress(20);
    toast.loading("Uploading resume...");

    try {
      // Upload to Cloudinary via Server Action
      const cloudinaryResult = await uploadResume(formData.resume!);

      setUploadProgress(70);
      toast.loading("Submitting application...");

      const applicationData = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phone,
        position: formData.position,
        yearsOfExperience: formData.experience,
        portfolioUrl: formData.portfolio || undefined,
        linkedInProfile: formData.linkedin || undefined,
        githubProfile: formData.github || undefined,
        coverLetter: formData.coverLetter || undefined,
        resumeUrl: cloudinaryResult.url, // Cloudinary URL
      };

      const response = await axiosInstance.post(
        "/application",
        applicationData,
      );

      setUploadProgress(100);
      toast.dismiss();
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
      setErrors({});
      const fileInput = document.getElementById("resume") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      if (onSuccess) onSuccess();
    } catch (error: any) {
      toast.dismiss();
      toast.error(
        error.response?.data?.message || error.message || "Submission failed",
      );
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  return (
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
          Fill out the form below and we'll get back to you within 3-5 business
          days.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
              Position Applying For <span className="text-red-500">*</span>
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
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Graphic Designer">Graphic Designer</option>
              <option value="Video Editor">Video Editor</option>
              <option value="App Developer">App Developer</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="Other">Other</option>
            </select>
            {errors.position && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <FiAlertCircle size={10} /> {errors.position}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-(--text) mb-2">
              Years of Experience <span className="text-red-500">*</span>
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className={`w-full px-3 py-3 bg-(--background) border ${
                errors.experience ? "border-red-500" : "border-(--border)"
              } rounded-(--radius-md) text-(--text) focus:outline-none focus:border-(--primary) transition-colors appearance-none`}
            >
              <option value="">Select experience</option>
              <option value="Fresher (0-1 years)">Fresher (0-1 years)</option>
              <option value="Junior (1-3 years)">Junior (1-3 years)</option>
              <option value="Mid-Level (3-5 years)">
                Mid-Level (3-5 years)
              </option>
              <option value="Senior (5-8 years)">Senior (5-8 years)</option>
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
                onClick={() => document.getElementById("resume")?.click()}
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
    </motion.div>
  );
};

export default CareerForm;
