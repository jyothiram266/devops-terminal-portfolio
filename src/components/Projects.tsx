import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Cloud, Database, Monitor, X } from 'lucide-react';

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
      id: 'ml-platform',
      title: 'Cloud-Native ML Platform Setup',
      description: 'Scalable Language Model inference system with Kubernetes orchestration and automated scaling.',
      longDescription: 'Built a comprehensive cloud-native machine learning platform that can scale Language Model inference workloads automatically. The platform includes custom Helm charts for deployment, persistent volume claims for model storage, horizontal pod autoscaling for traffic spikes, and comprehensive k6 performance testing. The infrastructure supports multiple model types and can handle thousands of concurrent requests with sub-second response times.',
      technologies: ['Python', 'Ollama', 'AWS', 'Kubernetes', 'Docker', 'Helm', 'k6'],
      features: [
        'Custom Helm charts for microservices deployment',
        'Persistent Volume Claims for model storage',
        'Horizontal Pod Autoscaler for dynamic scaling',
        'k6 performance testing and load balancing',
        'Multi-model support with version management',
        'Real-time monitoring and alerting'
      ],
      githubUrl: 'https://github.com/jyothiram266/mlops-project',
      category: 'cloud',
      status: 'completed'
    },
    {
      id: 'devopsified-golang',
      title: 'DevOpsified-GoLang-app',
      description: 'Complete CI/CD pipeline for Golang application with Docker, Kubernetes, and GitOps workflow.',
      longDescription: 'A fully automated DevOps pipeline for a Golang web application featuring multi-stage Docker builds, Amazon EKS deployment, Nginx Ingress configuration, and ArgoCD GitOps workflow. The project demonstrates modern DevOps practices including infrastructure as code, automated testing, security scanning, and zero-downtime deployments.',
      technologies: ['Golang', 'Docker', 'AWS EKS', 'Helm', 'ArgoCD', 'GitHub Actions', 'Nginx'],
      features: [
        'Multi-stage Docker builds for optimization',
        'Amazon EKS cluster with auto-scaling',
        'Nginx Ingress Controller with SSL/TLS',
        'ArgoCD GitOps deployment workflow',
        'Automated GitHub Actions CI/CD',
        'Security scanning and vulnerability assessment',
        'Blue-green deployment strategy'
      ],
      githubUrl: 'https://github.com/jyothiram266/devops-projects/tree/master/go-web-app',
      category: 'devops',
      status: 'completed'
    },
    {
      id: 'terraform-aws',
      title: 'Terraform Jenkins AWS Infrastructure',
      description: 'Infrastructure as Code templates for AWS with best practices and security configurations.',
      longDescription: 'Production-ready Terraform modules for AWS infrastructure provisioning. Includes VPC setup, EKS clusters, RDS databases, security groups, and IAM roles. All modules follow AWS Well-Architected Framework principles and include comprehensive documentation, testing, and validation.',
      technologies: ['Terraform', 'AWS', 'VPC', 'EKS', 'RDS', 'IAM'],
      features: [
        'Modular jenkins and Terraform configuration',
        'AWS Well-Architected compliance',
        'Multi-environment support',
        'Security best practices',
        'Cost optimization strategies',
        'Automated testing and validation'
      ],
      githubUrl: 'https://github.com/jyothiram266/devops-projects/tree/master/Deploy-to-Kubernetes-Using-Jenkins',
      category: 'cloud',
      status: 'completed'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'devops', label: 'DevOps', icon: Github },
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
              A showcase of DevOps and cloud engineering projects that demonstrate infrastructure automation, scalability, and modern best practices.
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