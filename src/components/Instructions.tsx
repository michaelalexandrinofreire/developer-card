import { useState } from 'react';

export default function Instructions() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className='instruContainer'>
      <button onClick={toggleInstructions} className='buttonInstru'>How to use?</button>
      {showInstructions && (
        <div className='textInst'>
          <p>Copy and paste the GitHub API link and add your username.</p>
          <p>https://api.github.com/users/yourUser</p>
        </div>
      )}
    </div>
  );
};
