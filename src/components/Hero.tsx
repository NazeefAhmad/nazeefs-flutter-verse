import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code2, Cpu, Zap, Braces, Terminal, Database, Brain, Layers, GitBranch, Binary } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 bg-background">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h80M10 90h80M10 10v80M90 10v80M30 30h40M30 70h40M30 30v40M70 30v40" 
                      stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary"/>
                <circle cx="30" cy="30" r="2" fill="currentColor" className="text-primary"/>
                <circle cx="70" cy="30" r="2" fill="currentColor" className="text-secondary"/>
                <circle cx="30" cy="70" r="2" fill="currentColor" className="text-secondary"/>
                <circle cx="70" cy="70" r="2" fill="currentColor" className="text-primary"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse"
              style={{
                left: `${(i + 1) * 5}%`,
                height: '100%',
                animationDelay: `${i * 0.3}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>

        {/* Quantum Particles */}
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-primary rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-secondary rounded-full animate-ping opacity-15" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary-glow rounded-full animate-ping opacity-25" style={{ animationDelay: '2s' }}></div>

        {/* Floating Tech Icons with Paths */}
        <div className="absolute top-16 left-16">
          <div className="relative animate-float opacity-15">
            <Terminal className="w-6 h-6 text-primary" />
            <div className="absolute -top-2 -right-2 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="absolute top-32 right-24 animate-float opacity-15" style={{ animationDelay: '0.8s' }}>
          <Database className="w-5 h-5 text-secondary" />
          <div className="absolute top-0 left-6 w-8 h-px bg-gradient-to-r from-secondary to-transparent opacity-30"></div>
        </div>
        
        <div className="absolute bottom-24 left-24 animate-float opacity-15" style={{ animationDelay: '1.6s' }}>
          <Brain className="w-7 h-7 text-primary-glow" />
          <div className="absolute -bottom-2 left-8 w-12 h-px bg-gradient-to-r from-primary-glow to-transparent opacity-40 animate-pulse"></div>
        </div>
        
        <div className="absolute top-48 left-1/2 animate-float opacity-15" style={{ animationDelay: '2.4s' }}>
          <GitBranch className="w-5 h-5 text-primary" />
        </div>
        
        <div className="absolute bottom-48 right-32 animate-float opacity-15" style={{ animationDelay: '3.2s' }}>
          <Layers className="w-6 h-6 text-secondary" />
        </div>

        <div className="absolute top-64 right-16 animate-float opacity-15" style={{ animationDelay: '4s' }}>
          <Binary className="w-4 h-4 text-primary-glow" />
        </div>

        {/* Neural Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <path d="M100 200 Q300 100 500 300 T900 200" 
                stroke="url(#neuralGradient)" 
                strokeWidth="1" 
                fill="none" 
                className="animate-pulse"/>
          <path d="M200 500 Q400 300 600 600 T1000 400" 
                stroke="url(#neuralGradient)" 
                strokeWidth="1" 
                fill="none" 
                className="animate-pulse" 
                style={{ animationDelay: '1s' }}/>
        </svg>

        {/* Ambient Energy Orbs */}
        <div className="absolute top-1/3 left-1/5 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-32 h-32 bg-primary-glow/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-8 px-6 py-3 text-sm font-medium glass border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse shadow-sm shadow-green-400/50"></div>
            <Zap className="w-3 h-3 mr-2 text-primary/70 group-hover:text-primary transition-colors" />
            <span className="bg-gradient-hero bg-clip-text text-transparent font-semibold">Available for Full-time Opportunities</span>
            <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-full"></div>
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
          
          {/* Tech-Enhanced Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="group glass px-6 py-4 rounded-xl border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Code2 className="w-3 h-3 text-primary/50 animate-pulse" />
              </div>
              <div className="text-3xl font-bold text-primary animate-pulse-glow">18+</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Braces className="w-3 h-3" />
                Flutter Apps Deployed
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="group glass px-6 py-4 rounded-xl border-secondary/20 hover:border-secondary/40 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Terminal className="w-3 h-3 text-secondary/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="text-3xl font-bold text-secondary animate-pulse-glow">4+</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Brain className="w-3 h-3" />
                Years Deep Experience
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="group glass px-6 py-4 rounded-xl border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Zap className="w-3 h-3 text-primary-glow/50 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <div className="text-3xl font-bold text-primary-glow animate-pulse-glow">3</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Hackathon Victories
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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