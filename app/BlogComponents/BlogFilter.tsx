import React, { useState, useEffect, useRef } from "react";

interface BlogFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  categories: string[];
  totalPosts: number;
  filteredCount: number;
}

const SortDropdown: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: "latest", label: "Latest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "popular", label: "Most Popular" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-3 sm:gap-6 px-3 sm:px-4 py-2.5 sm:py-3 bg-(--surface) border border-(--border) rounded-full text-xs sm:text-sm text-(--text) hover:border-(--primary) transition-all duration-200 min-w-[130px] sm:min-w-[150px]"
      >
        <span>{selectedOption?.label}</span>
        <span className={`text-[10px] sm:text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 sm:w-44 bg-(--surface) border border-(--border) rounded-xl sm:rounded-(--radius-lg) shadow-2xl overflow-hidden z-20">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => { onChange(option.value); setIsOpen(false); }}
              className={`w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm transition-colors duration-150 ${
                value === option.value ? "bg-(--primary)/10 text-(--primary) font-medium" : "text-(--text-muted) hover:bg-(--surface-hover) hover:text-(--text)"
              }`}
            >
              {option.label}
              {value === option.value && <span className="float-right">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const BlogFilter: React.FC<BlogFilterProps> = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalPosts,
  filteredCount,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-6 sm:pt-8 pb-3 sm:pb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="relative w-full sm:w-72 lg:w-80">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-(--surface) border border-(--border) rounded-full text-xs sm:text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary) transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-(--text-muted) hover:text-(--text) transition-colors text-base sm:text-lg"
            >
              ✕
            </button>
          )}
        </div>
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <SortDropdown value={sortBy} onChange={onSortChange} />
        </div>
      </div>
      <p className="text-[10px] sm:text-sm text-(--text-muted) mt-2 sm:mt-3">
        Showing {filteredCount} of {totalPosts} articles
      </p>
    </div>
  );
};

export default BlogFilter;