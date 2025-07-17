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
  CheckCircle
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
    { id: 'cloud', label: 'Cloud & AWS', icon: Cloud },
    { id: 'devops', label: 'DevOps Tools', icon: GitBranch },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'monitoring', label: 'Monitoring', icon: Monitor },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const skills: Skill[] = [
    // Languages
    { name: 'Python', level: 90, category: 'languages', description: 'Automation, scripting, and backend development' },
    { name: 'Golang', level: 85, category: 'languages', description: 'Microservices and cloud-native applications' },
    { name: 'JavaScript', level: 80, category: 'languages', description: 'Full-stack web development and automation' },
    { name: 'SQL', level: 85, category: 'languages', description: 'Database design and complex queries' },
    { name: 'Bash/Shell', level: 90, category: 'languages', description: 'System administration and automation' },

    // Cloud & AWS
    { name: 'AWS EKS', level: 90, category: 'cloud', description: 'Kubernetes on AWS with advanced configurations' },
    { name: 'AWS EC2', level: 85, category: 'cloud', description: 'Compute instances and auto-scaling' },
    { name: 'AWS RDS', level: 80, category: 'cloud', description: 'Managed database services and migrations' },
    { name: 'AWS S3', level: 85, category: 'cloud', description: 'Object storage and static website hosting' },
    { name: 'AWS VPC', level: 80, category: 'cloud', description: 'Network architecture and security groups' },

    // DevOps Tools
    { name: 'Kubernetes', level: 90, category: 'devops', description: 'Container orchestration and management' },
    { name: 'Docker', level: 90, category: 'devops', description: 'Containerization and multi-stage builds' },
    { name: 'Terraform', level: 85, category: 'devops', description: 'Infrastructure as Code and state management' },
    { name: 'Helm', level: 85, category: 'devops', description: 'Kubernetes package manager and templating' },
    { name: 'ArgoCD', level: 80, category: 'devops', description: 'GitOps continuous delivery' },
    { name: 'GitHub Actions', level: 85, category: 'devops', description: 'CI/CD pipelines and automation' },
    { name: 'Jenkins', level: 75, category: 'devops', description: 'Build automation and pipelines' },
    { name: 'Ansible', level: 80, category: 'devops', description: 'Configuration management and automation' },

    // Databases
    { name: 'PostgreSQL', level: 85, category: 'databases', description: 'Advanced queries and performance tuning' },
    { name: 'MongoDB', level: 75, category: 'databases', description: 'NoSQL database design and operations' },
    { name: 'Redis', level: 70, category: 'databases', description: 'Caching and session management' },

    // Monitoring
    { name: 'Prometheus', level: 85, category: 'monitoring', description: 'Metrics collection and alerting' },
    { name: 'Grafana', level: 85, category: 'monitoring', description: 'Data visualization and dashboards' },
    { name: 'Loki', level: 80, category: 'monitoring', description: 'Log aggregation and analysis' },
    { name: 'AlertManager', level: 75, category: 'monitoring', description: 'Alert routing and notification' },

    // Security
    { name: 'IAM', level: 80, category: 'security', description: 'Identity and access management' },
    { name: 'Security Scanning', level: 75, category: 'security', description: 'Vulnerability assessment and remediation' },
    { name: 'Network Security', level: 75, category: 'security', description: 'Firewall rules and network policies' }
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
      verified: true
    },
    {
      name: 'KodeKloud Engineer',
      issuer: 'KodeKloud',
      year: '2024',
      score: '45,000 XP',
      verified: true
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
              A comprehensive overview of my technical expertise in DevOps, cloud computing, and software development.
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
                          {cert.score && (
                            <p className="text-xs text-primary">{cert.score}</p>
                          )}
                        </div>
                        {cert.verified && (
                          <CheckCircle className="w-4 h-4 text-terminal-success flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Progress */}
              <div className="terminal-window p-6">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground">learning.log</span>
                </div>
                
                <div className="mt-4 space-y-3">
                  <h3 className="font-semibold text-foreground">Currently Learning</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-warning">⚡</span>
                      <span className="text-muted-foreground">Advanced Kubernetes Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-warning">⚡</span>
                      <span className="text-muted-foreground">Service Mesh with Istio</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-warning">⚡</span>
                      <span className="text-muted-foreground">GitOps with Flux</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-warning">⚡</span>
                      <span className="text-muted-foreground">Site Reliability Engineering</span>
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