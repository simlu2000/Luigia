import React, { useState } from 'react';
import logo from './LUIGIA.png';
import './App.css';
import TextMessage from './Components/TextMessage';

function App() {

  const [isTyping, setIsTyping] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiAnswerReady, setAIAnswerReady] = useState<string>("");
  const [questionToAI, setQuestionToAI] = useState<string>("");

 const doAction = () => {
    if (isLoading) {
      //"STOP" mentre sta pensando
      setIsLoading(false);
      setAIAnswerReady("");
    } else {
      // SEARCH
      setIsLoading(true);
      setAIAnswerReady("");

      // SIMULAZIONE CHIAMATA AI
      setTimeout(() => {
        setIsLoading(false);
        setAIAnswerReady("Ecco quello che ho trovato per te..."); 
      }, 2000);
    }
  };
  return (
    <div className="App">
      <header className="App-header">

        {!isLoading ? (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <div style={{ width: '90%' }}>
              <h2>
                <span style={{ color: 'cyan' }}>Luigia</span> è qui per te. <br></br>Perchè non le chiedi qualcosa?
              </h2>
            </div>
          </>
        ) : (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <div style={{ width: '90%' }}>
              {!aiAnswerReady ? (
                <h2>
                  <span style={{ color: 'cyan' }}>Luigia</span> sta pensando...
                </h2>
              ) : (
                <h2>
                  <span style={{ color: 'cyan' }}>Risposta</span>
                </h2>
              )}

            </div>
          </>
        )}

        <div
          style={{
            width: '80%',
            marginTop: '5%',
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
              fontSize: '1.2rem',
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
            placeholder='Chiedi a Luigia...'
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Impedisce di andare a capo
                if (questionToAI.trim() && !isLoading) doAction();
              }
            }}
            value={questionToAI}
            onChange={(q) => setQuestionToAI(q.target.value)}
          />

          <button
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '30px',
              borderRadius: '20px',
              background: '#000000',
              border: `2px solid ${!questionToAI.trim() ? '#444' : 'cyan'}`,
              color: 'white',
              padding: '8px 16px',
              cursor: questionToAI.trim() ? 'pointer' : 'not-allowed',
              transition: '0.3s'
            }}
            disabled={!questionToAI.trim() && !isLoading}
            onClick={doAction}
          >
            {isLoading ? 'Stop' : 'Search'}
          </button>
        </div>


      </header>
    </div>
  );
}

export default App;
