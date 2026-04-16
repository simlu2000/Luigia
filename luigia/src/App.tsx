import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextMessage from './Components/TextMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Luigia è qui per te. Perchè non le chiedi qualcosa?
        </p>
        
        <TextMessage/>
        

      </header>
    </div>
  );
}

export default App;
