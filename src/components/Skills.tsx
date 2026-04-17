import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Cloud, 
  Shield, 
  Server, 
  CheckCircle,
  Cpu,
  Terminal,
  Activity,
  Layers,
  Award
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
  icon?: React.ComponentType<any>;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('languages');

  const skillCategories = [
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'devsecops', label: 'DevSecOps', icon: Shield },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'iac', label: 'Infrastructure', icon: Server },
    { id: 'security', label: 'Security', icon: Activity },
    { id: 'aiml', label: 'AI/ML', icon: Cpu }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = skillCategories.find(c => c.id === category);
    return cat?.icon || Code;
  };

  const skills: Skill[] = [
    // Languages
    { name: 'Python', level: 90, category: 'languages', description: 'Automation, scripting, & compliance checks' },
    { name: 'Go', level: 85, category: 'languages', description: 'CLI tools & cloud-native applications' },
    { name: 'Bash/Shell', level: 92, category: 'languages', description: 'System administration & automation' },
    { name: 'JavaScript', level: 80, category: 'languages', description: 'Full-stack web development' },
    { name: 'SQL (PostgreSQL)', level: 85, category: 'languages', description: 'Database design & migrations' },
    { name: 'C/C++', level: 75, category: 'languages', description: 'Systems & performance-critical code' },

    // DevSecOps & CI/CD
    { name: 'GitHub Actions', level: 90, category: 'devsecops', description: 'CI/CD with security scanning' },
    { name: 'GitLab CI', level: 80, category: 'devsecops', description: 'Continuous integration pipelines' },
    { name: 'Jenkins', level: 78, category: 'devsecops', description: 'Build pipeline orchestration' },
    { name: 'ArgoCD', level: 88, category: 'devsecops', description: 'GitOps continuous deployment' },
    { name: 'SonarQube', level: 85, category: 'devsecops', description: 'Static code analysis & gates' },
    { name: 'Trivy/Snyk', level: 88, category: 'devsecops', description: 'Vulnerability dependency scanning' },

    // Cloud & Container Orchestration
    { name: 'AWS', level: 90, category: 'cloud', description: 'EKS, EC2, RDS, S3 with zero-trust' },
    { name: 'Kubernetes', level: 92, category: 'cloud', description: 'Container orchestration & RBAC' },
    { name: 'Docker', level: 92, category: 'cloud', description: 'Multi-stage builds & containerization' },
    { name: 'Helm', level: 88, category: 'cloud', description: 'K8s package & secret management' },

    // Infrastructure & Automation
    { name: 'Terraform', level: 88, category: 'iac', description: 'Infrastructure as Code' },
    { name: 'Ansible', level: 82, category: 'iac', description: 'Configuration server management' },
    { name: 'GitOps', level: 88, category: 'iac', description: 'Declarative app delivery' },

    // Security & Monitoring
    { name: 'Zero-Trust Arch.', level: 88, category: 'security', description: 'Network policies, RBAC, mTLS' },
    { name: 'Prometheus', level: 88, category: 'security', description: 'Metrics & security-focused rules' },
    { name: 'Grafana', level: 88, category: 'security', description: 'Dashboards & anomaly detection' },
    { name: 'ELK / Loki', level: 82, category: 'security', description: 'Log aggregation & event analysis' },

    // AI/ML Security
    { name: 'LLM Hardening', level: 80, category: 'aiml', description: 'Securing AI inference platforms' },
    { name: 'Model Scanning', level: 78, category: 'aiml', description: 'Integrity for ML artifact supply-chain' },
    { name: 'AI Containers', level: 82, category: 'aiml', description: 'Runtime isolation for AI workloads' }
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
      name: 'Kubernetes Event-Driven Autoscaling',
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

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-primary/10 text-primary">
              <Terminal className="w-5 h-5 mr-2" />
              <span className="text-sm font-mono font-medium">~/capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Technical Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive overview of my expertise in DevSecOps, cloud infrastructure, and security automation.
            </p>
          </motion.div>

          {/* Skill Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-16">
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'text-primary-foreground shadow-lg shadow-primary/25'
                      : 'text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <category.icon className={`w-4 h-4 ${isActive ? 'text-primary-foreground' : 'text-primary/70 group-hover:text-primary transition-colors'}`} />
                  {category.label}
                </button>
              );
            })}
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Skills Grid - Main Focus */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredSkills.map((skill) => {
                    const Icon = getCategoryIcon(skill.category);
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        key={skill.name}
                        className="group relative p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-secondary/50 text-primary group-hover:bg-primary/10 transition-colors">
                                <Icon className="w-5 h-5" />
                              </div>
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {skill.name}
                              </h3>
                            </div>
                            <span className="text-xs font-mono text-muted-foreground group-hover:text-accent transition-colors">
                              {skill.level}%
                            </span>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-4 h-10">
                            {skill.description}
                          </p>
                          
                          <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-accent"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Sidebar - Certifications & Quick Stats */}
            <motion.div variants={itemVariants} className="space-y-6">
              
              {/* Certifications Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-primary/10" />
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Certifications</h3>
                </div>

                <div className="space-y-4 relative z-10">
                  {certifications.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-xl bg-background/50 hover:bg-background border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="font-semibold text-sm text-foreground mb-1 leading-snug">
                            {cert.name}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{cert.issuer}</span>
                            <span>•</span>
                            <span>{cert.year}</span>
                          </div>
                        </div>
                        {cert.verified && (
                          <div className="p-1 rounded-full bg-green-500/10 text-green-500 flex-shrink-0">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Stats Card */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Core Skills', value: skills.length.toString() },
                  { label: 'Certs Earned', value: certifications.length.toString() },
                  { label: 'Years Exp.', value: '2+' },
                  { label: 'Learning Mode', value: '24/7' }
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-colors">
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
