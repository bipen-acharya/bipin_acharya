import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Smartphone, Globe, Palette, Users } from "lucide-react";
import { Briefcase, BarChart3 } from "lucide-react";


export function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Flutter, Dart",
      details: "Creating beautiful, performant mobile applications for iOS and Android using Flutter framework with clean architecture and modern UI/UX principles.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Laravel, PHP, JavaScript",
      details: "Building robust, scalable web applications with modern frameworks and technologies, focusing on performance, security, and user experience.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
  icon: Briefcase, 
  title: "Business Analysis",
  description: "Strategy, Documentation, Stakeholder Management",
  details: "Analyzing business requirements, creating clear documentation, and bridging the gap between stakeholders and development teams to ensure successful project outcomes.",
  gradient: "from-green-500 to-teal-500"
},

    {
  icon: Users,
  title: "Project Management & Mentoring",
  description: "Leadership, Guidance",
  details: "Providing end-to-end project leadership, from planning and execution to delivery. Experienced in guiding development teams, mentoring aspiring developers, and ensuring projects are delivered on time, within budget, and to the highest standards.",
  gradient: "from-orange-500 to-red-500"
}

  ];

  return (
    <section id="services" className="py-20 bg-gray-50 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">Services</h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group card-hover border-0 shadow-lg bg-white relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 font-heading group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-center leading-relaxed">{service.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}