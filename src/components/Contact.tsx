import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Download, ExternalLink, MessageCircle, Coffee, Rocket } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nazeefahmadgzb@gmail.com",
      href: "mailto:nazeefahmadgzb@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9990518959",
      href: "tel:+919990518959",
      color: "text-secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nazeef-ahmad",
      href: "https://linkedin.com/in/nazeef-ahmad",
      color: "text-primary-glow"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/nazeef-ahmad",
      href: "https://github.com/nazeef-ahmad",
      color: "text-accent"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      value: "teamblackpearl.co",
      href: "https://teamblackpearl.co",
      color: "text-primary"
    }
  ];

  const blogIdeas = [
    {
      title: "Building Scalable Flutter Apps",
      description: "Architecture patterns and best practices for large-scale Flutter applications with clean code principles",
      tag: "Mobile Development",
      emoji: "📱",
      readTime: "8 min read"
    },
    {
      title: "AI Integration in Mobile Apps",
      description: "Complete guide to integrating LangChain, OpenAI APIs, and custom AI models in Flutter applications",
      tag: "AI/ML",
      emoji: "🤖",
      readTime: "12 min read"
    },
    {
      title: "Security in Banking Apps",
      description: "Implementing JWT authentication, biometric security, and best practices for financial applications",
      tag: "Security",
      emoji: "🔐",
      readTime: "10 min read"
    },
    {
      title: "Hackathon Success Strategies",
      description: "Proven strategies and lessons learned from winning multiple tech competitions and hackathons",
      tag: "Career",
      emoji: "🏆",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge variant="outline" className="mb-6 px-4 py-2 glass border-primary/30">
              <MessageCircle className="w-4 h-4 mr-2 text-primary" />
              Let's Connect
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-8">
              Ready to Build 
              <span className="bg-gradient-hero bg-clip-text text-transparent">Together?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's discuss your next project, explore collaboration opportunities, 
              or simply connect over innovative ideas and emerging technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <Card className="glass border-primary/20 p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-primary">
                      <Coffee className="w-6 h-6 text-white" />
                    </div>
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Card key={index} className="glass border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group">
                          <CardContent className="p-4">
                            <a 
                              href={item.href}
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="flex items-center gap-4"
                            >
                              <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform ${item.color}`}>
                                <IconComponent className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-semibold group-hover:text-primary transition-colors font-heading">
                                  {item.label}
                                </p>
                                <p className="text-muted-foreground text-sm">{item.value}</p>
                              </div>
                            </a>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Resume Download */}
              <Card className="glass border-primary/20 p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-0 text-center">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-primary mb-4">
                      <Download className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-xl font-heading mb-3">Download Resume</h4>
                    <p className="text-muted-foreground text-sm mb-6">
                      Get the complete overview of my experience, projects, and technical skills 
                      in a professionally formatted PDF document.
                    </p>
                  </div>
                  <Button 
                    size="lg"
                    className="w-full group"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Download PDF Resume
                  </Button>
                </CardContent>
              </Card>

              {/* Current Status */}
              <Card className="glass border-primary/20 p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <h4 className="font-bold font-heading">Current Status</h4>
                  </div>
                  <Badge variant="secondary" className="mb-4 glass border-primary/30">
                    <Rocket className="w-3 h-3 mr-1" />
                    Available for Full-time Opportunities
                  </Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Currently seeking full-time opportunities in Flutter Development, 
                    AI Engineering, or Software Engineering roles with innovative companies.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Blog Ideas & Collaboration */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="glass border-primary/20 p-8 mb-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-secondary">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    Blog Ideas & Insights
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Technical topics I'm passionate about writing and sharing with the developer community:
                  </p>
                  <div className="space-y-4">
                    {blogIdeas.map((blog, index) => (
                      <Card key={index} className="glass border-primary/10 hover:border-primary/20 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{blog.emoji}</span>
                              <h4 className="font-semibold font-heading group-hover:text-primary transition-colors">{blog.title}</h4>
                            </div>
                            <div className="flex gap-2">
                              <Badge variant="outline" className="text-xs glass border-primary/20">
                                {blog.tag}
                              </Badge>
                              <Badge variant="secondary" className="text-xs glass border-secondary/20">
                                {blog.readTime}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{blog.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Collaboration CTA */}
              <Card className="glass border-primary/20 p-8 bg-gradient-to-br from-secondary/5 to-primary/5">
                <CardContent className="p-0 text-center">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-secondary mb-4">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-xl font-heading mb-3">Let's Collaborate</h4>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      Interested in collaborating on a project, writing technical content, 
                      or discussing innovative solutions? I'd love to hear from you.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full group"
                    onClick={() => window.open('mailto:nazeefahmadgzb@gmail.com?subject=Let\'s Collaborate&body=Hi Nazeef,%0D%0A%0D%0AI\'d like to discuss a potential collaboration opportunity with you.%0D%0A%0D%0ABest regards')}
                  >
                    <span>Start a Conversation</span>
                    <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Developer Quote */}
          <Card className="glass border-primary/20 p-12 mt-20 text-center animate-fade-in">
            <CardContent className="p-0">
              <blockquote className="text-3xl md:text-4xl font-bold text-foreground mb-6 italic font-heading">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  "Code is poetry in motion, AI is the future in action."
                </span>
              </blockquote>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                My approach to development: clean, scalable, and intelligent solutions that make a difference. 
                Every line of code is crafted with purpose, every algorithm designed with impact in mind.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2 glass border-primary/30">Flutter Expert</Badge>
                <Badge variant="outline" className="px-4 py-2 glass border-secondary/30">AI Engineer</Badge>
                <Badge variant="outline" className="px-4 py-2 glass border-primary/30">Problem Solver</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-primary/20">
            <p className="text-muted-foreground text-sm">
              © 2025 Nazeef Ahmad — Built with love, coffee, and cutting-edge technology ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;