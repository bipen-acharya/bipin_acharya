import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Users, Briefcase, Trophy, FileText, Star, Calendar } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
  icon: Briefcase,
  title: "Founded Able Innovation",
  description: "Established an IT business delivering end-to-end solutions — from web and mobile app development to hardware and software services.",
  year: "2023",
  category: "Entrepreneurship",
  gradient: "from-blue-500 to-cyan-500"
},
{
  icon: Users,
  title: "Mentored 50+ Students",
  description: "Taught mobile app development, guided students in programming fundamentals, and provided mentorship on real-world tech projects.",
  year: "2022-2024",
  category: "Leadership",
  gradient: "from-purple-500 to-pink-500"
},
{
  icon: Star,
  title: "Launched SeaWave Bistro",
  description: "Co-founded a food truck business in Adelaide offering catering services, while managing its digital restaurant platform and online presence.",
  year: "2023",
  category: "Entrepreneurship",
  gradient: "from-green-500 to-teal-500"
},
  ];

  const certifications = [
  {
    title: "Azure AI Fundamentals",
    issuer: "Certiport",
    year: "2025",
    credentialId: "AI-900",
    color: "bg-blue-500"
  },
  {
    title: "IT Specialist: Python Programming",
    issuer: "Certiport",
    year: "2025",
    credentialId: "ITS-Python",
    color: "bg-green-500"
  },
  {
    title: "Flutter & Laravel Development",
    issuer: "WebSoft",
    year: "2023",
    credentialId: "FL-2023",
    color: "bg-purple-500"
  },
  {
    title: "Scrum Fundamentals Certified",
    issuer: "iLearning Solution",
    year: "2025",
    credentialId: "SFC-2025",
    color: "bg-orange-500"
  },
  {
    title: "Business Analyst Bootcamp",
    issuer: "Employability Advantage",
   year: "2025",
    credentialId: "AI-900",
    color: "bg-blue-500"
  }
];


  return (
    <section id="achievements" className="py-20 bg-gray-50 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">Achievements & Certifications</h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition and certifications that validate my expertise and accomplishments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Achievements Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center font-heading">
              <Award className="mr-3 h-6 w-6 text-blue-600" />
              Key Achievements
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="space-y-8">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="relative flex items-start space-x-6">
                      {/* Timeline node */}
                      <div className={`relative z-10 w-12 h-12 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <Card className="flex-1 card-hover border-0 shadow-lg bg-white">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg font-bold text-gray-900 font-heading">{achievement.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge className={`bg-gradient-to-r ${achievement.gradient} text-white hover:opacity-90`}>
                                  {achievement.category}
                                </Badge>
                                <span className="text-sm text-gray-500 flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {achievement.year}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-gray-600 leading-relaxed">
                            {achievement.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Certifications Badges */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center font-heading">
              <FileText className="mr-3 h-6 w-6 text-blue-600" />
              Certifications
            </h3>
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="group card-hover border-0 shadow-lg bg-white overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-2 h-full ${cert.color}`}></div>
                  <CardHeader className="pl-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-gray-900 mb-2 font-heading">{cert.title}</CardTitle>
                        <CardDescription className="text-gray-600 font-semibold text-base mb-3">
                          {cert.issuer}
                        </CardDescription>
                        <div className="flex items-center gap-4">
                          <Badge variant="outline" className="text-xs font-medium">
                            {cert.year}
                          </Badge>
                          {/* <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            ID: {cert.credentialId}
                          </span> */}
                        </div>
                      </div>
                      <div className={`w-12 h-12 ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}