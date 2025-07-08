import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Download, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nazeefahmadgzb@gmail.com",
      href: "mailto:nazeefahmadgzb@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9990518959",
      href: "tel:+919990518959"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nazeef-ahmad",
      href: "https://linkedin.com/in/nazeef-ahmad"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/nazeef-ahmad",
      href: "https://github.com/nazeef-ahmad"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      value: "teamblackpearl.co",
      href: "https://teamblackpearl.co"
    }
  ];

  const blogIdeas = [
    {
      title: "Building Scalable Flutter Apps",
      description: "Best practices for architecting large-scale Flutter applications",
      tag: "Mobile Development"
    },
    {
      title: "AI Integration in Mobile Apps",
      description: "How to integrate LangChain and OpenAI APIs in Flutter applications",
      tag: "AI/ML"
    },
    {
      title: "Security in Banking Apps",
      description: "Implementing JWT authentication and security best practices",
      tag: "Security"
    },
    {
      title: "Hackathon Success Strategies",
      description: "Lessons learned from winning multiple tech competitions",
      tag: "Career"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to build something amazing together? Let's discuss your next project or opportunity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                        <CardContent className="p-0">
                          <a 
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-4 group"
                          >
                            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold group-hover:text-primary transition-colors">
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
              </div>

              {/* Resume Download */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-0">
                  <h4 className="font-bold mb-3">Download Resume</h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Get the complete overview of my experience, projects, and technical skills.
                  </p>
                  <Button 
                    className="w-full"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Resume
                  </Button>
                </CardContent>
              </Card>

              {/* Current Status */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="font-bold">Current Status</h4>
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    Available for Full-time Opportunities
                  </Badge>
                  <p className="text-muted-foreground text-sm">
                    Currently seeking full-time opportunities in Flutter Development, 
                    AI Engineering, or Software Engineering roles.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Blog Ideas */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Blog Ideas & Insights</h3>
              <p className="text-muted-foreground mb-6">
                Technical topics I'm passionate about writing and sharing with the community:
              </p>
              <div className="space-y-4">
                {blogIdeas.map((blog, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-all hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">{blog.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {blog.tag}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{blog.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-accent to-accent/50">
                <h4 className="font-bold mb-3">Let's Collaborate</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Interested in collaborating on a project, writing technical content, 
                  or discussing innovative solutions? I'd love to hear from you.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('mailto:nazeefahmadgzb@gmail.com?subject=Let\'s Collaborate')}
                >
                  Start a Conversation
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Developer Quote */}
          <div className="text-center mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5">
            <blockquote className="text-2xl md:text-3xl font-bold text-primary mb-4 italic">
              "Code is poetry in motion, AI is the future in action."
            </blockquote>
            <p className="text-muted-foreground">
              My approach to development: clean, scalable, and intelligent solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;