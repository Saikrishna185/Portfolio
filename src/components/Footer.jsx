import { cn } from "@/lib/utils";

const FooterIcon = ({ faIcon, className }) => {
  return (
    <div className={cn("flex items-center justify-center transition-all duration-300", className)}>
      <i className={cn(faIcon, "transition-all duration-300")}></i>
    </div>
  );
};

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { faIcon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/sai-krishna-sahu-51a33526b/", label: "LinkedIn" },
    { faIcon: "fa-brands fa-github", href: "https://github.com/Saikrishna185", label: "GitHub" },
    { faIcon: "fa-brands fa-instagram", href: "https://www.instagram.com/saikrishna.1243/", label: "Instagram" },
    { faIcon: "fa-brands fa-x-twitter", href: "https://x.com/sksahu2083", label: "Twitter (X)" },
  ];

  return (
    <footer className="py-12 px-4 relative border-t border-primary/10 mt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-xl font-bold tracking-tighter">
              Sai Krishna <span className="text-primary">Sahu</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building scalable backend systems and intuitive user interfaces.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/5 text-muted-foreground hover:text-primary hover:bg-primary/10 border border-white/5 hover:border-primary/20 transition-all duration-300 shadow-md group"
                aria-label={social.label}
              >
                <FooterIcon faIcon={social.faIcon} className="text-lg group-hover:scale-110" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href="#hero"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-500 shadow-[0_0_15px_rgba(var(--primary),0.2)] hover:shadow-primary/40 group active:scale-95"
              aria-label="Back to top"
            >
              <FooterIcon faIcon="fa-solid fa-arrow-up" className="text-lg group-hover:-translate-y-1" />
            </a>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
              © {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
