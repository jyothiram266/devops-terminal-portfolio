import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Cloud, Database, Monitor, X, Shield } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  category: 'cloud' | 'devops' | 'automation' | 'monitoring';
  status: 'completed' | 'in-progress' | 'planned';
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'cloud' | 'devops' | 'automation' | 'monitoring'>('all');

  const projects: Project[] = [
    {
      id: 'secure-llm-platform',
      title: 'Secure Cloud-Native LLM Platform',
      description: 'Secure LLM inference platform with containerised Ollama models on Kubernetes, automated vulnerability scanning, and AI/ML-specific security.',
      longDescription: 'Architected and deployed a secure LLM inference platform using containerised Ollama models on Kubernetes. Integrated automated vulnerability scanning (Trivy) and static code analysis into the CI/CD pipeline, addressing AI/ML-specific security considerations including model supply-chain integrity and runtime isolation. Implemented Infrastructure as Code using Helm charts with secure secret management, Persistent Volume Claims for data persistence, RBAC policies, and Horizontal Pod Autoscaling. Conducted performance and security testing using k6 load testing framework, optimised resource limits to prevent noisy-neighbour attacks, and implemented real-time monitoring dashboards.',
      technologies: ['Python', 'Ollama', 'AWS', 'Kubernetes', 'Docker', 'Helm', 'Trivy', 'k6'],
      features: [
        'Automated vulnerability scanning with Trivy in CI/CD pipeline',
        'Model supply-chain integrity and runtime isolation',
        'Helm charts with secure secret management and RBAC policies',
        'Persistent Volume Claims and Horizontal Pod Autoscaling',
        'k6 performance and security testing with resource limit optimization',
        'Real-time monitoring dashboards for anomaly detection'
      ],
      githubUrl: 'https://github.com/jyothiram266/mlops-project',
      category: 'cloud',
      status: 'completed'
    },
    {
      id: 'secure-devops-go',
      title: 'Secure DevOps Pipeline for Go Application',
      description: 'Secure build pipeline with Docker multi-stage builds, container scanning with Trivy, AWS EKS deployment with zero-trust policies and GitOps.',
      longDescription: 'Engineered a secure build process using Docker multi-stage builds to minimise attack surface. Implemented container image scanning with Trivy and enforced security best practices throughout the SDLC. Deployed production-ready application on AWS EKS with Kubernetes security policies, zero-trust network policies, and RBAC configuration, utilising Nginx Ingress Controller with TLS termination for encrypted traffic routing. Automated end-to-end deployment workflow using GitOps methodology with ArgoCD for continuous deployment and GitHub Actions for CI pipeline with integrated unit testing, security scanning, and quality gates.',
      technologies: ['Go', 'Docker', 'AWS EKS', 'Helm', 'ArgoCD', 'GitHub Actions', 'Nginx', 'Trivy'],
      features: [
        'Docker multi-stage builds to minimise attack surface',
        'Container image scanning with Trivy',
        'AWS EKS with zero-trust network policies and RBAC',
        'Nginx Ingress Controller with TLS termination',
        'ArgoCD GitOps continuous deployment',
        'GitHub Actions CI with security scanning and quality gates'
      ],
      githubUrl: 'https://github.com/jyothiram266/go-web-app',
      category: 'devops',
      status: 'completed'
    },
    {
      id: 'terraform-jenkins',
      title: 'Terraform Jenkins AWS Infrastructure',
      description: 'Infrastructure as Code templates for AWS with Jenkins, Kubernetes deployment, security configurations, and best practices.',
      longDescription: 'Production-ready Terraform modules for AWS infrastructure provisioning with Jenkins integration. Includes VPC setup, EKS clusters, RDS databases, security groups, and IAM roles. All modules follow AWS Well-Architected Framework principles and include comprehensive documentation, testing, and validation. Supports multi-environment deployment with security best practices and cost optimization.',
      technologies: ['Terraform', 'AWS', 'Jenkins', 'Kubernetes', 'VPC', 'EKS', 'IAM'],
      features: [
        'Modular Jenkins and Terraform configuration',
        'AWS Well-Architected compliance',
        'Multi-environment support with security best practices',
        'VPC, EKS, RDS provisioning automation',
        'IAM roles and security group configuration',
        'Cost optimization strategies and automated testing'
      ],
      githubUrl: 'https://github.com/jyothiram266/devops-projects/tree/master/Deploy-to-Kubernetes-Using-Jenkins',
      category: 'cloud',
      status: 'completed'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'devops', label: 'DevOps', icon: Shield },
    { id: 'monitoring', label: 'Monitoring', icon: Monitor },
    { id: 'automation', label: 'Automation', icon: Database }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-terminal-success';
      case 'in-progress': return 'text-terminal-warning';
      case 'planned': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return '✓ Completed';
      case 'in-progress': return '⚡ In Progress';
      case 'planned': return '📋 Planned';
      default: return status;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
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
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Secure cloud-native projects showcasing DevSecOps pipelines, infrastructure automation, container security, and AI/ML platform hardening.
            </p>
          </motion.div>

          {/* Filter Categories */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  filter === category.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card/50 text-muted-foreground border-border hover:bg-card hover:text-foreground'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="terminal-window hover-glow cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -5 }}
                >
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-sm text-muted-foreground">
                      {project.id}.md
                    </span>
                    <span className={`ml-auto text-xs ${getStatusColor(project.status)}`}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1 text-xs bg-muted hover:bg-muted/80 rounded-md transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1 text-xs bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="terminal-window max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-sm text-muted-foreground">
                      {selectedProject.id}_details.md
                    </span>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="ml-auto text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {selectedProject.title}
                      </h3>
                      <span className={`text-sm ${getStatusColor(selectedProject.status)}`}>
                        {getStatusLabel(selectedProject.status)}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.longDescription}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">▸</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-secondary/50 text-secondary-foreground rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {selectedProject.githubUrl && (
                        <motion.a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </motion.a>
                      )}
                      {selectedProject.liveUrl && (
                        <motion.a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;