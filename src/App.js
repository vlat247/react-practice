import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [value, setValue] = useState('ALLAUHAKBAR')
  const [isBombed, setIsBombed] = useState(false);

  const handleBomb = () => {
    setIsBombed(true);
    alert("IRAN HAS BEEN BOMBED");
  };

  return (
    <div className={`App ${isBombed ? 'bombed' : ''}`}>
      <h1>AMOUNT OF BOMBS THAT WILL BE THROWN ON IRAN:</h1>  
      <Counter />
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}></input>
      
      <button id='btn' onClick={handleBomb}>BOMB IRAN</button>
    </div>
  );
}

export default App;
