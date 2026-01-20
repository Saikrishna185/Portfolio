import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactIcon = ({ faIcon, className }) => {
  return (
    <div className={cn("flex items-center justify-center transition-all duration-300", className)}>
      <i className={cn(faIcon, "transition-all duration-300")}></i>
    </div>
  );
};

function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I’ll get back to you soon.",
        });
        e.target.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error.message || "An error occurred while sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const socialLinks = [
    { faIcon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/sai-krishna-sahu-51a33526b/", label: "LinkedIn" },
    { faIcon: "fa-brands fa-github", href: "https://github.com/Saikrishna185", label: "GitHub" },
    { faIcon: "fa-brands fa-instagram", href: "https://www.instagram.com/saikrishna.1243/", label: "Instagram" },
    { faIcon: "fa-brands fa-x-twitter", href: "https://x.com/sksahu2083", label: "Twitter (X)" },
  ];

  const contactInfo = [
    { 
      faIcon: "fa-solid fa-envelope", 
      label: "Email", 
      value: "sksahu.aug03@gmail.com", 
      href: "mailto:sksahu.aug03@gmail.com" 
    },
    { 
      faIcon: "fa-solid fa-phone", 
      label: "Phone", 
      value: "+91 70779 99030", 
      href: "tel:+917077999030" 
    },
    { 
      faIcon: "fa-solid fa-location-dot", 
      label: "Location", 
      value: "Odisha, India", 
      href: null 
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary text-glow">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Interested in collaborating, hiring, or discussing opportunities?
            Feel free to reach out — I’m always open to meaningful conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight animate-fade-in-delay-1">
                Contact Information
              </h3>
              
              <div className="grid gap-4">
                {contactInfo.map((item, i) => (
                  <div 
                    key={i} 
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-card/30 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${200 + i * 100}ms` }}
                  >
                    <div className="p-3 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_rgba(var(--primary),0.4)] transition-all duration-500 shadow-inner">
                      <ContactIcon faIcon={item.faIcon} className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-foreground/90 font-medium hover:text-primary transition-colors text-sm md:text-base">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground/90 font-medium text-sm md:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 backdrop-blur-sm space-y-6 animate-fade-in-delay-3">
              <h4 className="font-bold flex items-center gap-3 text-lg">
                <ContactIcon faIcon="fa-solid fa-earth-americas" className="text-primary animate-pulse-subtle" />
                Connect With Me
              </h4>
              <div className="grid grid-cols-4 gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex aspect-square items-center justify-center rounded-2xl bg-card/40 text-muted-foreground hover:text-primary hover:bg-primary/10 border border-white/5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 shadow-lg group/icon relative overflow-hidden"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-primary/0 group-hover/icon:bg-primary/5 transition-colors duration-500" />
                    <ContactIcon faIcon={social.faIcon} className="text-2xl transition-all duration-500 group-hover/icon:scale-125 group-hover/icon:rotate-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - 3 columns */}
          <div className="lg:col-span-3 animate-fade-in-delay-2">
            <div className="bg-card/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
              {/* Floating Decorative Icon */}
              <div className="absolute -top-10 -right-10 p-12 opacity-5 group-hover:opacity-10 transition-all duration-700 group-hover:scale-110 pointer-events-none animate-float">
                <ContactIcon faIcon="fa-solid fa-comment-dots" className="text-[150px]" />
              </div>

              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                Send a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[11px] font-bold ml-1 text-muted-foreground/80 uppercase tracking-[0.2em]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-500 placeholder:text-muted-foreground/30"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-[11px] font-bold ml-1 text-muted-foreground/80 uppercase tracking-[0.2em]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-500 placeholder:text-muted-foreground/30"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-[11px] font-bold ml-1 text-muted-foreground/80 uppercase tracking-[0.2em]">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-500 resize-none placeholder:text-muted-foreground/30"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full py-5 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold transition-all duration-500 mt-4 overflow-hidden relative group/btn",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <ContactIcon faIcon="fa-solid fa-paper-plane" className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;