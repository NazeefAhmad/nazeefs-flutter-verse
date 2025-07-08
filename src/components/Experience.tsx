import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, Briefcase, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Hoocup.fun",
      role: "Software Advisor",
      type: "Part-time • Remote",
      period: "03/2025 - Present",
      location: "Remote",
      achievements: [
        "Mentored cross-functional teams and led AI/ML integration using LangChain, Pinecone, and OpenAI",
        "Provided strategic guidance on system architecture and software API design"
      ],
      skills: ["LangChain", "Pinecone", "OpenAI", "System Architecture", "Team Mentoring"],
      current: true
    },
    {
      company: "UnbiaslyAI",
      role: "Software Consultant",
      type: "Part-time",
      period: "11/2024 - Present",
      location: "New Delhi",
      achievements: [
        "Developed and deployed 2 cross-platform mobile apps using Flutter (Android & iOS)",
        "Integrated Firebase Cloud Messaging (FCM) for real-time push notifications",
        "Built and consumed secure REST APIs for seamless client-server communication"
      ],
      skills: ["Flutter", "Firebase", "FCM", "REST APIs", "Mobile Development"],
      current: true
    },
    {
      company: "Tech Enhance",
      role: "Flutter Developer",
      type: "Full-time",
      period: "09/2024 - 11/2024",
      location: "Bengaluru",
      achievements: [
        "Contributed to the development of a high-performance mobile banking app",
        "Strengthened app security by implementing JWT token-based Aadhaar authorization, reducing authentication vulnerabilities by 40%"
      ],
      skills: ["Flutter", "JWT Authentication", "Mobile Security", "Banking Apps"]
    },
    {
      company: "Rajasthan Police",
      role: "Performance Tracking Developer",
      type: "Contract",
      period: "01/2024 - 09/2024",
      location: "Jaipur, Rajasthan",
      achievements: [
        "Developed a performance tracking system that improved Police trainee scores by 25%",
        "Enhanced Training Efficiency by integrating AI algorithms, boosting efficiency by 25% and trainee performance by 30%",
        "Delivered personalized feedback and adaptive experiences, resulting in 40% faster skill acquisition and 35% improvement in decision-making accuracy"
      ],
      skills: ["AI Algorithms", "Performance Analytics", "Data-driven Training", "Team Leadership"]
    },
    {
      company: "Freelance Development",
      role: "Flutter App Developer",
      type: "Part-time",
      period: "02/2023 - 08/2024",
      location: "Global",
      achievements: [
        "Worked with 30+ global clients to deliver 18+ custom Flutter applications",
        "Achieved 95% client satisfaction rate and 20% faster project delivery compared to industry standards"
      ],
      skills: ["Flutter", "Client Management", "Project Delivery", "Global Collaboration"]
    },
    {
      company: "Buyall 2u.com",
      role: "Co-Founder",
      type: "Full-time",
      period: "03/2020 - 08/2022",
      location: "Delhi, India",
      achievements: [
        "Reduced operational costs by 50% through the development of a direct-to-consumer website",
        "Led product development and business strategy for e-commerce platform"
      ],
      skills: ["Entrepreneurship", "E-commerce", "Business Strategy", "Product Development"]
    }
  ];

  return (
    <section id="experience" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge variant="outline" className="mb-6 px-4 py-2 glass border-primary/30">
              <Briefcase className="w-4 h-4 mr-2 text-primary" />
              Experience
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-8">
              Building Tomorrow's 
              <span className="bg-gradient-hero bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From startups to government projects, freelance work to team leadership — 
              every role has shaped my expertise in creating impactful digital solutions.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group glass border-primary/20 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Current Role Indicator */}
                {exp.current && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary rounded-t-lg"></div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                            {exp.company}
                          </h3>
                          {exp.current && (
                            <Badge variant="secondary" className="text-xs ml-2 glass border-primary/30">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                              Current
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-primary mb-3 font-heading">{exp.role}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-secondary" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="outline" className="text-xs glass border-primary/30">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 space-y-6">
                  {/* Achievements */}
                  <div>
                    <h5 className="font-semibold font-heading mb-4 text-foreground flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Skills */}
                  <div>
                    <h5 className="font-semibold font-heading mb-3 text-foreground">Technologies & Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs px-3 py-1 glass border-secondary/30 hover:border-secondary/50 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;