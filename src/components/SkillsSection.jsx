import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  // Programming Languages
  { name: "C", category: "languages", logo: "https://img.icons8.com/?size=96&id=40670&format=png" },
  { name: "Java", category: "languages", logo: "/Images/Java.png" },
  { name: "Python", category: "languages", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdgUkYVq9-UPHtkrQyNzA1t-hCdSG65-XYw&s" },
  { name: "JavaScript", category: "languages", logo: "/Images/js_5968292.png" },

  // Frontend
  { name: "HTML", category: "frontend", logo: "/Images/html.png" },
  { name: "CSS", category: "frontend", logo: "/Images/css-3_5968242.png" },
  { name: "React.js", category: "frontend", logo: "/Images/react.svg" },

  // Backend
  { name: "Node.js", category: "backend", logo: "https://img.icons8.com/color/96/nodejs.png"}, // shortened for readability
  { name: "REST APIs", category: "backend", logo: "https://keenethics.com/wp-content/uploads/2022/01/rest-api-1.svg" },

  // Databases
  { name: "MySQL", category: "databases", logo: "https://img.icons8.com/fluency/96/mysql-logo.png" }, // shortened for readability
  { name: "MongoDB", category: "databases", logo: "/Images/MongoDB.png" },

  // AI/ML – no images for these
  { name: "Model Training", category: "ai" },
  { name: "Computer Vision", category: "ai" },
  { name: "Data Preprocessing", category: "ai" },
  { name: "Predictive Analytics", category: "ai" },

  // Tools
  { name: "Git/GitHub", category: "tools", logo: "https://img.icons8.com/color/96/git.png" }, // shortened for readability
  { name: "VS Code", category: "tools", logo: "https://img.icons8.com/color/96/visual-studio-code-2019.png" }, // shortened
  { name: "Postman", category: "tools", logo: "/Images/Postman.png" },

  // Core Concepts – text only
  { name: "OOP", category: "core" },
  { name: "Data Structures", category: "core" },
  { name: "Algorithms", category: "core" },
  { name: "Operating Systems", category: "core" },
  { name: "Computer Networks", category: "core" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "databases", label: "Databases" },
  { key: "ai", label: "AI / ML" },
  { key: "tools", label: "Tools" },
  { key: "core", label: "Core Concepts" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center transition-transform hover:scale-105"
              title={skill.name}
            >
              {/* Show icon only if logo is present */}
              {skill.logo ? (
                <img
                  className="h-12 w-12 mb-4"
                  src={skill.logo}
                  alt={skill.name}
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <div
                  className="flex items-center justify-center h-12 w-12 mb-4 bg-primary/10 text-primary rounded-full"
                  style={{ fontSize: "1.1rem", fontWeight: 600 }}
                >
                  {skill.name.charAt(0)}
                </div>
              )}
              <h3 className="font-semibold text-base text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
