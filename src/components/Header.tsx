import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold font-heading">
            <span className="text-gray-900">Bipin</span>
            <span className="gradient-text">Acharya</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              Achievements
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200/50 backdrop-blur-md">
            <nav className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              >
                Achievements
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 hover:bg-gray-50 rounded-lg"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}