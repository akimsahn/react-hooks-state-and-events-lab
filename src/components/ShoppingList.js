import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ selectedCategory, setSelectedCategory ] = useState(items)

  function applyFilter(event) {
    const filteredItems = items.filter((item) => {
      if (event.target.value === "All") {
        return true
      } else {
        return item.category === event.target.value
      }
    })

    setSelectedCategory(filteredItems)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={applyFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((selectedCategory) => (
          <Item key={selectedCategory.id} name={selectedCategory.name} category={selectedCategory.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
