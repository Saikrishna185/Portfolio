import { Briefcase, Code, Server } from "lucide-react";

function AboutSection() {
    return (
        <section id="about" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-5xl">
             <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                    Aspiring Web Developer & Tech Enthusiast
                </h3>

                <p className="text-muted-foreground">
                    As a passionate beginner in web development, I focus on building responsive,
                    accessible, and performance-driven web applications using modern
                    technologies.
                </p>

                <p className="text-muted-foreground">
                    I enjoy solving problems through clean and thoughtful code, and I’m
                    continuously learning new tools and best practices to grow as a developer
                    and keep up with the evolving web ecosystem.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                  <a href="#contact" className="cosmic-button">
                    Get In Touch
                  </a>
                   <a
                    href="/SaiKrishnaSahu.pdf"
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    Download CV
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                  <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-lg">Web Development</h4>
                        <p className="text-muted-foreground">
                          Building responsive and functional web applications using modern
                          technologies with a focus on clean and maintainable code.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Server className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-lg">Backend Development</h4>
                        <p className="text-muted-foreground">
                          Developing RESTful APIs and backend logic using Spring Boot, with
                          secure data handling and database integration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>

                      <div className="text-left">
                        <h4 className="font-semibold text-lg">Project Experience</h4>
                        <p className="text-muted-foreground">
                          Working on academic and personal projects to gain hands-on experience
                          in full-stack development and real-world problem solving.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

             </div>
          </div>
        </section>
    );
}

export default AboutSection;