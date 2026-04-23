import React from 'react';

interface TextAnswerProps {
  text: string;
}

const TextAnswer: React.FC<TextAnswerProps> = ({ text }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '850px',
        margin: '30px auto',
        padding: '25px',
        backgroundColor: '#1a1a1a', 
        borderRadius: '24px',
        border: '1px solid #333',
        borderLeft: '5px solid cyan',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        textAlign: 'left',
        animation: 'slideUp 0.4s ease-out'
      }}
    >
      <div style={{ 
        color: 'cyan', 
        fontSize: '0.75rem', 
        fontWeight: 700, 
        textTransform: 'uppercase', 
        letterSpacing: '1.5px',
        marginBottom: '15px',
        opacity: 0.8
      }}>
        Luigia AI Answer
      </div>

      <div style={{ 
        color: '#f0f0f0', 
        fontSize: '1.15rem', 
        lineHeight: '1.7', 
        whiteSpace: 'pre-wrap', // Mantiene la formattazione originale
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {text}
      </div>

      <style>
        {`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default TextAnswer;