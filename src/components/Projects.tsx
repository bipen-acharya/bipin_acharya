import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectsProps {
  onProjectClick?: (projectId: number) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const projects = [
  {
    id: 1,
    title: "iLearning Solution",
    description: "A modern learning platform where users can buy courses and learn efficiently with a dynamic and interactive interface.",
    image: "/photos/Project1.png",
    technologies: ["React", "UI/UX Design", "Business Analysis", ],
    category: "Web Platform",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "SeaWave Bistro",
    description: "Food truck and catering business in Adelaide with website, social media management, and operational support for events and functions.",
    image: "/photos/Project2.png",
    technologies: ["Business Planning", "Website Development", "Social Media Management", "Canva"],
    category: "Business & Web",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Meal Mentor",
    description: "A POS and restaurant ordering system for small-scale restaurants in Nepal, enabling mobile order tracking and financial management.",
    image: "/photos/Project3.png",
    technologies: ["Flutter", "Mobile App Development", "UI/UX Design", "POS Systems"],
    category: "Mobile App",
    gradient: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    title: "Hamro Sadan",
    description: "A vehicle rental platform in Nepal connecting users and rental shops, enabling easy booking, tracking, and business growth.",
    image: "/photos/Project4.png",
    technologies: ["Flutter", "Mobile App Development", "UI/UX Design", "POS Systems", "Laravel", "Vehicle Renting System", "Firebase"],
    category: "Mobile App",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Chi-Chi (Meat Delivery App)",
    description: "A mobile app connecting local meat shops with customers for fresh meat delivery at home, saving time and improving convenience.",
    image: "/photos/Project5.png",
    technologies: ["Flutter", "Firebase", "E-commerce", "Delivery Systems"],
    category: "Mobile App",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Packers and Movers",
    description: "A platform connecting customers with trusted packers and movers for home and office relocation in Nepal with order tracking and service management.",
    image: "/photos/Project6.png",
    technologies: ["Flutter", "Laravel", "Firebase", "Google Maps API"],
    category: "Mobile App",
    gradient: "from-pink-500 to-rose-500"
  }
];


  return (
    <section id="projects" className="py-20 bg-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">Featured Projects</h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and successful project deliveries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group card-hover border-0 shadow-lg bg-white overflow-hidden relative">
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="aspect-video overflow-hidden relative">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Category badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-br ${project.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {project.category}
                </div>
              </div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors font-heading">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="btn-gradient flex-1 font-heading font-semibold"
                    onClick={() => onProjectClick && onProjectClick(project.id)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  {/* <Button size="sm" variant="outline" className="border-gray-300 hover:border-blue-600 hover:text-blue-600">
                    <Github className="h-4 w-4" />
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}