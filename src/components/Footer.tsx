import { Linkedin, Github, Globe, Heart, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Bipin Acharya</h3>
            <p className="text-gray-400 leading-relaxed">
              Master's student in ICT, passionate developer, and tech entrepreneur focused on creating innovative digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#achievements" className="block text-gray-400 hover:text-white transition-colors">Achievements</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
  <h4 className="text-lg font-medium">Connect With Me</h4>
  <div className="flex space-x-4">
    <a
      href="https://www.linkedin.com/in/bipin-acharya-a9912618b/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
      title="LinkedIn"
    >
      <Linkedin className="h-5 w-5" />
    </a>
    <a
      href="https://github.com/bipen-acharya"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
      title="GitHub"
    >
      <Github className="h-5 w-5" />
    </a>
    <a
      href="https://www.youtube.com/@nothingspecial6622"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
      title="YouTube"
    >
      <Youtube className="h-5 w-5" />
    </a>
  </div>
</div>

        </div>

        {/* <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            © {currentYear} Bipin Acharya. Made with <Heart className="h-4 w-4 text-red-500" /> in Adelaide, Australia.
          </p>
        </div> */}
      </div>
    </footer>
  );
}