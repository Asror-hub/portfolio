import React, { useState, useEffect } from 'react';

function TechAnimation() {
  const [particles, setParticles] = useState([]);
  const [connectionLines, setConnectionLines] = useState([]);

  // Create initial particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color: Math.random() > 0.5 ? 'primary' : 'accent'
    }));
    setParticles(initialParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;
        
        // Bounce off edges
        if (newX <= 0 || newX >= 100) particle.speedX *= -1;
        if (newY <= 0 || newY >= 100) particle.speedY *= -1;
        
        newX = Math.max(0, Math.min(100, newX));
        newY = Math.max(0, Math.min(100, newY));
        
        return { ...particle, x: newX, y: newY };
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Create connection lines between nearby particles
  useEffect(() => {
    const lines = [];
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
        if (distance < 15) {
          lines.push({
            id: `${p1.id}-${p2.id}`,
            x1: p1.x,
            y1: p1.y,
            x2: p2.x,
            y2: p2.y,
            opacity: (15 - distance) / 15
          });
        }
      });
    });
    setConnectionLines(lines.slice(0, 50)); // Limit lines for performance
  }, [particles]);

  return (
    <div className="w-full h-[500px] relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900/40 to-dark-800/40 rounded-2xl">
      {/* SVG for connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connectionLines.map((line) => (
          <line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="rgba(99, 102, 241, 0.3)"
            strokeWidth="1"
            opacity={line.opacity * 0.5}
          />
        ))}
      </svg>

      {/* Animated particles (nodes) */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full shadow-lg transition-all duration-100 ${
            particle.color === 'primary' 
              ? 'bg-primary-500 shadow-primary-500/50' 
              : 'bg-accent-500 shadow-accent-500/50'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        >
          {/* Pulse ring */}
          <div className={`absolute inset-0 rounded-full animate-ping ${
            particle.color === 'primary' ? 'bg-primary-500' : 'bg-accent-500'
          }`} style={{ animationDuration: '3s' }}></div>
        </div>
      ))}

      {/* Central tech hub circle */}
      <div className="relative z-10 w-72 h-72 rounded-full border-2 border-primary-500/30 flex items-center justify-center bg-dark-900/60 backdrop-blur-lg shadow-2xl shadow-primary-500/20">
        {/* Rotating ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-500/30 animate-spin-slow"></div>
        <div className="absolute inset-4 rounded-full border border-primary-500/20 animate-spin-reverse"></div>
        
        {/* Center content */}
        <div className="relative text-center space-y-4 px-6">
          {/* Code icon */}
          <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 flex items-center justify-center">
            <div className="text-4xl font-bold text-gradient">{'{ }'}</div>
          </div>
          
          {/* Tech stack labels */}
          <div className="space-y-2">
            <div className="text-primary-400 font-mono text-sm animate-pulse">Mobile Development</div>
            <div className="flex justify-center gap-2 flex-wrap">
              <span className="text-[10px] bg-primary-500/10 border border-primary-500/30 text-primary-400/80 px-2 py-1 rounded-md font-mono">React</span>
              <span className="text-[10px] bg-accent-500/10 border border-accent-500/30 text-accent-400/80 px-2 py-1 rounded-md font-mono">Native</span>
              <span className="text-[10px] bg-primary-500/10 border border-primary-500/30 text-primary-400/80 px-2 py-1 rounded-md font-mono">Node.js</span>
            </div>
          </div>

          {/* Data transfer animation */}
          <div className="flex items-center justify-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-ping"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-ping" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Glowing effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-xl"></div>
      </div>

      {/* Floating tech labels */}
      <div className="absolute top-10 left-10 bg-dark-900/70 backdrop-blur-sm border border-primary-500/20 rounded-lg px-3 py-2 font-mono text-xs text-primary-400/70 animate-float-gentle">
        API Integration
      </div>
      <div className="absolute top-20 right-10 bg-dark-900/70 backdrop-blur-sm border border-accent-500/20 rounded-lg px-3 py-2 font-mono text-xs text-accent-400/70 animate-float-gentle" style={{ animationDelay: '1s' }}>
        Cloud Deploy
      </div>
      <div className="absolute bottom-10 left-10 bg-dark-900/70 backdrop-blur-sm border border-primary-500/20 rounded-lg px-3 py-2 font-mono text-xs text-primary-400/70 animate-float-gentle" style={{ animationDelay: '0.5s' }}>
        Database
      </div>
      <div className="absolute bottom-20 right-10 bg-dark-900/70 backdrop-blur-sm border border-accent-500/20 rounded-lg px-3 py-2 font-mono text-xs text-accent-400/70 animate-float-gentle" style={{ animationDelay: '1.5s' }}>
        Real-time
      </div>

      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-slow 40s linear infinite reverse;
        }
      `}</style>
    </div>
  );
}

export default TechAnimation;

