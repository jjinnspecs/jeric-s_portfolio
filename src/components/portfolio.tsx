import React, { useState, useEffect, useRef, ReactNode } from 'react';
import '../App.css';
import { Typewriter } from 'react-simple-typewriter';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<ReactNode[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [output]);

  const formatTypedText = (text: string): ReactNode => {
    return text.split(/(\*\*.*?\*\*|==.*?==)/).map((part, index) => {

      if (part.startsWith("**") && part.endsWith("**")) {
        return <b key={index}>{part.slice(2, -2)}</b>;
      }
      if (part.startsWith("==") && part.endsWith("==")) {
        const content = part.slice(2, -2);

              
      if (content.match(/^\[.*\]\(.*\)$/)) {
        const match = content.match(/^\[(.*?)\]\((.*?)\)$/);
        if (match) {
          const label = match[1];
          const url = match[2].startsWith("http") ? match[2] : `https://${match[2]}`;
          return (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition">
              {label}
            </a>
          );
        }
      }

        if (content.includes('@')) {
          return (
            <a key={index} href={`mailto:${content}`} className="text-blue-400 underline hover:text-blue-200 transition">
              {content}
            </a>
          );
        }
        if (content.includes('github.com')) {
          return (
            <a key={index} href={`https://${content}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition">
              {content}
            </a>
          );
        }
        if (content.includes('mycreativepanda.com')) {
          return (
            <a key={index} href={`https://${content}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition">
              {content}
            </a>
          );
        }
        if (content.includes('wordpress.com')) {
          return (
            <a key={index} href={`https://${content}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition">
              {content}
            </a>
          );
        }
        if (content.includes('onrender.com')) {
          return (
            <a key={index} href={`https://${content}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition">
              {content}
            </a>
          );
        }
        if (content.includes('vercel.app')) {
          return (
            <a key={index} href={`https://${content}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition">
              {content}
            </a>
          );
        }
        if (content.includes('drive.google.com')) {
          return (
            <a key={index} href={`https://${content}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition">
              {content}
            </a>
          );
        }
        if (content.includes('linkedin.com')) {
          return (
            <a key={index} href={`https://${content}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 transition">
              {content}
            </a>
          );
        }
        return <span key={index} className="bg-yellow-300 text-black px-1">{content}</span>;
      }
      return part;
    });
  };

  const removeMarkers = (text: string) => {
    return text.replace(/\*\*/g, '')
      .replace(/==.*?==/g, '');// Remove ** and == markers during typing
  };

  const handleCommand = (command: string) => {
    let response: string;
    
    switch (command.toLowerCase()) {
      case 'help':
        response = 'Available commands: help, about, projects, certificates, resume, contact, clear';
        break;
      case 'about':
        response = 
          "I'm a **Full-Stack Software/ Web Developer**, passionate about building high-quality, scalable applications. " +
          "Proficient in both **front-end** and **back-end** development, I specialize in **MERN stack (MongoDB, Express.js, React.js, Node.js)** as well as **PHP, MySQL, and Laravel**.\n\n" +
          "I thrive on **problem-solving**, **security-focused development**, and **optimizing system performance**.\n\n" +
          "**Always eager to learn and collaborate, I'm excited to contribute to innovative projects! 🚀**";
        break;
      case 'projects':
        response =
        "PERSONAL PROJECTS:\n" +
        "1. **Not Shopee(MERN Stack)**\n" +
        "==[View](mern-not-shopee.onrender.com/)==\n\n" +
        
        
        "2. **Task Manager(MERN Stack)**\n" +
        "==[View](task-manager-git-main-jjinnspecs-projects.vercel.app/)==\n\n\n" +

        
        "WORDPRESS WEB DESIGNS: \n" +
        "1. **OPM-tify**\n" +
        "==[View](jeric.mycreativepanda.com)== \n\n" +
        
        "2. **K&D**\n" +
        "==[View](jeric.mycreativepanda.com/webdesign2/)== \n\n" +

        "3. **Municipality of Lupi**\n" +
        "==[View](lupi.mycreativepanda.com/)== \n\n\n" +

        "...or check out my GitHub: ==github.com/jjinnspecs==";
        break;

      case 'certificates':
        response = "CERTIFICATES:\n" +
        "1. **Technical Intern - My Creative Panda INC.**\n" +
        "Date: February 2025 - March 2025\n" +
        "==[View](drive.google.com/file/d/13zgHr8tS5vrEtLLzt8psLcSwV1-nQdNA/view?usp=sharing)==\n\n" +
        
        "2. **IT Passport (IP) Certification - PhilNITS**\n" +
        "Date: May 2023\n" +
        "==[View](drive.google.com/file/d/1V8pmzgR4uSCZgb0ZkZkWoW-IxfBlwRCI/view?usp=sharing)==\n\n" +
        
        "3. **Certificate of Eligibility - Civil Service Commission**\n" +
        "Date: August 2024\n" +
        "==[View](drive.google.com/file/d/1H-hgByzlikqSmHbECkK0Ie878A1_DlJz/view?usp=sharing)==\n\n";
        break;

      case 'resume':
        response = "View my resume: ==[View](drive.google.com/file/d/1JBcr7FbL8hOw2MQtTO2exCV_rzYLFJvE/view?usp=sharing)==\n\n";
        break;

        case 'contact':
        response = "Email me at: ==j3.cariaso@gmail.com==\nMessage me on LinkedIn: ==linkedin.com/in/jeric-cariaso==";
        break;
      case 'clear':
        setOutput([]);
        return;
      default:
        response = ` '${command}' is not recognized as an internal or external command, operable program or batch file.`;
    }

    setIsTyping(true);

    setOutput([
      ...output,
      <div key={output.length}>C:\Users\Jjinnspecs&gt; {command}</div>,
      <div key={output.length + 1} className="text-white">
        <Typewriter
          words={[removeMarkers(response)]} // Show text without ** and == markers
          typeSpeed={10}
          cursor
          cursorStyle="_"
          onLoopDone={() => setIsTyping(false)}
        />
      </div>,
    ]);

    setTimeout(() => {
      setOutput((prevOutput) => [
        ...prevOutput.slice(0, -1),
        <div key={output.length + 2} className="text-white">
          {formatTypedText(response)}
        </div>,
      ]);
      setIsTyping(false);
    }, response.length * 10);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isTyping) {
      handleCommand(input);
      setInput('');
    }
  };



  return (
    <div className="h-screen bg-black text-white font-mono flex flex-col items-center justify-center p-4">
      <div id="terminal" className="w-full max-w-4xl h-[500px] bg-black border border-gray-700 shadow-lg flex flex-col">
        {/* Title Bar */}
        <div className="flex items-center bg-gray-900 px-4 py-2 text-white text-sm">
          <div className="flex-1">Command Prompt</div>
          <div className="flex space-x-2">
            <button className="w-4 h-4 bg-gray-600 rounded-sm"></button>
            <button className="w-4 h-4 bg-gray-600 rounded-sm"></button>
            <button className="w-4 h-4 bg-gray-600 rounded-sm"></button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-auto p-4 text-sm leading-relaxed" ref={terminalRef}>
          <div className="text-gray-400">Jjinnspecs[Version 03.01]</div>
          <div className="text-gray-400">(c) Jeric Cariaso. All rights reserved.</div>
          <br />
          {output.map((line, index) => (
            <div key={index} className="whitespace-pre-line">{line}</div>
          ))}
        </div>

        {/* Input Line */}
        <div className="flex items-center p-2 bg-gray-900">
          <span className="mr-2">C:\Users\Jjinnspecs&gt;</span>
          <input
            type="text"
            className="bg-transparent outline-none text-white flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            disabled={isTyping}
          />
        </div>
      </div>
      <br />
      <div className="w-full max-w-4xl text-gray-400 text-sm mt-2 text-left">
        Commands: <span className="text-gray-400">'help'</span>, <span className="text-gray-400">'about'</span>,{" "}
        <span className="text-gray-400">'projects'</span>, <span className="text-gray-400">'certificates'</span>,{" "}
        <span className="text-gray-400">'resume'</span>,{" "}
        <span className="text-gray-400">'contact'</span>,{" "}
        <span className="text-gray-400">'clear'</span>
      </div>
    </div>
  );
};

export default Terminal;
