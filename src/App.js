import React from 'react';
import GPACalculator from './GPACalculator';
import './GPACalculator.css';
import TopBar from './TopBar';

function App() {
  return (
    <div>
      <TopBar />
      {<GPACalculator />}
    </div>
  );
}

export default App;
