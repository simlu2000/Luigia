import React, { useState } from 'react';
import logo from './LUIGIA.png';
import './App.css';
import TextMessage from './Components/TextMessage';

function App() {

  const [isTyping, setIsTyping] = useState(0);
  const [isLoading, setIsLoading] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{width:'90%'}}>
        <h2>
          <span style={{color:'cyan'}}>Luigia</span> è qui per te. <br></br>Perchè non le chiedi qualcosa?
        </h2>
        </div>

        <div
          style={{
            width: '80%',
            marginTop: '150px',
            borderRadius: '25px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#181818',
            padding: '10px',
            position: 'relative'
          }}
        >
          <textarea
            style={{
              fontSize: '1.5rem',
              resize: 'none',
              minHeight: '150px',
              borderRadius: '25px',
              backgroundColor: '#181818',
              color: 'white',
              padding: '15px',
              border: 'none',
              outline: 'none',
              overflowY: 'auto'
            }}
          />

          <button
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '30px',
              borderRadius: '20px',
              background: '#000000',
              border: '2px solid cyan',
              color: 'white',
              padding: '8px 16px',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </div>


      </header>
    </div>
  );
}

export default App;
