import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Briefcase, Star, Medal, Crown, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Crown,
      title: "Rajasthan Police Hackathon 1.0",
      subtitle: "Winner 🏆",
      date: "January 2024",
      description: "Won first place developing AI-powered suspect detection system for law enforcement with 86.4% accuracy",
      type: "Competition",
      gradient: "from-yellow-500/20 to-orange-500/20",
      iconGradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Star,
      title: "Reckon 5.0",
      subtitle: "1st Position in Top 10 🥇",
      date: "February 2024",
      description: "Secured top position in prestigious tech competition in Jodhpur, Rajasthan with innovative solution",
      type: "Hackathon",
      gradient: "from-blue-500/20 to-purple-500/20",
      iconGradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Medal,
      title: "WittyHacks 4.0",
      subtitle: "4th Position 🏅",
      date: "April 2024",
      description: "Achieved 4th place at NMIMS Indore hackathon with innovative technical solution",
      type: "Competition",
      gradient: "from-green-500/20 to-teal-500/20",
      iconGradient: "from-green-500 to-teal-500"
    },
    {
      icon: Briefcase,
      title: "LinkedIn Recognition",
      subtitle: "Top Software Development Voice 🌟",
      date: "August 2024",
      description: "Recognized as a leading voice in software development community on LinkedIn",
      type: "Professional",
      gradient: "from-indigo-500/20 to-blue-500/20",
      iconGradient: "from-indigo-500 to-blue-500"
    }
  ];

  const certifications = [
    {
      title: "Google AI Essentials",
      issuer: "Google",
      date: "August 2024",
      type: "AI/ML",
      badge: "🧠"
    },
    {
      title: "LinkedIn Flutter Essential Training",
      issuer: "LinkedIn Learning",
      date: "July 2024",
      type: "Mobile Development",
      badge: "📱"
    },
    {
      title: "Introduction to Large Language Models",
      issuer: "Online Course",
      date: "2024",
      type: "AI/ML",
      badge: "🤖"
    }
  ];

  const leadership = [
    {
      role: "Team Leader",
      organization: "Black Pearl",
      description: "Leading development teams and coordinating project deliveries for multiple client projects",
      icon: "👥"
    },
    {
      role: "Admin Head",
      organization: "TEDxKIET",
      description: "Managing administrative operations and event coordination for prestigious TEDx events",
      icon: "🎯"
    }
  ];

  return (
    <section id="achievements" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge variant="outline" className="mb-6 px-4 py-2 glass border-primary/30">
              <Trophy className="w-4 h-4 mr-2 text-primary" />
              Achievements & Recognition
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-8">
              Proven 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Recognition through hackathon victories, professional certifications, 
              and leadership roles that demonstrate commitment to innovation and growth.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="group glass border-primary/20 overflow-hidden hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <CardContent className="p-8 relative">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.iconGradient} flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline" className="text-xs glass border-primary/30">
                            {achievement.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{achievement.date}</span>
                        </div>
                        <h3 className="font-bold text-xl font-heading mb-2 group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-primary font-semibold mb-3 text-lg">{achievement.subtitle}</p>
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
            <Card className="glass border-primary/20 p-8 animate-fade-in">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  Certifications
                </h3>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="p-4 rounded-xl glass border border-primary/10 hover:border-primary/20 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{cert.badge}</span>
                          <h4 className="font-semibold font-heading">{cert.title}</h4>
                        </div>
                        <Badge variant="secondary" className="text-xs glass border-secondary/30">{cert.type}</Badge>
                      </div>
                      <p className="text-sm text-primary mb-1 font-medium">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leadership */}
            <Card className="glass border-primary/20 p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  Leadership & Impact
                </h3>
                <div className="space-y-6">
                  {leadership.map((role, index) => (
                    <div key={index} className="p-4 rounded-xl glass border border-primary/10 hover:border-primary/20 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{role.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold font-heading">{role.role}</h4>
                          <p className="text-sm text-secondary mb-2 font-medium">{role.organization}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Summary */}
          <Card className="glass border-primary/20 p-8 mt-12 text-center animate-fade-in">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="group">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">3</div>
                  <div className="text-sm text-muted-foreground">Hackathon Wins</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">4+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-primary-glow mb-2 group-hover:scale-110 transition-transform">2</div>
                  <div className="text-sm text-muted-foreground">Leadership Roles</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">86%</div>
                  <div className="text-sm text-muted-foreground">Best AI Accuracy</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;