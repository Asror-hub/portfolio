import React, { useState, useEffect } from 'react';
import { FaMobile, FaCode, FaLaptopCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

function TechAnimation() {
  const [codeLines, setCodeLines] = useState([]);
  const [activeIcons, setActiveIcons] = useState([0]);

  const codeSnippets = [
    'const app = () => {...}',
    'import { useState } from "react"',
    'export default function Mobile()',
    'async/await Promise.all()',
    'npm run build --prod',
    'git push origin main',
    '<App /> render()',
    'useEffect(() => {...})',
    'const API = await fetch()',
    'socket.emit("connect")',
  ];

  const techIcons = [
    { Icon: FaMobile, color: 'text-primary-400', delay: '0s' },
    { Icon: FaCode, color: 'text-accent-400', delay: '0.5s' },
    { Icon: FaLaptopCode, color: 'text-primary-500', delay: '1s' },
    { Icon: FaServer, color: 'text-accent-500', delay: '1.5s' },
    { Icon: FaDatabase, color: 'text-primary-400', delay: '2s' },
    { Icon: FaCloud, color: 'text-accent-400', delay: '2.5s' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newLine = {
        id: Math.random(),
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        left: Math.random() * 70 + 15,
        delay: Math.random() * 2
      };
      setCodeLines(prev => [...prev.slice(-10), newLine]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcons(prev => {
        const next = (prev[prev.length - 1] + 1) % techIcons.length;
        return [...prev.slice(-2), next];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900/30 to-dark-800/30 rounded-2xl border border-white/5">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        animation: 'grid-move 20s linear infinite'
      }}></div>

      {/* Animated code lines */}
      {codeLines.map((line) => (
        <div
          key={line.id}
          className="absolute text-primary-500/50 font-mono text-xs md:text-sm animate-code-float whitespace-nowrap"
          style={{
            left: `${line.left}%`,
            animationDelay: `${line.delay}s`
          }}
        >
          {line.text}
        </div>
      ))}

      {/* Binary rain effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary-400/15 font-mono text-[10px] animate-binary-fall leading-tight"
            style={{
              left: `${(i * 5) % 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${10 + (i % 5)}s`
            }}
          >
            {[...Array(30)].map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Central monitor/screen mockup */}
      <div className="relative z-10 w-full max-w-md h-72 bg-dark-800/90 backdrop-blur-md rounded-2xl border-2 border-primary-500/40 shadow-2xl shadow-primary-500/30 overflow-hidden group hover:border-primary-500/60 transition-all duration-500">
        {/* Monitor header */}
        <div className="bg-dark-900/95 px-5 py-3 border-b border-primary-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500 transition-colors"></div>
          </div>
          <span className="text-primary-400/80 text-xs font-mono">~/norasoft/app</span>
        </div>
        
        {/* Terminal content */}
        <div className="p-5 font-mono text-xs md:text-sm space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-accent-400">$</span>
            <span className="text-primary-400/80">npm run dev</span>
          </div>
          <div className="text-primary-400/60 pl-4">→ Building mobile app...</div>
          <div className="text-green-400/80 pl-4 flex items-center gap-2">
            <span>✓</span>
            <span>Compiled successfully in 2.4s</span>
          </div>
          <div className="text-primary-400/60 pl-4">→ Starting dev server...</div>
          <div className="text-accent-400/80 pl-4">
            ⚡ Server: <span className="text-accent-400">http://localhost:5173</span>
          </div>
          <div className="text-primary-400/60 pl-4">→ Ready in 127ms</div>
          
          <div className="flex items-center gap-2 mt-6 pt-2 border-t border-primary-500/20">
            <span className="text-accent-400">$</span>
            <div className="w-2 h-4 bg-accent-400 animate-pulse"></div>
          </div>
        </div>

        {/* Glowing effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-transparent pointer-events-none group-hover:from-primary-500/30 transition-all duration-500"></div>
        
        {/* Scanning line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/10 to-transparent h-20 animate-scan pointer-events-none"></div>
      </div>

      {/* Tech icons orbiting */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((item, i) => (
          <div
            key={i}
            className={`absolute animate-orbit-${i % 3}`}
            style={{
              top: '50%',
              left: '50%',
              animationDelay: item.delay,
              animationDuration: `${15 + i * 2}s`
            }}
          >
            <item.Icon className={`${item.color} text-2xl md:text-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${activeIcons.includes(i) ? 'animate-pulse' : ''}`} />
          </div>
        ))}
      </div>

      {/* Floating code brackets */}
      <div className="absolute top-8 left-8 text-5xl md:text-6xl text-primary-500/15 font-mono animate-float-gentle">{'<>'}</div>
      <div className="absolute bottom-8 right-8 text-5xl md:text-6xl text-accent-500/15 font-mono animate-float-gentle" style={{ animationDelay: '1s' }}>{'{ }'}</div>
      <div className="absolute top-16 right-16 text-4xl md:text-5xl text-primary-400/15 font-mono animate-float-gentle" style={{ animationDelay: '0.5s' }}>{'[ ]'}</div>
      <div className="absolute bottom-16 left-16 text-4xl text-accent-400/15 font-mono animate-float-gentle" style={{ animationDelay: '1.5s' }}>{'( )'}</div>

      {/* Corner code snippets */}
      <div className="absolute top-6 right-6 bg-dark-900/60 backdrop-blur-sm border border-primary-500/20 rounded-lg px-3 py-2 font-mono text-[10px] text-primary-400/60">
        React Native
      </div>
      <div className="absolute bottom-6 left-6 bg-dark-900/60 backdrop-blur-sm border border-accent-500/20 rounded-lg px-3 py-2 font-mono text-[10px] text-accent-400/60">
        Node.js
      </div>

      <style jsx>{`
        @keyframes code-float {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20vh);
            opacity: 0;
          }
        }

        .animate-code-float {
          animation: code-float 12s linear infinite;
        }

        @keyframes binary-fall {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .animate-binary-fall {
          animation: binary-fall 12s linear infinite;
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float-gentle {
          animation: float-gentle 8s ease-in-out infinite;
        }

        @keyframes orbit-0 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(180px) rotate(-360deg);
          }
        }

        @keyframes orbit-1 {
          0% {
            transform: translate(-50%, -50%) rotate(120deg) rotate(0deg) translateX(150px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(480deg) translateX(150px) rotate(-360deg);
          }
        }

        @keyframes orbit-2 {
          0% {
            transform: translate(-50%, -50%) rotate(240deg) rotate(0deg) translateX(200px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(600deg) translateX(200px) rotate(-360deg);
          }
        }

        .animate-orbit-0 {
          animation: orbit-0 15s linear infinite;
        }

        .animate-orbit-1 {
          animation: orbit-1 17s linear infinite;
        }

        .animate-orbit-2 {
          animation: orbit-2 19s linear infinite;
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(500%);
          }
        }

        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }

        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 30px 30px;
          }
        }
      `}</style>
    </div>
  );
}

export default TechAnimation;

