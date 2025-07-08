import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Shield, MessageSquare, Activity } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MedQuick: A.I Healthcare Platform",
      description: "Real-time AI tracking and predictive analytics platform for healthcare optimization. Implemented machine learning algorithms to improve patient care and reduce waiting times.",
      icon: Brain,
      achievements: [
        "80% improvement in update speed for patient data processing",
        "70% better disease trend forecasts using predictive analytics",
        "Significantly reduced patient wait times through optimized scheduling"
      ],
      tech: ["AI/ML", "Python", "Real-time Analytics", "Healthcare APIs", "Predictive Modeling"],
      type: "AI Healthcare",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Suspect Detection With A.I",
      description: "AI-powered suspect detection system developed for UP Police using computer vision and behavior analysis. Achieved high accuracy in real-world security scenarios.",
      icon: Shield,
      period: "11/2023 - 03/2024",
      achievements: [
        "86.4% accuracy in suspect detection across 1,000+ records",
        "Analyzed 200+ active cases with 100+ security scenarios",
        "Implemented Haar Cascade and advanced behavior/weapon detection algorithms"
      ],
      tech: ["Computer Vision", "Haar Cascade", "Python", "OpenCV", "Behavior Analysis", "Security Systems"],
      type: "Government Project",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Ella: Custom A.I Chatbot",
      description: "ChatGPT-powered intelligent chatbot trained on custom datasets to provide personalized guidance and support to students with high accuracy responses.",
      icon: MessageSquare,
      period: "08/2023 - 10/2023",
      achievements: [
        "Guided 1,000+ students with personalized recommendations",
        "95% accuracy rate using 3 refined NLP models",
        "Context-aware responses with custom dataset integration"
      ],
      tech: ["ChatGPT API", "NLP", "Custom Datasets", "Python", "Machine Learning", "Education Tech"],
      type: "AI Education",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "High-Performance Banking App",
      description: "Contributed to developing a secure mobile banking application with enhanced security features and JWT-based authentication for financial transactions.",
      icon: Activity,
      achievements: [
        "40% reduction in authentication vulnerabilities",
        "Implemented JWT token-based Aadhaar authorization",
        "Enhanced app security for financial transactions"
      ],
      tech: ["Flutter", "JWT Auth", "Banking APIs", "Security", "Mobile Development", "Aadhaar Integration"],
      type: "FinTech",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world applications solving complex problems in healthcare, security, education, and finance
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <Badge variant="outline" className="text-xs mb-2">
                            {project.type}
                          </Badge>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                        </div>
                      </div>
                    </div>
                    {project.period && (
                      <p className="text-sm text-muted-foreground mb-2">{project.period}</p>
                    )}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative">
                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Results</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Plus 18+ additional Flutter applications developed for global clients
            </p>
            <Button variant="outline" size="lg">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;