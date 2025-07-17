import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Zap, Users, Code, Cloud } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'hackathon' | 'certification' | 'project' | 'recognition';
  date: string;
  icon: React.ComponentType<any>;
  color: string;
  details?: string[];
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 'titan-top75',
      title: 'The Titan - Top 75 Coders',
      description: 'Recognized as one of the top 75 coders in HackOn with Amazon Season 4',
      category: 'hackathon',
      date: 'Season 4',
      icon: Trophy,
      color: 'text-yellow-500',
      details: [
        'Competed against 10,000+ developers nationwide',
        'Demonstrated exceptional problem-solving skills',
        'Built innovative solutions using AWS services',
        'Showcased leadership in team collaboration'
      ]
    },
    {
      id: 'aws-certified',
      title: 'AWS Certified Cloud Practitioner',
      description: 'Official AWS certification demonstrating cloud computing knowledge',
      category: 'certification',
      date: '2024',
      icon: Cloud,
      color: 'text-orange-500',
      details: [
        'Comprehensive understanding of AWS services',
        'Cloud architecture best practices',
        'Security and compliance in cloud environments',
        'Cost optimization strategies'
      ]
    },
    {
      id: 'kodekloud-engineer',
      title: 'KodeKloud Engineer - 45,000 XP',
      description: 'Junior DevOps Engineer certification with outstanding practical score',
      category: 'certification',
      date: '2024',
      icon: Code,
      color: 'text-blue-500',
      details: [
        'Hands-on DevOps challenges and labs',
        'Real-world scenario problem solving',
        'Infrastructure automation expertise',
        'Container orchestration mastery'
      ]
    },
    {
      id: 'platform-optimization',
      title: 'Infrastructure Performance Boost',
      description: 'Achieved 40% deployment time reduction and 20% latency improvement',
      category: 'project',
      date: '2025',
      icon: Zap,
      color: 'text-green-500',
      details: [
        'Optimized CI/CD pipelines with GitHub Actions',
        'Implemented Traefik reverse proxy',
        'Automated release management',
        'Enhanced monitoring and alerting'
      ]
    },
    {
      id: 'cloud-architecture',
      title: 'Cloud-Native Architecture Excellence',
      description: 'Successfully designed and deployed scalable ML platform infrastructure',
      category: 'project',
      date: '2024',
      icon: Star,
      color: 'text-purple-500',
      details: [
        'Kubernetes-based ML inference platform',
        'Auto-scaling capabilities for high traffic',
        'Multi-model deployment support',
        'Comprehensive monitoring integration'
      ]
    },
    {
      id: 'team-leadership',
      title: 'Cross-functional Team Leadership',
      description: 'Led DevOps initiatives across multiple teams and projects',
      category: 'recognition',
      date: '2024-2025',
      icon: Users,
      color: 'text-indigo-500',
      details: [
        'Mentored junior developers in DevOps practices',
        'Facilitated knowledge sharing sessions',
        'Established DevOps best practices',
        'Improved team productivity and collaboration'
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
              <span className="text-gradient">Achievements & Recognition</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones and accomplishments that showcase my journey in DevOps and cloud engineering excellence.
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
                    <div className="text-3xl font-bold text-yellow-500 mb-2">75th</div>
                    <div className="text-sm text-muted-foreground">Rank in Amazon HackOn</div>
                    <div className="text-xs text-muted-foreground">Out of 10K+ participants</div>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-blue-500 mb-2">45K</div>
                    <div className="text-sm text-muted-foreground">KodeKloud XP</div>
                    <div className="text-xs text-muted-foreground">Practical DevOps Skills</div>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-green-500 mb-2">40%</div>
                    <div className="text-sm text-muted-foreground">Deployment Speed</div>
                    <div className="text-xs text-muted-foreground">Improvement Achieved</div>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-purple-500 mb-2">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                    <div className="text-xs text-muted-foreground">In DevOps & Cloud</div>
                  </motion.div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary">$ </span>
                    <span className="text-terminal-accent">
                      echo "Continuous learning and growth mindset drives excellence"
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