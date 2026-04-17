import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, ExternalLink, GitBranch } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
  companyUrl?: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 'fixpliance',
      company: 'FixplianceAI',
      role: 'Platform Engineer',
      period: 'May 2025 - Mar 2026',
      location: 'Remote',
      description: 'Engineered zero-trust CI/CD pipelines and led platform engineering initiatives for AI-powered compliance solutions.',
      achievements: [
        'Engineered zero-trust CI/CD pipelines with GitHub Actions, integrating automated security scanning (SonarQube, Trivy) and code quality gates',
        'Migrated container orchestration from Docker Swarm to K3s Kubernetes cluster, implementing GitOps workflows with ArgoCD, reducing deployment time by 75%',
        'Developed cross-platform automation CLI tool using Go and Bash for one-click infrastructure provisioning on AWS/GCP with AES-256 encryption',
        'Established comprehensive monitoring stack using Prometheus, Grafana, and Loki with security-focused alerting for anomalous container behaviour'
      ],
      technologies: ['GitHub Actions', 'K3s', 'ArgoCD', 'SonarQube', 'Trivy', 'Go', 'Prometheus', 'Grafana', 'Loki', 'Terraform'],
      current: false,
      companyUrl: 'https://www.linkedin.com/company/fixpliance-ai/posts/?feedView=all'
    },
    {
      id: 'aiplanet',
      company: 'AI PLANET',
      role: 'DevOps Engineer',
      period: 'Aug 2024 - May 2025',
      location: 'Remote',
      description: 'Built and maintained automated CI/CD pipelines and cloud infrastructure for AI and machine learning platforms with integrated security scanning.',
      achievements: [
        'Built automated CI/CD pipelines using GitHub Actions with integrated testing, security scanning, and quality gates, reducing release time by 40%',
        'Deployed production workloads on Amazon EKS with zero-trust network policies, RBAC, and Infrastructure as Code with Terraform',
        'Implemented logging and monitoring solutions using Prometheus, Grafana, and Loki including security event dashboards',
        'Executed complex Amazon RDS database migrations with zero-downtime strategy ensuring data integrity'
      ],
      technologies: ['GitHub Actions', 'Amazon EKS', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Loki', 'Amazon RDS', 'RBAC'],
      companyUrl: 'https://aiplanet.com/'
    },
    {
      id: 'upwork',
      company: 'UpWork',
      role: 'DevOps Consultant',
      period: 'Feb 2024 - Present',
      location: 'Remote',
      description: 'Providing DevOps consulting services specializing in Kubernetes, cloud-native solutions, and zero-trust infrastructure automation.',
      achievements: [
        'Deployed highly available PostgreSQL clusters using CloudNativePG operator on Kubernetes with automated backup and disaster recovery',
        'Managed Amazon EKS clusters including node lifecycle management, service mesh configuration with mTLS enforcement, and zero-downtime deployments',
        'Implemented GitOps practices using ArgoCD for declarative continuous deployment with complete audit trails',
        'Configured pod eviction strategies and zero-trust network model for mission-critical applications'
      ],
      technologies: ['Kubernetes', 'Amazon EKS', 'ArgoCD', 'CloudNativePG', 'PostgreSQL', 'Helm', 'Terraform', 'mTLS'],
      current: true,
      companyUrl: 'https://www.upwork.com/freelancers/~013b3ac8496e5c175d?viewMode=1'
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-secondary/5">
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
              <span className="text-gradient">Professional Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey in DevSecOps and Platform Engineering, building secure, scalable infrastructure and enabling development teams.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-background top-6 ${
                  index % 2 === 0 ? 'left-6 md:right-0 md:left-auto md:-mr-2' : 'left-6 md:left-0 md:-ml-2'
                }`}>
                  {exp.current && (
                    <div className="absolute inset-0 bg-primary rounded-full animate-pulse-glow"></div>
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="terminal-window p-6 hover-glow">
                    <div className="terminal-header">
                      <div className="terminal-dot bg-red-500"></div>
                      <div className="terminal-dot bg-yellow-500"></div>
                      <div className="terminal-dot bg-green-500"></div>
                      <span className="ml-4 text-sm text-muted-foreground">
                        {exp.company.toLowerCase().replace(/\s+/g, '_')}.experience
                      </span>
                      {exp.current && (
                        <span className="ml-auto px-2 py-1 text-xs bg-primary/20 text-primary rounded-md">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="mt-4 space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                            <Building className="w-5 h-5 text-primary" />
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors flex items-center gap-1"
                              >
                                {exp.company}
                                <ExternalLink className="w-4 h-4 text-primary" />
                              </a>
                            ) : (
                              exp.company
                            )}
                          </h3>
                          <p className="text-primary font-semibold">{exp.role}</p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div>{exp.location}</div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <GitBranch className="w-4 h-4 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">▸</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-md border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="terminal-window p-6 max-w-md mx-auto">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-sm text-muted-foreground">career.next</span>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="text-primary">$ </span>
                  Looking for the next challenge...
                </p>
                <motion.button
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Connect
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;