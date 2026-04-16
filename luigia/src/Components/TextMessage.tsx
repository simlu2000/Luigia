import React from 'react';

function TextMessage() {
  return (
      <textarea style={{
        display:'flex',
        width:'80%',
        minHeight:'150px',
        height:'auto',
        whiteSpace:'normal',
        borderRadius:'25px',
        border:'none',
        fontSize:'1.5rem'
      }}></textarea>
  );
}

export default TextMessage;
