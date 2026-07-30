"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FiSend,
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiAlertCircle,
} from "react-icons/fi";
import { budgets, services } from "../data/links";
import { contactFormSchema, type ContactFormData } from "../lib/validations";
import axiosInstance from "../utils/axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    details: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axiosInstance.post("/lead", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        service: formData.service,
        budget: formData.budget || undefined,
        details: formData.details || undefined,
      });

      if (response.data.success) {
        toast.success(
          "Thanks for submitting! Our team will connect with you shortly.",
        );

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          details: "",
        });
        setErrors({});
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-(--text) mb-2">
        Send Us a Message
      </h2>
      <p className="text-sm text-(--text-muted) mb-6">
        Fill out the form and we'll get back to you as soon as possible.
      </p>

      {/* Row 1: Full Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-(--text-muted) mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FiUser
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
            />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full pl-10 pr-4 py-2.5 bg-(--background) border ${
                errors.fullName ? "border-red-500" : "border-(--border)"
              } rounded-(--radius-md) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary)/50 transition-colors`}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <FiAlertCircle size={10} /> {errors.fullName}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs text-(--text-muted) mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FiMail
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="company@example.com"
              className={`w-full pl-10 pr-4 py-2.5 bg-(--background) border ${
                errors.email ? "border-red-500" : "border-(--border)"
              } rounded-(--radius-md) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary)/50 transition-colors`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <FiAlertCircle size={10} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Phone + Company */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-(--text-muted) mb-1.5">
            Phone Number
          </label>
          <div className="relative">
            <FiPhone
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+880 000-0000"
              className={`w-full pl-10 pr-4 py-2.5 bg-(--background) border ${
                errors.phone ? "border-red-500" : "border-(--border)"
              } rounded-(--radius-md) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary)/50 transition-colors`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <FiAlertCircle size={10} /> {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs text-(--text-muted) mb-1.5">
            Company Name
          </label>
          <div className="relative">
            <FiBriefcase
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              className={`w-full pl-10 pr-4 py-2.5 bg-(--background) border ${
                errors.company ? "border-red-500" : "border-(--border)"
              } rounded-(--radius-md) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary)/50 transition-colors`}
            />
          </div>
          {errors.company && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <FiAlertCircle size={10} /> {errors.company}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Service + Budget */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-(--text-muted) mb-1.5">
            Service Interested In <span className="text-red-400">*</span>
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 bg-(--background) border ${
              errors.service ? "border-red-500" : "border-(--border)"
            } rounded-(--radius-md) text-sm text-(--text) focus:outline-none focus:border-(--primary)/50 transition-colors appearance-none cursor-pointer`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service, i) => (
              <option key={i} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <FiAlertCircle size={10} /> {errors.service}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs text-(--text-muted) mb-1.5">
            Project Budget
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-(--background) border border-(--border) rounded-(--radius-md) text-sm text-(--text) focus:outline-none focus:border-(--primary)/50 transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled>
              Select budget range
            </option>
            {budgets.map((budget, i) => (
              <option key={i} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Project Details */}
      <div>
        <label className="block text-xs text-(--text-muted) mb-1.5">
          Project Details
        </label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
          rows={5}
          className={`w-full px-4 py-2.5 bg-(--background) border ${
            errors.details ? "border-red-500" : "border-(--border)"
          } rounded-(--radius-md) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary)/50 transition-colors resize-none`}
        />
        {errors.details && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <FiAlertCircle size={10} /> {errors.details}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3.5 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20 hover:shadow-(--primary)/40 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <span>Send Message</span>
            <FiSend
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
