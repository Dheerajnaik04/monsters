import React from 'react';
import './card.style.css'; // Import your CSS file for styling

const Card = ({ monster }) => {
  const { id, name, email } = monster; // Assuming your monster data has these properties
  return (
    <div className="card-container">
      <img 
        alt={`monster ${name}`} 
        src={`https://robohash.org/${id}?set=set2&size=180x180`} 
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
