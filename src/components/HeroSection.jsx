import { ArrowDown } from "lucide-react";

function HeroSection() {
    return (
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      >
        {/* Subtle background glow for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
                <span className="opacity-0 animate-fade-in inline-block">Hi, I'm&nbsp;</span>
                <br className="md:hidden" />
                <span className="text-gradient opacity-0 animate-fade-in-delay-1 inline-block drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]"> 
                  {" "} 
                  Sai Krishna 
                </span>
                <span className="text-white ml-2 opacity-0 animate-fade-in-delay-2 inline-block">
                  {" "}
                  Sahu 
                </span>
              </h1>

              <div className="h-1 w-24 bg-primary/50 mx-auto rounded-full opacity-0 animate-fade-in-delay-2" />
            </div>

            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
              I specialize in backend development with <span className="text-foreground font-medium">Spring Boot</span>,
              building scalable and secure systems, 
              while also crafting intuitive user interfaces using <span className="text-foreground font-medium">React</span>.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button text-lg px-8 py-3">
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </section>
    );
}

export default HeroSection;