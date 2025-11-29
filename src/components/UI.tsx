import React from 'react';
import { Info, Github } from 'lucide-react';

const UI: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center pointer-events-auto">
        <div className="text-white font-bold text-xl">WebGL Three.js Project</div>
        <div className="flex gap-4">
          <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
            <Info size={18} />
            <span>About</span>
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
          >
            <Github size={18} />
            <span>Source</span>
          </a>
        </div>
      </header>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white p-4 rounded-lg max-w-md pointer-events-auto">
        <h2 className="text-lg font-bold mb-2">Controls</h2>
        <ul className="text-sm space-y-1">
          <li>• Click and drag to rotate the camera</li>
          <li>• Scroll to zoom in/out</li>
          <li>• Right-click and drag to pan</li>
        </ul>
      </div>
    </div>
  );
};

export default UI;
