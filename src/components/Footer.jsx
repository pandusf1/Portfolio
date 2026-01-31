import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Portfolio<span className="text-secondary">.</span></h3>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} ERP Functional Consultant. <br className="hidden md:block"/>
              All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="mailto:emailmu@contoh.com" className="hover:text-secondary transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;