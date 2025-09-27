import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, MapPin, Calendar, Clock } from "lucide-react";
import { experiencesData } from "../data/experiences";

export function WorkExperience() {
  return (
    <section id="experience" className="py-20 bg-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">Work Experience</h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional journey showcasing my growth and contributions in software development and leadership
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {experiencesData.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 ml-20 md:ml-0' : 'md:pl-8 ml-20 md:ml-0'}`}>
                  <Card className={`card-hover border-0 shadow-lg bg-white overflow-hidden relative ${index % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}>
                    <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${experience.gradient}`}></div>
                    
                    <CardHeader className="pl-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-gray-900 mb-2 font-heading">
                            {experience.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-blue-600 mb-3">
                            {experience.company}
                          </CardDescription>
                        </div>
                        <Badge className={`bg-gradient-to-r ${experience.gradient} text-white hover:opacity-90`}>
                          {experience.type}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.startDate} - {experience.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pl-6 pt-0">
                      <CardDescription className="text-gray-600 leading-relaxed mb-4">
                        {experience.description}
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for opposite side on desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 font-heading">Leadership</h4>
                <p className="text-sm text-gray-600">2+ Years</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 font-heading">Project Management</h4>
                <p className="text-sm text-gray-600">2+ Years</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 font-heading">Full-Stack Development</h4>
                <p className="text-sm text-gray-600">3+ Years</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 font-heading">Business Analysis</h4>
                <p className="text-sm text-gray-600">6+ Months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}