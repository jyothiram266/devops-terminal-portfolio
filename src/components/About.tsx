import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Cloud, Zap, Users, Award, Shield } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '2+', icon: Zap },
    { label: 'Cloud Platforms', value: 'AWS & GCP', icon: Cloud },
    { label: 'CI/CD Pipelines', value: '50+', icon: Code },
    { label: 'Team Collaborations', value: '10+', icon: Users }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BTech at National Institute of Technology Karnataka',
      detail: 'Final-year student (2022–2026), Surathkal, Karnataka'
    },
    {
      icon: Cloud,
      title: 'Cloud Expertise',
      description: 'AWS Certified Cloud Practitioner',
      detail: 'Specialized in EKS, EC2, RDS, S3, GCP, and cloud-native architectures'
    },
    {
      icon: Shield,
      title: 'DevSecOps',
      description: 'Zero-trust CI/CD pipelines & security automation',
      detail: 'SonarQube, Trivy, Snyk, OWASP ZAP, container security, RBAC & mTLS'
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'LIFT Scholarship 2025 by The Linux Foundation',
      detail: 'AWS Certified, KEDA Certified, recognized for open source excellence'
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
              DevSecOps engineer building secure cloud-native infrastructure with zero-trust CI/CD pipelines and container security automation.
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
                    Hello! I'm Jyothi Ram, a DevSecOps Engineer passionate about secure cloud-native infrastructure.
                  </p>
                  <p className="text-muted-foreground">
                    Final-year BTech student at NIT Karnataka with 2+ years of hands-on experience building secure cloud-native infrastructure on AWS and GCP. I focus on zero-trust CI/CD pipelines, container security automation, and infrastructure hardening.
                  </p>
                  <p className="text-muted-foreground">
                    My expertise spans deploying AI/ML platforms with integrated security scanning, migrating container orchestration to Kubernetes, and establishing comprehensive monitoring with security-focused alerting for anomalous behaviour detection.
                  </p>
                  <div className="mt-4">
                    <span className="text-primary">$ </span>
                    <span className="text-terminal-accent">Philosophy: "Secure by default, automated everywhere, fail fast and learn faster"</span>
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
                    Zero-Trust CI/CD Pipeline Architecture
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    Container Security & Supply-Chain Integrity
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    Infrastructure as Code (Terraform, Helm, Ansible)
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    AI/ML Platform Hardening & Runtime Isolation
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