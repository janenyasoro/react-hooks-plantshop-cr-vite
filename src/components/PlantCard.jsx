import React from "react";

function PlantCard({ plant, onToggleStock }) {
  const { id, name, image, price, inStock } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => onToggleStock(id)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => onToggleStock(id)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;