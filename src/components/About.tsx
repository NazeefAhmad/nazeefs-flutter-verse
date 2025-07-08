import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code2, Trophy, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "4+ Years Experience",
      description: "Specialized in Flutter app development with production-ready applications"
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Expert in LangChain, OpenAI APIs, and building intelligent systems"
    },
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "Multiple wins including Rajasthan Police Hackathon and Reckon 5.0"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams and mentored developers at Black Pearl"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              BTech Computer Science student passionate about building scalable mobile applications 
              and intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I started my development journey with a passion for creating mobile applications 
                  that make a difference. Over the past 4+ years, I've specialized in Flutter development 
                  while expanding into AI/ML integration, working with organizations like Rajasthan Police 
                  and various startups.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a co-founder of Buyall 2u.com, I reduced operational costs by 50% through innovative 
                  direct-to-consumer solutions. My experience spans from freelancing with 30+ global clients 
                  to leading teams and mentoring developers at Black Pearl and TEDxKIET.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Flutter Expert</Badge>
                <Badge variant="secondary">AI/ML Engineer</Badge>
                <Badge variant="secondary">Team Leader</Badge>
                <Badge variant="secondary">Full-Stack Developer</Badge>
              </div>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Core Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Flutter", "Dart", "Firebase", "FastAPI", "AI/ML", "LangChain", 
                "OpenAI", "Pinecone", "Python", "Java", "REST APIs", "JWT Auth",
                "MongoDB", "GetX", "Docker", "Git", "Linux", "Unity 3D"
              ].map((skill) => (
                <Badge key={skill} variant="outline" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;