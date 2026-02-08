import { Github, Linkedin, Mail, Instagram, } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Portfolio<span className="text-secondary">.</span></h3>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Pandu Safrilio Fadhil. <br className="hidden md:block"/>
              All rights reserved.
            </p>
          </div>
          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" target='_blank' className="hover:text-secondary transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/pandoee_/" target='_blank' className="hover:text-secondary transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a 
              href="https://wa.me/6285124019353" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-green-500 transition-colors" 
              aria-label="WhatsApp"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 10V9" style={{opacity: 0}} /> {/* Spacer invisible */}
                <path d="M9 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2z" style={{display:'none'}} /> 
                {/* Gambar gagang telepon sederhana di dalam logo */}
                 <path d="M14.5 10c-.5-1-1.5-1-2-1s-1.5.5-2 1.5-1 2.5-1 4 .5 2.5 1.5 3.5 2.5 1 3.5.5 1.5-1.5 2-2.5-.5-1.5-1-2z" stroke="none" fill="none"/>
                 {/* Path detail telepon WA */}
                 <path d="M17.5 14.8c-.3-.1-1.7-.9-1.9-1-.2-.1-.4-.2-.5.1s-.8 1-.9 1.2c-.2.2-.4.2-.7 0-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.2-.3.3-.5s.1-.4 0-.5c-.1-.1-.5-1.1-.6-1.5-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3.1c.2.4 2 3 4.9 4.2 2.9 1.2 2.9.8 3.5.7.6-.1 1.7-.7 1.9-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z" />
              </svg>
            </a>
            <a href="https://github.com/pandusf1" target='_blank' className="hover:text-secondary transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="mailto:pandusf1@gmail.com" target='_blank' className="hover:text-secondary transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;