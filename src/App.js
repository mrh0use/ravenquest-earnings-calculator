import React, { useState } from 'react';
import QuestCalculator from './QuestCalculator';
import MoaBreedingCalculator from './MoaBreedingCalculator';

function App() {
  const [activeTool, setActiveTool] = useState('quest'); // Default to QuestCalculator

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start p-4">
      {/* Navigation Tabs */}
      <div className="flex border-b border-teal-800 mb-4">
        <button
          className={`px-4 py-2 font-medium ${
            activeTool === 'quest'
              ? 'text-teal-300 border-b-2 border-teal-400'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTool('quest')}
        >
          Quest Calculator
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTool === 'moa'
              ? 'text-teal-300 border-b-2 border-teal-400'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTool('moa')}
        >
          Moa Breeding Calculator
        </button>
      </div>

      {/* Render Active Tool */}
      <div className="w-full max-w-xl">
        {activeTool === 'quest' && <QuestCalculator />}
        {activeTool === 'moa' && <MoaBreedingCalculator />}
      </div>
    </div>
  );
}

export default App;