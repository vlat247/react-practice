import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import Header from './components/Header';
import Feed from './components/Feed.jsx';

function App() {
  const [value, setValue] = useState('')
  const [isBombed, setIsBombed] = useState(false);

  const handleBomb = () => {
    if (value === 'ALLAUHAKBAR') {
      setIsBombed(true);
      alert("IRAN HAS BEEN BOMBED");
    }
  };

  return (
    <div className={`App ${isBombed ? 'bombed' : ''}`}>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className='container'>
            <h1>AMOUNT OF BOMBS THAT WILL BE THROWN ON IRAN:</h1>  
            <Counter />
            <p>Password is required to bomb iran</p>
            <input
              type="text"
              value={value}
              onChange={event => setValue(event.target.value)}></input>
            
            <button id='btn' onClick={handleBomb}>BOMB IRAN</button>
          </div>
        } />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
