import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Download, User, Code, Briefcase, Award, GraduationCap, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+" },
    { icon: Users, label: "Students Mentored", value: "50+" },
    { icon: Award, label: "Years Experience", value: "3+" },
    { icon: GraduationCap, label: "Certifications", value: "5+" }
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">About Me</h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image and Stats */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto lg:mx-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="src/photos/photo1.jpeg"
                  alt="Bipin Acharya - Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 gradient-primary rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-purple-200 rounded-full opacity-30"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="p-4 sm:p-6 text-center card-hover border border-gray-200 hover:border-blue-200">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading text-center lg:text-left">
                  Crafting Digital Experiences
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                  I’m Bipin Acharya, a passionate developer and tech enthusiast currently pursuing my Master’s in Information and Communications Technology at the University of the Sunshine Coast, Adelaide.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                Over the past 3+ years, I’ve founded{" "}
                <a 
                  href="https://ableinnovation.com.np/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Able Innovation
                </a>, co-launched{" "}
                <a 
                  href="https://www.seawavebistro.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-purple-600 hover:underline"
                >
                  SeaWave Bistro
                </a>, mentored 50+ students in programming, and delivered mobile apps, booking systems, and digital platforms across industries such as education, healthcare, logistics, and hospitality.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                My core strengths lie in mobile app development, web development, UI/UX design, project management, and business analysis. I’m passionate about transforming ideas into user-friendly applications and aligning technology with business strategy to deliver real-world impact.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 font-heading text-center lg:text-left">Core Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-blue-50 rounded-xl">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900 text-sm sm:text-base">Business Analysis</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-purple-50 rounded-xl">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900 text-sm sm:text-base">Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-indigo-50 rounded-xl">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900 text-sm sm:text-base">Project Manager</span>
                </div>
              </div>
            </div>

            {/* Large Download CV Button */}
            <div className="pt-4 sm:pt-6 text-center lg:text-left">
              <a 
      href="/src/photos/Bipin_Acharya.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button className="btn-gradient px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-heading font-semibold rounded-xl w-full sm:w-auto">
        <Download className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
        Download CV
      </Button>
    </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}