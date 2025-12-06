import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(177_70%_50%/0.1),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-up">
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(177,70%,50%)] to-[hsl(199,89%,48%)] rounded-full opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
              <div className="relative w-36 h-36 md:w-54 md:h-44 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all duration-500 group-hover:scale-105">
                <img
                  src={profilePhoto}
                  alt="Profile photo"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up animation-delay-100">
            Hi, my name is Ramesh Kalhara
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up animation-delay-200">
            <span className="text-foreground">Software Engineer</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up animation-delay-300">
            <span className="text-gradient">Intern @ ORELIT</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-400 leading-relaxed">
            3rd Year Software Engineering student at{" "}
            <span className="text-primary">SLIIT</span>, passionate about building 
            scalable applications and solving complex problems through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-up animation-delay-500">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          {/* Resume Download Button */}
          <div className="mb-12 animate-fade-up animation-delay-500">
            <Button variant="ghost" size="default" asChild className="text-muted-foreground hover:text-primary">
              <a href="/resume.pdf" download="Resume.pdf">
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center animate-fade-up animation-delay-500">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="text-muted-foreground" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
