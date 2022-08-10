import React, { useState } from "react";

function Item({ name, category }) {
  const [ inCart, setInCart ] = useState(false)

  function addToCart() {
    setInCart(!inCart)
  }

  const itemClass = inCart ? "in-cart" : null

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{itemClass ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
