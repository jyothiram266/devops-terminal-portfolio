import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Zap, Users, Code, Cloud, Shield, ExternalLink } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'hackathon' | 'certification' | 'project' | 'recognition';
  date: string;
  icon: React.ComponentType<any>;
  color: string;
  details?: string[];
  credentialUrl?: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 'aws-certified',
      title: 'AWS Certified Cloud Practitioner',
      description: 'Validated expertise in AWS cloud services, security, and architectural best practices',
      category: 'certification',
      date: '2024',
      icon: Cloud,
      color: 'text-orange-500',
      details: [
        'Comprehensive understanding of AWS cloud services and architecture',
        'Security and compliance best practices',
        'Cost optimization and cloud deployment strategies'
      ],
      credentialUrl: 'https://www.credly.com/badges/95f41770-50f5-4b88-8ad5-54143ac11d6e/public_url'
    },
    {
      id: 'keda-certified',
      title: 'Linux Foundation Certified - KEDA',
      description: 'Kubernetes Event-Driven Autoscaling for advanced container orchestration and scaling strategies',
      category: 'certification',
      date: '2024',
      icon: Code,
      color: 'text-blue-500',
      details: [
        'Advanced Kubernetes event-driven autoscaling',
        'Container orchestration and scaling strategies',
        'Production-grade workload management'
      ],
      credentialUrl: 'https://www.credly.com/badges/5ea033a6-d5a2-41ba-84f7-de41af00194a/public_url'
    },
    {
      id: 'lift-scholarship',
      title: 'LIFT Scholarship 2025 Recipient',
      description: 'Awarded by The Linux Foundation for demonstrated excellence in open source contribution, technical proficiency, and community leadership',
      category: 'recognition',
      date: '2025',
      icon: Award,
      color: 'text-green-500',
      details: [
        'Selected for outstanding open source contributions',
        'Demonstrated technical proficiency and community leadership',
        'Awarded by The Linux Foundation'
      ],
      credentialUrl: 'https://www.linuxfoundation.org/about/lift-scholarships'
    },
    {
      id: 'zero-trust-pipeline',
      title: 'Zero-Trust CI/CD Pipeline Architecture',
      description: 'Engineered zero-trust pipelines with automated security scanning, reducing deployment time by 75%',
      category: 'project',
      date: '2025',
      icon: Shield,
      color: 'text-purple-500',
      details: [
        'Integrated SonarQube and Trivy security scanning',
        'Migrated Docker Swarm to K3s with ArgoCD GitOps',
        'Reduced deployment time by 75% with enhanced security'
      ]
    },
    {
      id: 'deployment-optimization',
      title: 'Infrastructure Performance Boost',
      description: 'Achieved 40% release time reduction and 75% deployment speed improvement across platforms',
      category: 'project',
      date: '2025',
      icon: Zap,
      color: 'text-yellow-500',
      details: [
        'Optimized CI/CD pipelines with security gates',
        'Implemented zero-downtime deployments',
        'Built comprehensive monitoring with anomaly detection'
      ]
    },
    {
      id: 'secure-llm-platform',
      title: 'Secure AI/ML Platform Architecture',
      description: 'Deployed secure LLM inference platform with container isolation, model supply-chain scanning, and runtime security',
      category: 'project',
      date: '2024',
      icon: Star,
      color: 'text-cyan-500',
      details: [
        'Containerised Ollama models on Kubernetes with security scanning',
        'Model supply-chain integrity and runtime isolation',
        'Performance and security testing with k6 and Trivy'
      ]
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hackathon': return Trophy;
      case 'certification': return Award;
      case 'project': return Target;
      case 'recognition': return Star;
      default: return Award;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hackathon': return 'bg-yellow-500/20 text-yellow-500';
      case 'certification': return 'bg-blue-500/20 text-blue-500';
      case 'project': return 'bg-green-500/20 text-green-500';
      case 'recognition': return 'bg-purple-500/20 text-purple-500';
      default: return 'bg-gray-500/20 text-gray-500';
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
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
              <span className="text-gradient">Certifications & Achievements</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Certifications, awards, and milestones that showcase my journey in DevSecOps and cloud engineering excellence.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {achievements.map((achievement, index) => {
              const CategoryIcon = getCategoryIcon(achievement.category);
              
              return (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  className="terminal-window hover-glow group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-sm text-muted-foreground">
                      achievement_{achievement.id}.json
                    </span>
                    <span className={`ml-auto px-2 py-1 text-xs rounded-md ${getCategoryColor(achievement.category)}`}>
                      {achievement.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-card ${achievement.color} group-hover:scale-110 transition-transform`}>
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {achievement.title}
                          {achievement.credentialUrl && (
                            <a
                              href={achievement.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center ml-2 text-primary hover:text-accent transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">{achievement.date}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>

                    {achievement.details && (
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-foreground">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {achievement.details.slice(0, 3).map((detail, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">▸</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="terminal-window p-8 max-w-4xl mx-auto">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-sm text-muted-foreground">career_stats.summary</span>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Career Highlights</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-yellow-500 mb-2">75%</div>
                    <div className="text-sm text-muted-foreground">Deployment Speed</div>
                    <div className="text-xs text-muted-foreground">Improvement at FixplianceAI</div>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-blue-500 mb-2">40%</div>
                    <div className="text-sm text-muted-foreground">Release Time</div>
                    <div className="text-xs text-muted-foreground">Reduction at AI Planet</div>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-green-500 mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                    <div className="text-xs text-muted-foreground">AWS, KEDA, LIFT</div>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-purple-500 mb-2">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                    <div className="text-xs text-muted-foreground">In DevSecOps & Cloud</div>
                  </motion.div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary">$ </span>
                    <span className="text-terminal-accent">
                      echo "Secure by default, automated everywhere, continuous learning drives excellence"
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;