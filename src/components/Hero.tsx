import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Terminal from './Terminal';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import heroImage from '@/assets/hero-image.jpg';

const Hero: React.FC = () => {
  const { displayedText: titleText } = useTypingEffect(
    "Jyothi Ram",
    { speed: 100, delay: 500 }
  );

  const { displayedText: subtitleText } = useTypingEffect(
    "Platform Engineer & DevOps Specialist",
    { speed: 50, delay: 2000 }
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="DevOps Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="matrix-bg">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
            animate={{
              y: ['0vh', '100vh'],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 2
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          {/* ASCII Art Logo */}
          <motion.div
            variants={itemVariants}
            className="mb-8 font-mono text-primary text-xs sm:text-sm leading-tight"
          >
            <pre className="select-none">
{`
    ╔══════════════════════════════════════╗
    ║    ____              ____            ║
    ║   / __ \\___  _   __ / __ \\____  _____║
    ║  / / / / _ \\| | / // / / / __ \\/ ___/║
    ║ / /_/ /  __/| |/ // /_/ / /_/ (__  ) ║
    ║ \\____/\\___/ |___/ \\____/ .___/____/  ║
    ║                       /_/            ║
    ╚══════════════════════════════════════╝
`}
            </pre>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-gradient">
              {titleText}
            </span>
            <span className="typing-cursor"></span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono"
          >
            {subtitleText}
            <span className="typing-cursor"></span>
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12 text-sm"
          >
            <div className="bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
              <span className="text-muted-foreground">Experience:</span>
              <span className="text-primary ml-2 font-bold">2+ Years</span>
            </div>
            <div className="bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
              <span className="text-muted-foreground">Projects:</span>
              <span className="text-accent ml-2 font-bold">15+</span>
            </div>
            <div className="bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
              <span className="text-muted-foreground">Certifications:</span>
              <span className="text-terminal-success ml-2 font-bold">AWS + KodeKloud</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Terminal Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <Terminal />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs mb-2 font-mono">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;