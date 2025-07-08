import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Shield, MessageSquare, Activity, Zap, Target } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MedQuick: A.I Healthcare Platform",
      description: "Real-time AI tracking and predictive analytics platform for healthcare optimization. Implemented machine learning algorithms to improve patient care and reduce waiting times.",
      icon: Brain,
      period: "2024",
      achievements: [
        "80% improvement in update speed for patient data processing",
        "70% better disease trend forecasts using predictive analytics",
        "Significantly reduced patient wait times through optimized scheduling"
      ],
      tech: ["AI/ML", "Python", "Real-time Analytics", "Healthcare APIs", "Predictive Modeling"],
      type: "AI Healthcare",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconGradient: "from-blue-500 to-cyan-500"
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
      gradient: "from-red-500/20 to-orange-500/20",
      iconGradient: "from-red-500 to-orange-500"
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
      gradient: "from-green-500/20 to-teal-500/20",
      iconGradient: "from-green-500 to-teal-500"
    },
    {
      title: "High-Performance Banking App",
      description: "Contributed to developing a secure mobile banking application with enhanced security features and JWT-based authentication for financial transactions.",
      icon: Activity,
      period: "2024",
      achievements: [
        "40% reduction in authentication vulnerabilities",
        "Implemented JWT token-based Aadhaar authorization",
        "Enhanced app security for financial transactions"
      ],
      tech: ["Flutter", "JWT Auth", "Banking APIs", "Security", "Mobile Development", "Aadhaar Integration"],
      type: "FinTech",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconGradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge variant="outline" className="mb-6 px-4 py-2 glass border-primary/30">
              <Target className="w-4 h-4 mr-2 text-primary" />
              Featured Projects
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-8">
              Real-World 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Applications solving complex problems in healthcare, security, education, and finance — 
              each built with precision, innovation, and measurable results.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="group glass border-primary/20 overflow-hidden hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.iconGradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-3 glass border-primary/30">
                            {project.type}
                          </Badge>
                          <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          {project.period && (
                            <p className="text-sm text-muted-foreground mt-1">{project.period}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative space-y-6">
                    {/* Key Results */}
                    <div>
                      <h4 className="font-semibold font-heading mb-4 text-foreground flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        Key Results
                      </h4>
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold font-heading mb-4 text-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs px-3 py-1 glass border-secondary/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button size="default" className="flex-1 group">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        View Details
                      </Button>
                      <Button variant="outline" size="icon" className="group">
                        <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <Card className="glass border-primary/20 p-8 text-center animate-fade-in">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold font-heading mb-4">
                Plus 18+ Additional Flutter Applications
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Developed for global clients across various industries, each tailored to solve specific business challenges 
                with measurable impact and user satisfaction.
              </p>
              <Button variant="outline" size="lg" className="group">
                <span>View All Projects</span>
                <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;