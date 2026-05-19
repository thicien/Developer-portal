import { useState, useRef, useEffect } from 'react';
import { Terminal as TermIcon, ShieldAlert, Sparkles } from 'lucide-react';
import { personalInfo, skillsData, projectsData } from '../data/portfolioData';

export default function Terminal() {
  const [history, setHistory] = useState([
    { text: 'Initializing NeoTerminal v2.1.0...', type: 'info' },
    { text: 'Ready! Type "help" to see all available commands.', type: 'success' },
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: 'List all available terminal commands.',
    about: 'Learn more about my professional journey and passion.',
    skills: 'Display categorized engineering capabilities.',
    projects: 'View high-level architectural project specifications.',
    contact: 'Retrieve modern secure connection information.',
    clear: 'Clear the terminal output screen buffer.',
    matrix: 'Initiate a specialized code injection sequence.',
  };

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `neo-dev@portfolio:~$ ${cmd}`, type: 'input' }];

    if (trimmed === '') {
      setHistory(newHistory);
      return;
    }

    let response = [];
    switch (trimmed) {
      case 'help':
        response = Object.entries(commands).map(([key, val]) => ({
          text: `  ${key.padEnd(12)} - ${val}`,
          type: 'success',
        }));
        break;
      case 'about':
        response = [
          { text: `Name: ${personalInfo.name}`, type: 'info' },
          { text: `Title: ${personalInfo.title}`, type: 'info' },
          { text: `Bio: ${personalInfo.bio}`, type: 'normal' },
        ];
        break;
      case 'skills':
        response = skillsData.flatMap((cat) => [
          { text: `\n[ ${cat.category} ]`, type: 'info' },
          ...cat.skills.map((s) => ({
            text: `  ${s.name.padEnd(25)} ${'█'.repeat(Math.round(s.level / 10))}${'░'.repeat(10 - Math.round(s.level / 10))} (${s.level}%)`,
            type: 'normal',
          })),
        ]);
        break;
      case 'projects':
        response = projectsData.flatMap((p) => [
          { text: `\n▶ ${p.title} (${p.category})`, type: 'success' },
          { text: `  Description: ${p.shortDesc}`, type: 'normal' },
          { text: `  Stack: ${p.tags.join(', ')}`, type: 'info' },
        ]);
        break;
      case 'contact':
        response = [
          { text: `Email:    ${personalInfo.email}`, type: 'success' },
          { text: `Location: ${personalInfo.location}`, type: 'normal' },
          { text: `GitHub:   ${personalInfo.github}`, type: 'info' },
          { text: `LinkedIn: ${personalInfo.linkedin}`, type: 'info' },
        ];
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'matrix':
        response = [
          { text: 'Injecting secure virtual mainframe...', type: 'warning' },
          { text: 'SYS_LOAD: [■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■] 100%', type: 'success' },
          { text: 'Neo V. Sterling is watching you. Welcome to the Matrix.', type: 'info' },
        ];
        break;
      default:
        response = [
          { text: `neo-sh: command not found: "${trimmed}". Type "help" for instructions.`, type: 'error' },
        ];
    }

    setHistory([...newHistory, ...response]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="bg-[#080B11]/95 border border-gray-800 rounded-2xl w-full max-w-4xl mx-auto shadow-2xl overflow-hidden font-mono text-sm cursor-text glow-purple"
    >
      {/* Top Header */}
      <div className="bg-[#111827] border-b border-gray-800 px-6 py-4 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          <TermIcon className="w-5 h-5 text-[#8B5CF6]" />
          <span className="text-gray-300 font-semibold">neo-terminal.sh</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
      </div>

      {/* Screen area */}
      <div className="p-6 h-[400px] overflow-y-auto flex flex-col gap-2 scrollbar-thin">
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`whitespace-pre-wrap ${
              line.type === 'input'
                ? 'text-white font-bold'
                : line.type === 'success'
                ? 'text-[#06B6D4]'
                : line.type === 'error'
                ? 'text-red-400'
                : line.type === 'warning'
                ? 'text-yellow-400 animate-pulse'
                : line.type === 'info'
                ? 'text-[#8B5CF6]'
                : 'text-gray-300'
            }`}
          >
            {line.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input area */}
      <div className="bg-[#090D16] border-t border-gray-850 px-6 py-4 flex items-center gap-2">
        <span className="text-[#8B5CF6] font-bold">neo-dev@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-white border-none outline-none focus:ring-0 font-mono caret-purple-500 select-all"
          placeholder='Type a command...'
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
