import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div >
      <h2> Count: {count}</h2>
      <button onClick={increment} style={styles.button}>
        increment
      </button>
    </div>
  );
};

const styles = { 
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'grey',
    color: 'white',
  },
};

export default Counter;
