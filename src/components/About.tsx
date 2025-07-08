import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code2, Trophy, Users, Zap, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "4+ Years Experience",
      description: "Specialized in Flutter app development with production-ready applications",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Expert in LangChain, OpenAI APIs, and building intelligent systems",
      color: "text-secondary"
    },
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "Multiple wins including Rajasthan Police Hackathon and Reckon 5.0",
      color: "text-primary-glow"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams and mentored developers at Black Pearl",
      color: "text-accent"
    }
  ];

  const techStack = {
    mobile: ["Flutter", "Dart", "GetX", "Firebase"],
    backend: ["FastAPI", "Python", "MongoDB", "JWT Auth"],
    ai: ["LangChain", "OpenAI", "Pinecone", "AI/ML"],
    tools: ["Docker", "Git", "Linux", "REST APIs"]
  };

  return (
    <section id="about" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge variant="outline" className="mb-6 px-4 py-2 glass border-primary/30">
              <Zap className="w-4 h-4 mr-2 text-primary" />
              About Me
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-8">
              Crafting Digital 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              BTech Computer Science student passionate about building scalable mobile applications 
              and intelligent systems that solve real-world problems with precision and innovation.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Section */}
            <div className="space-y-8 animate-slide-up">
              <Card className="glass border-primary/20 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-primary">My Journey</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I started my development journey with a passion for creating mobile applications 
                      that make a difference. Over the past 4+ years, I've specialized in Flutter development 
                      while expanding into AI/ML integration, working with organizations like <span className="text-primary font-semibold">Rajasthan Police</span> 
                      and various innovative startups.
                    </p>
                    <p>
                      As a co-founder of <span className="text-secondary font-semibold">Buyall 2u.com</span>, I reduced operational costs by 50% through innovative 
                      direct-to-consumer solutions. My experience spans from freelancing with 30+ global clients 
                      to leading teams and mentoring developers at <span className="text-primary-glow font-semibold">Black Pearl</span> and <span className="text-accent font-semibold">TEDxKIET</span>.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2">Flutter Expert</Badge>
                <Badge variant="outline" className="px-4 py-2 border-secondary/30">AI/ML Engineer</Badge>
                <Badge variant="outline" className="px-4 py-2 border-primary/30">Team Leader</Badge>
                <Badge variant="outline" className="px-4 py-2 border-accent/30">Full-Stack Developer</Badge>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="group glass border-primary/20 p-6 hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-0 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h4 className="font-semibold font-heading mb-3 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Tech Stack Section */}
          <Card className="glass border-primary/20 p-8 animate-fade-in">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold font-heading mb-4">Tech Stack & Expertise</h3>
                <p className="text-muted-foreground">Technologies I use to build exceptional digital experiences</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {Object.entries(techStack).map(([category, technologies]) => (
                  <div key={category} className="space-y-4">
                    <h4 className="font-semibold text-primary capitalize font-heading">{category}</h4>
                    <div className="space-y-2">
                      {technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="w-full justify-center py-2 glass border-primary/20 hover:border-primary/40 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;