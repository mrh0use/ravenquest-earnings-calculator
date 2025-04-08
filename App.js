import React, { useState } from 'react';
import QuestCalculator from './QuestCalculator';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4">
        <button 
          className={`mr-2 p-2 ${activeTab === 'calculator' ? 'bg-teal-600' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('calculator')}
        >
          Earnings Calculator
        </button>
        <button 
          className={`p-2 ${activeTab === 'optimizer' ? 'bg-teal-600' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('optimizer')}
        >
          Route Optimizer
        </button>
      </div>
      
      {activeTab === 'calculator' ? <QuestCalculator /> : <TravelRouteOptimizer />}
    </div>
  );
}

export default App;
