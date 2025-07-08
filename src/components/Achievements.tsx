import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Briefcase } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Rajasthan Police Hackathon 1.0",
      subtitle: "Winner",
      date: "January 2024",
      description: "Won first place developing AI-powered suspect detection system for law enforcement",
      type: "Competition",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "Reckon 5.0",
      subtitle: "1st Position in Top 10",
      date: "February 2024",
      description: "Secured top position in prestigious tech competition in Jodhpur, Rajasthan",
      type: "Hackathon",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Trophy,
      title: "WittyHacks 4.0",
      subtitle: "4th Position",
      date: "April 2024",
      description: "Achieved 4th place at NMIMS Indore hackathon with innovative solution",
      type: "Competition",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Briefcase,
      title: "LinkedIn Recognition",
      subtitle: "Top Software Development Voice",
      date: "August 2024",
      description: "Recognized as a leading voice in software development on LinkedIn",
      type: "Professional",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const certifications = [
    {
      title: "Google AI Essentials",
      issuer: "Google",
      date: "August 2024",
      type: "AI/ML"
    },
    {
      title: "LinkedIn Flutter Essential Training",
      issuer: "LinkedIn Learning",
      date: "July 2024",
      type: "Mobile Development"
    },
    {
      title: "Introduction to Large Language Models",
      issuer: "Online Course",
      date: "2024",
      type: "AI/ML"
    }
  ];

  const leadership = [
    {
      role: "Team Leader",
      organization: "Black Pearl",
      description: "Leading development teams and coordinating project deliveries"
    },
    {
      role: "Admin Head",
      organization: "TEDxKIET",
      description: "Managing administrative operations and event coordination"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Achievements & Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hackathon victories, professional certifications, and leadership roles
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} flex-shrink-0`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {achievement.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{achievement.date}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-primary font-semibold mb-2">{achievement.subtitle}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Certifications & Leadership */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold">{cert.title}</h4>
                      <Badge variant="secondary" className="text-xs">{cert.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Leadership */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Leadership & Volunteering
              </h3>
              <div className="space-y-4">
                {leadership.map((role, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <h4 className="font-semibold">{role.role}</h4>
                    <p className="text-sm text-primary mb-2">{role.organization}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;