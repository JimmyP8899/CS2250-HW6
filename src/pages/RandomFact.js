import React, { useState } from 'react';

const FactComponent = () => {
  const [fact, setFact] = useState('');

  const getRandomFact = async () => {
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      console.error('Error fetching random fact:', error);
    }
  };

  return (
    <div>
      <button onClick={getRandomFact}>Get Random Fact</button>
      {fact && <p>{fact}</p>}
    </div>
  );
};

export default FactComponent;
