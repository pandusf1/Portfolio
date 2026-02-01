import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects Showcase', path: '/projects' }, // Highlight utama kamu
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Nama */}
        <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
          Portfolio<span className="text-secondary">.</span>
        </Link>

        {/* Desktop Menu (Hidden di HP) */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-slate-600 hover:text-secondary font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Tombol CV */}
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-all text-sm">
            <Download size={18} />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 hover:text-secondary focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
          <div className="flex flex-col p-6 space-y-4">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="text-slate-600 hover:text-secondary font-medium text-lg"
                onClick={() => setIsOpen(false)} // Tutup menu pas diklik
              >
                {item.name}
              </Link>
            ))}
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-all text-sm"
              >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;