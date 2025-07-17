import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Cloud, Zap, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '2+', icon: Zap },
    { label: 'Projects Completed', value: '15+', icon: Code },
    { label: 'Cloud Deployments', value: '50+', icon: Cloud },
    { label: 'Team Collaborations', value: '10+', icon: Users }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BTech at National Institute of Technology Karnataka',
      detail: 'Focusing on Computer Science with specialization in DevOps and Cloud Technologies'
    },
    {
      icon: Cloud,
      title: 'Cloud Expertise',
      description: 'AWS Certified Cloud Practitioner',
      detail: 'Specialized in EKS, RDS, EC2, S3, and cloud-native architectures'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with DevOps focus',
      detail: 'React, Node.js, Python, Golang with emphasis on infrastructure automation'
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Top 75 Coders - HackOn with Amazon',
      detail: 'KodeKloud Engineer with 45,000 XP demonstrating practical DevOps skills'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate Platform Engineer building scalable, resilient infrastructure that enables developers to ship faster and more reliably.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Introduction */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="terminal-window p-6">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground">about.md</span>
                </div>
                <div className="mt-4 space-y-4 text-sm leading-relaxed">
                  <p className="text-foreground">
                    <span className="text-primary"># </span>
                    Hello! I'm Jyothi Ram, a Platform Engineer passionate about creating infrastructure that just works.
                  </p>
                  <p className="text-muted-foreground">
                    Currently pursuing my BTech at NIT Karnataka while working on cutting-edge DevOps projects that reduce deployment times, improve system reliability, and enable teams to focus on what they do best - building amazing products.
                  </p>
                  <p className="text-muted-foreground">
                    My journey spans from implementing Kubernetes clusters and CI/CD pipelines to optimizing cloud costs and building monitoring solutions. I believe that great infrastructure should be invisible to developers but rock-solid in production.
                  </p>
                  <div className="mt-4">
                    <span className="text-primary">$ </span>
                    <span className="text-terminal-accent">Philosophy: "Automate everything, fail fast, learn faster"</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border hover-glow cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="w-6 h-6 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Current Focus */}
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3 text-primary">Current Focus</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    Cloud-Native Architecture Design
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    Infrastructure as Code (Terraform, Helm)
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    Container Orchestration & Security
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    Observability & Performance Optimization
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="group bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border hover-glow cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <highlight.icon className="w-8 h-8 text-primary mb-4 group-hover:text-accent transition-colors" />
                <h3 className="font-semibold mb-2 text-foreground">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{highlight.description}</p>
                <p className="text-xs text-muted-foreground/80">{highlight.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;