import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const links = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#About' },
    { name: 'skills', href: '#Skills' },
    { name: 'projects', href: '#Projects' },
    { name: 'experience', href: '#Exprience' },
    { name: 'timeline', href: '#Timeline' },
    { name: 'testimonials', href: '#Testimonials' },
    { name: 'contact', href: '#Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 150;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.slice(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F19]/80 dark:bg-[#0B0F19]/85 backdrop-blur-md py-4 border-b border-gray-800'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] text-white">
            <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="font-grotesk font-bold text-xl tracking-tight text-white">
            Thicien<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">.Dev</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative font-poppins text-sm font-medium tracking-wide transition-colors duration-300 py-2 hover:text-white ${
                    activeSection === link.href.slice(1)
                      ? 'text-white font-semibold'
                      : 'text-gray-400'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-gray-900/60 border border-gray-800 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0B0F19]/95 backdrop-blur-lg border-b border-gray-800 py-6 px-6 shadow-2xl animate-fade-in">
          <ul className="flex flex-col gap-4 mb-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block font-poppins text-base py-2 border-b border-gray-900 transition-colors duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-white font-semibold bg-gradient-to-r from-[#3B82F6]/10 to-transparent pl-2 rounded-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
