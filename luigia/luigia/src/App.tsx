import React, { useState, useRef } from 'react';
import logo from './LUIGIA.png';
import './App.css';
import TextMessage from './Components/TextMessage';
import TextAnswer from './Components/TextAnswer';

function App() {

  const [isTyping, setIsTyping] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiAnswerReady, setAIAnswerReady] = useState<string>("");
  const [questionToAI, setQuestionToAI] = useState<string>("");

  //lock anti spam richieste
  const requestLock = useRef(false);

 const doAction = async () => {
  if (requestLock.current) return;
  if (!questionToAI.trim()) return;

  requestLock.current = true;
  setIsLoading(true);
  setAIAnswerReady(""); // Puliamo la risposta precedente

  try {
    const response = await fetch('http://localhost:5001/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: questionToAI }),
    });

    const data = await response.json();

    if (data.text) {
      // SETTIAMO PRIMA IL TESTO
      setAIAnswerReady(data.text);
    } 
  } catch (error) {
    console.error("Errore:", error);
    setAIAnswerReady("Errore di connessione.");
  } finally {
    // SPEGNIAMO IL CARICAMENTO DOPO
    setIsLoading(false);
    setTimeout(() => { requestLock.current = false; }, 500);
  }
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div style={{ width: '90%' }}>
          {aiAnswerReady ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2>
                <span style={{ color: 'cyan' }}>Risposta</span> completata
              </h2>

              <TextAnswer text={aiAnswerReady} />

              <button
                onClick={() => {
                  setAIAnswerReady("");
                  setQuestionToAI("");
                  setIsLoading(false);
                  requestLock.current = false;
                }}
                style={{
                  marginTop: '15px',
                  padding: '10px 25px',
                  backgroundColor: 'transparent',
                  border: '1px solid cyan',
                  color: 'cyan',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: '0.3s'
                }}
              >
                Nuova domanda
              </button>
            </div>
          ) : isLoading ? (
            // 2. Se non c'è risposta e sta caricando
            <h2>
              <span style={{ color: 'cyan' }}>Luigia</span> sta pensando...
            </h2>
          ) : (
            // 3. Stato iniziale
            <h2>
              <span style={{ color: 'cyan' }}>Luigia</span> è qui per te. <br />
              Perché non le chiedi qualcosa?
            </h2>
          )}
        </div>

        {!aiAnswerReady && (
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
              value={questionToAI}
              onChange={(e) => setQuestionToAI(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  if (!requestLock.current && questionToAI.trim()) doAction();
                }
              }}
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
              disabled={isLoading || !questionToAI.trim()}
              onClick={doAction}
            >
              {isLoading ? 'Stop' : 'Search'}
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;