import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code2, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-20 animate-float opacity-20">
          <Code2 className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Cpu className="w-6 h-6 text-secondary" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float opacity-20" style={{ animationDelay: '3s' }}>
          <Sparkles className="w-7 h-7 text-primary-glow" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-8 px-4 py-2 text-sm font-medium glass border-primary/30 hover:border-primary/50 transition-colors">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Available for Full-time Opportunities
          </Badge>
          
          {/* Main Heading */}
          <div className="mb-8 space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold font-heading mb-4 leading-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="bg-gradient-hero bg-clip-text text-transparent animate-glow">
                Nazeef
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I build <span className="text-primary font-semibold">intelligent, human-first apps</span> with 
              <span className="text-secondary font-semibold"> Flutter and AI</span> — 
              4+ years of turning complex problems into elegant solutions.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="glass px-4 py-2 rounded-lg border-primary/20">
              <div className="text-2xl font-bold text-primary">18+</div>
              <div className="text-sm text-muted-foreground">Flutter Apps</div>
            </div>
            <div className="glass px-4 py-2 rounded-lg border-secondary/20">
              <div className="text-2xl font-bold text-secondary">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="glass px-4 py-2 rounded-lg border-primary/20">
              <div className="text-2xl font-bold text-primary-glow">3</div>
              <div className="text-sm text-muted-foreground">Hackathon Wins</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>View My Work</span>
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="group"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Button 
              variant="glass" 
              size="icon" 
              className="h-14 w-14 rounded-full group"
              onClick={() => window.open('https://linkedin.com/in/nazeef-ahmad', '_blank')}
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="icon" 
              className="h-14 w-14 rounded-full group"
              onClick={() => window.open('https://github.com/nazeef-ahmad', '_blank')}
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="icon" 
              className="h-14 w-14 rounded-full group"
              onClick={() => window.open('mailto:nazeefahmadgzb@gmail.com')}
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
          
          {/* Quote */}
          <div className="mt-20 glass px-8 py-6 rounded-2xl border-primary/20 max-w-3xl mx-auto">
            <blockquote className="text-lg font-medium text-foreground italic">
              "I don't just code — I create tools that think, adapt, and empower people."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;