import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cloud, 
  Database, 
  GitBranch, 
  Monitor, 
  Shield, 
  Server, 
  Wrench,
  CheckCircle,
  Cpu,
  ExternalLink
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
  icon?: React.ComponentType<any>;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Code },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'devsecops', label: 'DevSecOps & CI/CD', icon: Shield },
    { id: 'cloud', label: 'Cloud & Containers', icon: Cloud },
    { id: 'iac', label: 'Infrastructure & IaC', icon: Server },
    { id: 'security', label: 'Security & Monitoring', icon: Monitor },
    { id: 'aiml', label: 'AI/ML Security', icon: Cpu }
  ];

  const skills: Skill[] = [
    // Languages
    { name: 'Python', level: 90, category: 'languages', description: 'Automation, scripting, and compliance checks' },
    { name: 'Go', level: 85, category: 'languages', description: 'CLI tools, microservices, and cloud-native applications' },
    { name: 'Bash/Shell Scripting', level: 92, category: 'languages', description: 'System administration and automation scripts' },
    { name: 'JavaScript', level: 80, category: 'languages', description: 'Full-stack web development and tooling' },
    { name: 'SQL (PostgreSQL)', level: 85, category: 'languages', description: 'Database design, complex queries, and migrations' },
    { name: 'C/C++', level: 75, category: 'languages', description: 'Systems programming and performance-critical code' },

    // DevSecOps & CI/CD
    { name: 'GitHub Actions', level: 90, category: 'devsecops', description: 'CI/CD pipelines with security scanning and quality gates' },
    { name: 'GitLab CI', level: 80, category: 'devsecops', description: 'Continuous integration and delivery pipelines' },
    { name: 'Jenkins', level: 78, category: 'devsecops', description: 'Build automation and pipeline orchestration' },
    { name: 'ArgoCD', level: 88, category: 'devsecops', description: 'GitOps continuous deployment with audit trails' },
    { name: 'SonarQube', level: 85, category: 'devsecops', description: 'Static code analysis and quality gates' },
    { name: 'Trivy', level: 88, category: 'devsecops', description: 'Container and dependency vulnerability scanning' },
    { name: 'Snyk', level: 78, category: 'devsecops', description: 'Security scanning for open source dependencies' },
    { name: 'OWASP ZAP', level: 75, category: 'devsecops', description: 'Dynamic application security testing' },

    // Cloud & Container Orchestration
    { name: 'AWS (EKS, EC2, RDS, S3)', level: 90, category: 'cloud', description: 'Production workloads with zero-trust policies' },
    { name: 'GCP', level: 80, category: 'cloud', description: 'Google Cloud Platform services and infrastructure' },
    { name: 'Kubernetes', level: 92, category: 'cloud', description: 'Container orchestration with security policies and RBAC' },
    { name: 'Docker', level: 92, category: 'cloud', description: 'Multi-stage builds, containerization, and image scanning' },
    { name: 'Helm', level: 88, category: 'cloud', description: 'Kubernetes package management with secure secret handling' },
    { name: 'K3s', level: 85, category: 'cloud', description: 'Lightweight Kubernetes for edge and development' },

    // Infrastructure & Automation
    { name: 'Terraform', level: 88, category: 'iac', description: 'Infrastructure as Code and automated state management' },
    { name: 'Ansible', level: 82, category: 'iac', description: 'Configuration management and server automation' },
    { name: 'CloudFormation', level: 78, category: 'iac', description: 'AWS-native infrastructure provisioning' },
    { name: 'GitOps', level: 88, category: 'iac', description: 'Declarative infrastructure and application delivery' },

    // Security & Monitoring
    { name: 'Zero-Trust Architecture', level: 88, category: 'security', description: 'Network policies, RBAC, and mTLS enforcement' },
    { name: 'Prometheus', level: 88, category: 'security', description: 'Metrics collection, alerting, and security-focused rules' },
    { name: 'Grafana', level: 88, category: 'security', description: 'Dashboards, visualization, and anomaly detection' },
    { name: 'Loki', level: 82, category: 'security', description: 'Log aggregation and security event analysis' },
    { name: 'CloudWatch / ELK Stack', level: 78, category: 'security', description: 'Cloud monitoring and log management' },

    // AI/ML Security
    { name: 'LLM Platform Hardening', level: 80, category: 'aiml', description: 'Securing AI inference platforms and model endpoints' },
    { name: 'Model Supply-Chain Scanning', level: 78, category: 'aiml', description: 'Integrity verification for ML model artifacts' },
    { name: 'Container Isolation for AI', level: 82, category: 'aiml', description: 'Runtime isolation and resource limits for AI workloads' }
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
      verified: true,
      credentialUrl: 'https://www.credly.com/badges/95f41770-50f5-4b88-8ad5-54143ac11d6e/public_url'
    },
    {
      name: 'Kubernetes Event-Driven Autoscaling (KEDA)',
      issuer: 'The Linux Foundation',
      year: '2024',
      verified: true,
      credentialUrl: 'https://www.credly.com/badges/5ea033a6-d5a2-41ba-84f7-de41af00194a/public_url'
    },
    {
      name: 'LIFT Scholarship 2025 Recipient',
      issuer: 'The Linux Foundation',
      year: '2025',
      verified: true,
      credentialUrl: 'https://www.linuxfoundation.org/about/lift-scholarships'
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '100%',
      transition: { duration: 1, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/5">
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
              <span className="text-gradient">Technical Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise in DevSecOps, cloud computing, security automation, and infrastructure engineering.
            </p>
          </motion.div>

          {/* Skill Categories */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card/50 text-muted-foreground border-border hover:bg-card hover:text-foreground'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Skills List */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="terminal-window p-6">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground">
                    skills_{activeCategory}.json
                  </span>
                </div>

                <div className="mt-6 space-y-6">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-foreground">{skill.name}</h3>
                          <p className="text-xs text-muted-foreground">{skill.description}</p>
                        </div>
                        <span className="text-sm text-primary font-mono">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications & Additional Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Certifications */}
              <div className="terminal-window p-6">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground">certifications.json</span>
                </div>
                
                <div className="mt-4 space-y-4">
                  <h3 className="font-semibold text-foreground mb-4">Certifications</h3>
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 py-2">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                          <p className="text-xs text-muted-foreground">{cert.year}</p>
                        </div>
                        {cert.verified && cert.credentialUrl ? (
                          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:scale-110 transition-transform">
                            <CheckCircle className="w-4 h-4 text-terminal-success" />
                          </a>
                        ) : cert.verified ? (
                          <CheckCircle className="w-4 h-4 text-terminal-success flex-shrink-0" />
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Administration */}
              <div className="terminal-window p-6">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground">sysadmin.log</span>
                </div>
                
                <div className="mt-4 space-y-3">
                  <h3 className="font-semibold text-foreground">System Administration</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-warning">⚡</span>
                      <span className="text-muted-foreground">Linux (Ubuntu, RHEL)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-warning">⚡</span>
                      <span className="text-muted-foreground">Security Hardening</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-warning">⚡</span>
                      <span className="text-muted-foreground">Networking & Firewall Rules</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-warning">⚡</span>
                      <span className="text-muted-foreground">System Performance Tuning</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{skills.length}</div>
                    <div className="text-xs text-muted-foreground">Skills</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{certifications.length}</div>
                    <div className="text-xs text-muted-foreground">Certifications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-terminal-success">2+</div>
                    <div className="text-xs text-muted-foreground">Years Exp.</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-terminal-warning">24/7</div>
                    <div className="text-xs text-muted-foreground">Learning</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;