import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Globe,
  Send,
  MessageSquare,
  User,
  Coffee
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jyothiram261@gmail.com',
      href: 'mailto:jyothiram261@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8074728123',
      href: 'tel:+918074728123',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karnataka, India',
      href: '#',
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@jyothiram',
      href: 'https://github.com/jyothiram',
      color: 'text-gray-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/jyothi-ram',
      href: 'https://linkedin.com/in/jyothi-ram',
      color: 'text-blue-600'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'jyothiram.dev',
      href: 'https://jyothiram.dev',
      color: 'text-purple-500'
    },
    {
      icon: MessageSquare,
      label: 'Hashnode',
      value: '@jyothiram',
      href: 'https://hashnode.com/@jyothiram',
      color: 'text-blue-500'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 bg-secondary/5">
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
              <span className="text-gradient">Let's Build Something Amazing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to scale your infrastructure or discuss DevOps challenges? Let's connect and explore how we can work together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="terminal-window p-6">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground">send_message.form</span>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion / DevOps Consultation / Collaboration"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, infrastructure challenges, or how we can collaborate..."
                      rows={6}
                      required
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-4 h-4 mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Contact Details */}
              <div className="terminal-window p-6">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground">contact_info.json</span>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg bg-card/30 hover:bg-card/50 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className={`p-2 rounded-lg bg-background ${info.color}`}>
                        <info.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {info.label}
                        </div>
                        <div className="text-xs text-muted-foreground">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="terminal-window p-6">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground">social_links.json</span>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold text-foreground mb-4">Connect Online</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-card/30 hover:bg-card/50 transition-colors group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`p-2 rounded-lg bg-background ${social.color}`}>
                          <social.icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-medium text-foreground group-hover:text-primary transition-colors truncate">
                            {social.label}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">{social.value}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Chat */}
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Let's Grab a Virtual Coffee!</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm always excited to discuss DevOps challenges, cloud architecture, or new technologies. 
                  Feel free to reach out for a quick chat!
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary">$ </span>
                  <span className="text-terminal-accent">
                    Available for collaborations and consulting opportunities
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="terminal-window p-8 max-w-2xl mx-auto">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-sm text-muted-foreground">collaboration.invite</span>
              </div>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Ready to Scale Together?</h3>
                <p className="text-muted-foreground">
                  Whether you need DevOps expertise, cloud architecture guidance, or want to discuss 
                  the latest in infrastructure automation, I'm here to help.
                </p>
                <div className="text-sm text-muted-foreground">
                  <span className="text-primary">$ </span>
                  <span className="text-terminal-accent">
                    ./initiate_collaboration.sh --mode=awesome
                  </span>
                </div>
                <div className="text-xs text-terminal-success">
                  [SUCCESS] Ready to deploy exceptional results!
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;