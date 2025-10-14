import React from 'react';
import { FaMobileAlt, FaLaptop, FaTabletAlt, FaDesktop } from 'react-icons/fa';

function TechAnimation() {
  const devices = [
    { Icon: FaMobileAlt, name: 'iOS', position: 'top-1/4 left-1/4', delay: '0s' },
    { Icon: FaMobileAlt, name: 'Android', position: 'top-1/4 right-1/4', delay: '0.5s' },
    { Icon: FaTabletAlt, name: 'Tablet', position: 'bottom-1/4 left-1/3', delay: '1s' },
    { Icon: FaLaptop, name: 'Web', position: 'bottom-1/3 right-1/4', delay: '1.5s' },
  ];

  return (
    <div className="w-full h-[500px] relative flex items-center justify-center overflow-hidden bg-dark-900/20 rounded-2xl">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5"></div>

      {/* Wireframe grid floor */}
      <div className="absolute bottom-0 w-full h-1/2 opacity-20" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(99, 102, 241, 0.3) 25%, rgba(99, 102, 241, 0.3) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.3) 75%, rgba(99, 102, 241, 0.3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(99, 102, 241, 0.3) 25%, rgba(99, 102, 241, 0.3) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.3) 75%, rgba(99, 102, 241, 0.3) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'bottom'
      }}></div>

      {/* Central device mockup */}
      <div className="relative z-10 flex items-center justify-center gap-8">
        {/* Phone mockup */}
        <div className="relative group/device">
          <div className="w-32 h-64 bg-dark-800 rounded-3xl border-4 border-dark-700 shadow-2xl shadow-primary-500/20 overflow-hidden transform hover:scale-105 transition-all duration-500">
            {/* Phone notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-dark-900 rounded-full"></div>
            
            {/* Screen content */}
            <div className="absolute inset-2 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center">
              <FaMobileAlt className="text-4xl text-primary-400" />
            </div>
            
            {/* Screen glow */}
            <div className="absolute inset-2 bg-gradient-to-t from-primary-500/30 to-transparent rounded-2xl animate-pulse-slow"></div>
            
            {/* Bottom button */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-dark-600 rounded-full"></div>
          </div>
          {/* Device label */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-primary-400/60 font-mono whitespace-nowrap">Mobile App</div>
        </div>

        {/* Laptop mockup */}
        <div className="relative group/device">
          <div className="w-64 h-40 bg-dark-800 rounded-t-2xl border-4 border-dark-700 border-b-0 shadow-2xl shadow-accent-500/20 overflow-hidden transform hover:scale-105 transition-all duration-500">
            {/* Screen content */}
            <div className="absolute inset-2 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-xl flex items-center justify-center">
              <FaLaptop className="text-5xl text-accent-400" />
            </div>
            
            {/* Screen glow */}
            <div className="absolute inset-2 bg-gradient-to-t from-accent-500/30 to-transparent rounded-xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
          </div>
          {/* Laptop base */}
          <div className="w-72 h-2 bg-dark-700 rounded-b-xl mx-auto"></div>
          <div className="w-80 h-1 bg-dark-800 rounded-b-2xl mx-auto"></div>
          {/* Device label */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-accent-400/60 font-mono whitespace-nowrap">Web App</div>
        </div>
      </div>

      {/* Floating code elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-primary-500/20 font-mono text-sm animate-float-code"
          style={{
            top: `${20 + (i * 10)}%`,
            left: `${10 + (i * 12) % 80}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${6 + (i % 3)}s`
          }}
        >
          {['</>', '{ }', '[ ]', '( )', 'fn()', '=>', 'if', 'map'][i]}
        </div>
      ))}

      {/* Connecting waves/signals */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
        <div className="absolute inset-0 border-2 border-primary-500/20 rounded-full animate-ping-slow"></div>
        <div className="absolute inset-8 border border-accent-500/20 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-16 border border-primary-500/20 rounded-full animate-ping-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Tech stack badges floating */}
      <div className="absolute top-8 left-8 flex gap-2 animate-float-gentle">
        <div className="bg-primary-500/10 border border-primary-500/30 text-primary-400 px-3 py-1.5 rounded-lg text-xs font-mono backdrop-blur-sm">React Native</div>
      </div>
      <div className="absolute top-8 right-8 flex gap-2 animate-float-gentle" style={{ animationDelay: '0.5s' }}>
        <div className="bg-accent-500/10 border border-accent-500/30 text-accent-400 px-3 py-1.5 rounded-lg text-xs font-mono backdrop-blur-sm">TypeScript</div>
      </div>
      <div className="absolute bottom-8 left-8 flex gap-2 animate-float-gentle" style={{ animationDelay: '1s' }}>
        <div className="bg-primary-500/10 border border-primary-500/30 text-primary-400 px-3 py-1.5 rounded-lg text-xs font-mono backdrop-blur-sm">Node.js</div>
      </div>
      <div className="absolute bottom-8 right-8 flex gap-2 animate-float-gentle" style={{ animationDelay: '1.5s' }}>
        <div className="bg-accent-500/10 border border-accent-500/30 text-accent-400 px-3 py-1.5 rounded-lg text-xs font-mono backdrop-blur-sm">MongoDB</div>
      </div>

      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }

        @keyframes float-code {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.4;
          }
        }

        .animate-float-code {
          animation: float-code 5s ease-in-out infinite;
        }

        @keyframes ping-slow {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.5;
          }
          100% {
            transform: scale(0.95);
            opacity: 1;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
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
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default TechAnimation;

