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
  whoami: () => "Jyothi Ram - Platform Engineer & DevOps Specialist\nCurrently pursuing BTech at NIT Karnataka\nSpecializing in Cloud-Native Architecture & Infrastructure Automation",
  
  ls: (arg?: string) => {
    if (arg === 'projects') {
      return "Cloud-Native-ML-Platform/\nDevOpsified-GoLang-app/\nKubernetes-Monitoring-Stack/\nTerraform-AWS-Infrastructure/";
    }
    return "about.txt\nexperience.json\nprojects/\nskills.txt\nachievements.md\ncontact.info";
  },
  
  cat: (file?: string) => {
    switch (file) {
      case 'skills.txt':
        return "=== TECHNICAL SKILLS ===\n\nLanguages: Python, C/C++, SQL, JavaScript, Golang\nCloud: AWS (EKS, RDS, EC2, S3)\nContainers: Docker, Kubernetes, Helm\nCI/CD: GitHub Actions, ArgoCD, Jenkins\nMonitoring: Prometheus, Grafana, Loki\nInfrastructure: Terraform, Ansible\nWeb: React, Express, Next.js\n\nCertifications:\n✓ AWS Certified Cloud Practitioner\n✓ KodeKloud Engineer (45,000 XP)";
      
      case 'about.txt':
        return "=== ABOUT JYOTHI RAM ===\n\nPlatform Engineer passionate about building scalable, resilient infrastructure.\nCurrently pursuing BTech at National Institute of Technology Karnataka.\n\nSpecializations:\n• Cloud-Native Architecture\n• DevOps & CI/CD Automation\n• Infrastructure as Code\n• Container Orchestration\n• Monitoring & Observability\n\nPhilosophy: \"Infrastructure should be invisible, reliable, and enable developers to focus on building amazing products.\"";
      
      case 'contact.info':
        return "=== CONTACT INFORMATION ===\n\nEmail: jyothiram261@gmail.com\nPhone: +91-8074728123\nLinkedIn: /in/jyothi-ram\nGitHub: /jyothiram\nHashnode: /jyothiram\nPortfolio: jyothiram.dev";
      
      default:
        return `cat: ${file}: No such file or directory`;
    }
  },
  
  history: () => "=== CAREER TIMELINE ===\n\n[May 2025 - Present] FixplianceAI - Platform Engineer\n• Implemented Traefik reverse proxy (20% latency reduction)\n• Automated GitHub Release Notes generation\n• Orchestrated Docker Swarm deployments\n\n[Feb 2024 - Present] UpWork - FreeLancer\n• Deployed PostgreSQL clusters with CloudNativePG\n• Managed Kubernetes with Amazon EKS\n• Implemented CI/CD with ArgoCD\n\n[Aug 2024 - May 2025] AI PLANET - DevOps Engineer\n• Built GitHub Actions CI/CD (40% faster deployments)\n• Deployed applications on Amazon EKS\n• Implemented monitoring with Prometheus/Grafana/Loki\n• Managed Amazon RDS migrations",
  
  ping: (service?: string) => {
    if (service === 'social') {
      return "PING social_networks...\n\n✓ LinkedIn: linkedin.com/in/jyothi-ram [REACHABLE]\n✓ GitHub: github.com/jyothiram [REACHABLE]\n✓ Hashnode: hashnode.com/@jyothiram [REACHABLE]\n✓ Email: jyothiram261@gmail.com [REACHABLE]\n\nAll social networks are operational and ready for collaboration!";
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
        output: "Welcome to Jyothi Ram's DevOps Portfolio Terminal v1.0\nType 'help' to see available commands.",
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