import React from 'react';
import GlobalState from './store/GlobalState'

// css imports
import './App.scss';

//component imports
import Deck from './components/Deck';

function App() {
  return (
    <GlobalState>
      <div className="App">
        <header className="App-header">
          <Deck />
        </header>
      </div>
    </GlobalState>
  );
}

export default App;
