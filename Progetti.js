import React from 'react';
import './Progetti.css';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

function Progetti() {
  return (
    <div className="progetti-container">
      <h2>Progetti</h2>
      <div className="cards">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

export default Progetti;
