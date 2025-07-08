import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

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
      skills: ["LangChain", "Pinecone", "OpenAI", "System Architecture", "Team Mentoring"]
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
      skills: ["Flutter", "Firebase", "FCM", "REST APIs", "Mobile Development"]
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
    <section id="experience" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building innovative solutions across startups, government projects, and freelance work
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-2">{exp.role}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
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