import { useState, useCallback, useRef, useEffect } from 'react';

interface TerminalLine {
  id: string;
  command: string;
  output: string;
  timestamp: Date;
}

interface TerminalState {
  lines: TerminalLine[];
  currentCommand: string;
  isTyping: boolean;
  commandHistory: string[];
  historyIndex: number;
}

const commands = {
  whoami: () => "Jyothi Ram - DevSecOps Engineer & Platform Specialist\nFinal-year BTech student at NIT Karnataka (2022–2026)\nSpecializing in Zero-Trust CI/CD, Container Security & Cloud-Native Infrastructure",
  
  ls: (arg?: string) => {
    if (arg === 'projects') {
      return "Secure-Cloud-Native-LLM-Platform/\nSecure-DevOps-Pipeline-GoLang/\nTerraform-Jenkins-AWS-Infrastructure/";
    }
    return "about.txt\nexperience.json\nprojects/\nskills.txt\nachievements.md\ncontact.info";
  },
  
  cat: (file?: string) => {
    switch (file) {
      case 'skills.txt':
        return "=== TECHNICAL SKILLS ===\n\nLanguages: Python, Go, Bash/Shell, JavaScript, SQL (PostgreSQL), C/C++\nDevSecOps: GitHub Actions, GitLab CI, Jenkins, ArgoCD, SonarQube, Trivy, Snyk, OWASP ZAP\nCloud & Containers: AWS (EKS, EC2, RDS, S3), GCP, Kubernetes, Docker, Helm, K3s\nInfrastructure: Terraform, Ansible, CloudFormation, GitOps\nSecurity: Zero-Trust, RBAC, Network Policies, mTLS, Prometheus, Grafana, Loki, ELK Stack\nAI/ML Security: LLM platform hardening, model supply-chain scanning, container isolation\nSysAdmin: Linux (Ubuntu, RHEL), Security Hardening, Networking\n\nCertifications:\n✓ AWS Certified Cloud Practitioner\n✓ Linux Foundation - KEDA Certified\n✓ LIFT Scholarship 2025 Recipient";
      
      case 'about.txt':
        return "=== ABOUT JYOTHI RAM ===\n\nDevSecOps Engineer passionate about building secure cloud-native infrastructure.\nFinal-year BTech at National Institute of Technology Karnataka.\n\nSpecializations:\n• Zero-Trust CI/CD Pipeline Architecture\n• Container Security Automation\n• Infrastructure Hardening (AWS & GCP)\n• AI/ML Platform Security\n• Monitoring & Anomaly Detection\n\nPhilosophy: \"Secure by default, automated everywhere, fail fast and learn faster\"";
      
      case 'contact.info':
        return "=== CONTACT INFORMATION ===\n\nEmail: jyothiram261@gmail.com\nPhone: +91-8074728123\nLinkedIn: /in/jyothi-ram-7a4602197\nGitHub: /jyothiram266\nHashnode: /jyothiram\nPortfolio: jyothiram.dev";
      
      default:
        return `cat: ${file}: No such file or directory`;
    }
  },
  
  history: () => "=== CAREER TIMELINE ===\n\n[May 2025 - Mar 2026] FixplianceAI - Platform Engineer\n• Engineered zero-trust CI/CD with SonarQube & Trivy\n• Migrated Docker Swarm to K3s (75% faster deployments)\n• Built Go/Bash CLI for one-click AWS/GCP provisioning\n• Established Prometheus/Grafana/Loki monitoring stack\n\n[Aug 2024 - May 2025] AI PLANET - DevOps Engineer\n• Built CI/CD pipelines (40% faster releases)\n• Deployed on Amazon EKS with zero-trust network policies\n• Implemented monitoring with security event dashboards\n• Executed zero-downtime RDS migrations\n\n[Feb 2024 - Present] UpWork - DevOps Consultant\n• Deployed HA PostgreSQL with CloudNativePG operator\n• Managed EKS clusters with mTLS & zero-trust model\n• Implemented GitOps with ArgoCD & audit trails",
  
  ping: (service?: string) => {
    if (service === 'social') {
      return "PING social_networks...\n\n✓ LinkedIn: linkedin.com/in/jyothi-ram-7a4602197 [REACHABLE]\n✓ GitHub: github.com/jyothiram266 [REACHABLE]\n✓ Hashnode: jyothiram.hashnode.dev [REACHABLE]\n✓ Email: jyothiram261@gmail.com [REACHABLE]\n\nAll social networks are operational and ready for collaboration!";
    }
    return `ping: ${service}: Host unreachable`;
  },
  
  help: () => "=== AVAILABLE COMMANDS ===\n\nwhoami          - Display user information\nls [directory]  - List files and directories\ncat <file>      - Display file contents\nhistory         - Show career timeline\nping <service>  - Check service availability\nclear           - Clear terminal screen\nhelp            - Show this help message\n\nTip: Try 'ls projects' or 'ping social'",
  
  clear: () => 'CLEAR_TERMINAL'
};

export const useTerminal = () => {
  const [state, setState] = useState<TerminalState>({
    lines: [
      {
        id: '0',
        command: '',
        output: "Welcome to Jyothi Ram's DevSecOps Portfolio Terminal v2.0\nType 'help' to see available commands.",
        timestamp: new Date()
      }
    ],
    currentCommand: '',
    isTyping: false,
    commandHistory: [],
    historyIndex: -1
  });

  const terminalRef = useRef<HTMLDivElement>(null);

  const executeCommand = useCallback((command: string) => {
    const trimmedCommand = command.trim();
    
    if (!trimmedCommand) return;

    setState(prev => ({
      ...prev,
      commandHistory: [trimmedCommand, ...prev.commandHistory.slice(0, 49)], // Keep last 50 commands
      historyIndex: -1
    }));

    const [cmd, ...args] = trimmedCommand.toLowerCase().split(' ');
    const commandFunction = commands[cmd as keyof typeof commands];
    
    let output: string;
    
    if (commandFunction) {
      const result = commandFunction(args.join(' '));
      
      if (result === 'CLEAR_TERMINAL') {
        setState(prev => ({
          ...prev,
          lines: [],
          currentCommand: ''
        }));
        return;
      }
      
      output = result;
    } else {
      output = `Command not found: ${cmd}\nType 'help' for available commands.`;
    }

    const newLine: TerminalLine = {
      id: Date.now().toString(),
      command: trimmedCommand,
      output,
      timestamp: new Date()
    };

    setState(prev => ({
      ...prev,
      lines: [...prev.lines, newLine],
      currentCommand: ''
    }));
  }, []);

  const navigateHistory = useCallback((direction: 'up' | 'down') => {
    setState(prev => {
      if (direction === 'up' && prev.historyIndex < prev.commandHistory.length - 1) {
        const newIndex = prev.historyIndex + 1;
        return {
          ...prev,
          historyIndex: newIndex,
          currentCommand: prev.commandHistory[newIndex]
        };
      } else if (direction === 'down') {
        if (prev.historyIndex > 0) {
          const newIndex = prev.historyIndex - 1;
          return {
            ...prev,
            historyIndex: newIndex,
            currentCommand: prev.commandHistory[newIndex]
          };
        } else if (prev.historyIndex === 0) {
          return {
            ...prev,
            historyIndex: -1,
            currentCommand: ''
          };
        }
      }
      return prev;
    });
  }, []);

  const setCurrentCommand = useCallback((command: string) => {
    setState(prev => ({
      ...prev,
      currentCommand: command
    }));
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [state.lines]);

  return {
    ...state,
    executeCommand,
    setCurrentCommand,
    navigateHistory,
    terminalRef
  };
};