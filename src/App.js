import React from 'react';
import GlobalState from './store/GlobalState'

// css imports
import './App.scss';

//component imports
import Deck from './components/Deck';
import Stock from './components/Stock';

function App() {
  return (
    <GlobalState>
      <div className="App">
        <header className="App-header">
          {/* <Stock /> */}
          <Deck />
        </header>
      </div>
    </GlobalState>
  );
}

export default App;
