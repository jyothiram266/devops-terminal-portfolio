import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTerminal } from '@/hooks/useTerminal';

const Terminal: React.FC = () => {
  const {
    lines,
    currentCommand,
    executeCommand,
    setCurrentCommand,
    navigateHistory,
    terminalRef
  } = useTerminal();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        executeCommand(currentCommand);
        break;
      case 'ArrowUp':
        e.preventDefault();
        navigateHistory('up');
        break;
      case 'ArrowDown':
        e.preventDefault();
        navigateHistory('down');
        break;
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="terminal-window hover-glow">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="ml-4 text-sm text-muted-foreground">
            jyothiram@devops-portfolio:~$
          </span>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="terminal-content max-h-96 overflow-y-auto"
          onClick={handleTerminalClick}
        >
          {/* Terminal Lines */}
          {lines.map((line, index) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="mb-2"
            >
              {line.command && (
                <div className="flex items-center text-terminal-prompt">
                  <span className="text-primary">$</span>
                  <span className="ml-2">{line.command}</span>
                </div>
              )}
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                {line.output}
              </pre>
            </motion.div>
          ))}

          {/* Current Input Line */}
          <div className="flex items-center text-terminal-prompt">
            <span className="text-primary">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="ml-2 bg-transparent border-none outline-none flex-1 text-foreground"
              placeholder="Type 'help' for available commands..."
              spellCheck={false}
              autoComplete="off"
            />
            <span className="typing-cursor"></span>
          </div>
        </div>
      </div>

      {/* Quick Commands */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 flex flex-wrap gap-2 justify-center"
      >
        {['whoami', 'ls projects', 'cat skills.txt', 'history', 'ping social'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => {
              setCurrentCommand(cmd);
              executeCommand(cmd);
            }}
            className="px-3 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded-md transition-colors border border-border"
          >
            {cmd}
          </button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Terminal;