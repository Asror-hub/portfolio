import React, { useState, useEffect } from 'react';
import { SiReact, SiNodedotjs, SiMongodb, SiDocker, SiGithub, SiVisualstudiocode } from 'react-icons/si';
import { FaMobileAlt, FaServer, FaDatabase, FaCode, FaCheckCircle } from 'react-icons/fa';

function TechAnimation() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { Icon: SiReact, name: 'React Native', color: 'from-cyan-400 to-cyan-600', borderColor: 'border-cyan-500/30', position: 'top-20 left-16' },
    { Icon: SiNodedotjs, name: 'Node.js', color: 'from-green-400 to-green-600', borderColor: 'border-green-500/30', position: 'top-20 right-16' },
    { Icon: SiMongodb, name: 'MongoDB', color: 'from-green-500 to-green-700', borderColor: 'border-green-600/30', position: 'bottom-20 left-16' },
    { Icon: SiDocker, name: 'Docker', color: 'from-blue-400 to-blue-600', borderColor: 'border-blue-500/30', position: 'bottom-20 right-16' },
    { Icon: SiGithub, name: 'GitHub', color: 'from-purple-400 to-purple-600', borderColor: 'border-purple-500/30', position: 'top-1/2 left-8' },
    { Icon: SiVisualstudiocode, name: 'VS Code', color: 'from-blue-500 to-blue-700', borderColor: 'border-blue-600/30', position: 'top-1/2 right-8' },
  ];

  return (
    <div className="w-full h-[600px] relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900/30 via-dark-800/20 to-dark-900/30 rounded-2xl">
      {/* Animated dot pattern background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.5) 1.5px, transparent 1.5px)',
        backgroundSize: '30px 30px',
        animation: 'drift-background 40s linear infinite'
      }}></div>

      {/* Glowing orbs in background - disabled */}
      {/* <div className="absolute top-10 left-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div> */}

      {/* Central phone mockup with screens */}
      <div className="relative z-20 lg:animate-float-smooth">
        {/* Main phone - bigger on mobile */}
        <div className="relative w-60 md:w-64 lg:w-80 h-[400px] md:h-[420px] lg:h-[520px] bg-gradient-to-b from-dark-800 to-dark-900 rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] border-[7px] md:border-[8px] lg:border-[10px] border-dark-700 shadow-2xl shadow-primary-500/20 overflow-hidden group hover:shadow-primary-500/30 transition-shadow duration-500" style={{ willChange: 'transform' }}>
          {/* Phone notch/dynamic island */}
          <div className="absolute top-0.5 md:top-1 left-1/2 -translate-x-1/2 w-24 md:w-28 lg:w-36 h-5 md:h-6 lg:h-7 bg-dark-900 rounded-full z-30 flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4">
            <div className="w-2.5 md:w-3 lg:w-4 h-2.5 md:h-3 lg:h-4 bg-dark-700 rounded-full"></div>
            <div className="flex-1 h-0.5 md:h-0.5 lg:h-1 bg-dark-700 rounded-full"></div>
          </div>
          
          {/* Screen area */}
          <div className="absolute inset-2 md:inset-2.5 lg:inset-3 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 rounded-[2rem] md:rounded-[2.2rem] lg:rounded-[2.8rem] overflow-hidden">
            {/* Status bar */}
            <div className="absolute top-0 inset-x-0 h-7 md:h-8 lg:h-10 bg-dark-900/40 backdrop-blur-sm flex items-center justify-between px-3 md:px-4 lg:px-6 text-[7px] md:text-[9px] lg:text-[10px] text-white/60 z-20">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  <div className="w-1 h-2 bg-white/60 rounded-sm"></div>
                  <div className="w-1 h-2.5 bg-white/60 rounded-sm"></div>
                  <div className="w-1 h-3 bg-white/60 rounded-sm"></div>
                  <div className="w-1 h-3.5 bg-white/80 rounded-sm"></div>
                </div>
                <span className="ml-1">100%</span>
              </div>
            </div>

            {/* App content */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pt-7 md:pt-8 lg:pt-10">
              <div className="text-center space-y-2 md:space-y-4 lg:space-y-6 p-2.5 md:p-4 lg:p-5 w-full">
                {/* App icon */}
                <div className="relative mx-auto w-12 md:w-12 lg:w-16 h-12 md:h-12 lg:h-16">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl blur-lg opacity-20 animate-pulse-slow"></div> */}
                  <div className="relative w-12 md:w-12 lg:w-16 h-12 md:h-12 lg:h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
                    <FaMobileAlt className="text-lg md:text-xl lg:text-2xl text-white drop-shadow-lg" />
                  </div>
                </div>

                {/* Title */}
                <div className="space-y-0">
                  <div className="text-white font-bold text-xs md:text-sm lg:text-base tracking-tight">Work Excellence</div>
                  <div className="text-primary-400 text-[9px] md:text-xs font-mono">Built with Innovation</div>
                </div>
                
                {/* Feature cards with improved design */}
                <div className="space-y-1.5 md:space-y-2 lg:space-y-2.5 px-2 md:px-2.5 lg:px-3">
                  <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-md md:rounded-lg p-2 md:p-2.5 lg:p-3 text-left transition-all duration-700 ${activeFeature === 0 ? 'bg-primary-500/10 border-primary-500/30' : ''}`}>
                    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5">
                      <div className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8 bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-md md:rounded-lg flex items-center justify-center border border-primary-500/40 shadow-lg shadow-primary-500/20">
                        <FaCode className="text-primary-400 text-[9px] md:text-xs lg:text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-[10px] md:text-[11px] lg:text-xs font-semibold">Premium Code Quality</div>
                        <div className="text-white/60 text-[8px] md:text-[9px] lg:text-[10px]">Industry best practices</div>
                      </div>
                      <FaCheckCircle className="text-green-400 text-[9px] md:text-[11px] lg:text-xs" />
                    </div>
                  </div>
                  
                  <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-md md:rounded-lg p-2 md:p-2.5 lg:p-3 text-left transition-all duration-700 ${activeFeature === 1 ? 'bg-accent-500/10 border-accent-500/30' : ''}`}>
                    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5">
                      <div className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8 bg-gradient-to-br from-accent-500/30 to-accent-600/30 rounded-md md:rounded-lg flex items-center justify-center border border-accent-500/40 shadow-lg shadow-accent-500/20">
                        <FaServer className="text-accent-400 text-[9px] md:text-xs lg:text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-[10px] md:text-[11px] lg:text-xs font-semibold">Lightning Fast API</div>
                        <div className="text-white/60 text-[8px] md:text-[9px] lg:text-[10px]">Optimized performance</div>
                      </div>
                      <FaCheckCircle className="text-green-400 text-[9px] md:text-[11px] lg:text-xs" />
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-md md:rounded-lg p-2 md:p-2.5 lg:p-3 text-left">
                    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5">
                      <div className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-md md:rounded-lg flex items-center justify-center border border-primary-500/40 shadow-lg shadow-primary-500/20">
                        <FaDatabase className="text-primary-400 text-[9px] md:text-xs lg:text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-[10px] md:text-[11px] lg:text-xs font-semibold">Secure Database</div>
                        <div className="text-white/60 text-[8px] md:text-[9px] lg:text-[10px]">Enterprise grade</div>
                      </div>
                      <FaCheckCircle className="text-green-400 text-[9px] md:text-[11px] lg:text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Screen reflection and shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Phone buttons - more realistic */}
          <div className="absolute right-0 top-28 w-1 h-14 bg-dark-600 rounded-l shadow-inner"></div>
          <div className="absolute right-0 top-44 w-1 h-10 bg-dark-600 rounded-l shadow-inner"></div>
          <div className="absolute right-0 top-56 w-1 h-10 bg-dark-600 rounded-l shadow-inner"></div>
          <div className="absolute left-0 top-36 w-1 h-10 bg-dark-600 rounded-r shadow-inner"></div>
          
          {/* Phone bottom indicator */}
          <div className="absolute bottom-1 md:bottom-1.5 lg:bottom-2 left-1/2 -translate-x-1/2 w-16 md:w-24 lg:w-32 h-1 md:h-1 lg:h-1.5 bg-dark-600 rounded-full"></div>
        </div>
      </div>

      {/* Floating tech icons around phone - improved */}
      {techStack.map((tech, i) => (
        <div
          key={i}
          className={`absolute ${tech.position} animate-float-tech`}
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          <div className="relative group/icon cursor-pointer">
            {/* Animated glow effect - disabled */}
            {/* <div className={`absolute -inset-4 bg-gradient-to-br ${tech.color} opacity-0 group-hover/icon:opacity-5 blur-2xl transition-all duration-500 rounded-full`}></div>
            <div className={`absolute -inset-2 bg-gradient-to-br ${tech.color} opacity-0 blur-lg group-hover/icon:opacity-10 transition-opacity duration-300 rounded-full animate-pulse-slow`}></div> */}
            
            {/* Icon container with better styling */}
            <div className={`relative w-16 h-16 bg-gradient-to-br from-dark-800 to-dark-900 backdrop-blur-sm border-2 ${tech.borderColor} rounded-2xl flex items-center justify-center group-hover/icon:border-opacity-60 transition-all duration-300 group-hover/icon:scale-125 shadow-xl group-hover/icon:shadow-2xl`}>
              <tech.Icon className="text-2xl text-white/70 group-hover/icon:text-white transition-colors duration-300 drop-shadow-lg" />
              
              {/* Corner accent */}
              <div className={`absolute top-1 right-1 w-1.5 h-1.5 bg-gradient-to-br ${tech.color} rounded-full`}></div>
            </div>
            
            {/* Tech name label - always visible below */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
              <div className="bg-dark-900/80 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1 whitespace-nowrap shadow-lg">
                <span className="text-white/70 text-[11px] font-mono font-medium">{tech.name}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced data transfer lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        {/* Curved lines connecting icons to phone */}
        <path d="M 15% 12% Q 30% 30% 50% 50%" stroke="url(#gradient1)" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M 85% 12% Q 70% 30% 50% 50%" stroke="url(#gradient2)" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M 15% 88% Q 30% 70% 50% 50%" stroke="url(#gradient1)" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M 85% 88% Q 70% 70% 50% 50%" stroke="url(#gradient2)" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
        </path>
        
        {/* Enhanced gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.6)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.6)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.6)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Multiple pulsing circles from center - disabled */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] border border-primary-500/5 rounded-full animate-ping-very-slow"></div>
        <div className="absolute inset-12 border border-accent-500/5 rounded-full animate-ping-very-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-24 border border-primary-500/5 rounded-full animate-ping-very-slow" style={{ animationDelay: '2s' }}></div>
      </div> */}

      {/* Data flow particles - disabled */}
      {/* {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary-400 rounded-full shadow-lg shadow-primary-500/50 animate-orbit-particle"
          style={{
            top: '50%',
            left: '50%',
            animationDelay: `${i * 0.25}s`,
            animationDuration: `${4 + (i % 3)}s`
          }}
        />
      ))} */}

      <style jsx>{`
        @keyframes float-smooth {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float-smooth {
          animation: float-smooth 8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        @keyframes float-tech {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-float-tech {
          animation: float-tech 5s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes ping-very-slow {
          0% {
            transform: scale(0.95);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.15;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.4;
          }
        }

        .animate-ping-very-slow {
          animation: ping-very-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes orbit-particle {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(250px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(250px) rotate(-360deg);
            opacity: 0;
          }
        }

        .animate-orbit-particle {
          animation: orbit-particle 5s linear infinite;
        }

        @keyframes drift-background {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }
      `}</style>
    </div>
  );
}

export default TechAnimation;

