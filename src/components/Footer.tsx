import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Heart, Coffee, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jyothiram', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/jyothi-ram', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jyothiram261@gmail.com', label: 'Email' }
  ];

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Terminal className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">
                <span className="text-primary">jyothi</span>
                <span className="text-accent">ram</span>
                <span className="text-muted-foreground">.dev</span>
              </span>
            </motion.div>
            
            <p className="text-muted-foreground mb-4 max-w-md">
              Platform Engineer passionate about building scalable, resilient infrastructure 
              that enables developers to ship faster and more reliably.
            </p>
            
            <div className="terminal-window p-4 max-w-md">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-sm text-muted-foreground">status.log</span>
              </div>
              <div className="mt-2 text-xs">
                <p className="text-muted-foreground">
                  <span className="text-primary">$ </span>
                  <span className="text-terminal-success">Status: Available for new opportunities</span>
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">$ </span>
                  <span className="text-terminal-accent">Location: Karnataka, India</span>
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">$ </span>
                  <span className="text-terminal-cyan">Focus: DevOps & Cloud Architecture</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm story-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </motion.a>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <h4 className="font-medium text-foreground mb-2 text-sm">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind', 'Framer Motion'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Jyothi Ram. Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-500" />
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Open Source</span>
              <span>•</span>
              <span>MIT License</span>
              <span>•</span>
              <span>Made in India 🇮🇳</span>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="mt-6 text-center">
            <div className="terminal-window p-4 max-w-lg mx-auto">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-sm text-muted-foreground">thank_you.sh</span>
              </div>
              <div className="mt-2 text-xs text-center">
                <p className="text-muted-foreground">
                  <span className="text-primary">$ </span>
                  <span className="text-terminal-accent">echo "Thanks for visiting! Let's build something amazing together."</span>
                </p>
                <p className="text-terminal-success mt-1">
                  [SUCCESS] Portfolio loaded successfully ✓
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;