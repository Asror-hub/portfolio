import React, { useState, useEffect } from 'react';

function TechAnimation() {
  const [activeLayers, setActiveLayers] = useState([0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayers(prev => {
        const next = (prev[prev.length - 1] + 1) % 4;
        return [...prev.slice(-2), next];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900/30 to-dark-800/30 rounded-2xl">
      {/* Hexagonal tech pattern background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%236366f1' stroke-opacity='0.1' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
        animation: 'drift 30s linear infinite'
      }}></div>

      {/* Development stack layers */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Layer 4 - Frontend */}
        <div className={`relative mb-8 transition-all duration-700 ${activeLayers.includes(3) ? 'scale-110' : 'scale-100'}`}>
          <div className="w-80 h-20 bg-gradient-to-r from-primary-500/10 via-primary-500/20 to-accent-500/10 border-2 border-primary-500/40 rounded-xl backdrop-blur-sm shadow-lg shadow-primary-500/20 flex items-center justify-between px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 animate-shimmer"></div>
            <span className="text-white font-bold text-sm relative z-10">Frontend Layer</span>
            <div className="flex gap-2 relative z-10">
              <div className="w-8 h-8 bg-primary-500/30 rounded-lg flex items-center justify-center border border-primary-500/50">
                <span className="text-primary-400 text-xs font-mono">UI</span>
              </div>
              <div className="w-8 h-8 bg-accent-500/30 rounded-lg flex items-center justify-center border border-accent-500/50">
                <span className="text-accent-400 text-xs font-mono">UX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 3 - API */}
        <div className={`relative mb-8 transition-all duration-700 ${activeLayers.includes(2) ? 'scale-110' : 'scale-100'}`}>
          <div className="w-72 h-20 bg-gradient-to-r from-accent-500/10 via-accent-500/20 to-primary-500/10 border-2 border-accent-500/40 rounded-xl backdrop-blur-sm shadow-lg shadow-accent-500/20 flex items-center justify-between px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/20 to-accent-500/0 animate-shimmer" style={{ animationDelay: '0.5s' }}></div>
            <span className="text-white font-bold text-sm relative z-10">API Layer</span>
            <div className="flex gap-2 relative z-10">
              <div className="w-8 h-8 bg-accent-500/30 rounded-lg flex items-center justify-center border border-accent-500/50">
                <span className="text-accent-400 text-xs font-mono">REST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2 - Backend */}
        <div className={`relative mb-8 transition-all duration-700 ${activeLayers.includes(1) ? 'scale-110' : 'scale-100'}`}>
          <div className="w-64 h-20 bg-gradient-to-r from-primary-500/10 via-primary-500/20 to-accent-500/10 border-2 border-primary-500/40 rounded-xl backdrop-blur-sm shadow-lg shadow-primary-500/20 flex items-center justify-between px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 animate-shimmer" style={{ animationDelay: '1s' }}></div>
            <span className="text-white font-bold text-sm relative z-10">Backend</span>
            <div className="flex gap-2 relative z-10">
              <div className="w-8 h-8 bg-primary-500/30 rounded-lg flex items-center justify-center border border-primary-500/50">
                <span className="text-primary-400 text-xs font-mono">JS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 1 - Database */}
        <div className={`relative transition-all duration-700 ${activeLayers.includes(0) ? 'scale-110' : 'scale-100'}`}>
          <div className="w-56 h-20 bg-gradient-to-r from-accent-500/10 via-accent-500/20 to-primary-500/10 border-2 border-accent-500/40 rounded-xl backdrop-blur-sm shadow-lg shadow-accent-500/20 flex items-center justify-between px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/20 to-accent-500/0 animate-shimmer" style={{ animationDelay: '1.5s' }}></div>
            <span className="text-white font-bold text-sm relative z-10">Database</span>
            <div className="flex gap-2 relative z-10">
              <div className="w-8 h-8 bg-accent-500/30 rounded-lg flex items-center justify-center border border-accent-500/50">
                <span className="text-accent-400 text-xs font-mono">DB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connecting lines between layers */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <line x1="50%" y1="20%" x2="50%" y2="35%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="40%" x2="50%" y2="55%" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="60%" x2="50%" y2="75%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </line>
      </svg>

      {/* Data flow particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary-400 rounded-full shadow-lg shadow-primary-500/50 animate-data-flow"
          style={{
            left: 'calc(50% - 4px)',
            animationDelay: `${i * 0.5}s`,
            animationDuration: '3s'
          }}
        />
      ))}

      {/* Corner tech indicators */}
      <div className="absolute top-6 left-6 flex flex-col gap-3">
        <div className="flex items-center gap-2 bg-dark-900/60 backdrop-blur-sm border border-primary-500/20 rounded-lg px-3 py-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-primary-400/70 text-xs font-mono">Active</span>
        </div>
        <div className="bg-dark-900/60 backdrop-blur-sm border border-primary-500/20 rounded-lg px-3 py-2">
          <span className="text-primary-400/70 text-[10px] font-mono">v1.2.4</span>
        </div>
      </div>

      <div className="absolute top-6 right-6 flex flex-col gap-3 items-end">
        <div className="flex items-center gap-2 bg-dark-900/60 backdrop-blur-sm border border-accent-500/20 rounded-lg px-3 py-2">
          <span className="text-accent-400/70 text-xs font-mono">99.9% Uptime</span>
          <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
        </div>
        <div className="bg-dark-900/60 backdrop-blur-sm border border-accent-500/20 rounded-lg px-3 py-2">
          <span className="text-accent-400/70 text-[10px] font-mono">Production</span>
        </div>
      </div>

      {/* Bottom performance metrics */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
        <div className="bg-dark-900/60 backdrop-blur-sm border border-primary-500/20 rounded-lg px-4 py-2 text-center">
          <div className="text-primary-400 font-mono text-xs">Response</div>
          <div className="text-white font-bold text-sm">45ms</div>
        </div>
        <div className="bg-dark-900/60 backdrop-blur-sm border border-accent-500/20 rounded-lg px-4 py-2 text-center">
          <div className="text-accent-400 font-mono text-xs">Requests</div>
          <div className="text-white font-bold text-sm">1.2M</div>
        </div>
        <div className="bg-dark-900/60 backdrop-blur-sm border border-primary-500/20 rounded-lg px-4 py-2 text-center">
          <div className="text-primary-400 font-mono text-xs">Users</div>
          <div className="text-white font-bold text-sm">50K+</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes data-flow {
          0% {
            top: 18%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 82%;
            opacity: 0;
          }
        }

        .animate-data-flow {
          animation: data-flow 3s ease-in-out infinite;
        }

        @keyframes drift {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
      `}</style>
    </div>
  );
}

export default TechAnimation;

