import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML5", level: 75, category: "frontend", faIcon: "fa-brands fa-html5" },
  { name: "CSS3", level: 60, category: "frontend", faIcon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", level: 60, category: "frontend", faIcon: "fa-brands fa-js" },
  { name: "React", level: 50, category: "frontend", faIcon: "fa-brands fa-react" },

  // Backend
  { name: "Java", level: 75, category: "backend", faIcon: "fa-brands fa-java" },
  { name: "Spring Boot", level: 70, category: "backend", faIcon: "fa-solid fa-leaf" },
  { name: "REST APIs", level: 65, category: "backend", faIcon: "fa-solid fa-bolt" },
  { name: "MVC Architecture", level: 65, category: "backend", faIcon: "fa-solid fa-layer-group" },
  { name: "MySQL", level: 65, category: "backend", faIcon: "fa-solid fa-database" },

  // Tools
  { name: "Git", level: 70, category: "tools", faIcon: "fa-brands fa-git-alt" },
  { name: "GitHub", level: 70, category: "tools", faIcon: "fa-brands fa-github" },
  { name: "IntelliJ IDEA", level: 80, category: "tools", faIcon: "fa-solid fa-laptop-code" },
  { name: "VS Code", level: 80, category: "tools", faIcon: "fa-solid fa-code" },
  { name: "Spring Tool Suite", level: 80, category: "tools", faIcon: "fa-solid fa-terminal" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillIcon = ({ faIcon, className }) => {
  return (
    <div className={cn("flex items-center justify-center w-6 h-6", className)}>
      <i className={cn(faIcon, "text-xl transition-all duration-300 group-hover:scale-110")}></i>
    </div>
  );
};

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          My <span className="text-primary text-glow">Technical Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-delay-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300 capitalize font-medium cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.3)] scale-105"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                  <SkillIcon faIcon={skill.faIcon} />
                </div>
                <h3 className="font-bold text-lg tracking-tight transition-colors duration-300 group-hover:text-foreground">{skill.name}</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground font-medium uppercase tracking-wider text-[10px]">Proficiency</span>
                  <span className="text-primary font-bold group-hover:text-primary transition-colors">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-secondary/50 h-2.5 rounded-full overflow-hidden border border-primary/5">
                  <div
                    className="bg-linear-to-r from-primary/80 to-primary h-full rounded-full origin-left animate-grow"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;