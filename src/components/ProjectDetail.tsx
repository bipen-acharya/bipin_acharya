import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    description: string;
    problem: string;
    solution: string;
    impact: string;
    image: string;
    technologies: string[];
    category: string;
    role: string;
    duration: string;
    liveUrl?: string;
    githubUrl?: string;
  };
  onBack: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export function ProjectDetail({ 
  project, 
  onBack, 
  onNext, 
  onPrevious, 
  hasNext, 
  hasPrevious 
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            onClick={onBack}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 font-heading"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100 mb-4">
                  {project.category}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">My Role</h3>
                  <p className="text-gray-600">{project.role}</p>
                </div>
                {/* <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">Duration</h3>
                  <p className="text-gray-600">{project.duration}</p>
                </div> */}
              </div>

              <div className="flex gap-4">
  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="btn-gradient font-heading">
        <ExternalLink className="mr-2 h-4 w-4" />
        Live Demo
      </Button>
    </a>
  )}
  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        className="border-gray-300 hover:border-blue-600 hover:text-blue-600 font-heading"
      >
        <Github className="mr-2 h-4 w-4" />
        View Code
      </Button>
    </a>
  )}
</div>

            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Problem */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">The Problem</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">The Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.solution}</p>
            </div>

            {/* Impact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">The Impact</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.impact}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">Tech Stack</h3>
              <div className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-900">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <div>
            {hasPrevious && (
              <Button
                onClick={onPrevious}
                variant="outline"
                className="border-gray-300 hover:border-blue-600 hover:text-blue-600 font-heading"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Project
              </Button>
            )}
          </div>
          
          <div>
            {hasNext && (
              <Button
                onClick={onNext}
                className="btn-gradient font-heading"
              >
                Next Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}