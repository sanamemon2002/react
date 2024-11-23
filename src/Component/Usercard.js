import React from 'react';

const UserCard = ({ name, age, location }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>Name: {name}</h2>
      <h3 style={styles.info}>Age: {age}</h3>
      <h4 style={styles.info}>Location: {location}</h4>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '300px',
    margin: '20px ',
    backgroundColor: 'lightblue',
  },
  name: {
    fontSize: '15px',
    color: 'black',
  },
  info: {
    fontSize: '15px',
    color: 'black',
  },
};

export default UserCard;
