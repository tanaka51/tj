import React from 'react';
import Journal from './Journal.js'
import './App.css';
import './Journal.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          tj - training journal on web
        </p>
      </header>

      <Journal
        year="2019"
        month="6"
        day="12"
        content="PUSH UP LEVEL-1 30/30/30"
      />
      <Journal
        year="2019"
        month="6"
        day="10"
        content="LEG RAISE LEVEL-1 30/30/30"
      />
    </div>
  );
}

export default App;
