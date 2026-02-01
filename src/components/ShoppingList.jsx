import { useState } from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

function ShoppingList({ items: initialItems = [] }) {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(initialItems);

  // Filter items based on search term
  const itemsToDisplay = items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  function handleItemFormSubmit(newItem) {
    // Add the new item to the items list
    setItems([...items, newItem]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ItemList items={itemsToDisplay} />
    </div>
  );
}

export default ShoppingList;