import React from 'react';

function TextMessage() {
  return (
    <div
      style={{
        width: '80%',
        marginTop:'150px',
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
          overflowY:'auto'
        }}
      />

      <button
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '30px',
          borderRadius: '20px',
          background: '#000000',
          border:'2px solid cyan',
          color: 'white',
          padding: '8px 16px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>
  );
}

export default TextMessage;