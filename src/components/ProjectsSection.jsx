import { ArrowRight, ShieldAlert, CheckSquare, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SafetyNet Alert System",
    description:
      "A web-based alert system that sends real-time notifications via SMS and email. The application includes location mapping, weather forecasting, and third-party API integration using Spring Boot.",
    tags: ["React", "Spring Boot", "MySQL", "REST APIs"],
    icon: ShieldAlert,
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "ToDo Web Application",
    description:
      "A task management web application that supports creating, updating, deleting, and completing tasks. Built using Spring Boot with MVC architecture and server-side rendering.",
    tags: ["Spring Boot", "Thymeleaf", "MySQL", "MVC"],
    icon: CheckSquare,
    github: "#",
    live: "#"
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center animate-fade-in">
          Featured <span className="text-primary text-glow">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in-delay-1 leading-relaxed">
          A selection of academic and personal projects that demonstrate my
          backend development skills, problem-solving ability, and hands-on
          experience with real-world applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card/40 backdrop-blur-md p-8 rounded-2xl border border-primary/10 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                  <project.icon size={24} strokeWidth={2.5} />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 hover:bg-primary/10 rounded-full">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 hover:bg-primary/10 rounded-full">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-primary/20 rounded-full bg-primary/5 text-primary group-hover:border-primary/40 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 animate-fade-in-delay-4">
          <a href="#github" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold group cursor-pointer shadow-lg hover:shadow-primary/20">
            More projects on GitHub <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;