import { Button } from "./ui/button";
import { Download, ExternalLink, Code, Lightbulb, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-medium text-blue-600 font-heading tracking-wide">
                  👋 Hello, I'm
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading leading-tight">
                  <span className="text-gray-900">Bipin</span>
                  <span className="gradient-text block">Acharya</span>
                </h1>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 font-heading">
                  Building Digital Solutions with
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-base sm:text-xl font-medium">
                  <span className="flex items-center gap-2 text-blue-600">
                    <Code className="h-4 w-4 sm:h-5 sm:w-5" />
                    Code
                  </span>
                  <span className="flex items-center gap-2 text-purple-600">
                    <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" />
                    Creativity
                  </span>
                  <span className="flex items-center gap-2 text-indigo-600">
                    <Rocket className="h-4 w-4 sm:h-5 sm:w-5" />
                    Innovation
                  </span>
                </div>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-body max-w-2xl lg:max-w-lg mx-auto lg:mx-0">
                Master's student in ICT, passionate developer, and tech entrepreneur with 3+ years of experience in software development, project management, and digital innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToProjects}
                className="btn-gradient px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-heading font-semibold rounded-xl"
                size="lg"
              >
                <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Projects
              </Button>
               <a 
      href="/photos/Bipin_Acharya.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button 
        variant="outline"
        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-heading font-semibold rounded-xl"
        size="lg"
      >
        <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        Download CV
      </Button>
    </a>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 bg-purple-200/30 rounded-full animate-pulse delay-1000"></div>
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-4 sm:ring-8 ring-white/20 backdrop-blur-sm">
                <ImageWithFallback 
                  src="/photos/photo1.jpeg"
                  alt="Bipin Acharya - Professional Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 gradient-primary text-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold font-heading">3+</div>
                  <div className="text-xs sm:text-sm font-medium">Years Experience</div>
                </div>
              </div>
              
              {/* Skill Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-white text-gray-900 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-medium text-blue-600">Tech Entrepreneur</div>
                  <div className="text-xs text-gray-500">& Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}