import { useState } from 'react';

export default function Instructions() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className='instruContainer'>
      <button onClick={toggleInstructions} className='buttonInstru'>Como usar?</button>
      {showInstructions && (
        <div className='textInst'>
          <p>Copie e cole o link da API do Github e adicione seu user.</p>
          <p>ex: https://api.github.com/users/seuUser</p>
        </div>
      )}
    </div>
  );
};
